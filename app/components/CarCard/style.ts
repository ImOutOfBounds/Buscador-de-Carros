'use client';

import styled from "styled-components";

export const Container = styled.div`
    width: 300px;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
`;


export const Info = styled.div`
    display: flex;        
    align-items: center;       
    justify-content: center;   
    background-color: black;
    color: #fff;
    height: 40px;
    width: 100%;
    text-align: center;
`;


export const CarPicture = styled.img`
    height: 300px;
    object-fit: cover;
`;


export const Button = styled.button`
    background-color: grey;
    border-radius: 10px;
    color: #fff;
    height: 30px;
    margin-top: 10px;
    width: 100%;

    transition: filter 0.5s ease;

    &:hover {
        background-color: #41c21aff;
        cursor: pointer;
    }
`;