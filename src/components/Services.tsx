import React, { useState } from 'react'
import { servicesData } from '../utils/data'
import { ChevronRight } from 'lucide-react'
import ServiceBoxes from './ServiceBoxes'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'

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
        <section id='services' className='pb-20 px-5 mx-auto max-w-[1440px] flex flex-col items-center justify-center relative'>
            {/* Header Section */}
            <div className='text-center mb-16'>
                {/* Title */}
                <h2 className='text-center text-4xl font-bold text-[#198CC6] mb-3'>OUR SERVICES</h2>
                <div className='w-24 h-1 bg-[#198CC6] mx-auto mb-8 skew-1'></div>
                
                {/* Descriptive Text */}
                <div className='max-w-4xl mx-auto'>
                    <p className='text-black text-lg md:text-xl leading-relaxed font-semibold'>
                        Ambus NexGen delivers end-to-end digital, creative, and business solutions under one roof. <br />
                        From technology to AI, design to marketing — we bring your ideas to life.
                    </p>
                </div>
            </div>
            
            {/* Services Content */}
            <div className='flex flex-col lg:flex-row justify-between w-full sm:w-[80%] gap-8 items-center'>
                {/* Service Cards */}
                <div className='flex flex-col gap-5 sm:gap-10 flex-1 max-w-[500px] w-full relative'>
                    {servicesData.map((service) => {
                        const isFlipped = flippedCards.has(service.id)
                        return (
                            <div key={service.id} className={`flip-card-container w-full relative h-72 cursor-pointer group ${isFlipped ? 'z-100' : 'z-10'}`} onClick={() => handleCardClick(service.id)}>
                                <div className={`flip-card-inner relative w-full h-full ${isFlipped ? 'flipped' : ''}`}>
                                    {/* Front of Card */}
                                    <div className={`flip-card-front absolute inset-0 ${service.bgColor} rounded-xl p-8 flex flex-col justify-between shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-white/20`}>
                                        {/* Top Section - Icon */}
                                        <div className='flex justify-between items-start'>
                                            <div className={`p-4 rounded-xl ${service.textColor === 'text-black' ? 'bg-black/10' : 'bg-white/20'} backdrop-blur-sm`}>
                                                {service.icon}
                                            </div>
                                            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${service.textColor === 'text-black' ? 'bg-black/20 hover:bg-black/30' : 'bg-white/20 hover:bg-white/30'} transition-colors duration-300`}>
                                                <ChevronRight className={`w-5 h-5 ${service.textColor === 'text-black' ? 'text-black' : 'text-white'} group-hover:translate-x-1 transition-transform duration-300`} />
                                            </div>
                                        </div>

                                        {/* Middle Section - Content */}
                                        <div className='flex-1 flex flex-col justify-center'>
                                            <h3 className={`text-2xl md:text-3xl font-bold mb-3 ${service.textColor} uppercase text-left`}>
                                                {service.title}
                                            </h3>
                                            <p className={`${service.textColor === 'text-black' ? 'text-gray-700' : 'text-gray-100'} text-sm md:text-base font-medium leading-relaxed text-left`}>
                                                {service.description}
                                            </p>
                                        </div>

                                        {/* Bottom Section - Click Hint */}
                                        <div className={`text-xs ${service.textColor === 'text-black' ? 'text-gray-600' : 'text-gray-300'} font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                                            Click to explore services →
                                        </div>
                                    </div>

                                    {/* Back of Card */}
                                    <div className={`flip-card-back h-full absolute inset-0 ${service.bgColor} rounded-xl overflow-hidden shadow-2xl border-2 border-transparent relative flex flex-col ${isFlipped ? 'z-50' : ''}`}>
                                        <div className={`absolute inset-0 opacity-5 ${service.textColor === 'text-black' ? 'bg-black' : 'bg-white'} bg-[radial-gradient(circle_at_2px_2px,currentColor_1px,transparent_0)] bg-size-[24px_24px]`}></div>

                                        <div className={`sticky top-0 z-10 ${service.textColor === 'text-black' ? 'bg-linear-gradient(to bottom, #00000000, #00000000) backdrop-blur-sm' : 'bg-linear-gradient(to bottom, #ffffff00, #ffffff00) backdrop-blur-sm'} pb-4 pt-6 px-6 border-b ${service.textColor === 'text-black' ? 'border-black/20' : 'border-white/20'} shrink-0`}>
                                            <div className='flex items-center justify-between'>
                                                <div className='flex items-center gap-4'>
                                                    <div className={`p-3 rounded-xl ${service.textColor === 'text-black' ? 'bg-black/20 shadow-lg' : 'bg-white/30 shadow-lg'} backdrop-blur-sm`}>
                                                        {service.icon}
                                                    </div>
                                                    <div>
                                                        <h3 className={`text-xl font-bold ${service.textColor} uppercase mb-1`}>
                                                            {service.title}
                                                        </h3>
                                                        <p className={`text-xs ${service.textColor === 'text-black' ? 'text-gray-600' : 'text-gray-300'} font-medium`}>
                                                            {service.services.length} Services Available
                                                        </p>
                                                    </div>
                                                </div>
                                                <button className={`w-10 h-10 rounded-full flex items-center justify-center ${service.textColor === 'text-black' ? 'bg-black/20 hover:bg-black/30 active:scale-95' : 'bg-white/20 hover:bg-white/30 active:scale-95'} transition-all duration-300 cursor-pointer shadow-md`}  onClick={(e) => { e.stopPropagation(); handleCardClick(service.id); }} aria-label="Close service details">
                                                    <ChevronRight className={`w-5 h-5 rotate-180 ${service.textColor === 'text-black' ? 'text-black' : 'text-white'}`} />
                                                </button>
                                            </div>
                                        </div>

                                        {/* Services Slider */}
                                        <div className='flex-1 min-h-0 pb-6 pt-4 px-6 relative' onClick={(e) => e.stopPropagation()}>
                                            <Swiper spaceBetween={30} centeredSlides={true} autoplay={{ delay: 2500, disableOnInteraction: false }} pagination={{ clickable: true }} modules={[Autoplay, Pagination, Navigation]} className="services-swiper h-full">
                                                {service.services.map((item) => (
                                                    <SwiperSlide key={item.id}>
                                                        <div className={`flex items-center mt-2 justify-center p-4 rounded-xl ${service.textColor === 'text-black' ? 'bg-white/40 hover:bg-white/60' : 'bg-white/10 hover:bg-white/20'} backdrop-blur-sm transition-all duration-300 border ${service.textColor === 'text-black' ? 'border-black/10' : 'border-white/20'}`}>
                                                            <div className='flex items-center gap-4 text-center w-full'>
                                                                {/* Icon Container */}
                                                                <div className={`p-4 rounded-xl ${service.textColor === 'text-black' ? 'bg-black/10' : 'bg-white/20'} transition-all duration-300`}>
                                                                    <div className={`${service.textColor === 'text-black' ? 'text-black' : 'text-white'}`}>
                                                                        {item.icon}
                                                                    </div>
                                                                </div>
                                                                
                                                                {/* Service Name */}
                                                                <span className={`${service.textColor === 'text-black' ? 'text-gray-900' : 'text-white'} text-base font-semibold leading-tight`}>
                                                                    {item.name}
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </SwiperSlide>
                                                ))}
                                            </Swiper>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>

                {/* ServiceBoxes - Right Side */}
                <div className='flex-1 lg:flex-none lg:w-[400px] flex items-center justify-center rounded-lg p-8 pb-0 lg:sticky lg:top-8'>
                    <ServiceBoxes />
                </div>
            </div>
        </section>
    )
}

export default Services