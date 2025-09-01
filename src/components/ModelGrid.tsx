import ModelCard from "./ModelCard";
import ModelDetailModal from "./ModelDetailModal";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { GitHubModelService } from "@/utils/GitHubModelService";
import { tfliteModelsData } from "@/data/tfliteModelsData";

interface ModelProps {
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
  demoReference?: string;
}

// Use only the models from tfliteModelsData
const allModels: ModelProps[] = tfliteModelsData;

// Top Models - Reference actual models from tfliteModelsData
const getTopModels = (): ModelProps[] => {
  const mediapipeModel = allModels.find(model => model.name === "MediaPipe FaceDetector");
  const anprModel = allModels.find(model => model.name === "ANPR (Automatic Number Plate Recognition)");
  
  if (mediapipeModel && anprModel) {
    return [mediapipeModel, anprModel];
  }
  
  // Fallback to empty array if models not found
  return [];
};

interface ModelGridProps {
  activeTab: string;
  searchQuery: string;
}

const ModelGrid = ({ activeTab, searchQuery }: ModelGridProps) => {
  const { toast } = useToast();
  const [selectedModel, setSelectedModel] = useState<ModelProps | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const getModelsForTab = () => {
    let models;
    switch (activeTab) {
      case "Indoor":
        models = allModels.filter(model => model.category === "Indoor");
        break;
      case "Outdoor":
        models = allModels.filter(model => model.category === "Outdoor");
        break;
      case "Top Models":
        models = getTopModels();
        break;
      default:
        // Show all models without duplicates
        models = allModels;
    }

    // Apply search filter if searchQuery exists
    if (searchQuery.trim()) {
      return models.filter(model => 
        model.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        model.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        model.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (model.demoReference && model.demoReference.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    return models;
  };

  const models = getModelsForTab();

  const handleCardClick = (model: ModelProps) => {
    setSelectedModel(model);
    setIsModalOpen(true);
  };

  const handleInstallClick = async (model: ModelProps) => {
    // If model has a modelPath, try to download from PINTO model zoo
    if (model.modelPath) {
      try {
        toast({
          title: "Searching for model...",
          description: "Looking for TFLite files in PINTO model zoo",
        });

        const hasTFLite = await GitHubModelService.hasTFLiteFiles(model.modelPath);
        
        if (!hasTFLite) {
          toast({
            title: "Coming Soon",
            description: "TFLite model files are not available yet. Check back soon!",
          });
          return;
        }

        const { modelFiles } = await GitHubModelService.findModelFiles(model.modelPath);
        const tfliteFiles = modelFiles.filter(file => file.name.endsWith('.tflite'));

        // Download the first available TFLite file
        const tfliteFile = tfliteFiles[0];
        await GitHubModelService.downloadModelFile(
          tfliteFile.path, 
          `${model.name.replace(/\s+/g, '_').toLowerCase()}.tflite`
        );

        toast({
          title: "Download Started",
          description: `${model.name} TFLite model download has started`,
        });
      } catch (error) {
        console.error('Download error:', error);
        toast({
          title: "Download Failed",
          description: "Failed to download model. Please try again.",
        });
      }
      return;
    }

    // Check if model has a direct download URL
    if (model.downloadUrl) {
      try {
        // Create a temporary link element to trigger download
        const isExternal = /^https?:\/\//i.test(model.downloadUrl);
        if (isExternal) {
          // For external URLs, try to download the file directly
          const link = document.createElement('a');
          link.href = model.downloadUrl;
          link.download = `${model.name.replace(/\s+/g, '_').toLowerCase()}.tflite`;
          link.target = '_blank';
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        } else {
          const link = document.createElement('a');
          link.href = model.downloadUrl;
          link.download = `${model.name.replace(/\s+/g, '_').toLowerCase()}.tflite`;
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        }

        toast({
          title: "Download Started",
          description: `${model.name} model download has started`,
        });
      } catch (error) {
        toast({
          title: "Download Failed",
          description: "Failed to start download. Please try again.",
        });
      }
      return;
    }

    // If no download URL or model path, show coming soon message
    toast({
      title: "Coming Soon",
      description: "Model download functionality will be available soon",
    });
  };
  return (
    <section className="py-8 md:py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="space-y-6 md:space-y-8">
          {/* Grid - Responsive columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 animate-fade-in">
            {models.map((model, index) => (
              <div
                key={model.name}
                className="animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <ModelCard 
                  {...model} 
                  onCardClick={() => handleCardClick(model)}
                  onInstallClick={() => handleInstallClick(model)}
                />
              </div>
            ))}
          </div>

          {/* Model Detail Modal */}
          <ModelDetailModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            model={selectedModel}
          />

        </div>
      </div>
    </section>
  );
};

export default ModelGrid;