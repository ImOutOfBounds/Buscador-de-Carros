'use client';

import { Container, SearchBarContent, SearchLabel, SearchBtn } from "./style";
import { FaSearch } from 'react-icons/fa';

export default function SearchBar() {
    return (
        <Container>
            <SearchBarContent>
                <SearchLabel type="text" placeholder="Pesquisar..." />
                <SearchBtn>
                    <FaSearch />
                </SearchBtn>
            </SearchBarContent>
        </Container>
    );
}