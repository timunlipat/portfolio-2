"use client";
import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./ui/MagicButton";
import { socialMedia } from "@/data";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
    return(
        <footer className="w-full py-20" id="contact">
            <div className="w-full absolute left-0 -bottom-72 min-h-96">
                <Image
                    width={200}
                    height={200}
                    src="/footer-grid.svg"
                    alt="grid"
                    className="w-full h-full opacity-50"
                />
            </div>
            <div className="flex flex-col items-center text-center">
                <h1 className="heading lg:max-w-[45vw]">
                    Ready to take <span className="text-purple">your</span> digital presence to the next level?
                </h1>
                <p className="text-white-200 md:mt-10 my-5">
                    Reach out to me today and let&apos;s discuss how I can help you achieve your goals.
                </p>
                <a href="mailto:zamilaziz92@gmail.com">
                    <MagicButton
                        title="Let's get intouch"
                        icon={<FaLocationArrow/>}
                        position="right"
                    />
                </a>
            </div>
            <div className="flex pt-20 lg:flex-row flex-col justify-between items-center">
                <p className="lg:text-base lg:font-normal text-xs font-light">
                    Copyright © 2024 Zamil Inc. All rights reserved.
                </p>
                <div className="flex items-center lg:gap-7 lg:pt-0 pt-10 gap-7">
                    {socialMedia.map((media) => (
                        <div 
                            key={media.id}
                            className="
                                lg:w-10
                                lg:h-10
                                h-8
                                w-8
                                cursor-pointer 
                                flex 
                                justify-center 
                                items-center 
                                backdrop-filter
                                backdrop-blur-lg 
                                saturat-180 
                                bg-opacity-75
                                bg-black-200
                                rounded-lg
                                border
                                border-black-300
                                hover:bg-black
                                "
                            >
                            <Link href={media.link} passHref target="_blank" rel="noopener noreferrer">
                                <Image
                                    src={media.img}
                                    alt={media.img}
                                    height={23}
                                    width={23}
                                />
                            </Link>               
                        </div>
                    ))}
                </div>
            </div>
        </footer>
    )
}
export default Footer;