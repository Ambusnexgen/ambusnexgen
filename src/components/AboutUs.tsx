import React from 'react'
import { aboutData } from '../utils/data'

const AboutUs: React.FC = () => {
    return (
        <section id='about-us' className='sm:py-20 py-10 max-w-[1440px] mx-auto px-5'>
            {/* Header Section */}
            <div className='text-center mb-8'>
                <h2 className='text-center text-4xl font-bold text-black mb-3'>ABOUT US</h2>
                <div className='w-24 h-1 bg-black mx-auto skew-1'></div>
            </div>

            {/* Description Section */}
            <p className='text-center font-semibold sm:px-20 px-2 text-gray-600 sm:text-lg'>AmbusNexGen isn’t just a company - it’s a vision of hope, growth, and transformation. We empower startups with strategy, students with skill, and companies with technology. From digital services to future-driven products, AmbusNexGen is the bridge between dreams and success - trusted by all, built for everyone.</p>
            
            {/* About Us Section */}
            <div className='sm:mt-16 mt-10 sm:space-y-8'>
                {aboutData.map((item, index) => {
                    const isEven = index % 2 === 1;
                    
                    return (
                        <div key={item.id} className={`flex flex-col sm:flex-row items-center sm:gap-10 p-3 sm:p-8`}>
                            <div className={`flex flex-col sm:flex-row items-center gap-4 sm:gap-6 sm:w-[35%] ${isEven ? 'lg:order-3' : 'lg:order-1'}`}>
                                <img src={item.image} alt={item.title} className='w-full sm:max-w-[300px] max-w-[200px] h-auto object-contain' />
                            </div>
                            
                            {/* Content */}
                            <div className={`text-base sm:text-lg text-justify font-medium flex-1 text-gray-700 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                                <h3 className={`text-2xl sm:text-3xl font-bold text-black text-center sm:text-left mb-4`}>{item.title}</h3>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    )
}

export default AboutUs