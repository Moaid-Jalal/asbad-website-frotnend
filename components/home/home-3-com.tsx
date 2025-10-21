'use client';

import Image from "next/image"
import { useTranslations } from 'next-intl';

export const HomeThirdCom = () => {
    const t = useTranslations('home.about');

    return (
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col lg:flex-row items-start justify-center gap-8 lg:gap-16">
          <div className="flex-1 flex justify-center items-start">
            <div className="relative">
              <Image
                src="/home-image-1.jpg"
                alt="Hero"
                width={600}
                height={600}
                className="w-full max-w-md lg:max-w-lg rounded-lg shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
            </div>
          </div>
          <div className="flex-1 max-w-2xl px-4 lg:px-8">
              <div className="">
                  <h1 className="text-3xl md:text-4xl font-bold text-black mb-6 md:mb-10">
                      {t('title')}
                  </h1>
                  <div className="space-y-6 md:space-y-10">
                    <p className="leading-relaxed text-black text-base md:text-lg">
                      {t('paragraph1')}
                    </p>

                    <p className="leading-relaxed text-black text-base md:text-lg">
                      {t('paragraph2')}
                    </p>

                    <button className="cursor-pointer text-sm bg-red-600 hover:bg-red-700 text-white px-6 md:px-8 py-3 h-12 md:h-14 w-full md:w-64 rounded-full text-base md:text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                        {t('cta')}
                    </button>
                  </div>
              </div>
          </div>
        </div>
      </main>
    )
}