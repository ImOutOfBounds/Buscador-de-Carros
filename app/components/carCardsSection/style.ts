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

    @media (max-width: 1200px) {
        grid-template-columns: repeat(3, 1fr); /* 3 colunas em telas médias */
    }

    @media (max-width: 900px) {
        grid-template-columns: repeat(2, 1fr); /* 2 colunas em telas menores */
    }

    @media (max-width: 600px) {
        grid-template-columns: 1fr; /* 1 coluna em telas muito pequenas (ex: celulares) */
    }
`;

