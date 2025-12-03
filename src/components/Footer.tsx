import React from 'react'
import { Link } from 'react-router-dom'
import { contactData, navData, socialMediaData } from '../utils/data.tsx'

const Footer: React.FC = () => {
    return (
        <footer className='bg-gray-900 text-white'>
            <div className='max-w-[1440px] mx-auto px-5 py-12'>
                {/* Main Footer Content */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8'>
                    {/* Logo and Company Name - Left Side */}
                    <div className='flex flex-col gap-4'>
                        <Link to='/' className='flex gap-x-3 items-center'>
                            {/* <img src={"/vite.svg"} alt='logo' className='size-10' /> */}
                            <p className='text-2xl font-bold'>AmbusNexGen</p>
                        </Link>
                        <p className='text-gray-400 text-sm'>
                            Bridge between dreams and success - trusted by all, built for everyone.
                        </p>
                    </div>

                    {/* Contact Us Section */}
                    <div>
                        <h3 className='text-xl font-semibold mb-4'>Contact Us</h3>
                        <ul className='space-y-3'>
                            {contactData.map((item) => (
                                <li key={item.id} className='flex items-center gap-x-2'>
                                    {item.icon}
                                    <a href={`${item.name === 'Email' ? 'mailto:' : item.name === 'Phone' ? 'tel:' : '#'}${item.value}`} className='text-gray-300 text-sm hover:text-white transition-colors'>{item.value}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Quick Links Section */}
                    <div>
                        <h3 className='text-xl font-semibold mb-4'>Quick Links</h3>
                        <ul className='space-y-3'>
                            {navData.map((item) => (
                                <li key={item.id}>
                                    <Link to={item.href} className='text-gray-300 text-sm hover:text-white transition-colors block'>
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social Media Section */}
                    <div>
                        <h3 className='text-xl font-semibold mb-4'>Follow Us</h3>
                        <p className='text-gray-400 text-sm mb-4'>
                            Stay connected with us on social media for updates and news.
                        </p>
                        
                        <div className='flex gap-x-4'>
                            {socialMediaData.map((item) => (
                                <Link key={item.id} to={item.href} target='_blank' className='text-gray-300 text-sm hover:text-white transition-colors block'>
                                    {item.icon}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Horizontal Line */}
                <div className='border-t border-gray-700 my-6'></div>

                {/* Copyright */}
                <div className='text-center'>
                    <p className='text-gray-400 text-sm'>
                        © {new Date().getFullYear()} AmbusNexGen. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer