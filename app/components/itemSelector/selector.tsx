'use client';

import React, { useState } from 'react';
import { Container, InputList, PlaceholderBtn } from './style';

type Option = {
  label: string;
  value: string;
};

type SelectorProps = {
  options?: Option[];
  selected: string[];
  onChange: (value: string[]) => void;
  placeholder?: string;
};

export default function Selector({ options = [], selected, onChange, placeholder = 'Filter By', }: SelectorProps) {
  const [isActive, setIsActive] = useState(false);

  const handleCheckboxChange = (value: string) => {
    if (selected.includes(value)) {
      onChange(selected.filter((item) => item !== value));
    } else {
      onChange([...selected, value]);
    }
  };

  const toggleOpen = () => setIsActive((prev) => !prev);

  return (
    <Container>
      <PlaceholderBtn onClick={toggleOpen}>
        {placeholder}
      </PlaceholderBtn>

      {isActive && (
        <InputList>
          {options.map((opt) => (
            <label key={opt.value} style={{ display: 'block'}}>
              <input
                type="checkbox"
                value={opt.value}
                checked={selected.includes(opt.value)}
                onChange={() => handleCheckboxChange(opt.value)}
              />
              {' '}
              {opt.label}
            </label>
          ))}
        </InputList>
      )}
    </Container>
  );
}
