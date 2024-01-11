import Marquee from "react-fast-marquee";
import {classNames} from "@/utils/css";
import Image from "next/image";

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
    return (
        <section id="trusted-by" className="my-8 py-8 bg-[#FCFCFC]">
            <div className="container">
                <h2 className="text-3xl font-bold text-center">
                    Trusted By The Best
                </h2>
                <p className="text-md font-medium text-center opacity-75">
                    Config Sync is trusted by the best Minecraft server owners and developers.
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
                                className={classNames(
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
                                    <Image
                                        src={`${trustedBy.logo.url}`}
                                        alt={trustedBy.name}
                                        className='w-full h-full object-contain !relative'
                                        layout='fill'
                                    />
                                </a>
                            </div>
                        ))
                    }
                </Marquee>
            </div>
        </section>
    );
}