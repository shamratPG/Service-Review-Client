import React, { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useLoaderData } from 'react-router-dom';
import ReviewItem from '../../Components/ReviewItem/ReviewItem';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const ServiceDetails = () => {
    const service = useLoaderData()[0];
    const { description, image, price, ratings, serviceName, _id } = service;

    const { user } = useContext(AuthContext);
    const [userLoggedIn, setUserLoggedIn] = useState(true);

    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch(`https://mr-photographer-server.vercel.app/reviews/?serviceId=${_id}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [_id])


    const submitReview = event => {
        event.preventDefault();

        // checks if user is logged in 

        if (!user) {
            setUserLoggedIn(false);
            return
        } else if (user) {
            setUserLoggedIn(true);
        }
        const reviewData = event.target.review.value;
        const userName = user.displayName;
        const email = user.email;
        const photoURL = user?.photoURL;
        const serviceId = _id;
        const date = new Date();
        const newReview = { reviewData, email, photoURL, serviceName, serviceId, userName, date };
        // checks if user gives a valid review
        if (reviewData.length === 0) {
            return alert('Provide a review before submitting')
        }

        fetch('https://mr-photographer-server.vercel.app/reviews', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(newReview)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    alert('Successfully added review');
                    event.target.reset();
                    const newReviewCollections = [...reviews, newReview];
                    setReviews(newReviewCollections);

                }
            })
            .catch(err => console.error(err))
    }

    return (
        <div>
            <Helmet>
                <title>
                    Service Details - Mr. Photographer
                </title>
            </Helmet>
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

            {/* Add Review Section  */}

            <div>
                <form onSubmit={submitReview} className='form-control max-w-xl my-8 mx-auto '>
                    {/* REVIEW */}

                    <div className="w-full mt-4">
                        <textarea className="textarea textarea-bordered h-32 w-full" placeholder="Add Your Review" name='review'></textarea>
                    </div>

                    {
                        !userLoggedIn &&
                        <p className='text-red-700 text-center'>Please <Link to='/logIn' className="link link-secondary">Log In</Link> to add a review</p>
                    }

                    <div className='my-4 text-center'>
                        <button className='btn btn-outline'>Add Your review</button>
                    </div>

                </form>
            </div>




        </div>
    );
};

export default ServiceDetails;