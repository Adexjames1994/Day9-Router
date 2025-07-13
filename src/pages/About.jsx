import React from 'react'

const About = () => {
  return (
    <section className='max-w-4xl mx-auto px-4 py-10 md:flex-row items-center gap-8'>
      <img src="https://res.cloudinary.com/dgp5aqkov/image/upload/v1752322426/ade111_yx5bqc.jpg" alt="Jegede adeola" className='w-48 h-48 object-cover rounded-full border-4 border-blue-600 shadow-md'/>

      <div className='text-center md:text-left space-y-4'>
        <h1 className='text-3xl font-bold text-blue-700'>I'm Jegede Adeola James</h1>
        <p className='text-gray-600'> A frontend developer based in Abeokuta, Nigeria 🇳🇬. I specialize in building responsive websites using React, Tailwind CSS, and modern tools. I'm currently on a 100 Days of Code challenge — learning and sharing every day!</p>
        <p className='text-sm text-gray-500'>Let’s build something amazing together</p>
      </div>

    </section>
  )
}

export default About
