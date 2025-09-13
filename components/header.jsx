'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const navItems = [
    { 
        linkText: 'Shop', 
        href: '/shop', 
        isActive: true,
        hasDropdown: true,
        dropdownItems: [
            {
                collection: 'Collection 1',
                products: [
                    { text: 'Product 1', href: '/shop/collection1/product1' },
                    { text: 'Product 2', href: '/shop/collection1/product2' },
                    { text: 'Product 3', href: '/shop/collection1/product3' },
                    { text: 'Product 4', href: '/shop/collection1/product4' },
                    { text: 'Product 5', href: '/shop/collection1/product5' }
                ]
            },
            {
                collection: 'Collection 2',
                products: [
                    { text: 'Product 1', href: '/shop/collection2/product1' },
                    { text: 'Product 2', href: '/shop/collection2/product2' },
                    { text: 'Product 3', href: '/shop/collection2/product3' },
                    { text: 'Product 4', href: '/shop/collection2/product4' },
                    { text: 'Product 5', href: '/shop/collection2/product5' }
                ]
            },
            {
                collection: 'Collection 3',
                products: [
                    { text: 'Product 1', href: '/shop/collection3/product1' },
                    { text: 'Product 2', href: '/shop/collection3/product2' },
                    { text: 'Product 3', href: '/shop/collection3/product3' },
                    { text: 'Product 4', href: '/shop/collection3/product4' },
                    { text: 'Product 5', href: '/shop/collection3/product5' }
                ]
            }
        ],
        featuredImage: '/images/placeholders/placeholder.webp'
    },
    { 
        linkText: 'Collections', 
        href: '/collections', 
        isActive: false,
        hasDropdown: true,
        dropdownItems: [
            {
                collection: 'Collection 1',
                products: [
                    { text: 'Product 1', href: '/collections/collection1/product1' },
                    { text: 'Product 2', href: '/collections/collection1/product2' },
                    { text: 'Product 3', href: '/collections/collection1/product3' },
                    { text: 'Product 4', href: '/collections/collection1/product4' },
                    { text: 'Product 5', href: '/collections/collection1/product5' }
                ]
            },
            {
                collection: 'Collection 2',
                products: [
                    { text: 'Product 1', href: '/collections/collection2/product1' },
                    { text: 'Product 2', href: '/collections/collection2/product2' },
                    { text: 'Product 3', href: '/collections/collection2/product3' },
                    { text: 'Product 4', href: '/collections/collection2/product4' },
                    { text: 'Product 5', href: '/collections/collection2/product5' }
                ]
            },
            {
                collection: 'Collection 3',
                products: [
                    { text: 'Product 1', href: '/collections/collection3/product1' },
                    { text: 'Product 2', href: '/collections/collection3/product2' },
                    { text: 'Product 3', href: '/collections/collection3/product3' },
                    { text: 'Product 4', href: '/collections/collection3/product4' },
                    { text: 'Product 5', href: '/collections/collection3/product5' }
                ]
            }
        ],
        featuredImage: '/images/placeholders/placeholder.webp'
    },
    { 
        linkText: 'Resources', 
        href: '/resources', 
        isActive: false,
        hasDropdown: true,
        dropdownItems: [
            {
                section: 'Guides and Resources',
                links: [
                    { text: 'Jewelry Care', href: '/resources/jewelry-care' },
                    { text: 'Size Guide', href: '/resources/size-guide' },
                    { text: 'Style Inspiration (Blog)', href: '/resources/style-inspiration' },
                    { text: 'Gifting Guide', href: '/resources/gifting-guide' }
                ]
            },
            {
                section: 'About Us',
                links: [
                    { text: 'Our Story', href: '/about/our-story' },
                    { text: 'Italian Craftsmanship', href: '/about/craftsmanship' },
                    { text: 'Sustainability & Materials', href: '/about/sustainability' },
                    { text: 'Press / Features', href: '/about/press' }
                ]
            }
        ],
        featuredImage: '/images/placeholders/placeholder.webp',
        footerLinks: [
            { text: 'Learning Hub (link)', href: '/learning-hub' },
            { text: 'Downloads Page (link)', href: '/downloads' }
        ]
    },
    { 
        linkText: 'Blog', 
        href: '/blog', 
        isActive: false,
        hasDropdown: true,
        dropdownItems: [
            {
                type: 'blog-posts',
                posts: [
                    { 
                        title: 'Blog (Cluster Page)', 
                        href: '/blog/post-1',
                        image: '/images/placeholders/placeholder.webp'
                    },
                    { 
                        title: 'Blog (Cluster Page)', 
                        href: '/blog/post-2',
                        image: '/images/placeholders/placeholder.webp'
                    },
                    { 
                        title: 'Blog (Cluster Page)', 
                        href: '/blog/post-3',
                        image: '/images/placeholders/placeholder.webp'
                    },
                    { 
                        title: 'Blog (Cluster Page)', 
                        href: '/blog/post-4',
                        image: '/images/placeholders/placeholder.webp'
                    }
                ]
            }
        ],
        featuredImage: '/images/placeholders/placeholder.webp',
        footerLinks: [
            { text: 'Learning Hub (link)', href: '/learning-hub' },
            { text: 'Downloads Page (link)', href: '/downloads' }
        ]
    },
    { 
        linkText: 'About', 
        href: '/about', 
        isActive: false,
        hasDropdown: true,
        dropdownItems: [
            {
                type: 'image-links',
                images: [
                    { 
                        title: 'About Image 1', 
                        href: '/about/image-1',
                        image: '/images/placeholders/placeholder.webp',
                        isActive: false
                    },
                    { 
                        title: 'About Image 2', 
                        href: '/about/image-2',
                        image: '/images/placeholders/placeholder.webp',
                        isActive: true
                    },
                    { 
                        title: 'About Image 3', 
                        href: '/about/image-3',
                        image: '/images/placeholders/placeholder.webp',
                        isActive: false
                    },
                    { 
                        title: 'About Image 4', 
                        href: '/about/image-4',
                        image: '/images/placeholders/placeholder.webp',
                        isActive: false
                    }
                ]
            }
        ]
    }
];

