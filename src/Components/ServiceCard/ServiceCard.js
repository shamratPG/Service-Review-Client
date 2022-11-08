import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = () => {
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure><img className='w-full' src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-outline">
                        <Link>View Details</Link>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;