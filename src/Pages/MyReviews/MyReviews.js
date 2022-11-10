import React, { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import MyReviewItem from '../../Components/MyReviewItem/MyReviewItem';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MyReview = () => {
    const notify = () => toast("Review Deleted Successfully");
    const [reviews, setReviews] = useState([])
    const { user, logOut } = useContext(AuthContext);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        fetch(`https://mr-photographer-server.vercel.app/reviews/${user.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    return logOut()
                }
                return res.json()
            })
            .then(data => {
                setReviews(data);
                setLoading(false);
            });
    }, [user?.email, logOut])

    const deleteItem = (id, name) => {
        const deleteConfirmation = window.confirm(`Are you want to delete your review on "${name}"`);
        if (deleteConfirmation) {
            fetch(`https://mr-photographer-server.vercel.app/reviews/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        notify();
                        const remaining = reviews.filter(review => review._id !== id);
                        setReviews(remaining)
                    }
                })
        }

    }
    const updateItem = (id, name, updatedReview) => {
        const confirmUpdate = window.confirm(`Update Your Review on '${name}'`)
        if (confirmUpdate) {
            fetch(`https://mr-photographer-server.vercel.app/reviews/${id}`, {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({ updatedReview })
            })
                .then(res => res.json())
                .then(data => {
                    if (data.modifiedCount > 0) {
                        const remaining = reviews.filter(review => review._id !== id);
                        const changedItem = reviews.find(review => review._id === id);
                        changedItem.reviewData = updatedReview;
                        const newReviews = [...remaining, changedItem];
                        setReviews(newReviews);
                    }
                })
        }
    }
    return (
        <div>
            <Helmet>
                <title>
                    My Reviews- Mr. Photographer
                </title>
            </Helmet>
            <div className='flex justify-center'>
                {
                    loading ?
                        <progress className="progress w-56 my-40 mx-auto"></progress> :
                        <div>
                            {
                                reviews.length === 0 ?
                                    <div className='h-[70vh] flex justify-center items-center'>
                                        <p className='text-2xl font-semibold text-yellow-400'>No reviews were added</p>
                                    </div> :
                                    <div>
                                        <h1 className='text-3xl text-center mt-12'>My Reviews</h1>
                                        <div>
                                            {
                                                reviews.map(review => <MyReviewItem key={review._id} review={review} deleteItem={deleteItem}
                                                    updateItem={updateItem}></MyReviewItem>)
                                            }
                                        </div>
                                        <ToastContainer
                                            position="top-center"
                                            autoClose={5000}
                                            hideProgressBar={true}
                                            newestOnTop={false}
                                            closeOnClick
                                            rtl={false}
                                            pauseOnFocusLoss={false}
                                            draggable
                                            pauseOnHover={false}
                                            theme="dark"
                                        />
                                    </div>
                            }
                        </div>
                }
            </div>
        </div>
    );
};

export default MyReview;