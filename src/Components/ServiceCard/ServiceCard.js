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
                <div className="card-actions justify-end">
                    <button className="btn btn-outline">
                        <Link to={`/services/:${_id}`}>View Details</Link>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;