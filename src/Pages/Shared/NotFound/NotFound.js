import React from 'react';
import PageNotFound from '../../../images/not found 404.jpg'
const NotFound = () => {
    return (
        <div>
            <img src={PageNotFound} className='w-100' alt="" />
        </div>
    );
};

export default NotFound;