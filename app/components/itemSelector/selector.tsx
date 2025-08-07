'use client';

import React, { useState } from 'react';
import { Container, Select } from './style';

export default function Selector() {
  const [selected, setSelected] = useState('');

  return (
    <Container>
      <Select value={selected} onChange={(e) => setSelected(e.target.value)}>
        <option value="">Selecione...</option>
        <option value="carros">Carros</option>
        <option value="motos">Motos</option>
        <option value="caminhoes">Caminhões</option>
      </Select>
    </Container>
  );
}
