import { TextHoverEffect } from "./components/TextHoverEffect";
import { FloatingNav } from "./components/FloatingNav";
import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect1 } from "./components/CanvasRevealEffect1";
import { LayoutGrid } from "./components/LayoutGrid";
import { Footer } from "./components/footer/footer";

export default function Page() {
  const navItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Services",
      link: "/services",
    },
    {
      name: "Projects",
      link: "/projects",
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ];
  return (
    <div className="h-[40rem] items-center justify-center">
      <h1 className="text-1xl md:text-4xl font-bold text-white py-6 text-center">
        <p>House of ArchDes</p>
      </h1>
      <FloatingNav navItems={navItems} />
      <TextHoverEffect text="HOAD" />    
      <div className="h-screen w-full">
        <LayoutGrid cards={cards} />
      </div>
      <div className="py-20 flex flex-col lg:flex-row items-center justify-center bg-white w-full gap-4 mx-auto px-8">
        <div className="border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2]  max-w-4xl w-full mx-auto p-4 relative h-[30rem] relative">
          <Icon className="absolute h-6 w-6 -top-3 -left-3 text-black" />
          <Icon className="absolute h-6 w-6 -bottom-3 -left-3  text-black" />
          <Icon className="absolute h-6 w-6 -top-3 -right-3  text-black" />
          <Icon className="absolute h-6 w-6 -bottom-3 -right-3  text-black" />
          <AnimatePresence>
            <div className="h-full w-full absolute inset-0">
              <CanvasRevealEffect1
                animationSpeed={3}
                containerClassName="bg-black"
                colors={[
                  [255, 223, 0],     // Golden Yellow
                  [255, 166, 0], 
                ]}
                dotSize={2}
              />
            </div>
          </AnimatePresence>
          <div className="relative z-20">
            <h2 className="text-4xl font-bold text-center group-hover/canvas-card:-translate-y-8  transition duration-200 w-full  mx-auto flex items-center justify-center ">
              What is House Of ArchDes ?
            </h2>
            {/* <h2 className="text-4xl font-bold text-center group-hover/canvas-card:opacity-100 group-hover/canvas-card:opacity-0 transition duration-200 w-full  mx-auto flex items-center justify-center ">
              What is House Of ArchDes ?
            </h2> */}
            <h2 className="dark:text-white text-3xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200 text-center">
            House of ArchDes, is an interior design firm founded by Aastha Choudhary.            
            </h2>
            <h2 className="dark:text-white text-3xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200 text-center">
            At House of ArchDes, we bring together a team of professional engineers, architects, and designers to create innovative and timeless spaces. Whether you have a vision in mind or need expert guidance, we handle everything from concept to execution. 
            All you need is the land—we take care of the rest. From planning and design to construction and finishing touches, we build your dream home end to end.
            </h2>
          </div>
        </div>
      </div>
      <div>
      <Footer />
      </div>
    </div>
  );
}

const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};

const SkeletonOne = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Jewellery Store
      </p>
      <p className="font-normal text-base text-white"></p>
      
    </div>
  );
};
 
const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Kid's Room
      </p>
      <p className="font-normal text-base text-white"></p>
      
    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Let us show you what we bring to the table.
      </p>
      <p className="font-normal text-base text-white"></p>
      
    </div>
  );
};
const SkeletonFour = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Living room.
      </p>
      <p className="font-normal text-base text-white"></p>
      
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail: "/jewellery-store.png",
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail:
      "/teddy-room.png",
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail:
      "/living2.png",
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2",
    thumbnail:
      "living.png",
  },
];

