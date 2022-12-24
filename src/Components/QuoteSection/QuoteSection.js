import React from 'react';

const QuoteSection = () => {

    const image = 'https://i.ibb.co/VYn98kP/matt-roskovec-f-B3-u-W-TUcs-unsplash.jpg';

    const styles = {
        backgroundImage: `url(${image})`,
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
    };
    return (
        <div className='' style={styles}>
            <div className=' h-80 flex justify-center items-center bg-gray-600 opacity-75'>

                <div className='text-2xl text-center w-1/2 text-white'>
                    <p>
                        " Creativity is seeing what others see and thinking what no one else ever thought. "
                    </p>
                    <br></br>
                    <p className='mt-2'>
                        Albert Einstein
                    </p>
                </div>
            </div>
        </div>
    );
};

export default QuoteSection;