import { Bot, Cloud, Code, Facebook, FileText, Instagram, Linkedin, Mail, MapPin, Palette, Phone, ShoppingCart, Smartphone, Sparkles, TrendingUp, Twitter, Video, Zap, Brain, HeadphonesIcon, Film, Camera, Briefcase, Building2, Settings, Shield, Globe } from "lucide-react"
import missionImg from '../assets/missionImg.png'
import VisionImg from '../assets/VisionImg.png'
import motiveImg from '../assets/motiveImg.png'

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
        img: '/images/hero/1.jpg',
        link: 'collection/1',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.'
    },
    {
        id: 2,
        img: '/images/hero/2.jpg',
        link: 'collection/2',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.'
    },
    {
        id: 3,
        img: '/images/hero/3.jpg',
        link: 'collection/3',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.'
    }
]

export const aboutData = [
    {
        id: 1,
        title: 'Our Mission',
        image: missionImg,
        description: 'Our mission is to deliver end-to-end solutions that support every level of growth - from individuals to enterprises. We bridge creativity, technology, and purpose to empower startups, educate students, uplift struggling talents, and guide companies toward success. At Ambus NexGen, we build not just services, but futures - with trust, excellence, and heart.',
        bgColor: 'bg-[#02385A]',
        textColor: 'text-white'
    },
    {
        id: 2,
        title: 'Our Vision',
        image: VisionImg,
        description: 'To create a world where every dream - from a student’s idea to a company’s vision - finds the right guidance, growth, and technology to become reality. Ambus NexGen stands as a trusted partner for innovation, opportunity, and progress - empowering people and businesses to rise beyond limits.',
        bgColor: 'bg-[#7BBDE8]',
        textColor: 'text-black'
    },
    {
        id: 3,
        title: 'Our Motive',
        image: motiveImg,
        description: 'We believe success should belong to everyone. Many have dreams but lack direction, support, or opportunity - Ambus NexGen was built for them. Our motive is to be the guide, the builder, and the strength for those who strive for a better tomorrow. We stand for trust, growth, and togetherness - a family that lifts everyone.',
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
        name: 'Logo Design & Brand Identity',
        icon: <Sparkles className='size-6' />
    },
    {
        id: 2,
        name: 'UI/UX Design (Website & App)',
        icon: <Palette className='size-6' />
    },
    {
        id: 3,
        name: 'Social Media Post Design',
        icon: <FileText className='size-6' />
    },
    {
        id: 4,
        name: 'Product Packaging & 3D Mockups',
        icon: <Palette className='size-6' />
    },
    {
        id: 5,
        name: 'Business Card, Brochure & Flyer Design',
        icon: <FileText className='size-6' />
    }
]

export const servicesSection3 = [
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

export const servicesSection4 = [
    {
        id: 1,
        name: 'Digital Marketing',
        icon: <Bot className='size-6' />
    },
    {
        id: 2,
        name: 'Social Media Management',
        icon: <HeadphonesIcon className='size-6' />
    },
    {
        id: 3,
        name: 'SEO',
        icon: <Globe className='size-6' />
    },
    {
        id: 4,
        name: 'Meta / Google Ads',
        icon: <TrendingUp className='size-6' />
    },
    {
        id: 5,
        name: 'Lead Generation',
        icon: <Zap className='size-6' />
    },
    {
        id: 6,
        name: 'Brand Building',
        icon: <Brain className='size-6' />
    }
]

export const servicesSection5 = [
    {
        id: 1,
        name: 'Startup Consulting',
        icon: <Film className='size-6' />
    },
    {
        id: 2,
        name: 'Business Strategy',
        icon: <Camera className='size-6' />
    },
    {
        id: 3,
        name: 'Brand Development',
        icon: <Video className='size-6' />
    },
    {
        id: 4,
        name: 'Pitch Deck Creation',
        icon: <Camera className='size-6' />
    },
    {
        id: 5,
        name: 'Company Profile Creation',
        icon: <Video className='size-6' />
    }
]

export const servicesSection6 = [
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

export const servicesSection7 = [
    {
        id: 1,
        name: 'AI Chatbots',
        icon: <Settings className='size-6' />
    },
    {
        id: 2,
        name: 'AI Tools & Automation',
        icon: <Cloud className='size-6' />
    },
    {
        id: 3,
        name: 'Machine Learning Models',
        icon: <Cloud className='size-6' />
    },
    {
        id: 4,
        name: 'Computer Vision (Face/Vehicle Detection)',
        icon: <Settings className='size-6' />
    },
    {
        id: 5,
        name: 'AI Consulting',
        icon: <Shield className='size-6' />
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
    // {
    //     id: 2,
    //     title: 'Design & Branding',
    //     description: 'Creative designs that make your brand stand out',
    //     services: servicesSection2,
    //     icon: <Palette className='size-8' />,
    //     bgColor: 'bg-red-600',
    //     textColor: 'text-white'
    // },
    {
        id: 3,
        title: 'Media & Content',
        description: 'Grow your business with effective marketing strategies',
        services: servicesSection3,
        icon: <TrendingUp className='size-8' />,
        bgColor: 'bg-gray-800',
        textColor: 'text-white'
    },
    // {
    //     id: 4,
    //     title: 'Marketing & Growth',
    //     description: 'Smart AI solutions to automate and optimize your business',
    //     services: servicesSection4,
    //     icon: <Bot className='size-8' />,
    //     bgColor: 'bg-red-600',
    //     textColor: 'text-white'
    // },
    // {
    //     id: 5,
    //     title: 'Business Consulting',
    //     description: 'Professional video and photo production services',
    //     services: servicesSection5,
    //     icon: <Film className='size-8' />,
    //     bgColor: 'bg-blue-900',
    //     textColor: 'text-white'
    // },
    {
        id: 6,
        title: 'Tech Support',
        description: 'Strategic guidance to help your business succeed',
        services: servicesSection6,
        icon: <Briefcase className='size-8' />,
        bgColor: 'bg-green-600',
        textColor: 'text-white'
    },
    // {
    //     id: 7,
    //     title: 'AI & Automation',
    //     description: 'Keep your systems running smoothly with expert support',
    //     services: servicesSection7,
    //     icon: <Settings className='size-8' />,
    //     bgColor: 'bg-yellow-400',
    //     textColor: 'text-black'
    // }
]

export const contactData = [
    {
        id: 1,
        name: 'Address',
        icon: <MapPin className='size-5 text-gray-400 cursor-pointer hover:text-white transition-colors' />,
        value: '123 Business Street, City, State 12345'
    },
    {
        id: 2,
        name: 'Phone',
        icon: <Phone className='size-5 text-gray-400 cursor-pointer hover:text-white transition-colors' />,
        value: '+91 6381588477'
    },
    {
        id: 3,
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
        href: 'https://www.instagram.com/ambusnexgen',
        icon: <Instagram className='size-5 text-gray-400 cursor-pointer hover:text-white transition-colors' />
    },
    {
        id: 4,
        name: 'Twitter',
        href: 'https://www.twitter.com/ambusnexgen',
        icon: <Twitter className='size-5 text-gray-400 cursor-pointer hover:text-white transition-colors' />
    }
]