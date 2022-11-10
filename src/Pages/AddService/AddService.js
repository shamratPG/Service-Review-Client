import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddService = () => {

    const notify = () => toast("Successfully added service")
    const addService = event => {
        event.preventDefault();
        const form = event.target;
        const serviceName = form.serviceName.value;
        const image = form.image.value;
        const ratings = form.ratings.value;
        const price = form.price.value;
        const description = form.description.value;
        const newService = { serviceName, ratings, price, description, image };
        // console.log(newService);

        fetch('https://mr-photographer-server.vercel.app/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify(newService)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                notify();
                form.reset()
            })
            .catch(error => console.error(error))
    }


    return (
        <div>
            <Helmet>
                <title>
                    Add Service - Mr. Photographer
                </title>
            </Helmet>
            <h2 className='text-3xl mt-12 text-center'>Add Service</h2>
            <form onSubmit={addService} className='form-control w-full h-auto flex justify-center items-center my-8'>
                <div className='grid grid-cols-2 gap-6'>

                    {/* Name of The Services  */}

                    <div className="col-span-1">
                        <label className="label">
                            <span className="label-text">Name of The Service</span>
                        </label>
                        <input type="text" placeholder="Service Name" className="input input-bordered w-full max-w-xs" name="serviceName" required />
                    </div>

                    {/* Image */}

                    <div className="col-span-1">
                        <label className="label">
                            <span className="label-text">Image URL</span>
                        </label>
                        <input type="text" placeholder="Image URL" className="input input-bordered w-full max-w-xs" name="image" required />
                    </div>

                    {/* Rating  */}

                    <div className="col-span-1">
                        <label className="label">
                            <span className="label-text">Ratings</span>
                        </label>
                        <input type="number" placeholder="Ratings Out of five" className="input input-bordered w-full max-w-xs" name="ratings" min="1" max="5" required />
                    </div>

                    {/* Price */}

                    <div className="col-span-1">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="number" placeholder="$Price" className="input input-bordered w-full max-w-xs" name="price" required />
                    </div>

                    {/* Description */}

                    <div className="col-span-2">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <textarea className="textarea textarea-bordered h-24 w-full" placeholder="Start writing..." name='description' required></textarea>
                    </div>
                </div>
                <div className='my-4'>
                    <button className='btn btn-outline'> Add Service</button>
                    <ToastContainer
                        position="top-center"
                        autoClose={5000}
                        hideProgressBar={true}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss={false}
                        draggable
                        pauseOnHover={false}
                        theme="dark"
                    />
                </div>

            </form>
        </div>
    );
};

export default AddService;