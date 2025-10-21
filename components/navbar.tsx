'use client';

import Image from "next/image";
import Link from "next/link";
import { useTranslations, useLocale } from 'next-intl';
import { LanguageSwitcher } from "./language-switcher";

export const Navbar = () => {
    const t = useTranslations('nav');
    const locale = useLocale();
    
    return (
      <nav className="">
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
              <button className="bg-gray-50 p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
                <span className="sr-only">Open main menu</span>
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu overlay */}
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
            <a href="#home" className="text-gray-900 block px-3 py-2 text-base font-medium">
              Home
            </a>
            <a href="#about" className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium">
              About
            </a>
            <a href="#services" className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium">
              Services
            </a>
            <a href="#portfolio" className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium">
              Portfolio
            </a>
            <a href="#blog" className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium">
              Blog
            </a>
            <div className="pt-4">
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-md text-base font-medium transition-colors">
                Contact
              </button>
            </div>
          </div>
        </div>
      </nav>
    )
}