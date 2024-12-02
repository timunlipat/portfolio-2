"use client";
import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./ui/MagicButton";
import { socialMedia } from "@/data";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
    return (
        <footer className="relative w-full py-20" id="contact">
            {/* Background grid with proper positioning */}
            <div className="absolute inset-x-0 -bottom-72 min-h-96 pointer-events-none">
                <Image
                    width={1920}
                    height={768}
                    src="/footer-grid.svg"
                    alt="Decorative grid background"
                    className="w-full h-full opacity-50"
                    priority
                    quality={75}
                />
            </div>

            {/* Main content container with proper z-index */}
            <div className="relative z-10">
                {/* Hero section */}
                <div className="flex flex-col items-center text-center">
                    <h1 className="heading lg:max-w-[45vw]">
                        Ready to take <span className="text-purple">your</span> digital presence to the next level?
                    </h1>
                    <p className="text-white-200 md:mt-10 my-5 max-w-2xl">
                        Reach out to me today and let&apos;s discuss how I can help you achieve your goals.
                    </p>
                    <a
                        href="mailto:zamilaziz92@gmail.com"
                        className="hover:opacity-90 transition-opacity"
                    >
                        <MagicButton
                            title="Let's get in touch"
                            icon={<FaLocationArrow/>}
                            position="right"
                        />
                    </a>
                </div>

                {/* Footer bottom section */}
                <div className="flex pt-20 lg:flex-row flex-col justify-between items-center gap-8">
                    <p className="lg:text-base text-xs text-white-200/80">
                        Copyright © {new Date().getFullYear()} Zamil Inc. All rights reserved.
                    </p>

                    {/* Social media links */}
                    <div className="flex items-center gap-7">
                        {socialMedia.map((media) => (
                            <Link
                                key={media.id}
                                href={media.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="
                                    lg:w-10
                                    lg:h-10
                                    h-8
                                    w-8
                                    flex
                                    justify-center
                                    items-center
                                    backdrop-blur-lg
                                    bg-black-200/75
                                    rounded-lg
                                    border
                                    border-black-300
                                    hover:bg-black
                                    transition-colors
                                    duration-200
                                "
                            >
                                <Image
                                    src={media.img}
                                    alt={media.alt || `${media.id === 1 ? 'GitHub' : media.id === 2 ? 'Twitter' : 'Strava'} Profile`}
                                    width={20}
                                    height={20}
                                    className={`w-5 h-5 ${media.id === 3 ? 'scale-50' : ''}`}
                                    style={{ width: 'auto', height: 'auto' }}
                                />
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
