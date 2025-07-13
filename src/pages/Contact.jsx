import React from 'react'

const Contact = () => {
  return (
    <section className='max-w-md mx-auto space-y-4 '>
      <h1 className='text-2xl font-bold text-center'>Contact Me</h1>
      <input type="text" placeholder='Your Name' className='w-full p-2 border rounded' />
      <input type="email" placeholder='Your Email' className='w-full p-2 border rounded' />
      <textarea type="text" placeholder='Your Message' className='w-full p-2 border rounded h-32' />
      <button type='submit' className='bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition'>Send Message</button>
    </section>
  )
}

export default Contact
