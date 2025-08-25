import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Download, Clock, Tag, Play, ExternalLink, Code } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import VideoModal from "@/components/VideoModal";
import { useState } from "react";

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

interface ModelDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  model: ModelDetailProps | null;
}

const ModelDetailModal = ({ isOpen, onClose, model }: ModelDetailModalProps) => {
  const { toast } = useToast();
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  if (!model) return null;

  const handleDownload = async () => {
    if (!model.modelPath) {
      toast({
        title: "Error",
        description: "Model path not found",
        variant: "destructive",
      });
      return;
    }

    try {
      toast({
        title: "Download Started",
        description: `${model.name} model is being downloaded...`,
      });
      
      const { GitHubModelService } = await import('@/utils/GitHubModelService');
      await GitHubModelService.downloadModelZip(model.modelPath, model.name);
      
      toast({
        title: "Download Complete",
        description: `${model.name} model downloaded successfully`,
      });
    } catch (error) {
      toast({
        title: "Download Failed",
        description: "Failed to download model. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto" aria-describedby="model-description">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold flex items-center gap-2">
            {model.name}
            {model.featured && (
              <Badge className="bg-gradient-primary text-white border-0">
                Featured
              </Badge>
            )}
          </DialogTitle>
          <DialogDescription id="model-description" className="sr-only">
            Detailed information about {model.name} model including features, specifications and download options
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {/* Header Info */}
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-1/2">
              <div className="relative rounded-lg overflow-hidden">
                <img 
                  src={model.image} 
                  alt={model.name}
                  className="w-full h-64 object-cover"
                />
                {model.videoUrl && (
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <Button 
                      size="lg" 
                      className="bg-white/20 hover:bg-white/30 backdrop-blur-sm"
                      onClick={() => setVideoModalOpen(true)}
                    >
                      <Play className="h-6 w-6 mr-2" />
                      Play Demo
                    </Button>
                  </div>
                )}
              </div>
              
            </div>

            <div className="md:w-1/2 space-y-4">
              <div className="flex items-center space-x-4 text-sm">
                <div className="flex items-center space-x-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-medium">{model.rating}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Download className="h-4 w-4" />
                  <span>{model.downloads}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Tag className="h-4 w-4" />
                  <span>{model.size}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="h-4 w-4" />
                  <span>{model.updated}</span>
                </div>
              </div>

              <div className="space-y-2">
                <Badge variant="secondary">{model.category}</Badge>
              </div>

              <p className="text-muted-foreground">{model.description}</p>

              <div className="flex flex-col sm:flex-row gap-2">
                <Button 
                  onClick={handleDownload}
                  className="bg-gradient-primary hover:shadow-ai-md flex-1"
                >
                  <Download className="h-4 w-4 mr-2" />
                  Download Model
                </Button>
                {model.githubUrl && (
                  <Button variant="outline" asChild>
                    <a href={model.githubUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      GitHub
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </div>

          {/* Detailed Description */}
          {model.detailedDescription && (
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">About this Model</h3>
              <p className="text-muted-foreground leading-relaxed">
                {model.detailedDescription}
              </p>
            </div>
          )}

          {/* Features */}
          {model.features && model.features.length > 0 && (
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Key Features</h3>
              <ul className="list-disc list-inside space-y-1">
                {model.features.map((feature, index) => (
                  <li key={index} className="text-muted-foreground">{feature}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Use Cases */}
          {model.useCases && model.useCases.length > 0 && (
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Use Cases</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {model.useCases.map((useCase, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <Code className="h-4 w-4 mt-0.5 text-primary" />
                    <span className="text-sm text-muted-foreground">{useCase}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </DialogContent>
      
      {model.videoUrl && (
        <VideoModal
          isOpen={videoModalOpen}
          onClose={() => setVideoModalOpen(false)}
          videoUrl={model.videoUrl}
          title={model.name}
        />
      )}
    </Dialog>
  );
};

export default ModelDetailModal;