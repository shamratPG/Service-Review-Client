import React from 'react';

const BlogItem = ({ blog }) => {
    const { title, description } = blog;
    return (
        <div className="card max-w-xl bg-base-100 shadow-xl mx-auto my-8">
            <div className="card-body">
                <h2 className="text-2xl font-semibold text-center">{title}</h2>
                <p className='text-justify'>{description}</p>
            </div>
        </div>
    );
};

export default BlogItem;