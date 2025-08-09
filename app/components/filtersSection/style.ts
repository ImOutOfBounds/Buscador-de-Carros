'use client';

import styled from "styled-components";

export const Container = styled.div`
    height: 180px;
    display: flex;
    align-items: center;
    background-color: #eaeaeaff;
    padding-top: 80px;
    justify-content: center;
    gap: 10rem;

    @media (max-width: 1000px) {
        gap: 1rem;
    }
`;

export const Button = styled.button`
    background-color: #961515ff;
    border-radius: 10px;
    transition: filter 0.5s ease;
    height: 40px;
    width: 90px;
    color: #fff;

    &:hover {
        background-color: #242424ff;
        cursor: pointer;
    }
`