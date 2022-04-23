import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Service = ({ service }) => {
    const { id, name, img, description, price } = service;
    const navigate = useNavigate();
    const navigateToCheckout = id => {
        navigate(`/checkout/${id}`);
    }
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
                    <button onClick={() => navigateToCheckout(id)} className='btn btn-primary'>Book Now</button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Service;