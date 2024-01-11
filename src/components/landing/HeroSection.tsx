import {BsArrowRight} from "react-icons/bs";
import {classNames} from "@/utils/css";
import Image from "next/image";

export default function HeroSection() {
    return (
        <section id="hero" className="flex flex-col justify-center items-center py-12">
            <div className="container">
                <div className="max-w-full md:max-w-2xl xl:max-w-3xl mx-auto">
                    <h1 className="text-4xl font-bold text-center">
                        <span className="text-primary">Effortlessly</span> Synchronize Your Minecraft Server <span
                        className="text-primary">Configurations</span>
                    </h1>
                    <p className="text-center opacity-60 mt-4">
                        Config Sync is a configuration synchronization platform for Minecraft Servers that have multiple
                        server instances that should contain the same configuration files.
                    </p>
                </div>
            </div>
            <div className="mx-auto">
                <a
                    className={classNames(
                        "bg-neutral-900 hover:bg-neutral-800 text-white text-sm font-medium",
                        "mt-8 px-4 py-2 rounded-md",
                        "transition-all duration-200 ease-in-out",
                        "flex items-center space-x-2"
                    )}
                    href="https://app.config-sync.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Get Started <BsArrowRight className="inline-block ml-2"/>
                </a>
            </div>
            <div>
                <div className="relative isolate">
                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
                        <div
                            style={{
                                clipPath:
                                    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                            }}
                            className={classNames(
                                "aspect-[1155/678] w-[36.125rem] sm:w-[72.1875rem]",
                                "relative left-[calc(50%-11rem)] -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)]",
                                "bg-gradient-to-tr from-[#00172D] to-[#00498D] opacity-20",
                            )}
                        />
                    </div>
                    <div>
                        <div className="mx-auto max-w-4xl px-6 lg:px-8">
                            <div className="mt-16 flow-root sm:mt-24">
                                <div
                                    className={classNames(
                                        "-m-2 p-2 lg:-m-4 lg:p-3",
                                        "ring-1 ring-inset ring-gray-900/10",
                                        "rounded-xl bg-gray-900/5 lg:rounded-2xl"
                                    )}>
                                    <Image
                                        src="/landing/preview.webp"
                                        alt="product preview"
                                        layout="fill"
                                        className={classNames(
                                            "rounded-md bg-white shadow-2xl ring-1 ring-gray-900/10",
                                            "w-full h-full object-cover !relative"
                                        )}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
                        <div
                            style={{
                                clipPath:
                                    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                            }}
                            className={classNames(
                                "aspect-[1155/678] w-[36.125rem] sm:w-[72.1875rem]",
                                "relative left-[calc(50%-13rem)] -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-36rem)]",
                                "bg-gradient-to-tr from-[#00172D] to-[#00498D] opacity-30",
                            )}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}