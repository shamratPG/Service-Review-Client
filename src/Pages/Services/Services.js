import React from 'react';
import ServiceCard from '../../Components/ServiceCard/ServiceCard';

const Services = () => {
    return (
        <div>
            <h1 className='text-5xl text-center mt-12'>All Services</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-8 px-'>
                {
                    [...Array(9).keys()].map(number => <ServiceCard key={number}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;