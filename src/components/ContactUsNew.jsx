import React from 'react'
import { motion } from "framer-motion";
import { contact } from '@/constants';
import { PinContainer } from './ui/3d-pin';

const ContactUsNew = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center px-[4%] md:px-[5%] lg:px-[10%]" id="contactnew"> 
        <motion.h2
        initial={{opacity:0,y:50}}
        whileInView={{opacity:1, y:0,  
        transition: {
            duration: 2 
        }}} 
        className="text-4xl text-white sm:text-5xl font-poppins text-center mt-10 lg:mt-20">
            Contact Us
        </motion.h2>
        <div className='flex flex-wrap items-center justify-center p-4 w-full gap-10'>
            {contact.map(({ id, name, position, img, link, mail}) => (
                <div key={id} className='sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem] flex items-center justify-center sm:w-[570px] w-[100vw]'>
                    <PinContainer title={link} href={link} className='w-[300px] sm:w-[450px] flex flex-col justify-center items-center px-4'>
                        <div className='flex items-center justify-center sm:w-[250px] w-[200px] overflow-hidden h-[200px] sm:h-[250px] mt-8 mb-5 rounded-full'>
                            <img src={img} alt={name} className='rounded-full' />
                        </div>
                        <h1 className='font-bold lg:text-2xl md:text-xl text-base line-clamp-1 w-full'>
                            {name}
                        </h1>

                        <p className='lg:text-xl lg:font-normal font-light w-full text-sm line-clamp-2'>
                            {position}
                        </p>
                        <p className="text-neutral-200 text-sm md:text-base w-full mt-2 dark:text-neutral-300">
                            Department of Computer Science & Engineering, University of Moratuwa
                        </p>
                        <p className="text-neutral-200 text-sm md:text-base w-full mt-2 dark:text-neutral-300">
                            {mail}
                        </p>
                    </PinContainer>
                </div>
            ))}
        </div>
    </div>
  )
}

export default ContactUsNew
