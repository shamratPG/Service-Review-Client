import React from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from '../ServiceCard/ServiceCard';

const ServiceSection = () => {
    return (
        <div className='flex flex-col items-center my-12'>
            <h2 className='text-3xl'>Service Section</h2>
            <div className='grid gird-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-8 w-full'>
                <ServiceCard></ServiceCard>
                <ServiceCard></ServiceCard>
                <ServiceCard></ServiceCard>
            </div>
            <button className='btn btn-outline'>
                <Link to={'/services'}>See All</Link>
            </button>
        </div>
    );
};

export default ServiceSection;