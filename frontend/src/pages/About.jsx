import React from 'react';
import loginb from './images.jpeg';

const About = () => {
  return (
    <div className='bg-black text-white'>
      <header className='flex justify-center text-2xl py-5'>
        <p>About Us</p>
      </header>
      <main>
        <section className='flex flex-wrap justify-evenly gap-4 p-5'>
          <div className='w-full sm:w-96'>
            <img className='h-[20rem] w-full object-cover' src={loginb} alt="Login page illustration" />
          </div>
          <div className='w-full sm:w-96 pt-10'>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce euismod risus ut lorem euismod, nec volutpat felis gravida. <b>Curabitur venenatis orci at sapien suscipit vehicula.</b>
            </p>
          </div>
        </section>

        <section className='py-5 '>
          <h1 className="text-center text-xl py-4">Why Choose Us?</h1>
          <div className='flex flex-wrap  border-2 justify-center sm:justify-between gap-4'>
            <div className='flex flex-col border-2 p-6 w-full sm:w-[26.4rem] '>
              <b>Quality Assurance</b>
              <p className='pt-5'>
                We ensure the highest standards of quality and commitment to excellence. We focus on delivering top-quality products and services to all our customers.
              </p>
            </div>
            <div className='flex flex-col border-2 p-6 w-full sm:w-[26.4rem]'>
              <b>Customer Satisfaction</b>
              <p className='pt-5'>
                Our customer support is always available, ensuring that your experience is seamless and enjoyable. We value each customer and aim to exceed their expectations.
              </p>
            </div>
            <div className='flex flex-col border-2 p-6 w-full sm:w-[26.4rem]'>
              <b>Innovation</b>
              <p className='pt-5'>
                We continuously strive to improve our offerings, staying ahead of industry trends. Innovation is key to our business model, helping us remain competitive.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default About;
