'use client';

import React from 'react';
import { Container, Select } from './style';

type Option = {
  label: string;
  value: string;
};

type SelectorProps = {
  options?: Option[];
  selected: string;
  onChange: (value: string) => void;
  placeholder?: string;
};

export default function Selector({ options = [], selected, onChange, placeholder = 'Filter By', }: SelectorProps) {
  return (
    <Container>
      <Select value={selected} onChange={(e) => onChange(e.target.value)}>
        <option value="">{placeholder}</option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </Select>
    </Container>
  );
}

