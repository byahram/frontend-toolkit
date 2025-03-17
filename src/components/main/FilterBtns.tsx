import React from "react";
import { Button } from "@/components/ui/Button"; // Button 임포트

interface FilterBtnsProps {
  filters: string[];
  selectedFilter: string;
  onFilterToggle: (filter: string) => void;
}

export const FilterBtns: React.FC<FilterBtnsProps> = ({
  filters,
  selectedFilter,
  onFilterToggle,
}) => {
  return (
    <div className="flex justify-center gap-3">
      {filters.map((filter) => (
        <Button
          key={filter}
          variant={selectedFilter === filter ? "selectedFilter" : "outline"} 
          size="filter" 
          onClick={() => onFilterToggle(filter)} 
        >
          {filter}
        </Button>
      ))}
    </div>
  );
};
