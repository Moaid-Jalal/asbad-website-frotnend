'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import { locales } from '@/i18n';
import Image from 'next/image';

export const LanguageSwitcher = () => {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (newLocale: string) => {
    // Remove current locale from pathname
    const pathWithoutLocale = pathname.replace(`/${locale}`, '');
    // Navigate to new locale
    router.push(`/${newLocale}${pathWithoutLocale}`);
  };

  return (
    <div className="flex items-center gap-2">
      {locales.map((loc) => (
        <button
          key={loc}
          onClick={() => switchLocale(loc)}
          className={`w-8 h-8 rounded-full overflow-hidden border-2 transition-all duration-200 ${
            locale === loc
              ? 'border-red-600 shadow-lg scale-110'
              : 'border-gray-300 hover:border-red-400 hover:scale-105'
          }`}
          title={loc === 'en' ? 'English' : 'العربية'}
        >
          <Image
            src={loc === 'en' ? '/flag-en.svg' : '/flag-ar.svg'}
            alt={loc === 'en' ? 'English' : 'العربية'}
            width={32}
            height={32}
            className="w-full h-full object-cover"
          />
        </button>
      ))}
    </div>
  );
};
