import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import ServiceCard from '../../Components/ServiceCard/ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('https://mr-photographer-server.vercel.app/services')
            .then(res => res.json())
            .then(data => {
                setLoading(false);
                setServices(data.reverse());
            })
    }, [])
    return (
        <div>
            <Helmet>
                <title>
                    Services - Mr. Photographer
                </title>
            </Helmet>
            <h1 className='text-5xl text-center mt-12'>All Services</h1>


            <div className='flex justify-center'>
                {
                    loading ?
                        <progress className="progress w-56 my-40"></progress>
                        :
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-8 px-4'>
                            {
                                services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                            }
                        </div>
                }
            </div>
        </div>
    );
};

export default Services;