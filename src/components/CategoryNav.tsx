import { Brain, Eye, MessageSquare, Music, Image, Code, Zap, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const categories = [
  { icon: Sparkles, label: "Featured", active: true },
  { icon: Brain, label: "Machine Learning" },
  { icon: Eye, label: "Computer Vision" },
  { icon: MessageSquare, label: "Natural Language" },
  { icon: Music, label: "Audio" },
  { icon: Image, label: "Image Generation" },
  { icon: Code, label: "Code & Development" },
  { icon: Zap, label: "Automation" },
];

const CategoryNav = () => {
  return (
    <div className="w-full bg-ai-surface border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-2 py-3 overflow-x-auto scrollbar-hide">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Button
                key={category.label}
                variant={category.active ? "default" : "ghost"}
                size="sm"
                className={`flex items-center space-x-2 whitespace-nowrap flex-shrink-0 min-w-fit px-3 py-2 h-9 ${
                  category.active 
                    ? "bg-gradient-primary text-white shadow-ai-md" 
                    : "hover:bg-ai-muted"
                }`}
              >
                <Icon className="h-4 w-4 flex-shrink-0" />
                <span className="hidden sm:inline text-sm">{category.label}</span>
              </Button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CategoryNav;