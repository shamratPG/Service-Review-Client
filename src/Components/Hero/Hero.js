import React from 'react';

const Hero = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url("https://i.ibb.co/MkZn4xS/alif-ngoylung-jg-6-ARMia-PM-unsplash.jpg")` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Welcome</h1>
                    <p className="mb-5 text-gray-300"> I'm a full-time photographer with a studio that's equipped with the necessary specialized equipment to properly handle your photography.</p>
                    <button className="btn btn-outline font-bold text-gray-400">Contact me</button>
                </div>
            </div>
        </div>
    );
};

export default Hero;