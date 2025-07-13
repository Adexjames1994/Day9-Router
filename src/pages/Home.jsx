import React from 'react'

const Home = () => {
  return (
   <section className='text-center space-y-4'>
    <h1 className='text-3xl font-bold'>Welcome to TheRealJegAde</h1>
    <p className='text-gray-600'>This is the homepage of my React project. Feel free to explore!</p>

    <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {/* Card 1 */}
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition">
          <h2 className="text-xl font-semibold mb-2"> Featured Project</h2>
          <p className="text-gray-600">
            A modern e-commerce website built with React, Tailwind CSS, and dummy API integration.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition">
          <h2 className="text-xl font-semibold mb-2"> Current Challenge</h2>
          <p className="text-gray-600">
            I'm currently on Day 9 of my #100DaysOfCode challenge. Building and learning React every day!
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition">
          <h2 className="text-xl font-semibold mb-2"> Skills & Stack</h2>
          <p className="text-gray-600">
            React, JavaScript, Tailwind CSS, Git, GitHub, API integration, and a bit of Node.js!
          </p>
        </div>
      </div>
   </section>
  )
}

export default Home
