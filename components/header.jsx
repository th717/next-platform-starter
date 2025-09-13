'use client';

import Link from 'next/link';
import { useState } from 'react';

const navItems = [
    { linkText: 'Shop', href: '/shop', isActive: true },
    { linkText: 'Collections', href: '/collections', isActive: false },
    { linkText: 'Resources', href: '/resources', isActive: false },
    { linkText: 'Blog', href: '/blog', isActive: false },
    { linkText: 'About', href: '/about', isActive: false }
];

export function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
                        <ul className="hidden lg:flex items-center space-x-6 xl:space-x-8 ml-8">
                            {navItems.map((item, index) => (
                                <li key={index}>
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
                                </li>
                            ))}
                        </ul>

                        {/* Right Side Actions */}
                        <div className="flex items-center space-x-4 sm:space-x-6 lg:space-x-8 ml-auto">
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
                        <div className="lg:hidden mt-4 pb-4 border-t border-gray-200">
                            <ul className="flex flex-col space-y-4 pt-4">
                                {navItems.map((item, index) => (
                                    <li key={index}>
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
                    )}
                </div>
            </nav>
        </div>
    );
}
