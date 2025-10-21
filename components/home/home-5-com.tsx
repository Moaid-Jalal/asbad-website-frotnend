'use client';

import { useTranslations, useLocale } from 'next-intl';

export const HomeFifthCom = () => {
  const t = useTranslations('home.services');
  const locale = useLocale();

  return (
    <main className="text-black max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">
        <div className="flex-1 px-4 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold">
            {t('title')}
          </h1>
          <div className="flex items-center gap-4 mt-3">
            <h2 className="text-3xl md:text-4xl text-gray-600 font-light">
              {t('subtitle')}
            </h2>

            {/* سهم بخط طويل وأنيق */}
           <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 300 50"
              strokeWidth={3}
              stroke="currentColor"
              className={`w-24 md:w-36 h-12 md:h-16 text-black hover:translate-x-3 transition-transform duration-300 cursor-pointer ${locale === 'ar' ? 'rotate-180 hover:-translate-x-3' : 'hover:translate-x-3'}`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d={locale === 'ar' ? 'M295 25h-310m0 0l35-15m-35 15l35 15' : 'M5 25h310m0 0l-35-15m35 15l-35 15'}
              />
            </svg>
          </div>
        </div>

        <div className="flex-1 max-w-2xl px-4 lg:px-8">
          <p className="text-base md:text-lg leading-relaxed">
            {t('description')}
          </p>
        </div>
      </div>
    </main>
  );
};
