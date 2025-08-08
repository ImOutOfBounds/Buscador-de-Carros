'use client';

import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const PlaceholderBtn = styled.button`
  padding: 8px 12px;
  border-radius: 4px;
  background-color: #eee;
  cursor: pointer;
  border: 1px solid #ccc;

  &:hover {
    background-color: #ddd;
  }
`;

export const InputList = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  margin-top: 5px;
  min-width: 200px;
  padding: 10px;
  font-size: 15px;
  border-radius: 10px;
  border: 1px solid #ccc;
  background-color: #fff;
  z-index: 1;

  &:hover {
    border-color: #999;
  }
`;
