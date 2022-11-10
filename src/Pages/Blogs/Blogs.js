import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import BlogItem from '../../Components/BlogItem/BlogItem';

const Blogs = () => {

    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        fetch('https://mr-photographer-server-shamratpg.vercel.app/blogs')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])




    return (
        <div>
            <Helmet>
                <title>
                    Blogs- Mr. Photographer
                </title>
            </Helmet>
            <h1 className='text-4xl font-semibold text-center mt-12'>Blogs</h1>
            {
                blogs.map(blog => <BlogItem key={blog._id} blog={blog}></BlogItem>)
            }
        </div>
    );
};

export default Blogs;