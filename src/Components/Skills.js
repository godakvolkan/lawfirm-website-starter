import React from 'react'

import { skills } from '../data'

const Skills = () => {
  return (
    <section id='skills' className='section bg-[#f9f9f9] pb-32'>

        <div className="container mx-auto text-center">
            <h2 className='text-5xl font-primary font-extrabold mb-4'> Biz Ne Yapıyoruz</h2>
            <p className='max-w-[640px] mx-auto px-6 lg:px-0 mb-[50px] '>
            Hukuk, yalnızca yasaların yazılı olduğu metinlerden ibaret değildir; aynı zamanda hakların korunması, adaletin sağlanması ve bireylerin en doğru şekilde yönlendirilmesi sürecidir. Biz, hukukun temel ilkelerine bağlı kalarak müvekkillerimize en iyi hizmeti sunmayı amaçlayan bir hukuk bürosuyuz.
            </p>

            {/* skills */}
            <div className='lg:grid lg:grid-cols-3 gap-12'>
                {skills.map((item, index) =>{
                    const {icon, title, description} = item;
                    return <div className='flex flex-col items-center justify-center mb-16
                    last:mb-0 lg:mb-0'>

                        <img className='mb-6' src={icon} alt=''/>
                        <h4 className='text-2xl mb-2 font-primary font-bold'>{title}</h4>

                        <p className='max-w-[332px] lg:max-w-[350px]'>{description}</p>
                    </div>

                 
                
            })}
            </div>
            

            
         </div> 
      
    </section>
  );
};

export default Skills
