import {useTranslations} from "next-intl";
import Image from "next/image";
import FooterLinks, {FooterLink} from "@/components/common/footer/FooterLink";

const footerLinks: FooterLink[] = [
    {
        translationKey: "website",
        links: [
            {
                translationKey: "home",
                href: "/",
            },
            {
                translationKey: "pricing",
                href: "/pricing",
            },
            {
                translationKey: "sign-in",
                href: "https://platform.config-sync.com/auth",
            },
            {
                translationKey: "sign-up",
                href: "https://platform.config-sync.com/auth",
            }
        ]
    },
    {
        translationKey: "useful-links",
        links: [
            {
                translationKey: "terms",
                href: "/terms-of-service",
            },
            {
                translationKey: "privacy",
                href: "/privacy-policy",
            },
            {
                translationKey: "contact",
                href: "/contact",
            },
        ]
    }
];

export default function Footer() {
    const t = useTranslations("Footer");

    return (
        <footer className="w-full bg-[#FEFEFE] border-t pt-16 pb-6">
            <div className="container">
                <div className="flex flex-wrap">
                    <div className="w-full px-2">
                        <Image
                            src="/logo-big.png"
                            alt="Config Sync Logo"
                            width={200}
                            height={50}
                        />
                    </div>
                    <div className="w-full lg:w-1/2 px-2 py-8">
                        <div className="flex flex-wrap">
                            {
                                footerLinks.map((link, index) => (
                                    <FooterLinks
                                        key={index}
                                        link={link}
                                    />
                                ))
                            }
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 px-2 py-8">
                        <h3 className="text-lg font-bold uppercase">
                            {t("legal.slogan")}
                        </h3>
                        <p className="mt-2 text-[14px] opacity-75">
                            {t("legal.copyright", {
                                year: new Date().getFullYear()
                            })}
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

