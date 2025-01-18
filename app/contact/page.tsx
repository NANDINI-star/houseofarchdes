import { FloatingNav } from "../components/FloatingNav";
import { Footer } from "../components/footer/footer";

export default function Contact() {
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
    <>
      <h1 className="text-1xl md:text-4xl font-bold text-white py-6 text-center">
        <p>House of ArchDes</p>
      </h1>
      <FloatingNav navItems={navItems} />
      <Footer />
    </>
  )
}