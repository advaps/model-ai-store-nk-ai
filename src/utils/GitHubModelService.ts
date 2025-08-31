interface ModelDetailProps {
  name: string;
  description: string;
  rating: number;
  downloads: string;
  category: string;
  updated: string;
  image: string;
  size: string;
  featured?: boolean;
  detailedDescription?: string;
  useCases?: string[];
  videoUrl?: string;
  githubUrl?: string;
  downloadUrl?: string;
  features?: string[];
  modelPath?: string;
}

export interface GitHubFile {
  name: string;
  path: string;
  download_url: string | null;
  type: 'file' | 'dir';
  size: number;
}

export class GitHubModelService {
  private static readonly BASE_API_URL = 'https://api.github.com/repos/PINTO0309/PINTO_model_zoo';
  private static readonly BASE_RAW_URL = 'https://raw.githubusercontent.com/PINTO0309/PINTO_model_zoo/main';

  static async fetchModelDirectory(modelPath: string): Promise<GitHubFile[]> {
    try {
      const response = await fetch(`${this.BASE_API_URL}/contents/${modelPath}`);
      if (!response.ok) {
        if (response.status === 404) {
          console.warn(`Model directory not found: ${modelPath}`);
          return [];
        }
        throw new Error(`Failed to fetch model directory: ${response.statusText}`);
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching model directory:', error);
      return [];
    }
  }

  static async downloadModelFile(filePath: string, fileName: string): Promise<void> {
    try {
      const downloadUrl = `${this.BASE_RAW_URL}/${filePath}`;
      const response = await fetch(downloadUrl);
      
      if (!response.ok) {
        throw new Error(`Failed to download file: ${response.statusText}`);
      }

      const blob = await response.blob();
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(link.href);
    } catch (error) {
      console.error('Error downloading model file:', error);
      throw error;
    }
  }

  static async findModelFiles(modelPath: string): Promise<{ 
    modelFiles: GitHubFile[], 
    readmeUrl: string | null,
    demoVideo: string | null 
  }> {
    try {
      const files = await this.fetchModelDirectory(modelPath);
      const modelFiles = files.filter(file => 
        file.type === 'file' && 
        (file.name.endsWith('.tflite') || 
         file.name.endsWith('.onnx') || 
         file.name.endsWith('.pb') ||
         file.name.endsWith('.h5'))
      );

      // Look for README
      const readmeFile = files.find(file => 
        file.name.toLowerCase().includes('readme')
      );

      // Look for demo videos (mp4, webm, gif)
      const videoFile = files.find(file =>
        file.name.endsWith('.mp4') || 
        file.name.endsWith('.webm') || 
        file.name.endsWith('.gif')
      );

      return {
        modelFiles,
        readmeUrl: readmeFile ? `${this.BASE_RAW_URL}/${readmeFile.path}` : null,
        demoVideo: videoFile ? `${this.BASE_RAW_URL}/${videoFile.path}` : null
      };
    } catch (error) {
      console.error('Error finding model files:', error);
      return { modelFiles: [], readmeUrl: null, demoVideo: null };
    }
  }

  static getModelSize(files: GitHubFile[]): string {
    const totalSize = files.reduce((sum, file) => sum + (file.size || 0), 0);
    if (totalSize < 1024 * 1024) {
      return `${Math.round(totalSize / 1024)}KB`;
    } else if (totalSize < 1024 * 1024 * 1024) {
      return `${Math.round(totalSize / (1024 * 1024))}MB`;
    } else {
      return `${Math.round(totalSize / (1024 * 1024 * 1024))}GB`;
    }
  }

  static async downloadModelZip(modelPath: string, modelName: string): Promise<void> {
    try {
      // Find all model files in the directory
      const { modelFiles } = await this.findModelFiles(modelPath);
      
      if (modelFiles.length === 0) {
        throw new Error('No model files found');
      }

      // For simplicity, download the first available model file
      // In a real implementation, you might want to let users choose
      const primaryModel = modelFiles[0];
      await this.downloadModelFile(primaryModel.path, `${modelName}_${primaryModel.name}`);
    } catch (error) {
      console.error('Error downloading model:', error);
      throw error;
    }
  }

  static async hasTFLiteFiles(modelPath: string): Promise<boolean> {
    try {
      const { modelFiles } = await this.findModelFiles(modelPath);
      return modelFiles.some(file => file.name.endsWith('.tflite'));
    } catch (error) {
      console.error('Error checking TFLite files:', error);
      return false;
    }
  }
}