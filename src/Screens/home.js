import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import { PriorityCard } from "../Components/component-index";

export const Home = () => {
    return (
        <Container>
            <Row>
            <h1>home</h1>
                <Col sm={7}>
                    <PriorityCard />
                </Col>
            </Row>
        </Container>

    );
}