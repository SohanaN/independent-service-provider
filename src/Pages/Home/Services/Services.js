import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (
        <>
            <div id="services">
                <Container>
                    <h2 className='text-primary text-center mt-4'>Our Services</h2>

                    <Row className="d-flex justify-content-center mt-4">
                        {
                            services.map(service => <Service
                                key={service.id}
                                service={service}
                            ></Service>)
                        }
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default Services;