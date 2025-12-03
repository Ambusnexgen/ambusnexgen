import { Code, Facebook, FileText, Instagram, Linkedin, Mail, Phone, ShoppingCart, Smartphone, Sparkles, TrendingUp, Twitter, Zap, Film, Camera, Briefcase, Building2, Globe } from "lucide-react"
import missionImg from '../assets/missionImg.png'
import VisionImg from '../assets/VisionImg.png'
import motiveImg from '../assets/motiveImg.png'
import hero1Img from '../assets/hero1.png'
import hero2Img from '../assets/hero2.png'
import hero3Img from '../assets/hero3.png'

export const navData = [
    {
        id: 1,
        name: 'About Us',
        href: '#about-us'
    },
    {
        id: 2,
        name: 'Our Services',
        href: '#services'
    },
    {
        id: 3,
        name: 'Contact Us',
        href: '#contact-us'
    }
]

export const heroData = [
    {
        id: 1,
        img: hero1Img,
        title: 'IT & Development',
        description: 'Complete digital solutions from websites to mobile apps'
    },
    {
        id: 2,
        img: hero2Img,
        title: 'Media & Content',
        description: 'Grow your business with effective marketing strategies'
    },
    {
        id: 3,
        img: hero3Img,
        title: 'Tech Support',
        description: 'Strategic guidance to help your business succeed'
    }
]

export const aboutData = [
    {
        id: 1,
        title: 'Our Mission',
        image: missionImg,
        description: 'Our mission is to deliver end-to-end solutions that support every level of growth - from individuals to enterprises. We bridge creativity, technology, and purpose to empower startups, educate students, uplift struggling talents, and guide companies toward success. At AmbusNexGen, we build not just services, but futures - with trust, excellence, and heart.',
        bgColor: 'bg-[#02385A]',
        textColor: 'text-white'
    },
    {
        id: 2,
        title: 'Our Vision',
        image: VisionImg,
        description: 'To create a world where every dream - from a student’s idea to a company’s vision - finds the right guidance, growth, and technology to become reality. AmbusNexGen stands as a trusted partner for innovation, opportunity, and progress - empowering people and businesses to rise beyond limits.',
        bgColor: 'bg-[#7BBDE8]',
        textColor: 'text-black'
    },
    {
        id: 3,
        title: 'Our Motive',
        image: motiveImg,
        description: 'We believe success should belong to everyone. Many have dreams but lack direction, support, or opportunity - AmbusNexGen was built for them. Our motive is to be the guide, the builder, and the strength for those who strive for a better tomorrow. We stand for trust, growth, and togetherness - a family that lifts everyone.',
        bgColor: 'bg-[#02B4D8]',
        textColor: 'text-black'
    }
]

export const servicesSection1 = [
    {
        id: 1,
        name: 'Website Development',
        icon: <Globe className='size-6' />
    },
    {
        id: 2,
        name: 'Mobile App Development (Android & iOS)',
        icon: <Smartphone className='size-6' />
    },
    {
        id: 3,
        name: 'Web Applications & SaaS',
        icon: <Code className='size-6' />
    },
    {
        id: 4,
        name: 'E-Commerce Solutions',
        icon: <ShoppingCart className='size-6' />
    },
    {
        id: 5,
        name: 'API Integration & Automation',
        icon: <Zap className='size-6' />
    }
]

export const servicesSection2 = [
    {
        id: 1,
        name: 'Video Editing',
        icon: <Film className='size-6' />
    },
    {
        id: 2,
        name: 'Photo Editing',
        icon: <Camera className='size-6' />
    },
    {
        id: 3,
        name: 'Product / Brand Shoots',
        icon: <TrendingUp className='size-6' />
    },
    {
        id: 4,
        name: 'Promotional Videos',
        icon: <Globe className='size-6' />
    },
    {
        id: 5,
        name: 'Voiceover Artist',
        icon: <Zap className='size-6' />
    },
    {
        id: 6,
        name: 'Social Media Content',
        icon: <Instagram className='size-6' />
    }
]

export const servicesSection3 = [
    {
        id: 1,
        name: 'Website/App Maintenance',
        icon: <Briefcase className='size-6' />
    },
    {
        id: 2,
        name: 'Server & Cloud Support',
        icon: <Building2 className='size-6' />
    },
    {
        id: 3,
        name: 'Data Backup & Recovery',
        icon: <Sparkles className='size-6' />
    },
    {
        id: 4,
        name: 'Security Updates',
        icon: <FileText className='size-6' />
    },
    {
        id: 5,
        name: '24/7 Technical Support',
        icon: <TrendingUp className='size-6' />
    }
]

export const servicesData = [
    {
        id: 1,
        title: 'IT & Development',
        description: 'Complete digital solutions from websites to mobile apps',
        services: servicesSection1,
        icon: <Code className='size-8' />,
        bgColor: 'bg-yellow-400',
        textColor: 'text-black'
    },
    {
        id: 2,
        title: 'Media & Content',
        description: 'Grow your business with effective marketing strategies',
        services: servicesSection2,
        icon: <TrendingUp className='size-8' />,
        bgColor: 'bg-gray-800',
        textColor: 'text-white'
    },
    {
        id: 3,
        title: 'Tech Support',
        description: 'Strategic guidance to help your business succeed',
        services: servicesSection3,
        icon: <Briefcase className='size-8' />,
        bgColor: 'bg-green-600',
        textColor: 'text-white'
    },
]

export const contactData = [
    {
        id: 1,
        name: 'Phone',
        icon: <Phone className='size-5 text-gray-400 cursor-pointer hover:text-white transition-colors' />,
        value: '+91 9150360528'
    },
    {
        id: 2,
        name: 'Email',
        icon: <Mail className='size-5 text-gray-400 cursor-pointer hover:text-white transition-colors' />,
        value: 'support@ambusnexgen.com'
    }
]

export const socialMediaData = [
    {
        id: 1,
        name: 'Linkedin',
        href: 'https://www.linkedin.com/company/ambusnexgen',
        icon: <Linkedin className='size-5 text-gray-400 cursor-pointer hover:text-white transition-colors' />
    },
    {
        id: 2,
        name: 'Facebook',
        href: 'https://www.facebook.com/ambusnexgen',
        icon: <Facebook className='size-5 text-gray-400 cursor-pointer hover:text-white transition-colors' />
    },
    {
        id: 3,
        name: 'Instagram',
        href: 'https://www.instagram.com/ambus_nexgen',
        icon: <Instagram className='size-5 text-gray-400 cursor-pointer hover:text-white transition-colors' />
    },
    {
        id: 4,
        name: 'Twitter',
        href: 'https://www.twitter.com/ambusnexgen',
        icon: <Twitter className='size-5 text-gray-400 cursor-pointer hover:text-white transition-colors' />
    }
]