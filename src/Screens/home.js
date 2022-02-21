import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import { PriorityCard, LookingAheadCard } from "../Components/component-index";

import '../index.css'

export const Home = () => {
    return (
        <Container>
            <section id="date">
                <Row>
                    <Col className="text-center">
                        <h3>Sunday</h3>
                        <h4>February 20, 2022</h4>
                    </Col>
                </Row>
            </section>
            <section id="cards">
                <Row>
                    <Col sm={7}>
                        <PriorityCard />
                    </Col>
                    <Col sm={5}>
                        <LookingAheadCard />
                    </Col>
                </Row>
            </section>
        </Container>

    );
}