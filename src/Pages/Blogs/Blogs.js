import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import BlogItem from '../../Components/BlogItem/BlogItem';

const Blogs = () => {

    const [loading, setLoading] = useState(true)
    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        fetch('https://mr-photographer-server.vercel.app/blogs')
            .then(res => res.json())
            .then(data => {
                setLoading(false);
                setBlogs(data);
            })
    }, [])




    return (
        <div>
            <Helmet>
                <title>
                    Blogs- Mr. Photographer
                </title>
            </Helmet>
            <h1 className='text-4xl font-semibold text-center mt-12'>Blogs</h1>
            <div className='flex justify-center'>
                {
                    loading ?
                        <progress className="progress w-56 my-40 mx-auto"></progress> :
                        <div>
                            {
                                blogs.map(blog => <BlogItem key={blog._id} blog={blog}></BlogItem>)
                            }
                        </div>

                }
            </div>

        </div>
    );
};

export default Blogs;