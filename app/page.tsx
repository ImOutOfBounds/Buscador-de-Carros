'use client';

import React, { useState } from 'react';
import NavBar from "./components/navBar/navbar";
import SearchBar from "./components/searchBar/searchBar";
import FiltersSection from "./components/filtersSection/filters";
import Selector from "./components/itemSelector/selector";
import CarsSection from "./components/carCardsSection/carsSection";
import Footer from "./components/footer/Footer";
import data from "./carData/data.json";

export default function Home() {
  const [selectedCards, setSelectedCards] = useState(data);

  const applyFilters = (selectedOptions: string[][]) => {
    const [names, models, priceRanges, locations] = selectedOptions;

    const filtered = data.filter(car => {
      const nameMatch = names.length === 0 || names.includes(car.Name);
      const modelMatch = models.length === 0 || models.includes(car.Model);
      const locationMatch = locations.length === 0 || locations.includes(car.Location);

      let priceMatch = true;
      if (priceRanges.length > 0) {
        priceMatch = priceRanges.some(range => {
          const price = car.Price;
          if (range === 'Price1') return price <= 10000;
          if (range === 'Price2') return price > 10000 && price <= 20000;
          if (range === 'Price3') return price > 20000 && price <= 50000;
          if (range === 'Price4') return price > 50000;
          return false;
        });
      }

      return nameMatch && modelMatch && locationMatch && priceMatch;
    });

    setSelectedCards(filtered);
  };

  return (
    <>
      <NavBar />
      <FiltersSection onFilter={applyFilters} />
      <SearchBar />
      <Selector selected={[]} onChange={() => {}} />
      <CarsSection data={selectedCards} />
      <Footer />
    </>
  );
}
