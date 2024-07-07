import { projects } from "@/data";
import { PinContainer } from "./ui/ThreeDPin";
import { FaLocationArrow } from "react-icons/fa6";
import Image from "next/image";

const RecentProjects = () => {
    return(
        <div className="py-20">
            <h1 className="heading">
                A selection of{' '}
                <span className="text-purple">recent projects</span>
            </h1>
            <div
                id="projects"
                className="flex flex-wrap items-center justify-center p-4 gap-x-4 gap-y-8 mt-20">
                {projects.map(({id, title, des, img, link, iconLists}) => (
                    <div 
                        key={id}
                        className="lg:min-h-[39rem] h-[31rem] flex items-center justify-center"
                    >   
                        <PinContainer title={title} href={link}>
                            <div 
                                className="
                                    relative 
                                    flex 
                                    items-center 
                                    justify-center 
                                    lg:w-[570px]
                                    w-[80vw] 
                                    overflow-hidden 
                                    // h-[30vh]
                                    mb-10
                                    "
                                >
                                <div className="relative w-full h-full overflow-hidden rounded-3xl bg-[#13162d]">
                                    <Image src="/bg.png" alt="/bg-img" fill/>
                                </div>
                                <Image
                                    src={img}
                                    alt={title}
                                    className="z-10 absolute rounded-lg"
                                    height={500} width={500}
                                />
                            </div>
                            <h1 className="pb-4 font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                                {title}
                            </h1>
                            <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-8">
                                {des}
                            </p>
                            <div className="flex items-center justify-between mt-7 mb-3">
                                <div className="flex items-center">
                                    {iconLists.map((icon,index) => (
                                        <div 
                                            key={icon}
                                            style={{
                                                transform: `translateX(-${5 * index * 2}px)`
                                            }}
                                            className="
                                                border 
                                                border-white/[0.2] 
                                                rounded-full
                                                bg-black
                                                lg:w-10
                                                lg:h-10
                                                w-10
                                                h-10
                                                flex
                                                justify-center
                                                items-center
                                                "
                                            >
                                            <img src={icon} alt={icon} className="p-2"/>
                                        </div>
                                    ))}
                                </div>
                                <div className="flex justify-center items-center">
                                    <p className="flex lg:text-xl md:text-lg sm:text-md text-xs text-purple">Check Live Site</p>
                                    <FaLocationArrow className="ms-3" color="#CBACF9"/>
                                </div>
                            </div>
                        </PinContainer>     
                    </div>
                ))}
            </div>
        </div>
    )
}
export default RecentProjects;