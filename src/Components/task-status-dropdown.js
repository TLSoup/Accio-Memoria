import React from "react";
import { Form } from 'react-bootstrap';

/*  TO-DO: 
    * Add colors for each status
    * When selected update task with current status 
*/
export const TaskStatusDropdown = () => {
    return (
        <Form.Select aria-label="Status">
            <option>Not Started</option>
            <option value="In Progress">In Progress</option>
            <option value="Waiting">Waiting</option>
            <option value="Done">Done</option>
        </Form.Select>
    )
}