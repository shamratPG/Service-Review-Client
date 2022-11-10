import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const ThirdPartyAuth = () => {

    const { providerLogin } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const githubProvider = new GithubAuthProvider()

    const googleProvider = new GoogleAuthProvider();

    const handleSignIn = provider => {
        providerLogin(provider)
            .then(result => {
                const user = result.user;

                // Get JWT token 
                const currentUser = {
                    email: user.email
                }

                fetch('https://mr-photographer-server-shamratpg.vercel.app/jwt', {
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

            }).catch(error => console.log(error))
    }

    return (
        <div className='flex flex-col justify-around'>
            <Link className='btn btn-outline my-4' onClick={() => handleSignIn(googleProvider)}>
                <FaGoogle className='text-4xl pr-2'></FaGoogle>
                Log In with Google
            </Link>

            <Link className='btn btn-outline' onClick={() => handleSignIn(githubProvider)}>
                <FaGithub className='text-4xl pr-2'></FaGithub>
                Log In with Github
            </Link>
        </div>
    );
};

export default ThirdPartyAuth;