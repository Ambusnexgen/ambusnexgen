import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { heroData } from '../utils/data.tsx';

const Hero: React.FC = () => {
    return (
        <section className='bg-white'>
            <Swiper spaceBetween={30} centeredSlides={true} autoplay={{ delay: 2500, disableOnInteraction: false }} pagination={{ clickable: true }} modules={[Autoplay, Pagination, Navigation]} className="mySwiper">
                {heroData.map((element) =>(
                    <SwiperSlide key={element.id}>
                        <div className="relative h-[200px] sm:h-[400px] md:h-[460px] lg:h-[600px] flex items-end bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${element.img})` }}>
                            <div className="sm:absolute inset-0 bg-black opacity-40"></div>
                            <span className="hidden sm:block relative z-20 px-5 sm:pb-16 text-sm text-white sm:px-10 lg:pb-28 font-playfair sm:text-[26px] lg:text-4xl font-bold">
                                {element.desc}
                            </span>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    )
}

export default Hero