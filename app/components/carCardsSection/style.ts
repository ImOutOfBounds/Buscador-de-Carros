'use client';

import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    padding: 16px;
`;


export const CardsSec = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;
    width: fit-content;
`;

