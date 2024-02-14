import createMiddleware from "next-intl/middleware";
import {languageLocales} from "@/languages";

export default createMiddleware({
    locales: languageLocales,
    defaultLocale: 'en',
    localePrefix: 'as-needed'
});

export const config = {
    matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
}