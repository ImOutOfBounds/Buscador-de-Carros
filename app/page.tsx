'use client';

import React, { useState, useEffect } from 'react';
import NavBar from "./components/navBar/navbar";
import SearchBar from "./components/searchBar/searchBar";
import FiltersSection from "./components/filtersSection/filters";
import CarsSection from "./components/carCardsSection/carsSection";
import Footer from "./components/footer/Footer";
import data from "./carData/data.json";
import SortFilter from './components/sortFilter/sortFilter';
import { applyFilters, handleSort } from './utils';

export default function Home() {
  const [selectedCards, setSelectedCards] = useState(data);
  const [selectedOptions, setSelectedOptions] = useState<string[][]>([[], [], [], []]);

  useEffect(() => {
    const filteredCars = applyFilters(data, selectedOptions);
    setSelectedCards(filteredCars);
  }, [selectedOptions]); 

  const handleFilterChange = (newOptions: string[][]) => {
    setSelectedOptions(newOptions);
  };

  const handleSortChange = (sortOption: string) => {
    const sortedCars = handleSort(selectedCards, sortOption);
    setSelectedCards(sortedCars);
  };

  return (
    <>
      <NavBar />
      <FiltersSection onFilter={handleFilterChange} />
      <SearchBar />
      <SortFilter onSort={handleSortChange} />
      <CarsSection data={selectedCards} />
      <Footer />
    </>
  );
}
