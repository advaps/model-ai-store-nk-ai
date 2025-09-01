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

// Top Models - select from both Indoor and Outdoor categories
const topModels: ModelProps[] = [
  {
    name: "MediaPipe FaceDetector",
    description: "Face detection TFLite model optimized for real-time recognition.",
    rating: 4.5,
    downloads: "850K",
    category: "Top Models",
    updated: "1 day ago",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
    size: "2.1MB",
    featured: true,
    detailedDescription: "Face detection TFLite model optimized for real-time recognition.",
    useCases: ["Face recognition for door unlock", "Security systems", "Access control", "Biometric authentication"],
    features: ["Real-time detection", "High accuracy", "Mobile optimized", "Lightweight"],
    githubUrl: "https://huggingface.co/qualcomm/MediaPipe-Face-Detection",
    demoReference: "MediaPipe Face Detection"
  },
  {
    name: "SSD Lite MobileNet-V1 Quantized (COCO)",
    description: "General object detection model, can detect people for stranger alerts.",
    rating: 4.4,
    downloads: "1.1M",
    category: "Top Models",
    updated: "2 days ago",
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=400&h=300&fit=crop",
    size: "18MB",
    featured: true,
    detailedDescription: "General object detection model, can detect people for stranger alerts.",
    useCases: ["Stranger alert (unknown person entry)", "Object detection", "Surveillance", "Security systems"],
    features: ["Real-time detection", "Multi-object support", "High precision", "Robust performance"],
    githubUrl: null,
    demoReference: "TensorFlow sample model"
  },
  {
    name: "Fall Detection Model",
    description: "TFLite model for recognizing elderly falls.",
    rating: 4.6,
    downloads: "680K",
    category: "Top Models",
    updated: "2 days ago",
    image: "https://images.unsplash.com/photo-1571741755707-5d25de3b6cb2?w=400&h=300&fit=crop",
    size: "12MB",
    featured: true,
    detailedDescription: "TFLite model for recognizing elderly falls.",
    useCases: ["Fall detection (elderly care)", "Healthcare monitoring", "Safety systems", "Elderly care"],
    features: ["Fall detection", "Real-time monitoring", "High accuracy", "Healthcare focused"],
    githubUrl: "https://huggingface.co/Siddhartha276/Fall_Detection",
    demoReference: "Hugging Face Siddhartha276"
  },
  {
    name: "Fire Detection CNN",
    description: "TensorFlow Lite CNN for fire/smoke detection.",
    rating: 4.4,
    downloads: "520K",
    category: "Top Models",
    updated: "4 days ago",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
    size: "8MB",
    featured: true,
    detailedDescription: "TensorFlow Lite CNN for fire/smoke detection.",
    useCases: ["Smoke/fire detection in kitchen", "Fire safety", "Surveillance", "Emergency detection"],
    features: ["CNN architecture", "Fire/smoke detection", "Real-time monitoring", "High accuracy"],
    githubUrl: "https://github.com/edwios/fire-detection-cnn-tflite",
    demoReference: "GitHub edwios/fire-detection-cnn-tflite"
  },
  {
    name: "Anomaly Detection TFLite",
    description: "Anomaly detection model using TensorFlow Lite, suitable for intrusion.",
    rating: 4.3,
    downloads: "380K",
    category: "Top Models",
    updated: "1 week ago",
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=400&h=300&fit=crop",
    size: "22MB",
    featured: true,
    detailedDescription: "Anomaly detection model using TensorFlow Lite, suitable for intrusion.",
    useCases: ["Intrusion alert during night mode", "Anomaly detection", "Security systems", "Surveillance"],
    features: ["Anomaly detection", "Intrusion detection", "Real-time monitoring", "High accuracy"],
    githubUrl: "https://github.com/francescogrillea/AnomalyDetectionTFlite",
    demoReference: "GitHub francescogrillea/AnomalyDetectionTFlite"
  },
  {
    name: "DoorOpenDetection TFLite",
    description: "Custom TFLite model trained via Teachable Machine to detect door open/closed states.",
    rating: 4.2,
    downloads: "320K",
    category: "Top Models",
    updated: "1 week ago",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop",
    size: "15MB",
    featured: true,
    detailedDescription: "Custom TFLite model trained via Teachable Machine to detect door open/closed states.",
    useCases: ["Door/Window open detection", "Security monitoring", "Home automation", "Access control"],
    features: ["Custom trained", "Binary classification", "Real-time detection", "Easy integration"],
    githubUrl: "https://github.com/hkrob/DoorOpenDetectionTFlite",
    demoReference: "GitHub hkrob/DoorOpenDetectionTFlite"
  },
  {
    name: "Custom Object Detector (Model Maker)",
    description: "Custom-trained detector using EfficientDet-Lite models for package/person detection.",
    rating: 4.3,
    downloads: "450K",
    category: "Top Models",
    updated: "3 days ago",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=300&fit=crop",
    size: "25MB",
    featured: true,
    detailedDescription: "Custom-trained detector using EfficientDet-Lite models for package/person detection.",
    useCases: ["Package delivery detection (courier at door)", "Object detection", "Surveillance", "Security systems"],
    features: ["Custom trained", "EfficientDet-Lite based", "High accuracy", "Real-time detection"],
    githubUrl: "https://github.com/TannerGilbert/TFLite-Object-Detection-with-TFLite-Model-Maker",
    demoReference: "GitHub TannerGilbert/TFLite-Object-Detection-with-TFLite-Model-Maker"
  }
];

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
        models = topModels;
        break;
      default:
        models = [...allModels, ...topModels];
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
          window.open(model.downloadUrl, '_blank', 'noopener,noreferrer');
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