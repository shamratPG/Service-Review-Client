import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from '../ServiceCard/ServiceCard';

const ServiceSection = () => {

    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://mr-photographer-server-shamratpg.vercel.app/services?size=3')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div className='flex flex-col items-center my-12'>
            <h2 className='text-3xl'>Service Section</h2>
            <div className='grid gird-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-8 w-full'>
                {
                    services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div>
            <Link to={'/services'}>
                <button className='btn btn-outline'>
                    All Services
                </button>
            </Link>
        </div>
    );
};

export default ServiceSection;