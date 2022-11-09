import React, { useContext, useEffect, useState } from 'react';
import MyReviewItem from '../../Components/MyReviewItem/MyReviewItem';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const MyReview = () => {
    const [reviews, setReviews] = useState([])
    const { user } = useContext(AuthContext);


    useEffect(() => {
        fetch(`https://mr-photographer-server-shamratpg.vercel.app/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [])


    const deleteItem = (id, name) => {
        const deleteConfirmation = window.confirm(`Are you want to delete your review on "${name}"`);
        if (deleteConfirmation) {
            fetch(`https://mr-photographer-server-shamratpg.vercel.app/reviews/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Review has deleted')
                        setReviews(reviews.filter(review => review._id !== id))
                    }
                })
        }

    }
    return (
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
                                reviews.map(review => <MyReviewItem key={review._id} review={review} deleteItem={deleteItem}></MyReviewItem>)
                            }
                        </div>
                    </div>
            }
        </div>
    );
};

export default MyReview;