import React from 'react'

const Appointment = () => {
  return(

    <div className='bg-accent w-full p-8 rounded-sm max-w-[22rem] md:max-w-md mx-auto'>
    
      <h3 className='text-white text-[18px] font-bold tracking-[0.2px] text-center'>
        Randevu Al</h3>

        <div className='w-[54px] h-[3px] bg-white my-6 mx-auto'></div>

      {/*input*/ }  

      <div className='space-y-[24px]'>
        <input className='form-control'
        placeholder='İsim Soyisim' type='text'/>
        <input className='form-control'
        placeholder='Telefon Numarası' type='text'/>
        <input className='form-control'
        placeholder='Email Adresi' type='email'/>

        <textarea className='resize-none w-full h-[132px] 
        outline-none rounded-sm p-4 font-body text-sm text-gray focus:ring-1 focus:ring-primary '
        placeholder='Mesajınız'
        ></textarea> 

        <button className='btn bg-primary
        hover:bg-primary-hover transition-all'>Mesaj Gönder</button>


      </div> 
    </div>



  ) ;
    
  
}

export default Appointment;
