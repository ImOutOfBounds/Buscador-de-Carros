'use client';

import styled from "styled-components";

export const Container = styled.div`
    background-color: #242424ff;
    height: 80px;
    width: 100%;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    padding: 0 40px;
`;

export const ImageContainer = styled.div`
    display: flex;
    width: 60px;
    height: 60px;
`;

export const Logo = styled.img`
    height: 100%;
    transition: filter 0.3s ease;

    &:hover {
        cursor: pointer;
        filter: sepia(1) saturate(1000%) hue-rotate(-30deg);
    }
`;

export const NavItem = styled.h1`
    color: #fff;
    font-size: 40px;
    font-family: "Almendra SC", sans-serif;
    transition: color 0.3s ease, transform 0.3s ease;
    text-decoration: none;
    text-transform: uppercase;
    &:hover {
        cursor: pointer;
        color: #e03c36;
    }
`;

export const Bold = styled.span`
    font-weight: bold;
`
