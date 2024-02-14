import Marquee from "react-fast-marquee";
import {cn} from "@/utils/css";
import Image from "next/image";
import {Suspense} from "react";
import {useTranslations} from "next-intl";

// TODO: Replace with PayloadCMS integration
const trustedBy = [
    {
        name: 'VertCode Development',
        url: 'https://vertcode.dev',
        logo: {
            url: '/logo-big.png',
        },
    },
]

export default function TrustedBySection() {
    const t = useTranslations('Landing.Trusted-By');

    return (
        <section id="trusted-by" className="my-8 py-8 bg-[#FCFCFC]">
            <div className="container">
                <h2 className="text-3xl font-bold text-center">
                    {t('title')}
                </h2>
                <p className="text-md font-medium text-center opacity-75 mt-1">
                    {t('sub-title')}
                </p>
            </div>
            <div className="container mt-8">
                <Marquee
                    autoFill={true}
                >
                    {
                        trustedBy.map((trustedBy, index) => (
                            <div
                                key={index}
                                className={cn(
                                    'flex max-w-[250px] max-h-[125px] px-4 mx-8'
                                )}
                            >
                                <a
                                    href={trustedBy.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full h-full"
                                    aria-label={trustedBy.name}
                                >
                                    <Suspense fallback={<div className="w-[250px] h-[125px] bg-slate-400 animate-pulse"/>}>
                                        <Image
                                            src={trustedBy.logo.url}
                                            alt={trustedBy.name}
                                            width={250}
                                            height={125}
                                            quality={100}
                                        />
                                    </Suspense>
                                </a>
                            </div>
                        ))
                    }
                </Marquee>
            </div>
        </section>
    );
}