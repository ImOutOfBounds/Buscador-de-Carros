'use client';

import { Container } from "./style";
import Selector from "../itemSelector/selector";

export default function FiltersSection() {
    return (
        <Container>
            <Selector></Selector>
            <Selector></Selector>
            <Selector></Selector>
            <Selector></Selector>
        </Container>
    );
}