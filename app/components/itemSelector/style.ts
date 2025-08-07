'use client';

import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const Select = styled.select`
  padding: 10px;
  font-size: 16px;
  border-radius: 6px;
  border: 1px solid #ccc;
  background-color: #fff;
  cursor: pointer;

  &:hover {
    border-color: #999;
  }
`;
