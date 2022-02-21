import React from "react";
import { Card, ListGroup, Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faBriefcase } from "@fortawesome/free-solid-svg-icons";

import { TaskStatusDropdown } from "./component-index";

import './lists.css';
import '../index.css';

/*  TO-DO: 
        * Dynamic list pulling Icon, task name and due date from Tasks for Card Body
        * Drag and drop task ordering
        * Drag and drop tasks between cards
*/

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
                                <TaskStatusDropdown />
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

