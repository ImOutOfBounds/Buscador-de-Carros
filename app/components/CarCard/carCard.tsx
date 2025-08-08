'use client';

import React, { useState } from 'react';
import { Container, CarPicture, Info, Button } from './style';

export default function CarCard() {
  return (
    <Container>
        <Info>
            Car x
        </Info>
        <CarPicture src="/carTemplateImg.jpg"></CarPicture>
        <Info>
            R$ 99999,00
        </Info>
        <Button> See More</Button>
    </Container>
  );
}
