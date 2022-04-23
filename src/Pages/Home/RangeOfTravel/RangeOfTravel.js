import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import range from '../../../images/range.jpg'
const RangeOfTravel = () => {
    return (
        <div>
            <Container>
                <Row>
                    <h1 className="text-center my-4">Find wide range of Halal Holidays & Travel </h1>
                    <Col md={6}>
                        <img src={range} className="w-100" alt="" />
                    </Col>
                    <Col md={6}>
                        <p>email or phone and let us give you an even more detailed insight on what it is we’re really capable of doing for you and your holiday. Let us be a part of your next escapade! Right from the onset you will be flooded with experienced ideas, knowledge, suggestions, and the answers to all your important questions. If you already know what it is you have in mind, we’ll happily listen and get working to execute the plan. Whatever it is you decide you want to do, or wherever it is you want to go, we’ll put the pieces of the puzzle together for you, ensuring an easy and stress-free holiday from the beginning to the end.</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default RangeOfTravel;