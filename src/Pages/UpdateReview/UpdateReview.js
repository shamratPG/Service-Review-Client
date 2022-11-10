import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLoaderData, useNavigate } from 'react-router-dom';

const UpdateReview = () => {
    const review = useLoaderData()[0];
    const navigate = useNavigate();
    const { email, photoURL, reviewData, serviceName, userName, _id } = review;


    const updateItem = event => {
        event.preventDefault();
        const confirmUpdate = window.confirm(`Update Your Review on '${serviceName}'`)
        const updatedReview = event.target.updatedReview.value;
        if (confirmUpdate) {
            fetch(`https://mr-photographer-server.vercel.app/reviews/${_id}`, {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json',
                    authorization: `Bearer ${localStorage.getItem('token')}`

                },
                body: JSON.stringify({ updatedReview })
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    navigate('/myReviews')
                })
        }
    }
    return (
        <div >
            <Helmet>
                <title>
                    Update Review- Mr. Photographer
                </title>
            </Helmet>

            <div className="card bg-base-100 shadow-xl my-8 max-w-xl mx-auto">
                <div className="card-body">
                    <div className="w-12 h-12 ">
                        <img className='rounded-full' src={photoURL} alt="User Photo" />
                    </div>
                    <form onSubmit={updateItem}>
                        <div className='flex flex-col'>
                            <input className='input input-bordered mb-4' type="text" defaultValue={`Your Name: ${userName}`} readOnly />
                            <input className='input input-bordered mb-4' type="text" defaultValue={`Your Email: ${email}`} readOnly />
                            <input className='input input-bordered mb-4' type="text" defaultValue={`Editing Review on  ${serviceName}`} readOnly />
                        </div>
                        <textarea textarea className="textarea textarea-bordered h-24 w-full" defaultValue={reviewData} name="updatedReview"></textarea>
                        <input type='submit' className='btn btn-outline' />
                    </form>
                </div>
            </div>

        </div>
    );
};

export default UpdateReview;