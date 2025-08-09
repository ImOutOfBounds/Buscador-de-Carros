'use client';

import React, { useState } from 'react';
import { Container, SearchBarContent, SearchLabel, SearchBtn } from "./style";
import { FaSearch } from 'react-icons/fa';

export default function SearchBar({ onSearch }: { onSearch: (query: string) => void }) {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
        onSearch(e.target.value);
    };

    return (
        <Container>
            <SearchBarContent>
                <SearchLabel 
                    type="text" 
                    placeholder="Search..." 
                    value={searchQuery}
                    onChange={handleSearchChange}
                />
                <SearchBtn>
                    <FaSearch />
                </SearchBtn>
            </SearchBarContent>
        </Container>
    );
}
