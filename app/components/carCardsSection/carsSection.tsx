'use client';

import CarCard from "../CarCard/carCard";
import { Container, CardsSec } from "./style";
import data from "../../carData/data.json";

export default function CarsSection() {
    return (
        <Container>
            <CardsSec>
                {data.map((car, index) => (
                    <CarCard
                        key={index}
                        name={car.Name}
                        model={car.Model}
                        image={car.Image}
                        price={car.Price}
                        location={car.Location}
                    />
                ))}
            </CardsSec>
        </Container>
    );
}