export function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        
        // Cleanup on unmount
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMobileMenuOpen]);

    return (
        <div className="sticky top-0 z-50">
            {/* Top Black Header Bar */}
            <div className="bg-black text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center text-xs sm:text-sm">
                    {/* Left side - USD */}
                    <div className="flex-shrink-0">
                        <span>USD</span>
                    </div>
                    
                    {/* Center - FREE SHIPPING */}
                    <div className="flex-1 text-center">
                        <span className="hidden xs:block text-xs sm:text-sm">FREE SHIPPING ON ALL PURCHASES</span>
                        <span className="xs:hidden text-xs">FREE SHIPPING</span>
                    </div>
                    
                    {/* Right side - Support */}
                    <div className="flex-shrink-0">
                        <Link href="/support" className="text-xs sm:text-sm hover:text-gray-300 transition-colors duration-300">
                            Support
                        </Link>
                    </div>
                </div>
            </div>

            {/* Main Navigation Bar */}
            <nav className="bg-white text-black shadow-lg">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
                    <div className="flex items-center">
                        {/* Logo */}
                        <Link href="/" className="text-xl sm:text-2xl font-bold text-gray-900 flex-shrink-0">
                            Logo
                        </Link>

                        {/* Desktop Navigation Links */}
                        <ul className="hidden lg:flex items-center space-x-4 xl:space-x-6 ml-6 xl:ml-8">
                            {navItems.map((item, index) => (
                                <li key={index} className="relative">
                                    {item.hasDropdown ? (
                                        <div
                                            className="relative"
                                            onMouseEnter={() => setActiveDropdown(index)}
                                            onMouseLeave={() => setActiveDropdown(null)}
                                        >
                                            <button
                                                className={`text-sm transition-colors duration-300 hover:text-gray-600 flex items-center ${
                                                    item.isActive 
                                                        ? 'font-bold text-gray-900 border-b-2 border-blue-500 pb-1' 
                                                        : 'text-gray-700'
                                                }`}
                                            >
                                                {item.linkText}
                                                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                </svg>
                                            </button>
                                            
                                            {/* Mega Menu Dropdown */}
                                            {activeDropdown === index && (
                                                <div className="absolute top-full left-0 mt-1 w-full max-w-[600px] sm:w-[500px] md:w-[600px] bg-white rounded-md shadow-xl border border-gray-200 py-4 sm:py-6 z-50">
                                                    {item.linkText === 'Resources' ? (
                                                        /* Resources Layout */
                                                        <div className="flex flex-col lg:flex-row">
                                                            {/* Left Side - Large Image */}
                                                            <div className="w-full lg:w-48 px-4 sm:px-6 mb-4 lg:mb-0">
                                                                <div className="relative w-full h-32 sm:h-40 lg:h-48 rounded-lg overflow-hidden bg-gray-100 flex items-center justify-center">
                                                                    <span className="text-xs sm:text-sm font-semibold text-gray-600">[image with link]</span>
                                                                </div>
                                                            </div>
                                                            
                                                            {/* Right Side - Content Columns */}
                                                            <div className="flex-1 px-4 sm:px-6">
                                                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
                                                                    {item.dropdownItems.map((section, sectionIndex) => (
                                                                        <div key={sectionIndex}>
                                                                            <h3 className="text-sm font-semibold text-gray-900 mb-2 sm:mb-3">
                                                                                {section.section}
                                                                            </h3>
                                                                            <ul className="space-y-1 sm:space-y-2">
                                                                                {section.links.map((link, linkIndex) => (
                                                                                    <li key={linkIndex}>
                                                                                        <Link
                                                                                            href={link.href}
                                                                                            className="block text-xs sm:text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200 py-1"
                                                                                        >
                                                                                            {link.text}
                                                                                        </Link>
                                                                                    </li>
                                                                                ))}
                                                                            </ul>
                                                                        </div>
                                                                    ))}
                                                                </div>
                                                                
                                                                {/* Footer Links */}
                                                                {item.footerLinks && (
                                                                    <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-gray-200 flex flex-col sm:flex-row justify-between gap-2">
                                                                        {item.footerLinks.map((footerLink, footerIndex) => (
                                                                            <Link
                                                                                key={footerIndex}
                                                                                href={footerLink.href}
                                                                                className="text-xs sm:text-sm text-gray-900 hover:text-gray-600 transition-colors duration-200"
                                                                            >
                                                                                {footerLink.text}
                                                                            </Link>
                                                                        ))}
                                                                    </div>
                                                                )}
                                                            </div>
                                                        </div>
                                                    ) : item.linkText === 'Blog' ? (
                                                        /* Blog Layout */
                                                        <div className="flex flex-col lg:flex-row">
                                                            {/* Left Side - Large Featured Image */}
                                                            <div className="w-full lg:w-48 px-4 sm:px-6 mb-4 lg:mb-0">
                                                                <div className="relative w-full h-32 sm:h-40 lg:h-48 rounded-lg overflow-hidden bg-gray-100 flex items-center justify-center">
                                                                    <span className="text-xs sm:text-sm font-semibold text-gray-600">[image with link]</span>
                                                                </div>
                                                            </div>
                                                            
                                                            {/* Right Side - Blog Posts Grid */}
                                                            <div className="flex-1 px-4 sm:px-6">
                                                                {/* Blog Posts 2x2 Grid */}
                                                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6">
                                                                    {item.dropdownItems[0]?.posts.map((post, postIndex) => (
                                                                        <Link
                                                                            key={postIndex}
                                                                            href={post.href}
                                                                            className="group bg-gray-100 rounded-lg p-3 sm:p-4 hover:bg-gray-200 transition-colors duration-200"
                                                                        >
                                                                            <h3 className="text-xs sm:text-sm font-semibold text-gray-900 mb-2">
                                                                                {post.title}
                                                                            </h3>
                                                                            <div className="relative w-full h-12 sm:h-16 rounded overflow-hidden bg-gray-200 flex items-center justify-center">
                                                                                <span className="text-xs font-semibold text-gray-600">[image with link]</span>
                                                                            </div>
                                                                        </Link>
                                                                    ))}
                                                                </div>
                                                                
                                                                {/* Footer Links */}
                                                                {item.footerLinks && (
                                                                    <div className="pt-3 sm:pt-4 border-t border-gray-200 space-y-1 sm:space-y-2">
                                                                        {item.footerLinks.map((footerLink, footerIndex) => (
                                                                            <Link
                                                                                key={footerIndex}
                                                                                href={footerLink.href}
                                                                                className="block text-xs sm:text-sm text-gray-900 hover:text-gray-600 transition-colors duration-200"
                                                                            >
                                                                                {footerLink.text}
                                                                            </Link>
                                                                        ))}
                                                                    </div>
                                                                )}
                                                            </div>
                                                        </div>
                                                    ) : item.linkText === 'About' ? (
                                                        /* About Layout - Four Horizontal Images */
                                                        <div className="px-4 sm:px-6">
                                                            <div className="flex flex-wrap gap-2 sm:gap-3 lg:gap-4 justify-center">
                                                                {item.dropdownItems[0]?.images.map((imageItem, imageIndex) => (
                                                                    <Link
                                                                        key={imageIndex}
                                                                        href={imageItem.href}
                                                                        className={`relative w-16 h-12 sm:w-20 sm:h-14 lg:w-24 lg:h-16 rounded-lg overflow-hidden bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors duration-200 ${
                                                                            imageItem.isActive ? 'ring-2 ring-blue-500' : ''
                                                                        }`}
                                                                    >
                                                                        <span className="text-xs font-semibold text-gray-600">[image with link]</span>
                                                                    </Link>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    ) : (
                                                        /* Collections/Shop Layout */
                                                        <div className="flex flex-col lg:flex-row">
                                                            {/* Left Side - Collections */}
                                                            <div className="flex-1 px-4 sm:px-6 mb-4 lg:mb-0">
                                                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                                                                    {item.dropdownItems.map((collection, collectionIndex) => (
                                                                        <div key={collectionIndex}>
                                                                            <h3 className="text-sm font-semibold text-gray-900 mb-2 sm:mb-3">
                                                                                {collection.collection}
                                                                            </h3>
                                                                            <ul className="space-y-1 sm:space-y-2">
                                                                                {collection.products.map((product, productIndex) => (
                                                                                    <li key={productIndex}>
                                                                                        <Link
                                                                                            href={product.href}
                                                                                            className="block text-xs sm:text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200 py-1"
                                                                                        >
                                                                                            {product.text}
                                                                                        </Link>
                                                                                    </li>
                                                                                ))}
                                                                            </ul>
                                                                        </div>
                                                                    ))}
                                                                </div>
                                                            </div>
                                                            
                                                            {/* Right Side - Featured Images */}
                                                            <div className="w-full lg:w-48 px-4 sm:px-6 lg:border-l lg:border-gray-200">
                                                                <div className="flex gap-4 lg:flex-col lg:space-y-4">
                                                                    {/* First Image */}
                                                                    <div className="relative w-full h-16 sm:h-20 rounded-lg overflow-hidden bg-gray-100 flex items-center justify-center">
                                                                        <span className="text-xs sm:text-sm font-semibold text-gray-600">[image with link]</span>
                                                                    </div>
                                                                    {/* Second Image */}
                                                                    <div className="relative w-full h-16 sm:h-20 rounded-lg overflow-hidden bg-gray-100 flex items-center justify-center">
                                                                        <span className="text-xs sm:text-sm font-semibold text-gray-600">[image with link]</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                            )}
                                        </div>
                                    ) : (
                                    <Link 
                                        href={item.href} 
                                            className={`text-sm transition-colors duration-300 hover:text-gray-600 ${
                                                item.isActive 
                                                    ? 'font-bold text-gray-900 border-b-2 border-blue-500 pb-1' 
                                                    : 'text-gray-700'
                                            }`}
                                    >
                                        {item.linkText}
                                    </Link>
                                    )}
                                </li>
                            ))}
                        </ul>

                        {/* Right Side Actions */}
                        <div className="flex items-center space-x-3 sm:space-x-4 lg:space-x-6 ml-auto">
                            {/* Search - Desktop */}
                            <div className="hidden sm:flex items-center space-x-2 text-gray-500">
                                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                                <span className="text-xs sm:text-sm">Search</span>
                            </div>

                            {/* Search - Mobile Icon Only */}
                            <div className="sm:hidden text-gray-500">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </div>

                            {/* Shopping Bag */}
                            <div className="flex items-center space-x-1 sm:space-x-2">
                                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                </svg>
                                <span className="text-xs sm:text-sm">3</span>
                            </div>

                            {/* Login - Desktop - Aligned with Support */}
                            <Link 
                                href="/login" 
                                className="hidden sm:block text-xs sm:text-sm text-gray-700 hover:text-gray-600 transition-colors duration-300 flex-shrink-0"
                            >
                                Login
                            </Link>

                            {/* Mobile Menu Button */}
                            <button
                                className="lg:hidden p-1"
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                aria-label="Toggle mobile menu"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    {isMobileMenuOpen ? (
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    ) : (
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                    )}
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Mobile Navigation Menu */}
                    {isMobileMenuOpen && (
                        <>
                            {/* Backdrop */}
                            <div 
                                className="fixed inset-0  bg-opacity-50 z-40 lg:hidden"
                                onClick={() => setIsMobileMenuOpen(false)}
                            ></div>
                            
                            {/* Menu Container */}
                            <div className="lg:hidden mt-4 pb-4 border-t border-gray-200 max-h-[80vh] overflow-y-auto scroll-smooth bg-white relative z-50">
                            <ul className="flex flex-col space-y-4 pt-4">
                                {navItems.map((item, index) => (
                                    <li key={index}>
                                        {item.hasDropdown ? (
                                            <div>
                                                <button
                                                    className={`block text-sm py-2 transition-colors duration-300 hover:text-gray-600 flex items-center justify-between w-full ${
                                                        item.isActive 
                                                            ? 'font-bold text-gray-900' 
                                                            : 'text-gray-700'
                                                    }`}
                                                    onClick={() => setActiveDropdown(activeDropdown === index ? null : index)}
                                                >
                                                    {item.linkText}
                                                    <svg className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === index ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                    </svg>
                                                </button>
                                                
                                                {/* Mobile Dropdown */}
                                                {activeDropdown === index && (
                                                    <div className="ml-2 sm:ml-4 mt-2 space-y-3 sm:space-y-4 max-h-80 overflow-y-auto pr-2 scroll-smooth">
                                                        {item.linkText === 'Resources' ? (
                                                            /* Resources Mobile Layout */
                                                            <>
                                                                {/* Featured Image */}
                                                                <div className="mb-4">
                                                                    <div className="w-full h-32 bg-gray-100 rounded-lg flex items-center justify-center">
                                                                        <span className="text-sm font-semibold text-gray-600">[image with link]</span>
                                                                    </div>
                                                                </div>
                                                                
                                                                {item.dropdownItems.map((section, sectionIndex) => (
                                                                    <div key={sectionIndex}>
                                                                        <h3 className="text-sm font-semibold text-gray-900 mb-2">
                                                                            {section.section}
                                                                        </h3>
                                                                        <ul className="ml-2 space-y-1">
                                                                            {section.links.map((link, linkIndex) => (
                                                                                <li key={linkIndex}>
                                                                                    <Link
                                                                                        href={link.href}
                                                                                        className="block text-xs sm:text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200 py-1"
                                                                                        onClick={() => setIsMobileMenuOpen(false)}
                                                                                    >
                                                                                        {link.text}
                                                                                    </Link>
                                                                                </li>
                                                                            ))}
                                                                        </ul>
                                                                    </div>
                                                                ))}
                                                                {/* Footer Links */}
                                                                {item.footerLinks && (
                                                                    <div className="pt-4 border-t border-gray-200 space-y-2">
                                                                        {item.footerLinks.map((footerLink, footerIndex) => (
                                                                            <Link
                                                                                key={footerIndex}
                                                                                href={footerLink.href}
                                                                                className="block text-sm text-gray-900 hover:text-gray-600 transition-colors duration-200 py-1"
                                                                                onClick={() => setIsMobileMenuOpen(false)}
                                                                            >
                                                                                {footerLink.text}
                                                                            </Link>
                                                                        ))}
                                                                    </div>
                                                                )}
                                                            </>
                                                        ) : item.linkText === 'Blog' ? (
                                                            /* Blog Mobile Layout */
                                                            <>
                                                                {/* Featured Image */}
                                                                <div className="mb-4">
                                                                    <div className="w-full h-32 bg-gray-100 rounded-lg flex items-center justify-center">
                                                                        <span className="text-sm font-semibold text-gray-600">[image with link]</span>
                                                                    </div>
                                                                </div>
                                                                
                                                                {/* Blog Posts */}
                                                                <div className="space-y-3">
                                                                    {item.dropdownItems && item.dropdownItems[0] && item.dropdownItems[0].posts ? (
                                                                        item.dropdownItems[0].posts.map((post, postIndex) => (
                                                                            <Link
                                                                                key={postIndex}
                                                                                href={post.href}
                                                                                className="block bg-gray-100 rounded-lg p-3 hover:bg-gray-200 transition-colors duration-200"
                                                                                onClick={() => setIsMobileMenuOpen(false)}
                                                                            >
                                                                                <h3 className="text-sm font-semibold text-gray-900 mb-2">
                                                                                    {post.title}
                                                                                </h3>
                                                                                <div className="relative w-full h-12 rounded overflow-hidden bg-gray-200 flex items-center justify-center">
                                                                                    <span className="text-xs font-semibold text-gray-600">[image with link]</span>
                                                                                </div>
                                                                            </Link>
                                                                        ))
                                                                    ) : (
                                                                        <div className="text-center text-sm text-gray-500 py-4">
                                                                            No blog posts available
                                                                        </div>
                                                                    )}
                                                                </div>
                                                                
                                                                {/* Footer Links */}
                                                                {item.footerLinks && (
                                                                    <div className="pt-4 border-t border-gray-200 space-y-2">
                                                                        {item.footerLinks.map((footerLink, footerIndex) => (
                                                                            <Link
                                                                                key={footerIndex}
                                                                                href={footerLink.href}
                                                                                className="block text-sm text-gray-900 hover:text-gray-600 transition-colors duration-200 py-1"
                                                                                onClick={() => setIsMobileMenuOpen(false)}
                                                                            >
                                                                                {footerLink.text}
                                                                            </Link>
                                                                        ))}
                                                                    </div>
                                                                )}
                                                            </>
                                                        ) : item.linkText === 'About' ? (
                                                            /* About Mobile Layout */
                                                            <>
                                                                {/* Image Links */}
                                                                <div className="px-2 py-2">
                                                                    <div className="grid grid-cols-2 gap-3">
                                                                        {item.dropdownItems && item.dropdownItems[0] && item.dropdownItems[0].images ? (
                                                                            item.dropdownItems[0].images.map((imageItem, imageIndex) => (
                                                                                <Link
                                                                                    key={imageIndex}
                                                                                    href={imageItem.href}
                                                                                    className={`relative w-full h-16 rounded-lg overflow-hidden bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors duration-200 ${
                                                                                        imageItem.isActive ? 'ring-2 ring-blue-500' : ''
                                                                                    }`}
                                                                                    onClick={() => setIsMobileMenuOpen(false)}
                                                                                >
                                                                                    <span className="text-xs font-semibold text-gray-600">[image with link]</span>
                                                                                </Link>
                                                                            ))
                                                                        ) : (
                                                                            <div className="col-span-2 text-center text-sm text-gray-500 py-4">
                                                                                No image links available
                                                                            </div>
                                                                        )}
                                                                    </div>
                                                                </div>
                                                            </>
                                                        ) : item.linkText === 'Shop' ? (
                                                            /* Shop Mobile Layout */
                                                            <>
                                                                {/* Featured Image */}
                                                                {item.featuredImage && (
                                                                    <div className="mb-4">
                                                                        <div className="w-full h-32 bg-gray-100 rounded-lg flex items-center justify-center">
                                                                            <span className="text-sm font-semibold text-gray-600">[image with link]</span>
                                                                        </div>
                                                                    </div>
                                                                )}
                                                                
                                                                {item.dropdownItems.map((collection, collectionIndex) => (
                                                                    <div key={collectionIndex} className="mb-4">
                                                                        <h3 className="text-sm font-semibold text-gray-900 mb-2">
                                                                            {collection.collection}
                                                                        </h3>
                                                                        <ul className="ml-2 space-y-1">
                                                                            {collection.products.map((product, productIndex) => (
                                                                                <li key={productIndex}>
                                                                                    <Link
                                                                                        href={product.href}
                                                                                        className="block text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200 py-1"
                                                                                        onClick={() => setIsMobileMenuOpen(false)}
                                                                                    >
                                                                                        {product.text}
                                                                                    </Link>
                                                                                </li>
                                                                            ))}
                                                                        </ul>
                                                                    </div>
                                                                ))}
                                                            </>
                                                        ) : (
                                                            /* Collections Mobile Layout */
                                                            <>
                                                                {/* Featured Images */}
                                                                <div className="mb-4">
                                                                    <div className="grid grid-cols-2 gap-3">
                                                                        <div className="relative w-full h-20 rounded-lg overflow-hidden bg-gray-100 flex items-center justify-center">
                                                                            <span className="text-xs font-semibold text-gray-600">[image with link]</span>
                                                                        </div>
                                                                        <div className="relative w-full h-20 rounded-lg overflow-hidden bg-gray-100 flex items-center justify-center">
                                                                            <span className="text-xs font-semibold text-gray-600">[image with link]</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                
                                                                {item.dropdownItems.map((collection, collectionIndex) => (
                                                                    <div key={collectionIndex} className="mb-4">
                                                                        <h3 className="text-sm font-semibold text-gray-900 mb-2">
                                                                            {collection.collection}
                                                                        </h3>
                                                                        <ul className="ml-2 space-y-1">
                                                                            {collection.products.map((product, productIndex) => (
                                                                                <li key={productIndex}>
                                                                                    <Link
                                                                                        href={product.href}
                                                                                        className="block text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200 py-1"
                                                                                        onClick={() => setIsMobileMenuOpen(false)}
                                                                                    >
                                                                                        {product.text}
                                                                                    </Link>
                                                                                </li>
                                                                            ))}
                                                                        </ul>
                                                                    </div>
                                                                ))}
                                                            </>
                                                        )}
                                                    </div>
                                                )}
                                            </div>
                                        ) : (
                                        <Link 
                                            href={item.href} 
                                                className={`block text-sm py-2 transition-colors duration-300 hover:text-gray-600 ${
                                                    item.isActive 
                                                        ? 'font-bold text-gray-900 border-b-2 border-blue-500' 
                                                        : 'text-gray-700'
                                                }`}
                                            onClick={() => setIsMobileMenuOpen(false)}
                                        >
                                            {item.linkText}
                                        </Link>
                                        )}
                                    </li>
                                ))}
                                <li className="pt-2 border-t border-gray-200">
                                    <Link 
                                        href="/login" 
                                        className="block text-gray-700 hover:text-gray-600 transition-colors duration-300 text-sm py-2"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        Login
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        </>
                    )}
                </div>
            </nav>
        </div>
    );
}
