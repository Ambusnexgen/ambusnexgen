import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { navData } from '../utils/data.tsx'
import { Menu, X } from 'lucide-react'

const Header: React.FC = () => {

    const [openSidebar, setOpenSidebar] = useState(false)

    const smoothScrollTo = (targetPosition: number, duration: number = 800) => {
        const startPosition = window.pageYOffset
        const distance = targetPosition - startPosition
        let startTime: number | null = null

        const easeInOutCubic = (t: number): number => {
            return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1
        }

        const animation = (currentTime: number) => {
            if (startTime === null) startTime = currentTime
            const timeElapsed = currentTime - startTime
            const progress = Math.min(timeElapsed / duration, 1)
            const ease = easeInOutCubic(progress)

            window.scrollTo(0, startPosition + distance * ease)

            if (timeElapsed < duration) {
                requestAnimationFrame(animation)
            }
        }

        requestAnimationFrame(animation)
    }

    const handleNavClick = (href: string, e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault()
        const wasSidebarOpen = openSidebar
        setOpenSidebar(false)
        
        setTimeout(() => {
            const element = document.querySelector(href)
            if (element) {
                const header = document.querySelector('header')
                const headerHeight = header ? header.offsetHeight : 80
                const elementPosition = element.getBoundingClientRect().top + window.pageYOffset - 40
                const offsetPosition = elementPosition - headerHeight

                smoothScrollTo(offsetPosition, 800)
            }
        }, wasSidebarOpen ? 300 : 0)
    }

    return (
        <header className='sticky top-0 left-0 right-0 z-9999999 bg-white shadow-md'>
            <div className='max-w-[1440px] mx-auto p-5'>
                <div className='flex items-center justify-between'>
                    <Link to='/' className='flex gap-x-3 items-center cursor-pointer'>
                        <img src={"/vite.svg"} alt='logo' className='sm:size-10 size-8' />
                        <p className='sm:text-2xl text-xl font-bold'>AmbusNexGen</p>
                    </Link>

                    {/* Navigation Links */}
                    <nav className='sm:flex gap-x-7 items-center hidden'>
                        {navData.map((item) => (
                            <a key={item.id} href={item.href} onClick={(e) => handleNavClick(item.href, e)} className='font-medium cursor-pointer hover:text-[#198CC6] transition-colors'>
                                {item.name}
                            </a>
                        ))}
                    </nav>

                    <Menu className='size-6.5 cursor-pointer sm:hidden' onClick={() => setOpenSidebar(!openSidebar)} />
                </div>

                {/* Sidebar */}
                {openSidebar && (
                    <>
                        {/* Backdrop with blur effect */}
                        <div 
                            className='fixed inset-0 bg-black/60 backdrop-blur-sm z-999998 sm:hidden animate-fadeIn' 
                            onClick={() => setOpenSidebar(false)}
                        />
                        
                        {/* Sidebar - Slides from Right */}
                        <div className='fixed top-0 right-0 w-[60%] h-full bg-white z-9999999 sm:hidden animate-slideInFromRight shadow-2xl'>
                            <div className='w-full h-full px-6 pt-6 overflow-y-auto'>
                                {/* Header with Close Button */}
                                <div className='absolute top-5 right-5'>
                                    <button
                                        onClick={() => setOpenSidebar(false)} 
                                        className='p-2.5 rounded-xl hover:bg-gray-100 active:bg-gray-200 transition-all duration-200 flex items-center justify-center group'
                                        aria-label="Close menu"
                                    >
                                        <X className='size-6 text-gray-600 group-hover:text-[#198CC6] transition-colors duration-200' />
                                    </button>
                                </div>
                                
                                {/* Navigation Links */}
                                <nav className='flex flex-col mt-7 gap-y-2'>
                                    {navData.map((item, index) => {
                                        const delayClass = index === 0 ? 'nav-item-delay-0' : index === 1 ? 'nav-item-delay-1' : 'nav-item-delay-2';
                                        return (
                                            <a key={item.id} href={item.href} onClick={(e) => handleNavClick(item.href, e)} className={`group relative text-lg font-semibold text-gray-800 cursor-pointer transition-all duration-300 py-4 border-b border-gray-500 animate-fadeInUp ${delayClass}`}>
                                                <span className='relative z-10 flex'>{item.name}</span>
                                                <span className='absolute inset-0 rounded-xl bg-linear-to-r from-[#198CC6]/0 to-[#198CC6]/0 group-hover:from-[#198CC6]/5 group-hover:to-transparent transition-all duration-300'></span>
                                            </a>
                                        );
                                    })}
                                </nav>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </header>
    )
}

export default Header