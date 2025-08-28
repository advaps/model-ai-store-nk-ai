import { Star, Download, Clock, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

interface ModelCardProps {
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
  onCardClick?: () => void;
  onInstallClick?: () => void;
}

const ModelCard = ({ 
  name, 
  description, 
  rating, 
  downloads, 
  category, 
  updated, 
  image, 
  size,
  featured = false,
  onCardClick,
  onInstallClick
}: ModelCardProps) => {
  const [imageError, setImageError] = useState(false);

  // Fallback placeholder based on model type
  const getFallbackImage = () => {
    if (name.toLowerCase().includes('pose') || name.toLowerCase().includes('blazepose')) {
      return "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop";
    } else if (name.toLowerCase().includes('yolor') || name.toLowerCase().includes('detection')) {
      return "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop";
    } else if (name.toLowerCase().includes('depth') || name.toLowerCase().includes('midas')) {
      return "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop";
    } else {
      return "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=400&h=300&fit=crop";
    }
  };
  return (
    <div 
      className={`group relative bg-card border rounded-xl overflow-hidden transition-all duration-300 hover:shadow-ai-lg hover:-translate-y-1 cursor-pointer ${
        featured ? "ring-2 ring-primary/20" : ""
      }`}
      onClick={onCardClick}
    >
      {featured && (
        <div className="absolute top-2 left-2 z-10">
          <Badge className="bg-gradient-primary text-white border-0 text-xs">
            Featured
          </Badge>
        </div>
      )}
      
      {/* Image - Smaller on mobile */}
      <div className="relative h-36 md:h-48 overflow-hidden bg-ai-muted">
        <img 
          src={imageError ? getFallbackImage() : image} 
          alt={name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          onError={() => setImageError(true)}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
      </div>

      {/* Content - Optimized padding for mobile */}
      <div className="p-3 md:p-5 space-y-3 md:space-y-4">
        <div className="space-y-2">
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-semibold text-base md:text-lg text-foreground line-clamp-1 flex-1">
              {name}
            </h3>
            <div className="flex items-center space-x-1 text-sm flex-shrink-0">
              <Star className="h-3 w-3 md:h-4 md:w-4 fill-yellow-400 text-yellow-400" />
              <span className="font-medium text-xs md:text-sm">{rating}</span>
            </div>
          </div>
          
          <p className="text-xs md:text-sm text-muted-foreground line-clamp-2">
            {description}
          </p>
        </div>

        {/* Meta info - Responsive layout */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 text-xs text-muted-foreground">
          <div className="flex items-center space-x-3 md:space-x-4">
            <div className="flex items-center space-x-1">
              <Download className="h-3 w-3" />
              <span>{downloads}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Tag className="h-3 w-3" />
              <span>{size}</span>
            </div>
          </div>
          <div className="flex items-center space-x-1">
            <Clock className="h-3 w-3" />
            <span>{updated}</span>
          </div>
        </div>

        {/* Category and Action - Better mobile layout */}
        <div className="flex items-center justify-between pt-2 gap-2">
          <Badge variant="secondary" className="text-xs flex-shrink-0">
            {category === "Top Models" ? "Featured" : category}
          </Badge>
          <Button 
            size="sm" 
            className="bg-gradient-primary hover:shadow-ai-md transition-all duration-200 text-xs md:text-sm px-3 md:px-4 h-8 md:h-9"
            onClick={(e) => {
              e.stopPropagation();
              onInstallClick?.();
            }}
          >
            Download
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ModelCard;