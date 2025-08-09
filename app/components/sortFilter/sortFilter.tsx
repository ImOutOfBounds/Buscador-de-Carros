'use client';

import React, { useState } from 'react';
import { Container, FilterContainer, SelectOpt } from './style';

type Option = {
  label: string;
  value: string;
};

type SortFilterProps = {
  onSort: (sortOption: string) => void;
};

export default function SortFilter({ onSort }: SortFilterProps) {
  const [selected, setSelected] = useState(''); 

  const options: Option[] = [
    { label: 'Alphabetical Order', value: 'alpha' },
    { label: 'Price: Lower to Higher', value: 'priceAsc' },
    { label: 'Price: Higher to Lower', value: 'priceDesc' },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSelected(value); 
    onSort(value);
  };

  return (
    <Container>
        <FilterContainer>
        <SelectOpt value={selected} onChange={handleChange}> 
            <option value="">Ordenar por</option>
            {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
                {opt.label}
            </option>
            ))}
        </SelectOpt>
      </FilterContainer>
    </Container>
  );
}
