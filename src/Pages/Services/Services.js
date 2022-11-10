import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import ServiceCard from '../../Components/ServiceCard/ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://mr-photographer-server-shamratpg.vercel.app/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <Helmet>
                <title>
                    Services - Mr. Photographer
                </title>
            </Helmet>
            <h1 className='text-5xl text-center mt-12'>All Services</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-8 px-'>
                {
                    services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;