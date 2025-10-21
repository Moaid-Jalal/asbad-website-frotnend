'use client';

import { useTranslations } from 'next-intl';

export const HomeFourthCom = () => {
    const t = useTranslations('home.expertise');

    return (
        <main className="mx-auto text-white px-4 sm:px-6 lg:px-8 py-40 bg-red-600 my-24">
            <div className="max-w-3xl mx-auto text-center">
                <h1 className="md:text-5xl font-bold mb-12 leading-tight">{t('title')}</h1>

                <div className="font-light text-xl leading-relaxed">
                    <p className="mx-auto mb-8">
                        {t('description1')}
                    </p>

                    <p className="mx-auto mb-12">
                        {t('description2')}
                    </p>
                </div>

                <div className="space-y-8 mt-10 font-light text-xl leading-relaxed">
                    <p className="mx-auto">
                        {t('description3')}
                    </p>
                </div>
            </div>
        </main>
    )
}