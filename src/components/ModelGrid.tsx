import ModelCard from "./ModelCard";
import ModelDetailModal from "./ModelDetailModal";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

// Import preview images
import yolorPreview from "@/assets/yolor-preview.jpg";
import midasPreview from "@/assets/midas-preview.jpg";
import blazeposePreview from "@/assets/blazepose-preview.jpg";
import efficientdetPreview from "@/assets/efficientdet-preview.jpg";
import selfieSegmentationPreview from "@/assets/selfie-segmentation-preview.jpg";

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
}

const allModels: ModelProps[] = [
  // Indoor Models (Prioritized - small size, with videos/details)
  {
    name: "Selfie Segmentation",
    description: "Real-time person segmentation for video calls and filters",
    rating: 4.7,
    downloads: "890K",
    category: "Indoor",
    updated: "1 day ago",
    image: selfieSegmentationPreview,
    size: "458KB",
    detailedDescription: "MediaPipe Selfie Segmentation is a lightweight model that performs real-time person segmentation. It segments the prominent person in the scene from the background, perfect for video calls, AR filters, and background replacement applications.",
    useCases: ["Video conferencing background blur", "AR selfie filters", "Real-time background replacement", "Portrait mode photography"],
    videoUrl: "/c2pnet-demo.mp4",
    githubUrl: "https://github.com/PINTO0309/PINTO_model_zoo/tree/main/006_selfie_segmentation",
    downloadUrl: "/src/assets/selfie_segmentation.tflite",
    features: ["Real-time processing", "Lightweight architecture", "Mobile-optimized", "High accuracy segmentation"],
    modelPath: "selfie_segmentation"
  },
  {
    name: "Hand Recrop",
    description: "Precise hand detection and cropping for gesture recognition",
    rating: 4.5,
    downloads: "650K",
    category: "Indoor",
    updated: "4 days ago",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop",
    size: "28MB",
    detailedDescription: "Advanced hand detection and cropping model optimized for gesture recognition systems. Provides precise hand boundary detection and intelligent cropping for downstream gesture analysis.",
    useCases: ["Gesture recognition systems", "Sign language interpretation", "Hand tracking applications", "Interactive interfaces"],
    videoUrl: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_2mb.mp4",
    githubUrl: "https://github.com/PINTO0309/PINTO_model_zoo/tree/main/hand_recrop",
    features: ["High precision detection", "Multi-hand support", "Real-time processing", "Gesture-ready output"],
    modelPath: "hand_recrop"
  },
  {
    name: "Age Gender Recognition",
    description: "Simultaneous age and gender estimation for indoor analytics",
    rating: 4.6,
    downloads: "750K",
    category: "Indoor",
    updated: "3 days ago",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=300&fit=crop",
    size: "12MB",
    detailedDescription: "Multi-task deep learning model that simultaneously estimates age and gender from facial images. Optimized for indoor surveillance, retail analytics, and demographic analysis applications.",
    useCases: ["Retail customer analytics", "Demographic studies", "Access control systems", "Marketing audience analysis"],
    githubUrl: "https://github.com/PINTO0309/PINTO_model_zoo/tree/main/age_gender",
    features: ["Dual-task architecture", "Robust to lighting conditions", "Fast inference", "Privacy-preserving design"]
  },
  {
    name: "MediaPipe Meet Segmentation",
    description: "Background segmentation optimized for video conferencing",
    rating: 4.6,
    downloads: "720K",
    category: "Indoor",
    updated: "2 days ago",
    image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=400&h=300&fit=crop",
    size: "458KB",
    detailedDescription: "Specialized background segmentation model designed for video conferencing applications. Provides precise person-background separation with low computational overhead.",
    useCases: ["Video call background effects", "Virtual meeting rooms", "Privacy protection", "Professional broadcasting"],
    videoUrl: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
    githubUrl: "https://huggingface.co/qualcomm/MediaPipe-Selfie-Segmentation",
    downloadUrl: "/src/assets/selfie_segmentation.tflite",
    features: ["Meeting-optimized", "Low latency", "High quality segmentation", "Multi-platform support"],
    modelPath: "meet_segmentation"
  },
  {
    name: "RetinaFace",
    description: "High-precision face detection for indoor security and recognition systems",
    rating: 4.7,
    downloads: "980K",
    category: "Indoor",
    updated: "2 days ago",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
    size: "45MB",
    detailedDescription: "State-of-the-art face detection model with superior accuracy and robustness. Capable of detecting faces across various scales, poses, and occlusions in indoor environments.",
    useCases: ["Security systems", "Access control", "Attendance tracking", "Face recognition pipelines"],
    githubUrl: "https://github.com/PINTO0309/PINTO_model_zoo/tree/main/retinaface",
    features: ["Multi-scale detection", "Robust to occlusion", "High precision", "Real-time performance"]
  },
  {
    name: "BlazePose",
    description: "Real-time human pose estimation for indoor fitness and motion tracking",
    rating: 4.8,
    downloads: "1.2M",
    category: "Indoor",
    updated: "1 day ago",
    image: blazeposePreview,
    size: "125MB",
    detailedDescription: "MediaPipe BlazePose is a lightweight convolutional neural network architecture for human pose estimation. Designed for real-time inference with high accuracy for fitness and motion analysis.",
    useCases: ["Fitness tracking", "Sports analysis", "Motion capture", "Yoga pose correction"],
    videoUrl: "/c2pnet-demo.mp4",
    githubUrl: "https://github.com/PINTO0309/PINTO_model_zoo/tree/main/003_posenet",
    downloadUrl: "https://github.com/PINTO0309/PINTO_model_zoo/raw/main/003_posenet/blazepose.tflite",
    features: ["33 keypoint detection", "Real-time performance", "Mobile optimized", "High accuracy tracking"],
    modelPath: "003_posenet"
  },
  {
    name: "OCR Japanese",
    description: "Advanced Japanese text recognition for indoor document processing",
    rating: 4.4,
    downloads: "420K",
    category: "Indoor",
    updated: "5 days ago",
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop",
    size: "156MB"
  },
  {
    name: "Hair Segmentation",
    description: "Precise hair boundary detection for beauty and styling apps",
    rating: 4.3,
    downloads: "380K",
    category: "Indoor",
    updated: "6 days ago",
    image: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=400&h=300&fit=crop",
    size: "67MB"
  },

  // Outdoor Models (Prioritized - small size first)
  {
    name: "DroNet",
    description: "Drone navigation and obstacle avoidance for outdoor flights",
    rating: 4.6,
    downloads: "820K",
    category: "Outdoor",
    updated: "3 days ago",
    image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=400&h=300&fit=crop",
    size: "18MB",
    detailedDescription: "Lightweight deep learning model designed for autonomous drone navigation. Provides real-time obstacle avoidance and path planning for outdoor flight scenarios.",
    useCases: ["Autonomous drone flight", "Obstacle avoidance", "Aerial photography", "Search and rescue operations"],
    videoUrl: "https://user-images.githubusercontent.com/33194443/90954096-26e32180-e4a2-11ea-8e08-48e6b46e02b8.gif",
    githubUrl: "https://github.com/PINTO0309/PINTO_model_zoo/tree/main/007_mobilenetv2-poseestimation",
    downloadUrl: "https://github.com/PINTO0309/PINTO_model_zoo/raw/main/116_DroNet/dronet.tflite",
    features: ["Lightweight architecture", "Real-time processing", "Robust outdoor performance", "Low power consumption"],
    modelPath: "116_DroNet"
  },
  {
    name: "Gaze Estimation ADAS",
    description: "Driver attention monitoring for automotive safety systems",
    rating: 4.6,
    downloads: "450K",
    category: "Outdoor",
    updated: "5 days ago",
    image: "https://images.unsplash.com/photo-1571741755707-5d25de3b6cb2?w=400&h=300&fit=crop",
    size: "23MB",
    detailedDescription: "Advanced driver assistance system (ADAS) model for monitoring driver attention and gaze direction. Critical for automotive safety and autonomous driving applications.",
    useCases: ["Driver monitoring systems", "ADAS applications", "Automotive safety", "Fatigue detection"],
    githubUrl: "https://github.com/PINTO0309/PINTO_model_zoo/tree/main/gaze_estimation",
    features: ["Real-time gaze tracking", "Automotive-grade accuracy", "Robust to lighting", "Low computational overhead"]
  },
  {
    name: "Ghost-free Shadow Removal",
    description: "Remove shadows from outdoor images while preserving quality",
    rating: 4.4,
    downloads: "540K",
    category: "Outdoor",
    updated: "4 days ago",
    image: "https://images.unsplash.com/photo-1502134249126-9f3755a50d78?w=400&h=300&fit=crop",
    size: "78MB"
  },
  {
    name: "3D Bounding Box Estimation",
    description: "Autonomous driving 3D object detection for outdoor navigation",
    rating: 4.8,
    downloads: "1.1M",
    category: "Outdoor",
    updated: "1 day ago",
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=300&fit=crop",
    size: "89MB"
  },
  {
    name: "C2PNet",
    description: "Physics-aware single image dehazing with contrastive regularization",
    rating: 4.5,
    downloads: "320K",
    category: "Outdoor",
    updated: "2 days ago",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
    size: "45MB",
    detailedDescription: "Curricular Contrastive Regularization for Physics-aware Single Image Dehazing (CVPR 2023). Advanced dehazing model that uses contrastive learning and physics-based constraints to restore clear images from hazy outdoor scenes.",
    useCases: ["Outdoor photography enhancement", "Surveillance in foggy conditions", "Autonomous driving visibility", "Aerial imaging clarity"],
    videoUrl: "/c2pnet-demo.mp4",
    githubUrl: "https://github.com/PINTO0309/PINTO_model_zoo/tree/main/368_C2PNet",
    downloadUrl: "https://github.com/PINTO0309/PINTO_model_zoo/raw/main/368_C2PNet/c2pnet.tflite",
    features: ["Physics-aware dehazing", "Contrastive regularization", "Real-time processing", "High quality restoration"],
    modelPath: "368_C2PNet"
  },
  {
    name: "Two-branch Dehazing",
    description: "Clear outdoor images by removing haze and atmospheric effects",
    rating: 4.3,
    downloads: "390K",
    category: "Outdoor",
    updated: "6 days ago",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
    size: "92MB"
  },
  {
    name: "MiDaS v2",
    description: "Monocular depth estimation for outdoor scene understanding",
    rating: 4.9,
    downloads: "1.5M",
    category: "Outdoor",
    updated: "1 day ago",
    image: midasPreview,
    size: "66.3MB",
    detailedDescription: "Intel's MiDaS v2 model for monocular depth estimation. Computes relative inverse depth from a single image with high accuracy and robustness.",
    useCases: ["Autonomous driving", "3D scene reconstruction", "AR/VR applications", "Robotics navigation"],
    githubUrl: "https://github.com/isl-org/MiDaS",
    downloadUrl: "https://huggingface.co/qualcomm/Midas-V2/resolve/main/Midas-V2.tflite",
    features: ["Monocular depth estimation", "Robust to various scenes", "Real-time inference", "High accuracy"],
    modelPath: "midas_v2"
  },
  {
    name: "SFA3D",
    description: "3D object detection for autonomous driving scenarios",
    rating: 4.5,
    downloads: "670K",
    category: "Outdoor",
    updated: "3 days ago",
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=400&h=300&fit=crop",
    size: "134MB"
  },
  {
    name: "YOLOR",
    description: "Real-time object detection optimized for outdoor surveillance",
    rating: 4.7,
    downloads: "1.3M",
    category: "Outdoor",
    updated: "2 days ago",
    image: yolorPreview,
    size: "245MB"
  }
];

