'use client';

import CarCard from "../CarCard/carCard";
import { Container, CardsSec } from "./style";

type Car = {
  Name: string;
  Model: string;
  Image: string;
  Price: number;
  Location: string;
};

type CarsSectionProps = {
  data: Car[];
};

export default function CarsSection({ data }: CarsSectionProps) {
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
