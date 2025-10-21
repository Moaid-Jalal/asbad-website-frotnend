'use client';

import { useTranslations } from 'next-intl';

export const HomeSeventhCom = () => {
    const t = useTranslations('home.partners');

    return (
        <main className="mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center">
            <h1 className="text-4xl md:text-5xl text-black mb-6 md:mb-8">
                {t('title')}
            </h1>
            <h2 className="text-xl md:text-3xl text-gray-600 mb-12 md:mb-16 max-w-4xl mx-auto">
                <span>{t('subtitle1')}</span>
                <br/>
                <span>{t('subtitle2')}</span>
            </h2>

            {/* Scrolling logos section */}
            <div className="relative overflow-hidden bg-gray-50 py-6 md:py-8 rounded-lg">
                <div className="flex animate-scroll space-x-8 md:space-x-16 items-center justify-center">
                    {/* Logo 1 */}
                    <div className="flex-shrink-0 w-24 h-12 md:w-32 md:h-16 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-sm md:text-lg">
                        LOGO 1
                    </div>

                    {/* Logo 2 */}
                    <div className="flex-shrink-0 w-24 h-12 md:w-32 md:h-16 bg-green-600 rounded-lg flex items-center justify-center text-white font-bold text-sm md:text-lg">
                        LOGO 2
                    </div>

                    {/* Logo 3 */}
                    <div className="flex-shrink-0 w-24 h-12 md:w-32 md:h-16 bg-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-sm md:text-lg">
                        LOGO 3
                    </div>

                    {/* Logo 4 */}
                    <div className="flex-shrink-0 w-24 h-12 md:w-32 md:h-16 bg-red-600 rounded-lg flex items-center justify-center text-white font-bold text-sm md:text-lg">
                        LOGO 4
                    </div>

                    {/* Duplicate logos for seamless scrolling */}
                    <div className="flex-shrink-0 w-24 h-12 md:w-32 md:h-16 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-sm md:text-lg">
                        LOGO 1
                    </div>

                    <div className="flex-shrink-0 w-24 h-12 md:w-32 md:h-16 bg-green-600 rounded-lg flex items-center justify-center text-white font-bold text-sm md:text-lg">
                        LOGO 2
                    </div>

                    <div className="flex-shrink-0 w-24 h-12 md:w-32 md:h-16 bg-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-sm md:text-lg">
                        LOGO 3
                    </div>

                    <div className="flex-shrink-0 w-24 h-12 md:w-32 md:h-16 bg-red-600 rounded-lg flex items-center justify-center text-white font-bold text-sm md:text-lg">
                        LOGO 4
                    </div>
                </div>
            </div>
        </main>
    )
}