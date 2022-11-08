import React from 'react';
import { FaFacebook, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ThirdPartyAuth = () => {
    return (
        <div className='flex flex-col justify-around'>
            <Link className='btn btn-outline my-4'>
                <FaGoogle className='text-4xl pr-2'></FaGoogle>
                Log In with Google
            </Link>

            <Link className='btn btn-outline'>
                <FaFacebook className='text-4xl pr-2'></FaFacebook>
                Log In with Facebook
            </Link>
        </div>
    );
};

export default ThirdPartyAuth;