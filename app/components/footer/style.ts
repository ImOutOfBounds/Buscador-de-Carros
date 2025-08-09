'use client';

import styled from "styled-components";


export interface ICarousel {
    isActive?: boolean,
    margin?: string
}

export const FatherContainer = styled.div<ICarousel>`
    display: flex;
    flex-direction: column;
    padding: 60px 0;
    align-items: center;
    background-color: #191919ff;
    margin-top: 100px;

    @media (max-width: 768px) {
        padding: 0;
    }
`;

export const Container = styled.div<ICarousel>`
    display: flex;
    flex-direction: column;
    padding: 60px 0;
    width: 20vw;

    @media (max-width: 768px) {
        padding: 20px 0;
        width: 80vw;
    }
`;

export const WaterMarkContainer = styled.footer<ICarousel>`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 20px;
    color: white;
    text-align: center;
    position: relative;
    height: 150px;
`;

export const SubContainer = styled.div<ICarousel>`
    display: flex;
    padding: 10px 0;
    gap: 100px;

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 0px;
        padding: 0;
    }
`;

export const Span = styled.span`
    border: 1px solid #fff;
    height: 0;
    width: 90vw;
`;

export const Title = styled.h1`
    color: #fff;
    font-size: 30px;
    font-family: "Almendra SC", sans-serif;
    display: flex;
    line-height: 1;
    margin: 0;
`;

export const TitleTwo = styled.p`
    color: #fff;
    font-size: 20px;
    font-family: sans-serif;
    font-weight: bold;

    @media (max-width: 768px) {
        font-size: 18px;
    }
`;

export const Info = styled.p`
    color: #fff;
    font-size: 15px;
    font-family: sans-serif;
    padding: 0;
    text-decoration: none;
    transition: .2s;

    &:hover{
        color: red
        cursor: pointer;
    }

    @media (max-width: 768px) {
        font-size: 14px;
    }
`;

export const Logo = styled.img`
    height: 90px;
    width: 90px;
    margin-bottom: 30px;
    transition: filter 0.3s ease;

    &:hover {
        cursor: pointer;
        filter: sepia(1) saturate(1000%) hue-rotate(-30deg);
    }

    @media (max-width: 768px) {
        margin-bottom: 30px;
    }
    
`;