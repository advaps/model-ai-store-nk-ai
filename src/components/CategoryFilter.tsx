import { Button } from "@/components/ui/button";

interface CategoryFilterProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const CategoryFilter = ({ activeTab, onTabChange }: CategoryFilterProps) => {
  const tabs = [
    { id: "ALL", label: "All" },
    { id: "Classification", label: "Classification" },
    { id: "Detection", label: "Detection" },
    { id: "Segmentation", label: "Segmentation" },
    { id: "Pose", label: "Pose" },
    { id: "Face", label: "Face" },
    { id: "Hand", label: "Hand" },
    { id: "Specialized", label: "Specialized" },
    { id: "Top Models", label: "Top Models" },
  ];

  return (
    <div className="sticky top-16 z-40 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-2 py-3 overflow-x-auto scrollbar-hide">
          {tabs.map((tab) => (
            <Button
              key={tab.id}
              variant={activeTab === tab.id ? "default" : "ghost"}
              size="sm"
              onClick={() => onTabChange(tab.id)}
              className={`flex items-center whitespace-nowrap flex-shrink-0 min-w-fit px-4 py-2 h-9 text-sm font-medium transition-all ${
                activeTab === tab.id 
                  ? "bg-gradient-primary text-white shadow-ai-md" 
                  : "hover:bg-accent hover:text-accent-foreground"
              }`}
            >
              {tab.label}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryFilter;