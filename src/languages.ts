export const languages = {
    en: 'English 🇺🇸🇬🇧',
    nl: 'Nederlands 🇳🇱',
};

export const languageLocales = Object.keys(languages) as Array<keyof typeof languages>;

/**
 * Check if a string is a valid locale
 *
 * @param locale The locale to check
 */
export function isLocale(locale: string): locale is keyof typeof languages {
    return locale in languages;
}