import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

/* To-Do:
    * Build out form to match task schema
    * On Submit updates tasks list    
*/

export const Create = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <Form className="mt-4">
                        <Form.Group className="mb-3" controlID="task">
                            <Form.Control placeholder="Add Task" />
                            <Form.Text className="text-muted">
                                What would you like to remember?
                            </Form.Text>
                        </Form.Group>
                        <Button variant="dark" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}