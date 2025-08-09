'use client';

import { Container, Span, SubContainer, Logo, Title, TitleTwo, FatherContainer, WaterMarkContainer, Info} from './style';

export default function Footer() {
    return (
        <FatherContainer>
            <SubContainer>
                <Container>
                    <Logo src="./logo.png" />
                    <Title>Wheels Store </Title>
                </Container>
                <Container>
                    <TitleTwo>Contact Us</TitleTwo>
                    <Info>Phone: +55 (11) 0000-0000</Info>
                </Container>
                <Container>
                    <TitleTwo>Social Media</TitleTwo>
                    <Info>Instagram</Info>
                    <Info>wheelsStore@example.com</Info>
                </Container>
            </SubContainer>
            
            <Span></Span>

            <WaterMarkContainer>
                <Info>Wheels Store - 2025. All rights reserved</Info>
            </WaterMarkContainer>
        </FatherContainer>
        
    )
}