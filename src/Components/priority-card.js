import React from "react";
import { Card, ListGroup, Col, Row, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faBriefcase } from "@fortawesome/free-solid-svg-icons";

import './lists.css';
import '../index.css';

export const PriorityCard = () => {
    return (
        <Card>
            <Card.Header><h3>Priorities</h3></Card.Header>
            <ListGroup variant="flush">
                <ListGroup.Item>
                    <Row>
                        <Col sm={6}>
                            <div className="list-label">Task</div>
                        </Col>
                        <Col sm={2}>
                            <div className="list-label">Due Date</div>
                        </Col>
                        <Col>
                            <div className="list-label">Status</div>
                        </Col>
                    </Row>
                </ListGroup.Item>
            </ListGroup>
            <Card.Body>
                <Row>
                    <Col sm={6}>
                        <FontAwesomeIcon className="briefcase-icon" icon={faBriefcase}></FontAwesomeIcon>
                        Task Name
                    </Col>
                    <Col sm={2}>
                        <div>3/1/2022</div>
                    </Col>
                    <Col>
                        <Row>
                            <Col sm={10}>
                                <Form.Select aria-label="Status">
                                    <option>Not Started</option>
                                    <option value="In Progress">In Progress</option>
                                    <option value="Waiting">Waiting</option>
                                    <option value="Done">Done</option>
                                </Form.Select>
                            </Col>
                            <Col sm={2}>
                                <FontAwesomeIcon className="reorder-icon" icon={faBars} ></FontAwesomeIcon>
                            </Col>
                        </Row>
                    </Col>

                </Row>
            </Card.Body>
        </Card>
    )
}

