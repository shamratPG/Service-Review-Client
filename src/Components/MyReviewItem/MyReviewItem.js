import React, { useState } from 'react';
import { FaTrashAlt, FaPenSquare } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const MyReviewItem = ({ review, deleteItem, updateItem }) => {
    const { photoURL, userName, reviewData, serviceName, _id } = review;
    const handleReviewUpdate = event => {
        event.preventDefault();
        const myUpdatedReview = event.target.updatedReview.value;
        updateItem(_id, serviceName, myUpdatedReview);
    }


    return (
        <div className=" bg-base-100 shadow-xl my-8 max-w-xl mx-auto rounded">
            <div className="card-body">
                <div className="w-12 h-12 ">
                    <img className='rounded-full' src={photoURL} alt="" />
                </div>
                <h2 className="card-title">{userName}</h2>
                <p className='text-justify'>{reviewData}</p>


                <div className='pt-4 flex justify-center'>
                    <FaTrashAlt className='text-2xl mr-4 cursor-pointer' onClick={() => deleteItem(_id, serviceName)}></FaTrashAlt>

                    <Link to={`/editReview/${_id}`}>

                        <FaPenSquare className='text-2xl cursor-pointer'></FaPenSquare>

                        {/* <FaPenSquare className='text-2xl cursor-pointer' onClick={() => setEditing(!editing)}></FaPenSquare> */}
                    </Link>

                </div>
            </div>
        </div>
    );
};

export default MyReviewItem;