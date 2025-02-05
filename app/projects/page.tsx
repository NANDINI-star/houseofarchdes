import { FloatingNav } from "../components/FloatingNav";
import { FocusCards } from "../components/FocusCards";
import { Footer } from "../components/footer/footer";

export default function Projects() {
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
  ]
  const cards = [
    {
      title: "Bedroom",
      src: "/one.png",
    },
    {
      title: "Kid's room",
      src:       "/two.png",
    },
    {
      title: "Entrance",
      src:       "/three.png",
    },
    {
      title: "Entrance",
      src:       "/four.png",
    },
    {
      title: "Bedroom",
      src:       "/five.png",
    },
    {
      title: "Kid's Study",
      src:       "/six.png",
    },
    {
      title: "Bedroom",
      src:       "/seven.png",
    },
    {
      title: "Bedroom",
      src:       "/eight.png",
    },
    {
      title: "Bedroom",
      src:       "/nine.png",
    },
  ]
 
  return (
    <>
      <h1 className="text-1xl md:text-4xl font-bold text-white py-6 text-center">
        <p>House of ArchDes</p>
      </h1>
      <FloatingNav navItems={navItems} />
      <FocusCards cards={cards} />
      <Footer />
    </>
  )
}