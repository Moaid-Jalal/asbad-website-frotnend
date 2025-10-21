'use client';

import Image from "next/image"
import { useTranslations } from 'next-intl';

export const HomeFirstCom = () => {
    const t = useTranslations('home.hero');
    
    return (
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:flex items-center justify-center gap-16">
        <div className="flex-1 max-w-2xl px-8">
          <div className="text-left">
            <h1 className="font-bold text-gray-900 mb-6 leading-tight">
              <span
                className="block whitespace-nowrap"
              >
                <span className="text-4xl md:text-5xl lg:text-6xl text-gray-600">
                  {t('step')}
                </span>
                <span className="ml-2 text-4xl md:text-5xl lg:text-5xl">
                  {t('title')}
                </span>
              </span>
              <span className="block text-gray-600 mt-2 text-4xl md:text-5xl lg:text-6xl">{t('dimension')}</span>
            </h1>
            <div className="max-w-lg">
              <p className="text-lg text-gray-600 mt-6 leading-relaxed py-4 bg-white">
                {t('description')}
              </p>
            </div>

            <div className="mt-16 lg:px-6 flex items-center gap-4">
              <button className="cursor-pointer text-sm bg-red-600 hover:bg-red-700 text-white px-8 py-3 h-14 w-64 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                {t('cta')}
              </button>
              <svg
                className="cursor-pointer w-10 h-10 text-black transition-transform duration-300 hover:translate-x-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <div className="relative">
            <Image
              src="/home-image-1.jpg"
              alt="Hero"
              width={600}
              height={600}
              className="rounded-lg shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
          </div>
        </div>
      </main>
    )
}