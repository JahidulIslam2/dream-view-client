import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Details from './Details';

const ServiceDetails = () => {
    const details = useLoaderData();
    return (
        <div>
            <Details detail={details} key={details._id}></Details>
        </div>
    );
};

export default ServiceDetails;