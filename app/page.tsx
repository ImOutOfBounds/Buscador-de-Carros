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
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    let filteredCars = applyFilters(data, selectedOptions);

    if (searchQuery) {
      filteredCars = filteredCars.filter(car => {
      return Object.values(car).some(value => {
        if (typeof value === 'string') {
          return value.toLowerCase().includes(searchQuery.toLowerCase());
        }
        return false;
      });
    });

    }

    setSelectedCards(filteredCars);
  }, [selectedOptions, searchQuery]);

  const handleFilterChange = (newOptions: string[][]) => {
    setSelectedOptions(newOptions);
  };

  const handleSortChange = (sortOption: string) => {
    const sortedCars = handleSort(selectedCards, sortOption);
    setSelectedCards(sortedCars);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <>
      <NavBar />
      <FiltersSection onFilter={handleFilterChange} />
      <SearchBar onSearch={handleSearch} />
      <SortFilter onSort={handleSortChange} />
      <CarsSection data={selectedCards} />
      <Footer />
    </>
  );
}
