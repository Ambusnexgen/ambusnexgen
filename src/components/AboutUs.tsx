import React from 'react'
import { aboutData } from '../utils/data'

const AboutUs: React.FC = () => {
    return (
        <section id='about-us' className='py-20 max-w-[1440px] mx-auto px-5'>

            {/* Header Section */}
            <div className='text-center mb-8'>
                <h2 className='text-center text-4xl font-bold text-black mb-4'>ABOUT US</h2>
                <div className='w-24 h-1 bg-black mx-auto skew-2'></div>
            </div>

            {/* Description Section */}
            <p className='text-center font-semibold sm:px-20 px-2 text-gray-600 sm:text-lg'>Ambus NexGen isn’t just a company - it’s a vision of hope, growth, and transformation. We empower startups with strategy, students with skill, and companies with technology. From digital services to future-driven products, Ambus NexGen is the bridge between dreams and success - trusted by all, built for everyone.</p>
            
            {/* About Us Section */}
            <div className='grid grid-cols-1 sm:grid-cols-3 gap-10 sm:mt-16 mt-10'>
                {aboutData.map((item) => (
                    <div key={item.id} className={`flex flex-col items-center justify-center rounded-lg shadow-md p-6 ${item.bgColor}`}>
                        <img src={item.img} alt={item.title} className='object-cover rounded-lg mb-4' />
                        <h3 className={`text-2xl font-bold mb-2 ${item.textColor}`}>{item.title}</h3>
                        <p className={`text-lg text-justify ${item.textColor}`}>{item.description}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default AboutUs