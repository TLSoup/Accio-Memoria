import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import { PriorityCard, LookingAheadCard, CurrentDate, AllTasksCard } from "../Components/component-index";

import '../index.css'

export const Home = () => {
    return (
        <Container>
            <section>
                <Row>
                    <Col className="text-center">
                        <CurrentDate />
                    </Col>
                </Row>
            </section>
            <section>
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