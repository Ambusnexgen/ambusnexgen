import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { navData } from '../utils/data.tsx'
import { Menu, X } from 'lucide-react'

const Header: React.FC = () => {

    const [openSidebar, setOpenSidebar] = useState(false)

    return (
        <header className='sticky top-0 left-0 right-0 z-[9999999] bg-white shadow-md'>
            <div className='max-w-[1440px] mx-auto p-5'>
                <div className='flex items-center justify-between'>
                    <Link to='/' className='flex gap-x-3 items-center cursor-pointer'>
                        <img src={"/vite.svg"} alt='logo' className='sm:size-10 size-8' />
                        <p className='sm:text-2xl text-xl font-bold'>AmbusNexGen</p>
                    </Link>

                    {/* Navigation Links */}
                    <nav className='sm:flex gap-x-7 items-center hidden'>
                        {navData.map((item) => (
                            <NavLink key={item.id} to={item.href} className='font-medium cursor-pointer'>{item.name}</NavLink>
                        ))}
                    </nav>

                    <Menu className='size-6.5 cursor-pointer sm:hidden' onClick={() => setOpenSidebar(!openSidebar)} />
                </div>

                {/* Sidebar */}
                {openSidebar && (
                    <div className='absolute top-0 left-0 w-full h-full bg-black/50 z-50'>
                        <nav className='w-[250px] h-full relative bg-white flex flex-col gap-y-4 p-5'>
                            <X className='size-6.5 cursor-pointer absolute top-5 right-5' onClick={() => setOpenSidebar(!openSidebar)} />
                            {navData.map((item) => (
                                <NavLink key={item.id} to={item.href} className='text-2xl font-medium cursor-pointer'>{item.name}</NavLink>
                            ))}
                        </nav>
                    </div>
                )}
            </div>
        </header>
    )
}

export default Header