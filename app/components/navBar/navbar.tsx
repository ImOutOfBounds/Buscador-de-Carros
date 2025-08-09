'use client';

import { Container, Logo, ImageContainer, NavItem, Bold } from "./style";

export default function NavBar() {
    return (
        <Container>
            <ImageContainer>
                <Logo src="./logo.png" />
            </ImageContainer>
            <NavItem as="a" href="#contact-us">
                Wheels <Bold>Store</Bold>
            </NavItem>
        </Container>
    );
}