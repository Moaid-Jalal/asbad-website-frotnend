'use client';

import { useTranslations } from 'next-intl';

export const HomeEighthCom = () => {
    const t = useTranslations('home');

    return (
        <main className="mx-auto text-white px-4 sm:px-6 lg:px-8 py-16 bg-red-600 mt-24">
            <div className="max-w-3xl mx-auto text-center">
                <div className="mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold mb-2 leading-tight">{t('mission.title')}</h1>
                    <h2 className="text-4xl font-extralight mb-12 leading-tight">
                        {t('mission.subtitle')}
                    </h2>

                    <p className="text-lg font-[300] mb-12 leading-relaxed">
                        {t('mission.description')}
                    </p>
                </div>

                <div className="mt-32">
                    <h1 className="text-4xl md:text-5xl font-bold mb-2 leading-tight">{t('vision.title')}</h1>
                    <p className="text-lg font-[300] mb-12 leading-relaxed">
                        {t('vision.description')}
                    </p>
                </div>
            </div>
        </main>
    )
}