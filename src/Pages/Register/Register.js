import { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import ThirdPartyAuth from '../../Components/ThirdPartyAuth/ThirdPartyAuth';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const Register = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';
    const { createUser, addProfile, loader } = useContext(AuthContext);

    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        createUser(email, password)
            .then(result => {
                const user = result.user;
                form.reset();

                //Add user photo and name
                addProfile(name, photoURL)
                    .then().catch(error => console.error(error));

                // Get JWT token 
                const currentUser = {
                    email: user.email
                }

                fetch('https://mr-photographer-server.vercel.app/jwt', {
                    method: 'POST',
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
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
                    Register - Mr. Photographer
                </title>
            </Helmet>
            <div className='flex justify-center'>
                {
                    loader ?
                        <progress className="progress w-56 my-40 mx-auto"></progress> :
                        <form onSubmit={handleRegister} className="form-control w-full sm:w-3/5 mx-auto bg-base-100 rounded-lg p-8 py-16 flex justify-center items-center shadow-lg">
                            <h1 className='font-semibold text-2xl'>Register here</h1>
                            <div className='my-5'>
                                <label className="input-group">
                                    <span className='px-8'>Name</span>
                                    <input name='name' type="text" placeholder="Your Name" className="input input-bordered" required />
                                </label>
                            </div>
                            <div className='my-5'>
                                <label className="input-group">
                                    <span className='px-8'>Photo</span>
                                    <input name='photo' type="text" placeholder="Photo Url" className="input input-bordered" required />
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
                }
            </div>
        </div>
    );
};

export default Register;