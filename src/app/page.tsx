"use client";

import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import ContentsList from "@/components/main/ContentsList";
import { FilterBtns } from "@/components/main/FilterBtns";
import { useState } from "react";

const firstDepthFilters = ["All", "Markup", "React"];
const secondDepthOptions: Record<string, string[]> = {
  All: ["All", "Button", "Animation"],
  Markup: ["All", "HTML", "CSS"],
  React: ["All", "Component", "Hooks"],
};

export default function Home() {
  const [selectedFirstDepth, setSelectedFirstDepth] = useState<string>("All");
  const [selectedSecondDepth, setSelectedSecondDepth] = useState<string>("All");

  const handleFirstDepthToggle = (filter: string) => {
    if (selectedFirstDepth !== filter) {
      setSelectedFirstDepth(filter);
      setSelectedSecondDepth("All");
    }
  };

  const handleSecondDepthToggle = (filter: string) => {
    if (selectedSecondDepth !== filter) {
      setSelectedSecondDepth(filter);
    }
  };

  return (
    <div className="container mx-auto px-5">
      <Header />
      <main className="py-10">
        <div className="flex flex-col gap-3">
          {/* 1Depth */}
          <FilterBtns
            filters={firstDepthFilters}
            selectedFilter={selectedFirstDepth}
            onFilterToggle={handleFirstDepthToggle}
          />

          {/* 2Depth */}
          <FilterBtns
            filters={secondDepthOptions[selectedFirstDepth]}
            selectedFilter={selectedSecondDepth}
            onFilterToggle={handleSecondDepthToggle}
          />
        </div>

        {/* ContentsList */}
        <ContentsList />
      </main>
      <Footer />
    </div>
  );
}
