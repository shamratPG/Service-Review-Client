import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {


    const { description, image, price, ratings, serviceName, _id } = service;
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure><img className='w-full' src={image} alt="Photography Service" /></figure>
            <div className="card-body">
                <h2 className="card-title">{serviceName}</h2>
                <p>{`${description.slice(0, 99)}...`}</p>
                <div className='my-4 flex justify-between'>
                    <p className='text-center'>Price: <span className='text-lg font-semibold'>${price}</span></p>
                    <p className='text-center'>Ratings: <span className='text-lg font-semibold'><span className={ratings < 3 ? 'text-lime-500' : 'text-yellow-500'}>{ratings}</span>/5</span></p>
                </div>
                <div className="card-actions justify-center">
                    <Link to={`/services/${_id}`}>
                        <button className="btn btn-outline">
                            View Details
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;