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
        { label: 'Até R$ 10.000,00', value: 'Price1' },
        { label: 'R$ 10.000,00 - R$ 20.000,00', value: 'Price2' },
        { label: 'R$ 20.000,00 - R$ 50.000,00', value: 'Price3' },
        { label: 'Mais de R$ 50.000,00', value: 'Price4' },
    ],
    filterJson(data.map((item) => item.Location)),
    ];


  const [selectedOptions, setSelectedOptions] = useState<string[][]>(Array(selectorsData.length).fill([]).map(() => []));

  const handleChange = (index: number, values: string[]) => {
  const updated = [...selectedOptions];
  updated[index] = values;
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
