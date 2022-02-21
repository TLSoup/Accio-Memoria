import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import { PriorityCard, LookingAheadCard, CurrentDate } from "../Components/component-index";

import '../index.css'

export const Home = () => {
    return (
        <Container>
            <section id="date">
                <Row>
                    <Col className="text-center">
                        <CurrentDate />
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