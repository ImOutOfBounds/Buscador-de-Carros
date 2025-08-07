'use client';

import { Container, Search } from "./style";

export default function SearchBar() {
    return (
        <Container>
            <Search type="text" placeholder="Pesquisar..." />
        </Container>
    );
}