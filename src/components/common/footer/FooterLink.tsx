import {useTranslations} from "next-intl";

export interface FooterLink {

    translationKey: string;
    links: {
        translationKey: string;
        href: string;
    }[];

}

interface FooterLinksProps {

    link: FooterLink;

}

export default function FooterLinks({link}: FooterLinksProps) {
    const t = useTranslations(`Footer.${link.translationKey}`);

    return (
        <div className="w-1/2 lg:w-1/4 p-2">
            <h3 className="text-lg font-bold">
                {t("title")}
            </h3>
            <ul className="mt-2">
                {
                    link.links.map((link, index) => (
                        <li key={index}>
                            <a
                                href={link.href}
                                className="text-[15px] text-gray-500 hover:text-primary"
                            >
                                {t(`links.${link.translationKey}`)}
                            </a>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}