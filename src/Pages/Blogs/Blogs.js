import React, { useEffect, useState } from 'react';
import BlogItem from '../../Components/BlogItem/BlogItem';

const Blogs = () => {

    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/blogs')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])




    return (
        <div>
            <h1 className='text-4xl font-semibold text-center mt-12'>Blogs</h1>
            {
                blogs.map(blog => <BlogItem key={blog._id} blog={blog}></BlogItem>)
            }
        </div>
    );
};

export default Blogs;