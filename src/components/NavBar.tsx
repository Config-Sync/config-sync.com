"use client";

import Image from "next/image";
import {classNames} from "@/utils/css";
import {GiHamburgerMenu} from "react-icons/gi";
import {HiMiniXMark} from "react-icons/hi2";
import {useNavBar} from "@/context/NavBarContext";
import Link from "next/link";
import {BsArrowRight} from "react-icons/bs";

export default function NavBar() {
    const {isNavBarOpen, setNavBarOpen, isMobile} = useNavBar();

    return (
        <nav
            className={classNames(
                "h-full w-full lg:h-auto",
                "z-50 py-4 px-6",
                "lg:border-b lg:border-gray-200",
                "absolute top-0 -left-full lg:static",
                "transition-all ease-in-out duration-200",
                "flex flex-col justify-center lg:block"
            )}
            {
                ...((isNavBarOpen && isMobile) && {
                    style: {
                        background: "rgba(0,0,0,.75)",
                        left: 0,
                    }
                })
            }
        >
            <div
                className={classNames(
                    "flex flex-col lg:flex-row justify-center lg:justify-between items-center space-y-5 lg:space-y-0",
                    "lg:container"
                )}
            >
                <div
                    className={classNames(
                        "fixed top-0 right-0 lg:hidden cursor-pointer p-2.5 border-gray-200 rounded-bl-2xl",
                        "bg-white border-solid border-2 shadow"
                    )}
                >
                    <button
                        onClick={() => setNavBarOpen(!isNavBarOpen)}
                        className="w-8 h-8 flex justify-center items-center"
                        aria-label="Toggle Navigation Menu"
                    >
                        {
                            !isNavBarOpen ? (
                                <GiHamburgerMenu className="w-full h-full"/>
                            ) : (
                                <HiMiniXMark className="w-full h-full"/>
                            )
                        }
                    </button>
                </div>
                <div className="w-1/2 lg:w-[150px] max-w-full px-1">
                    <Link href={"/"}>
                        <Image
                            src={"/logo-big.png"}
                            alt={"Config-Sync"}
                            className="!relative"
                            layout="fill"
                        />
                    </Link>
                </div>
                <div className={classNames(
                    "flex flex-col lg:flex-row flex-wrap items-center space-y-4 lg:space-y-0 lg:space-x-4",
                )}>
                    <Link
                        href="/#pricing"
                        className="px-4 py-2 text-white hover:text-gray-300 lg:text-gray-800 lg:hover:text-gray-600 font-medium transition-all duration-200 ease-in-out"
                    >
                        Pricing
                    </Link>
                    <Link
                        href="/#features"
                        className="px-4 py-2 text-white hover:text-gray-300 lg:text-gray-800 lg:hover:text-gray-600 font-medium transition-all duration-200 ease-in-out"
                    >
                        Features
                    </Link>
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
            </div>
        </nav>
    );
}