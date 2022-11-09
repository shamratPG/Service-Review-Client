import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
    const service = useLoaderData()[0];
    const { description, image, price, ratings, serviceName, _id } = service;
    console.log(service);
    return (
        <div>
            {/* Service Section  */}
            <h2 className="text-4xl text-center font-semibold mt-12">{serviceName}</h2>
            <div className="card card-compact bg-base-100 shadow-xl my-8 max-w-xl mx-auto">
                <figure><img className='w-full' src={image} alt="Photography Service" /></figure>
                <div className="card-body">
                    <p className='text-justify'>{description}</p>
                    <div className='my-4 flex justify-between'>
                        <p className='text-center'>Price: <span className='text-lg font-semibold'>${price}</span></p>
                        <p className='text-center'>Ratings: <span className='text-lg font-semibold'><span className={ratings < 3 ? 'text-lime-500' : 'text-yellow-500'}>{ratings}</span>/5</span></p>
                    </div>
                    <div className="card-actions justify-center">
                        <Link>
                            <button className="btn btn-outline">
                                contact
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            {/* Review Section  */}
        </div>
    );
};

export default ServiceDetails;