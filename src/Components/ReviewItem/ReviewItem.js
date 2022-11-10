import React from 'react';

const ReviewItem = ({ review }) => {
    const { userName, reviewData, photoURL } = review;
    return (
        <div className="card bg-base-100 shadow-xl my-8 max-w-xl mx-auto">
            <div className="card-body">
                <div className="w-12 h-12 ">
                    <img className='rounded-full' src={photoURL} alt="User Photo" />
                </div>
                <h2 className="card-title">{userName}</h2>
                <p className='text-slate-500'>{reviewData}</p>
            </div>
        </div>
    );
};

export default ReviewItem;