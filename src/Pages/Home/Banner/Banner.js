import React from 'react';
import Tada from 'react-reveal/Tada';

const Banner = () => {
    return (
        <div className='text-center'>
          <h1 className='mt-5 mb-4'><u>Welcome to Manage all our Vehicles</u></h1>
          <Tada>
            <img className='w-50 mb-5' src="https://i.ibb.co/kJ8yW1n/17876756.jpg" alt="" />
          </Tada>
        </div>
      );
};

export default Banner;