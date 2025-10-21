'use client';

import { useTranslations, useLocale } from 'next-intl';

export const HomeSecondCom = () => {
    const t = useTranslations('home.company');
    const locale = useLocale();

    return (
        <main className="text-black container mx-auto px-4 sm:px-6 lg:px-8 pt-16">
            <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">
                <div className="flex-1 max-w-2xl px-4 lg:px-8">
                    <h1 className="text-3xl md:text-4xl font-bold">
                        {t('title')}
                    </h1>
                    <div className="flex items-center gap-4 mt-3">
                        <h2 className="text-xl md:text-2xl text-gray-600 font-light">
                            {t('subtitle')}
                        </h2>
                        <svg
                            className={`cursor-pointer w-8 h-8 text-black transition-transform duration-300 hover:translate-x-2 flex-shrink-0 ${locale === 'ar' ? 'rotate-180 hover:-translate-x-2' : 'hover:translate-x-2'}`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 20 20"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d={locale === 'ar' ? 'M3 8l-4 4m0 0l4 4m-4-4H21' : 'M17 8l4 4m0 0l-4 4m4-4H3'}
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
    )
}