'use client';

import React, { useState } from 'react';
import { Container, Button } from "./style";
import Selector from "../itemSelector/selector";
import data from "../../carData/data.json";

export default function FiltersSection() {

    const secTitle = [
    'Name',
    'Model',
    'Price',
    'Location',
    ];

    const filterJson = (array: string[]) => {
    return Array.from(new Set(array)).map((value) => ({
        label: value,
        value: value,
    }));
    };

    const selectorsData = [
    filterJson(data.map((item) => item.Name)),
    filterJson(data.map((item) => item.Model)),
    [
        { label: 'Gasolina', value: 'gasolina' },
        { label: 'Etanol', value: 'etanol' },
        { label: 'Diesel', value: 'diesel' },
        { label: 'Elétrico', value: 'eletrico' },
    ],
    filterJson(data.map((item) => item.Location)),
    ];


  const [selectedOptions, setSelectedOptions] = useState<string[]>(Array(selectorsData.length).fill(""));

  const handleChange = (index: number, value: string) => {
    const updated = [...selectedOptions];
    updated[index] = value;
    setSelectedOptions(updated);
  };

  const logResult = () => {
    console.log(selectedOptions);
  };

  return (
    <Container>
      {selectorsData.map((options, index) => (
        <Selector
          key={index}
          options={options}
          selected={selectedOptions[index]}
          onChange={(value) => handleChange(index, value)}
          placeholder={secTitle[index]}
        />
      ))}

      <Button onClick={logResult}>Filtrar</Button>
    </Container>
  );
}
