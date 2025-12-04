import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title?: string;
    description?: string;
    keywords?: string;
    image?: string;
    url?: string;
    type?: string;
    noindex?: boolean;
}

const SEO: React.FC<SEOProps> = ({
    title = 'AmbusNexGen - IT Development, Media & Content, Tech Support Services',
    description = 'Complete digital solutions: Website & Mobile App Development, E-Commerce Solutions, Video/Photo Editing, Brand Shoots, 24/7 Tech Support. Empowering businesses with technology and creativity.',
    keywords = 'website development, mobile app development, e-commerce solutions, video editing, photo editing, brand shoots, tech support, IT services, web applications, SaaS development, API integration, cloud support, digital marketing, social media content',
    image = 'https://ambusnexgen.com/og-image.jpg',
    url = 'https://ambusnexgen.com/',
    type = 'website',
    noindex = false
}) => {
    const siteName = 'AmbusNexGen';
    const fullTitle = title.includes(siteName) ? title : `${title} | ${siteName}`;

    return (
        <Helmet>
            {/* Primary Meta Tags */}
            <title>{fullTitle}</title>
            <meta name="title" content={fullTitle} />
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta name="author" content={siteName} />
            <meta name="robots" content={noindex ? 'noindex, nofollow' : 'index, follow'} />
            <meta name="language" content="English" />
            <meta name="revisit-after" content="7 days" />
            
            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type} />
            <meta property="og:url" content={url} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            <meta property="og:site_name" content={siteName} />
            <meta property="og:locale" content="en_US" />
            
            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={url} />
            <meta property="twitter:title" content={fullTitle} />
            <meta property="twitter:description" content={description} />
            <meta property="twitter:image" content={image} />
            
            {/* Canonical URL */}
            <link rel="canonical" href={url} />
            
            {/* Theme Color */}
            <meta name="theme-color" content="#02385A" />
            <meta name="msapplication-TileColor" content="#02385A" />
        </Helmet>
    );
};

export default SEO;

