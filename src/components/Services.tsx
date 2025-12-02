import React, { useState } from 'react'
import { servicesData } from '../utils/data'
import { ChevronRight } from 'lucide-react'

const Services: React.FC = () => {
    const [flippedCards, setFlippedCards] = useState<Set<number>>(new Set())

    const handleCardClick = (id: number) =>{
        setFlippedCards(prev => {
            const newSet = new Set(prev)
            if(newSet.has(id)){
                newSet.delete(id)
            } 
            else{
                newSet.add(id)
            }
            return newSet
        })
    }

    return (
        <section id='services' className='pb-20 px-5 mx-auto max-w-[1440px] relative overflow-hidden'>
            {/* Header Section */}
            <div className='text-center mb-16'>
                {/* Title */}
                <h2 className='text-4xl md:text-5xl font-bold text-[#198CC6] mb-4'>OUR SERVICES</h2>
                <div className='w-36 h-1 bg-[#198CC6] mx-auto mb-8 skew-2'></div>
                
                {/* Descriptive Text */}
                <div className='max-w-4xl mx-auto'>
                    <p className='text-black text-lg md:text-xl leading-relaxed font-semibold'>
                        Ambus NexGen delivers end-to-end digital, creative, and business solutions under one roof. <br />
                        From technology to AI, design to marketing — we bring your ideas to life.
                    </p>
                </div>
            </div>
            
            {/* Services Content */}
            <div className='flex flex-wrap sm:flex-row flex-col justify-center items-center gap-5 sm:gap-10'>
                {servicesData.map((service) => {
                    const isFlipped = flippedCards.has(service.id)
                    return (
                        <div key={service.id} className='flip-card-container sm:w-[440px] w-full relative h-72 cursor-pointer' onClick={() => handleCardClick(service.id)}>
                            <div className={`flip-card-inner relative w-full h-full ${isFlipped ? 'flipped' : ''}`}>
                                {/* Front of Card */}
                                <div className={`flip-card-front absolute inset-0 ${service.bgColor} rounded-lg p-6 flex flex-col items-center justify-center shadow-lg`}>
                                    <h3 className={`text-2xl font-bold mb-2 ${service.textColor} uppercase text-center`}>
                                        {service.title}
                                    </h3>
                                    <p className={`${service.textColor === 'text-black' ? 'text-black' : 'text-white'} font-medium text-center leading-relaxed`}>
                                        {service.description}
                                    </p>
                                    <div className={`w-10 h-10 rounded-full flex items-center justify-center mt-6 ${service.textColor === 'text-black' ? 'bg-black' : 'bg-white'}`}>
                                        <ChevronRight className={`w-5 h-5 ${service.textColor === 'text-black' ? 'text-white' : 'text-black'}`} />
                                    </div>
                                </div>

                                {/* Back of Card */}
                                <div className={`flip-card-back absolute inset-0 ${service.bgColor} rounded-lg p-6 overflow-y-auto hide-scrollbar shadow-lg`}>
                                    <div className='flex items-center justify-between'>
                                        <h3 className={`text-xl font-bold ${service.textColor} uppercase`}>
                                            {service.title}
                                        </h3>
                                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${service.textColor === 'text-black' ? 'bg-black' : 'bg-white'}`}>
                                            <ChevronRight className={`w-5 h-5 rotate-180 ${service.textColor === 'text-black' ? 'text-white' : 'text-black'}`} />
                                        </div>
                                    </div>
                                    <div className='grid grid-cols-2 gap-x-3'>
                                        {service.services.map((item) => (
                                            <div key={item.id} className={`flex items-center gap-3 p-3 rounded-lg `}>
                                                <div className={`${service.textColor === 'text-black' ? 'text-black' : 'text-white'}`}>
                                                    {item.icon}
                                                </div>
                                                <span className={`${service.textColor === 'text-black' ? 'text-black' : 'text-white'} text-sm font-medium`}>
                                                    {item.name}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Services