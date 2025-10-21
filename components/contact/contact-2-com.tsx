'use client';

import Image from "next/image";
import { useTranslations } from 'next-intl';

export const ContactSecondCom = () => {
    const t = useTranslations('contact.info');

    return (
        <main className="container mx-auto px-4 sm:px-6 lg:px-8 mb-16 mt-24 md:mt-42">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    <div className="flex items-center md:justify-center space-x-6 relative">
                        <div className="flex-shrink-0">
                            <Image
                                src="/location.svg"
                                alt="Location"
                                width={70}
                                height={70}
                            />
                        </div>
                        <div className="flex flex-col">
                            <h3 className="text-2xl font-semibold text-gray-900 mb-2">{t('visit.title')}</h3>
                            <p className="text-gray-600">{t('visit.address')}</p>
                        </div>
                        {/* Vertical red border - hidden on mobile, visible on md+ screens */}
                        <div className="hidden md:block absolute -right-6 top-0  h-full bg-red-600 w-[2px]"></div>
                    </div>

                    <div className="flex items-center md:justify-center space-x-6 relative">
                        <div className="flex-shrink-0">
                            <Image
                                src="/phone.svg"
                                alt="Phone"
                                width={74}
                                height={74}
                            />
                        </div>
                        <div className="flex flex-col">
                            <h3 className="text-2xl font-semibold text-gray-900 mb-2">{t('call.title')}</h3>
                            <p className="text-gray-600">{t('call.phone')}</p>
                        </div>
                        {/* Vertical red border - hidden on mobile, visible on md+ screens */}
                        <div className="hidden md:block absolute -right-6 top-0 h-full bg-red-600 w-[2px]"></div>
                    </div>

                    <div className="flex items-center md:justify-center space-x-6">
                        <div className="flex-shrink-0">
                            <Image
                                src="/gmail.svg"
                                alt="Shape"
                                width={74}
                                height={74}
                            />
                        </div>
                        <div className="flex flex-col">
                            <h3 className="text-2xl font-semibold text-gray-900 mb-2">{t('message.title')}</h3>
                            <p className="text-gray-600">{t('message.email')}</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
};