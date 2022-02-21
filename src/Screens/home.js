import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import { PriorityCard, LookingAheadCard, CurrentDate, AllTasksCard } from "../Components/component-index";

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
            <section id="top-cards">
                <Row>
                    <Col sm={7}>
                        <PriorityCard />
                    </Col>
                    <Col sm={5}>
                        <LookingAheadCard />
                    </Col>
                </Row>
            </section>
            <section>
                <Row>
                    <Col>
                        <AllTasksCard />
                    </Col>
                </Row>
            </section>

        </Container>

    );
}