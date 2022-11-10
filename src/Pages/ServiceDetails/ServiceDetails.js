import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import AddReview from '../../Components/AddReview/AddReview';
import ReviewItem from '../../Components/ReviewItem/ReviewItem';

const ServiceDetails = () => {
    const service = useLoaderData()[0];
    const { description, image, price, ratings, serviceName, _id } = service;

    const [reviews, setReviews] = useState([]);


    useEffect(() => {
        fetch(`http://localhost:5000/reviews/?serviceId=${_id}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [service])
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
            <h2 className="text-3xl text-center font-semibold mt-8">Reviews</h2>
            {
                reviews.map(review => <ReviewItem key={review._id} review={review}></ReviewItem>)
            }
            <AddReview service={service}></AddReview>
        </div>
    );
};

export default ServiceDetails;