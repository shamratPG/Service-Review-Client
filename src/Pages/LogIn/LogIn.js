import React, { useState } from 'react';
import { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import ThirdPartyAuth from '../../Components/ThirdPartyAuth/ThirdPartyAuth';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const LogIn = () => {

    const { logIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const handleLogIn = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        logIn(email, password)
            .then(result => {
                const user = result.user;
                form.reset();

                // Get JWT token 
                const currentUser = {
                    email: user.email
                }

                fetch('http://localhost:5000/jwt', {
                    method: 'POST',
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        localStorage.setItem('token', data.token);
                        navigate(from, { replace: true })
                    })
                    .catch(err => console.error(err))

            })
            .catch(error => console.error(error))
    }

    return (
        <div className='py-12 bg-base-200 px-2'>

            <Helmet>
                <title>
                    Log In - Mr. Photographer
                </title>
            </Helmet>
            <form onSubmit={handleLogIn} className="form-control w-full sm:w-3/5 mx-auto bg-base-100 rounded-lg p-8 py-16 flex justify-center items-center shadow-lg">
                <h1 className='font-semibold text-2xl'>Please Log In</h1>
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

                <button type="submit" className='btn btn-outline my-4'>Log In</button>
                <p>Do not have account? <Link className='link' to='/register'>Register here</Link></p>
                <ThirdPartyAuth></ThirdPartyAuth>
            </form>
        </div>
    );
};

export default LogIn;