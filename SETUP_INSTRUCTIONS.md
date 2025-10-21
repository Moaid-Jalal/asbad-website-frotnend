# تعليمات إعداد نظام اللغات المتعددة

## المكتبات المطلوبة

قم بتثبيت المكتبة التالية:

```bash
npm install next-intl
```

## الملفات التي تم إنشاؤها/تعديلها

### 1. ملفات الترجمة
- `messages/en.json` - الترجمات الإنجليزية
- `messages/ar.json` - الترجمات العربية

### 2. ملفات الإعداد
- `i18n.ts` - إعداد next-intl
- `middleware.ts` - Middleware للتعامل مع اللغات
- `next.config.ts` - تم تحديثه لدعم next-intl

### 3. هيكل التطبيق الجديد
- `app/[locale]/layout.tsx` - Layout الرئيسي مع دعم RTL/LTR
- `app/[locale]/page.tsx` - الصفحة الرئيسية
- `app/[locale]/contact/page.tsx` - صفحة التواصل
- `app/page.tsx` - إعادة توجيه للغة الافتراضية

### 4. المكونات المحدثة
- `components/language-switcher.tsx` - مبدل اللغة (جديد)
- `components/navbar.tsx` - تم تحديثه لاستخدام الترجمات
- `components/footer.tsx` - تم تحديثه لاستخدام الترجمات
- `components/home/home-1-com.tsx` - تم تحديثه لاستخدام الترجمات

## الملفات القديمة التي يجب حذفها

بعد التأكد من أن كل شيء يعمل، يمكنك حذف:
- `app/layout.tsx` (القديم - تم استبداله بـ `app/[locale]/layout.tsx`)
- `app/contact/page.tsx` (القديم - تم استبداله بـ `app/[locale]/contact/page.tsx`)

## كيفية الاستخدام

### الوصول للموقع
- الإنجليزية: `http://localhost:3000/en`
- العربية: `http://localhost:3000/ar`
- الصفحة الرئيسية `/` ستعيد التوجيه تلقائياً إلى `/en`

### إضافة ترجمات جديدة
1. أضف المفاتيح الجديدة في `messages/en.json` و `messages/ar.json`
2. استخدمها في المكونات باستخدام:
```tsx
const t = useTranslations('namespace');
{t('key')}
```

### دعم RTL/LTR
- يتم التحكم تلقائياً في اتجاه النص من خلال `app/[locale]/layout.tsx`
- العربية: `dir="rtl"`
- الإنجليزية: `dir="ltr"`

## المكونات المتبقية

المكونات التالية لم يتم تحديثها بعد ويمكن تحديثها لاحقاً:
- `components/home/home-2-com.tsx`
- `components/home/home-3-com.tsx`
- `components/home/home-4-com.tsx`
- `components/home/home-5-com.tsx`
- `components/home/home-6-com.tsx`
- `components/home/home-7-com.tsx`
- `components/home/home-8-com.tsx`
- `components/contact/contact-1-com.tsx`
- `components/contact/contact-2-com.tsx`
- `components/contact/form.tsx`

لتحديث أي مكون:
1. أضف `'use client';` في أول السطر
2. استورد `useTranslations` من `next-intl`
3. استبدل النصوص الثابتة بـ `t('key')`
4. أضف الترجمات في ملفات JSON

## ملاحظات مهمة

1. **الأخطاء الحالية**: جميع أخطاء TypeScript الظاهرة حالياً ستختفي بعد تثبيت مكتبة `next-intl`

2. **تشغيل المشروع**: بعد تثبيت المكتبة، قم بتشغيل:
```bash
npm run dev
```

3. **مبدل اللغة**: تم إضافة مبدل اللغة في شريط التنقل (Navbar) يسمح بالتبديل بين العربية والإنجليزية

4. **الروابط**: تأكد من تحديث جميع الروابط الداخلية لتتضمن اللغة، مثل:
```tsx
<Link href={`/${locale}/contact`}>
```