const topModels: ModelProps[] = [
  {
    name: "YOLOR",
    description: "State-of-the-art real-time object detection with exceptional accuracy",
    rating: 4.9,
    downloads: "2.8M",
    category: "Top Models",
    updated: "1 day ago",
    image: yolorPreview,
    size: "245MB",
    featured: true,
    modelPath: "123_YOLOR"
  },
  {
    name: "MiDaS v2",
    description: "Industry-leading monocular depth estimation model",
    rating: 4.9,
    downloads: "2.5M",
    category: "Top Models",
    updated: "1 day ago",
    image: midasPreview,
    size: "66.3MB",
    featured: true,
    detailedDescription: "Intel's MiDaS v2 model for monocular depth estimation. Computes relative inverse depth from a single image with high accuracy and robustness.",
    useCases: ["Autonomous driving", "3D scene reconstruction", "AR/VR applications", "Robotics navigation"],
    githubUrl: "https://github.com/isl-org/MiDaS",
    downloadUrl: "https://huggingface.co/qualcomm/Midas-V2/resolve/main/Midas-V2.tflite",
    features: ["Monocular depth estimation", "Robust to various scenes", "Real-time inference", "High accuracy"],
    modelPath: "midas_v2"
  },
  {
    name: "BlazePose",
    description: "Most popular real-time human pose estimation model",
    rating: 4.8,
    downloads: "2.2M",
    category: "Top Models",
    updated: "1 day ago",
    image: blazeposePreview,
    size: "2.3GB",
    featured: true,
    modelPath: "003_posenet"
  },
  {
    name: "EfficientDet Lite",
    description: "Lightweight object detection optimized for mobile devices",
    rating: 4.7,
    downloads: "1.9M",
    category: "Top Models",
    updated: "2 days ago",
    image: efficientdetPreview,
    size: "45MB",
    modelPath: "103_EfficientDet_lite"
  },
  {
    name: "RetinaNet",
    description: "High-performance focal loss based object detection",
    rating: 4.8,
    downloads: "1.7M",
    category: "Top Models",
    updated: "2 days ago",
    image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=400&h=300&fit=crop",
    size: "125MB",
    modelPath: "073_RetinaNet"
  },
  {
    name: "MoveNet",
    description: "Ultra-fast pose estimation for fitness and sports applications",
    rating: 4.6,
    downloads: "1.4M",
    category: "Top Models",
    updated: "3 days ago",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400&h=300&fit=crop",
    size: "8.7MB",
    modelPath: "movenet"
  },
  {
    name: "NanoDet",
    description: "Super lightweight object detection for edge devices",
    rating: 4.5,
    downloads: "1.1M",
    category: "Top Models",
    updated: "4 days ago",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop",
    size: "1.8MB",
    modelPath: "072_NanoDet"
  },
  {
    name: "ESRGAN",
    description: "Enhanced super-resolution for high-quality image upscaling",
    rating: 4.7,
    downloads: "980K",
    category: "Top Models",
    updated: "5 days ago",
    image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=400&h=300&fit=crop",
    size: "67MB",
    modelPath: "esrgan"
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
        model.category.toLowerCase().includes(searchQuery.toLowerCase())
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
    if (!model.downloadUrl) {
      toast({
        title: "Coming Soon",
        description: "Model download functionality will be available soon",
      });
      return;
    }

    try {
      // Create a temporary link element to trigger download
      const link = document.createElement('a');
      link.href = model.downloadUrl;
      link.download = `${model.name.replace(/\s+/g, '_').toLowerCase()}.tflite`;
      link.target = '_blank';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

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