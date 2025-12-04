import React from 'react';
import { Helmet } from 'react-helmet-async';

const StructuredData: React.FC = () => {
    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "AmbusNexGen",
        "url": "https://ambusnexgen.com",
        "logo": "https://ambusnexgen.com/logo.png",
        "description": "Complete digital solutions: Website & Mobile App Development, E-Commerce Solutions, Video/Photo Editing, Brand Shoots, 24/7 Tech Support.",
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+91-9150360528",
            "contactType": "Customer Service",
            "email": "support@ambusnexgen.com"
        },
        "sameAs": [
            "https://www.linkedin.com/company/ambusnexgen",
            "https://www.facebook.com/ambusnexgen",
            "https://www.instagram.com/ambus_nexgen",
            "https://www.twitter.com/ambusnexgen"
        ],
        "address": {
            "@type": "PostalAddress",
            "addressCountry": "IN"
        }
    };

    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "IT Services, Media Production, Tech Support",
        "provider": {
            "@type": "Organization",
                "name": "AmbusNexGen"
            },
            "areaServed": "Worldwide",
            "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "AmbusNexGen Services",
            "itemListElement": [
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Website Development",
                        "description": "Professional website development services"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Mobile App Development",
                        "description": "Android & iOS mobile app development"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "E-Commerce Solutions",
                        "description": "Complete e-commerce platform development"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Video Editing",
                        "description": "Professional video editing services"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Photo Editing",
                        "description": "Professional photo editing and retouching"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Tech Support",
                        "description": "24/7 technical support and maintenance"
                    }
                }
            ]
        }
    };

    return (
        <Helmet>
            <script type="application/ld+json">
                {JSON.stringify(organizationSchema)}
            </script>
            <script type="application/ld+json">
                {JSON.stringify(serviceSchema)}
            </script>
        </Helmet>
    );
};

export default StructuredData;

