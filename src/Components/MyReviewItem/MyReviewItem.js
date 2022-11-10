import React, { useState } from 'react';
import { FaTrashAlt, FaPenSquare } from 'react-icons/fa';

const MyReviewItem = ({ review, deleteItem, updateItem }) => {
    const [editing, setEditing] = useState(false);
    const { photoURL, userName, reviewData, serviceName, _id } = review;
    const handleReviewUpdate = event => {
        event.preventDefault();
        const myUpdatedReview = event.target.updatedReview.value;
        updateItem(_id, serviceName, myUpdatedReview);
        setEditing(false);
    }


    return (
        <div className=" bg-base-100 shadow-xl my-8 max-w-xl mx-auto rounded">
            <div className="card-body">
                <div className="w-12 h-12 ">
                    <img className='rounded-full' src={photoURL} alt="" />
                </div>
                <h2 className="card-title">{userName}</h2>

                {
                    editing ?
                        <form onSubmit={handleReviewUpdate}>
                            <textarea className="textarea textarea-bordered h-16 w-full" defaultValue={reviewData} name="updatedReview"></textarea>
                            <input type='submit' className='btn btn-outline' />
                        </form> :
                        <p className='text-justify'>{reviewData}</p>

                }


                <div className='pt-4 flex justify-center'>
                    <FaTrashAlt className='text-2xl mr-4 cursor-pointer' onClick={() => deleteItem(_id, serviceName)}></FaTrashAlt>

                    <FaPenSquare className='text-2xl cursor-pointer' onClick={() => setEditing(!editing)}></FaPenSquare>

                </div>
            </div>
        </div>
    );
};

export default MyReviewItem;