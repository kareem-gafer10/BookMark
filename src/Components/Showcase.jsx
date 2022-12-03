import React from 'react'
import hero from "../images/illustration-hero.svg";

const Showcase = () => {
  return (
   <>
        <section className=' flex flex-col-reverse py-20 px-8 lg:grid lg:grid-cols-2 lg:gap-16 lg:place-items-center max-w-7xl mx-auto'
        data-aos="fade-left"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine"
     >
         


           <div className='text-center lg:text-left' >
             <h1 className='text-4xl my-8 lg:text-6xl'>A Simple Bookmark Manager</h1>
             <p className=' text-slate-400'>A clean and simple interface to organize your favourite websites. Open a new 
             browser tab and see your sites load instantly. Try it for free.</p>
             <ul className='mt-10 flex items-center justify-center flex-wrap gap-4 lg:justify-start '>
               <li>
               <button className=' btn-blue  text-white px-4 py-3 rounded shadow-lg hover:opacity-75'>Get it on Chrome</button>
               </li>
               <li>
               <button className='bg-slate-100 text-slate-500 font-semibold px-4 py-3
                rounded shadow-lg hover:opacity-75'>Get it on Firefox</button>
               </li>
             </ul>
           </div>

           <div className=' relative'>
           <img src={hero} alt="hero" className='w-full' />

             <div className="bg"></div>
           </div>
 
         </section>
   </>
  )
}

export default Showcase;
