'use client';

import CarCard from "../CarCard/carCard";
import { Container, CardsSec } from "./style";

export default function CarsSection() {
    return (
        <Container>
            <CardsSec>
                <CarCard></CarCard>
                <CarCard></CarCard>
                <CarCard></CarCard>
                <CarCard></CarCard>
                <CarCard></CarCard>
                <CarCard></CarCard>
                <CarCard></CarCard>
                <CarCard></CarCard>
                <CarCard></CarCard>
                <CarCard></CarCard>
            </CardsSec>
        </Container>
    );
}