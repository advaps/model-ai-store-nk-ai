import Header from "@/components/Header";
import ModelGrid from "@/components/ModelGrid";
import { useState } from "react";

const Index = () => {
  const [activeTab, setActiveTab] = useState("ALL");

  return (
    <div className="min-h-screen bg-background">
      <Header activeTab={activeTab} onTabChange={setActiveTab} />
      <ModelGrid activeTab={activeTab} />
    </div>
  );
};

export default Index;
