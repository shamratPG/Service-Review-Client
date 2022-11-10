import React from 'react';
import ContactGallery from '../ContactGallery/ContactGallery';

const Contact = () => {

    return (
        <div className="bg-base-300 my-12">
            <div className='flex flex-col md:flex-row justify-around items-center p-8'>
                <p className='text-gray-600 text-3xl font-semibold md:w-3/4 lg:w-1/2 text-center'>
                    If you have any questions or suggestions, feel free to contact me any time
                </p>
                <button className='btn btn-outline rounded-full mt-6 btn-disabled'>Contact</button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8">
                {
                    [...Array(8).keys()].map(number => <ContactGallery key={number}></ContactGallery>)
                }
            </div>

        </div>

    );
};

export default Contact;