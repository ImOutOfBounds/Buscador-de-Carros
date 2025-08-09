'use client';

import styled from "styled-components";

export const Container = styled.div`
    height: 80px;
    width: 80vw;
    display: flex;
    align-items: center;
    margin: 5rem auto;
`;

export const SearchBarContent = styled.div`
    height: 60px;
    width: 100%;
    display: flex;
`

export const SearchLabel = styled.input`
    font-size: 16px;
    border: none;
    border-radius: 10px 0 0 10px;
    width: 100%;
    height: 100%;
    border: 1px solid #eee;
`

export const SearchBtn = styled.button`
    background-color: #333;
    height: 100%;
    width: 60px;
    display: flex;
    justify-content: center;
    align-items: center;  
    border-radius: 0 10px 10px 0;
    color: #fff;

    &:hover {
        background-color: #971212ff;
        cursor: pointer;
    }
`
