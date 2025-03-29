import React from 'react';
import { social } from '../data';

const Contact = () => {
    return (
        <section id='contact' className='bg-primary text-white min-h-[732px] section'>
            <div className='container mx-auto text-center'>
                <h2 className='text-5xl font-primary font-extrabold mb-4'>
                    Bizimle İletişime Geçin
                </h2>
                <p className='max-w-[540px] mx-auto px-6 lg:px-0 mb-[64px]'>
                    Sizlere en iyi hizmeti sunabilmemiz için bizimle iletişime geçebilirsiniz.
                </p>   

                {/* Contact form */}
                <form className='px-8 lg:px-0 max-w-[600px] mx-auto flex flex-col space-y-6 mb-[46px]'>
                    <input className='form-control' placeholder='Ad SoyAd' type='text' />  
                    <input className='form-control' placeholder='Email Adresiniz' type='email' />
                    <textarea className='textarea' placeholder='Mesaj'></textarea>
                    <button className='btn bg-accent hover:bg-accent-hover transition-all'>
                        Gönder
                    </button>           
                </form> 
                
                {/* Social Media Icons */}
                <div className='flex items-center justify-center space-x-4 text-2xl'>
                    {social.map((item, index) => (
                        <a href={item.url} key={index} target='_blank' rel='noopener noreferrer' className='hover:text-accent transition-all'>
                            {item.icon}
                        </a>
                    ))}
                </div>
            </div>  
        </section>
    );
};

export default Contact;
