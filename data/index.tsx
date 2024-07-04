export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Contact", link: "#contact" },
  ];
  
  export const gridItems = [
    {
      id: 1,
      title: "Client collaboration and open communication are my top priorities",
      description: "",
      className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh] text-dark",
      imgClassName: "w-full h-full",
      titleClassName: "justify-end",
      img: "/client.png",
      spareImg: "",
    },
    {
      id: 2,
      title: "I am highly flexible with time zone communications",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "",
      spareImg: "",
    },
    {
      id: 3,
      title: "My tech stack",
      description: "Consistently learning and improving",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-center",
      img: "",
      spareImg: "",
    },
    {
      id: 4,
      title: "Enthusiastic about technology and web development",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "/grid.svg",
      spareImg: "/b4.svg",
    },
  
    {
      id: 5,
      title: (
        <span>
          Converting your{' '}
          <span style={{ color: '#00ff9b' }}>ideas</span> into reality through a blend of creativity and effective execution
        </span>
      ),
      description: "You say it, I build it",
      className: "md:col-span-3 md:row-span-2",
      imgClassName: "absolute w-full h-full",
      titleClassName: "justify-center md:justify-start lg:justify-center",
      img: "/code.jpg",
      spareImg: "/grid.svg",
    },
    {
      id: 6,
      title: "Do you want to start a project together?",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-center md:max-w-full max-w-60 text-center",
      img: "",
      spareImg: "",
    },
  ];
  
  export const projects = [
    {
      id: 1,
      title: "Milbnb: A Fullstack Airbnb Replicate",
      des: "Milbnb is a comprehensive fullstack web application inspired by Airbnb, designed to provide users with a seamless experience for booking and listing accommodations. Leveraging modern technologies, Milbnb offers an intuitive interface for users to browse, search, and reserve properties, while enabling hosts to list their spaces, manage bookings, and interact with guests. Built with robust backend infrastructure and a responsive frontend, Milbnb ensures reliability, scalability, and a smooth user experience across all devices.",
      img: "/p1.png",
      iconLists: ["next.svg", "/re.svg",  "/tail.svg", "/ts.svg", "/prisma.png","/mongo.svg"],
      link: "https://milbnb.vercel.app/",
    },
  ];
  
  export const socialMedia = [
    {
      id: 1,
      img: "/git.svg",
      link:"https://github.com/timunlipat",
    },
    {
      id: 2,
      img: "/twit.svg",
      link:"https://x.com/zamilaziz2",
    },
    {
      id: 3,
      img: "/strava.svg",
      link:"https://www.strava.com/athletes/112389118"
      ,
    },
  ];