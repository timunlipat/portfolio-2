import { projects } from "@/data";
import { PinContainer } from "./ui/ThreeDPin";
import { FaLocationArrow } from "react-icons/fa6";
import Image from "next/image";

const RecentProjects = () => {
  return (
    <div className="py-20" id="projects">
      <h1 className="heading">
        Selection of{' '}
        <span className="text-purple">recent projects</span>
      </h1>
      <div
        className="grid lg:grid-cols-2 grid-cols-1 gap-x-[200px] gap-y-[150px] mt-20">
        {projects.map(({id, title, des, img, link, iconLists}) => (
          <div 
            key={id}
            className="lg:min-h-[45rem] h-[31rem] flex items-center justify-center"
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
                  h-[350px]
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
                  height={550} width={550}
                />
              </div>
              <h1 className="pb-4 font-bold lg:text-4xl text-base line-clamp-1">
                {title}
              </h1>
              <p className="lg:text-lg lg:font-normal font-light text-sm line-clamp-6">
                {des}
              </p>
              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {iconLists.map((icon, index) => (
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
