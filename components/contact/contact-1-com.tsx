'use client';

import ContactForm from "./form"
import { useTranslations } from 'next-intl';

export const ContactFirstCom = () => {
    const t = useTranslations('contact');

    return (
        <main className="container mx-auto px-4 sm:px-6 lg:px-8 pt-16 gap-16">
            <div className="w-full flex items-center justify-center">
                <div className="max-w-lg w-full text-center flex flex-col justify-center items-center">
                    <h1 className="text-black text-4xl md:text-5xl font-bold mb-2 leading-tight">{t('title')}</h1>
                    <div className="bg-red-600 h-1 w-full my-6"></div>
                    <p className="text-xl font-[300] mb-12 leading-relaxed text-gray-600">
                        {t('subtitle')}
                    </p>
                </div>
            </div>
            <ContactForm />
        </main>
    )
}