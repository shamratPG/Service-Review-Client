import React from 'react';
import Contact from '../../Components/Contact/Contact';
import Hero from '../../Components/Hero/Hero';
import QuoteSection from '../../Components/QuoteSection/QuoteSection';
import ServiceSection from '../../Components/ServiceSection/ServiceSection';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <ServiceSection></ServiceSection>
            <QuoteSection></QuoteSection>
            <Contact></Contact>
        </div>
    );
};

export default Home;