"use client"
import React from 'react'

const handleEmailClick = () => {
  const email = 'wasiuddinbhuyian71@gmail.com';
  const subject = 'Emailing to Wasi Uddin Bhuyian';
  const body = 'Assalamu alaikum, Hope you are doing well.';

  const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  window.location.href = mailtoLink;
};

const Contact = () => {
  return (
    <div id='contact' className='w-full lg:h-screen'>
      <div className='max-w-[1240px] m-auto px-2 py-16 w-full'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Contact</p>
        <h2 className='py-4'>Get In Touch</h2>
        <div>
        <a className='cursor-pointer' onClick={handleEmailClick}>
                  <p className='text-[#5196e5]'> Click here to Send an Email To Me: </p>
            </a>
        </div>
      </div>
      <h2 className='ml-16'>THANK YOU!</h2>
    </div>
  )
}

export default Contact
