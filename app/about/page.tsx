import { FloatingNav } from "../components/FloatingNav"
import { Footer } from "../components/footer/footer";
import { TextRevealCard } from "../components/TextRevealCard"
import { TextRevealCardTitle } from "../components/TextRevealCard"
import { TextRevealCardDescription } from "../components/TextRevealCard"

export default function About() {
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
    <div>
      <h1 className="text-1xl md:text-4xl font-bold text-white py-6 text-center">
        <p>House of ArchDes</p>
      </h1>
      <div className="flex items-center justify-center bg-white h-[40rem] rounded-2xl w-full">
       
      <FloatingNav navItems={navItems} />
      <TextRevealCard
        text="You know the dreams"
        revealText="We bring dreams to life"
      >
        <TextRevealCardTitle>
          Sometimes, you just need to see it.
        </TextRevealCardTitle>
        <TextRevealCardDescription>
          House of ArchDes
        </TextRevealCardDescription>
      </TextRevealCard>
    </div>
    <Footer />
    </div>
    
  )
}