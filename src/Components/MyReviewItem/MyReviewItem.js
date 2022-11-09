import React from 'react';
import { FaTrashAlt, FaPenSquare } from 'react-icons/fa';

const MyReviewItem = ({ review, deleteItem }) => {

    const { photoURL, userName, reviewData, serviceName, _id } = review;





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
                    <FaPenSquare className='text-2xl cursor-pointer'></FaPenSquare>
                </div>
            </div>

        </div>
    );
};

export default MyReviewItem;