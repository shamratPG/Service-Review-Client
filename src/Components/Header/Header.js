import React, { useContext } from 'react';
import { FaCameraRetro } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const Header = () => {


    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(result => {

            })
            .catch(err => console.error(err
            ))
    }

    return (
        <div className="navbar bg-neutral text-neutral-content rounded">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-gray-800 rounded-box w-52">

                        {/* Dropdown Menu  */}
                        <li><Link to={'/'}>Home</Link></li>
                        <li><Link to={'/services'}>Services</Link></li>

                        {
                            user?.email && <li><Link to={'/addService'}>Add Service</Link></li>


                        }
                        {
                            user?.email &&
                            <li><Link to={'/myReviews'}>My Review</Link></li>
                        }

                        <li><Link to={'/blogs'}>Blogs</Link></li>

                        {/* Dropdown Menu  */}


                    </ul>
                </div>
                <Link className="btn btn-ghost normal-case text-xl">
                    <FaCameraRetro className='pr-2 text-3xl'></FaCameraRetro>
                    Mr. Photographer
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">

                    {/* Full Menu  */}

                    <li><Link to={'/'}>Home</Link></li>
                    <li><Link to={'/services'}>Services</Link></li>

                    {
                        user?.email && <li><Link to={'/addService'}>Add Service</Link></li>


                    }
                    {
                        user?.email &&
                        <li><Link to={'/myReviews'}>My Review</Link></li>
                    }

                    <li><Link to={'/blogs'}>Blogs</Link></li>

                    {/* Full Menu  */}

                </ul>
            </div>
            <div className="navbar-end">

                {
                    user?.email ?
                        <Link onClick={handleLogOut} className="btn" >Log out</Link> :
                        <Link className="btn" to="/logIn">Log In</Link>
                }
            </div>
        </div>
    );
};

export default Header;