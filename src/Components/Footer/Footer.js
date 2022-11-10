import React from 'react';
import { FaFacebook, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer footer-center p-10 bg-neutral text-neutral-content rounded">
            <div className='flex justify-around w-2/3'>
                <div className="grid grid-flow-col gap-4">
                    <Link><FaFacebook className='text-3xl '></FaFacebook></Link>
                    <Link><FaYoutube className='text-3xl '></FaYoutube></Link>
                </div>
                <div>
                    <p>Copyright © 2022 - Md. Shamrat Hossain</p>
                </div>
            </div>

        </footer>
    );
};

export default Footer;