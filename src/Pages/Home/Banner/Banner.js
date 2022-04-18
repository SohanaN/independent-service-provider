import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/banner/1.jpg'
import banner2 from '../../../images/banner/2.jpg'
import banner3 from '../../../images/banner/3.jpg'
const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                    className="d-block img-fluid "
                    src={banner1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Welcome to SNaz Travel</h3>
                    <p> Assalamu alaikum, I am SNaz, your local travel agent. Discover saudi-arabia with me!</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Once you have chosen your desired trip, add it to your wish list</h3>
                    <p>All of our private tours can be customized to your liking. If you want to alter the itinerary, no problem!</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner3}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Off you go, have a great journey!</h3>
                    <p>
                        When you're happy with the tour, you can book it through the booking link sent to you.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;