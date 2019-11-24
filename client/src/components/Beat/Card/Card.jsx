import React from "react";
import Card from 'react-bootstrap/Card';

export default function MyLink({ name, length }) {
    return (
        <Card className="m-2">
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Subtitle class="mb-2 text-muted">{length}</Card.Subtitle>
                <Card.Text> </Card.Text>
            </Card.Body>
        </Card>
    );
}