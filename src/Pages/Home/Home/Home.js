import React from 'react';
import { Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useServicesFunc from '../../../hooks/useServicesFunc';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';

const Home = () => {
    const [services, setServices] = useServicesFunc();
    return (
        <>
            <Banner></Banner>
            <Row className="d-flex justify-content-center mt-4">
                <Services></Services>
                <Link className='btn btn-primary m-4' to={'/services'}>See All Services</Link>
            </Row>
        </>
    );
};

export default Home;