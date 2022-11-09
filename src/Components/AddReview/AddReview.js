import React, { useContext, useState } from 'react';
import { json, Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const AddReview = ({ service }) => {

    const { user } = useContext(AuthContext);
    const [userLoggedIn, setUserLoggedIn] = useState(true);
    const { serviceName, _id } = service;

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
        const serviceId = _id
        const review = { reviewData, email, photoURL, serviceName, serviceId, userName };
        // checks if user gives a valid review
        if (reviewData.length === 0) {
            return alert('Provide a review before submitting')
        }

        fetch('https://mr-photographer-server-shamratpg.vercel.app/reviews', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    alert('Successfully added review')
                }
            })
            .catch(err => console.error(err))
    }
    return (
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
    );
};

export default AddReview;