import Header from "@/components/Header";
import ModelGrid from "@/components/ModelGrid";
import { useState } from "react";

const Index = () => {
  const [activeTab, setActiveTab] = useState("ALL");
  const [searchQuery, setSearchQuery] = useState("");

  // Handle tab change while preserving search
  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    // Search query is preserved when changing tabs
  };

  return (
    <div className="min-h-screen bg-background">
      <Header 
        activeTab={activeTab} 
        onTabChange={setActiveTab}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />
      <ModelGrid activeTab={activeTab} searchQuery={searchQuery} />
    </div>
  );
};

export default Index;
