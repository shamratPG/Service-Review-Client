import React, { useState } from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import ThirdPartyAuth from '../../Components/ThirdPartyAuth/ThirdPartyAuth';

const Register = () => {
    return (
        <div className='py-12 bg-base-200 px-2'>
            <form className="form-control w-full sm:w-3/5 mx-auto bg-base-100 rounded-lg p-8 py-16 flex justify-center items-center shadow-lg">
                <h1 className='font-semibold text-2xl'>Register here</h1>
                <div className='my-5'>
                    <label className="input-group">
                        <span className='px-8'>Name</span>
                        <input name='name' type="name" placeholder="Your Name" className="input input-bordered" required />
                    </label>
                </div>
                <div className='my-5'>
                    <label className="input-group">
                        <span className='px-8'>Email</span>
                        <input name='email' type="email" placeholder="Your Email" className="input input-bordered" required />
                    </label>
                </div>
                <div className="my-5">
                    <label className="input-group">
                        <span>Password</span>
                        <input name='password' type="password" placeholder="Your Password" className="input input-bordered" required />
                    </label>
                </div>

                <button type="submit" className='btn btn-outline my-4'>Sign Up</button>
                <p>Already have an account <Link className='link' to='/logIn'>Log In</Link></p>
                <ThirdPartyAuth></ThirdPartyAuth>
            </form>
        </div>
    );
};

export default Register;