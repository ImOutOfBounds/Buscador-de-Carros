'use client';

import { Container, Image, ImageContainer, NavItem, Bold } from "./style";

export default function NavBar() {
    return (
        <Container>
            <ImageContainer>
                
                <Image src="/logo.png" />
                
            </ImageContainer>
            <NavItem as="a" href="#contact-us">
                Wheels <Bold>Store</Bold>
            </NavItem>
        </Container>
    );
}