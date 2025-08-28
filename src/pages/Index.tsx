import Header from "@/components/Header";
import ModelGrid from "@/components/ModelGrid";
import CategoryFilter from "@/components/CategoryFilter";
import { useState } from "react";

const Index = () => {
  const [activeTab, setActiveTab] = useState("ALL");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen bg-background">
      <Header 
        activeTab={activeTab} 
        onTabChange={setActiveTab}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />
      <CategoryFilter activeTab={activeTab} onTabChange={setActiveTab} />
      <ModelGrid activeTab={activeTab} searchQuery={searchQuery} />
    </div>
  );
};

export default Index;
