import React from 'react'

import Header from './Header'
import Appointment from './Appointment'

import LawyerImage from '../assets/img/volkan.png'

const Banner = () => {
  return (
    <section id='home' className='lg:h-full lg:max-h-800 bg-gradient-to-t from-[#f8f3ec] to-[#e0c8ac]'>
      <Header />
      <div className="container mx-auto flex h-full lg:flex pt-32">
        {/* Left side */}
        <div className='text-center mx-auto h-full lg:text-left px-8 md:p-0'>
        <h1 className='font-primary font-black text-4xl lg:text-7xl
        text-primary mb-4 lg:mt-[70px] leading-tight lg:leading-[90px]'>
            Senin Sorunun <br /> <span className='text-accent'> Bizim Davamız</span>  </h1>

            <p className='max-w-sm mx-auto mb-[50px] lg:mx-0 lg:max-w-[540px]'>
            "Adalet, sadece bir hak değil, aynı zamanda bir mücadeledir. Haklarınızı en güçlü şekilde savunmak ve size en iyi hukuki desteği sunmak için buradayız. Güven, tecrübe ve kararlılıkla yanınızdayız!"
            </p>

            {/* Appointment component */}

            <div className='lg:absolute mx:auto max-w [445px] lg:mx-0'>
            <Appointment />

            </div>
        </div>

        {/* Right side */}
        <div className='hidden flex-1 lg:flex lg:flex-col items-end relative lg:absolute lg:top-[-50px] lg:right-20'>
          <img src={LawyerImage} alt='' className='w-[400px] h-[565px] object-cover' />
        </div>
       </div>
      
    </section>
    );
  
};

export default Banner;
