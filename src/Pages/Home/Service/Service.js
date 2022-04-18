import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    const { name, img, description, price } = service;
    return (
        <Col md={4} className="mb-4">
            <Card>
                <Card.Img variant="top" src={img} className="img-fluid rounded" />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text><strong> || Price: $ ({price}) ||</strong></Card.Text>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    {/* <Link className='show-details-btn' to={'/reviews/' + id}>Show More Details</Link> */}
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Service;