import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { heroData } from '../utils/data.tsx';

const Hero: React.FC = () => {

    const smoothScrollTo = (targetPosition: number, duration: number = 800) => {
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;
        let startTime: number | null = null;

        const easeInOutCubic = (t: number): number => {
            return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
        };

        const animation = (currentTime: number) => {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const progress = Math.min(timeElapsed / duration, 1);
            const ease = easeInOutCubic(progress);

            window.scrollTo(0, startPosition + distance * ease);

            if (timeElapsed < duration) {
                requestAnimationFrame(animation);
            }
        };

        requestAnimationFrame(animation);
    };

    const handleBannerClick = (heroId: number) => {
        if (heroId) {
            const serviceCard = document.getElementById(`service-card-${heroId}`);
            if (serviceCard) {
                const header = document.querySelector('header');
                const headerHeight = header ? header.offsetHeight : 80;
                const elementPosition = serviceCard.getBoundingClientRect().top + window.pageYOffset;
                const offsetPosition = elementPosition - headerHeight - 40;
                
                smoothScrollTo(offsetPosition, 800);
            }
        }
    };

    return (
        <section className='bg-white'>
            <Swiper spaceBetween={30} centeredSlides={true} autoplay={{ delay: 2500, disableOnInteraction: false }} pagination={{ clickable: true }} modules={[Autoplay, Pagination, Navigation]} className="mySwiper">
                {heroData.map((element) =>(
                    <SwiperSlide key={element.id}>
                        <div className="relative h-[250px] sm:h-[400px] md:h-[460px] lg:h-[600px] flex items-end bg-cover bg-center bg-no-repeat cursor-pointer" style={{ backgroundImage: `url(${element.img})` }} onClick={() => handleBannerClick(element.id)}>
                            <div className="sm:absolute inset-0 bg-black opacity-40"></div>
                            <div className='space-y-1 sm:space-y-3 relative z-20 px-5 pb-8 sm:pb-16 text-white sm:px-10 lg:pb-24'>
                                <h2 className="text-2xl sm:text-7xl font-bold">
                                    {element.title}
                                </h2>
                                <p className="text-sm sm:text-2xl font-medium">
                                    {element.description}
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    )
}

export default Hero