'use client';

import React, { useState } from 'react';
import { Container, CarPicture, Info, Button, TopContent } from './style';

type CarCardProps = {
  name: string;
  model: string;
  image: string;
  price: number;
  location: string;
};


export default function CarCard({ name, model, image, price, location }: CarCardProps) {
  return (
    <Container>
      <TopContent>
        <Info>
            {name} {model}
        </Info>
        <CarPicture src={image}></CarPicture>
        <Info>
            R$ {price}
        </Info>
        <Info>{location}</Info>
      </TopContent>
      <Button> See More</Button>
    </Container>
  );
}
