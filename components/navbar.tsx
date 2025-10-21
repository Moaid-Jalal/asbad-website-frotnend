'use client';

import Image from "next/image";
import Link from "next/link";
import { useTranslations, useLocale } from 'next-intl';
import { LanguageSwitcher } from "./language-switcher";
import { useState, useEffect, useRef } from 'react';

export const Navbar = () => {
    const t = useTranslations('nav');
    const locale = useLocale();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const navbarRef = useRef<HTMLElement>(null);

    // Close mobile menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (navbarRef.current && !navbarRef.current.contains(event.target as Node)) {
                setIsMobileMenuOpen(false);
            }
        };

        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setIsMobileMenuOpen(false);
            }
        };

        if (isMobileMenuOpen) {
            document.addEventListener('mousedown', handleClickOutside);
            document.addEventListener('keydown', handleEscape);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('keydown', handleEscape);
        };
    }, [isMobileMenuOpen]);

    return (
      <nav ref={navbarRef} className="">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 md:py-6 py-2">
          <div className="flex justify-between items-center ">
            {/* Logo */}
            <div className="flex-shrink-0">
              <div className="flex items-center">
                <Link href={`/${locale}`}>
                  <Image
                    className="h-16 w-auto"
                    src="/logo.svg"
                    alt="Logo"
                    width={64}
                    height={64}
                  />
                </Link>
              </div>
            </div>

            {/* Desktop Navigation Links - Center */}
            <div className="hidden md:block">
              <div className={`ml-10 flex items-baseline ${locale === 'ar' ? 'space-x-reverse' : ''} space-x-8`}>
                <a href="#home" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
                  {t('home')}
                </a>
                <a href="#about" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
                  {t('about')}
                </a>
                <a href="#services" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
                  {t('services')}
                </a>
                <a href="#portfolio" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
                  {t('portfolio')}
                </a>
                <a href="#blog" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
                  {t('blog')}
                </a>
              </div>
            </div>

            {/* Contact Button & Language Switcher */}
            <div className="flex items-center gap-4">
              <LanguageSwitcher />
              <Link href={`/${locale}/contact`}>
                <button className="cursor-pointer border border-black-300 text-black px-10 py-2 rounded-md text-sm font-medium transition-colors">
                  {t('contact')}
                </button>
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`p-2 rounded-md transition-colors ${
                  isMobileMenuOpen
                    ? 'bg-red-50 text-red-600'
                    : 'bg-gray-50 text-gray-400 hover:text-gray-500 hover:bg-gray-100'
                } focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500`}
              >
                <span className="sr-only">
                  {isMobileMenuOpen ? 'Close main menu' : 'Open main menu'}
                </span>
                <svg
                  className={`block h-6 w-6 transition-transform duration-200 ${
                    isMobileMenuOpen ? 'rotate-45' : ''
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu overlay */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200 animate-pulse">
              <a href="#home" className="text-gray-900 block px-3 py-2 text-base font-medium hover:bg-gray-50 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                {t('home')}
              </a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium hover:bg-gray-50 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                {t('about')}
              </a>
              <a href="#services" className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium hover:bg-gray-50 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                {t('services')}
              </a>
              <a href="#portfolio" className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium hover:bg-gray-50 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                {t('portfolio')}
              </a>
              <a href="#blog" className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium hover:bg-gray-50 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                {t('blog')}
              </a>
              <div className="pt-4">
                <Link href={`/${locale}/contact`}>
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-md text-base font-medium transition-colors hover:scale-105" onClick={() => setIsMobileMenuOpen(false)}>
                    {t('contact')}
                  </button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    )
}