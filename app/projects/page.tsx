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
  ];
  const cards = [
    {
      title: "Forest Adventure",
      src:       "",
    },
    {
      title: "Valley of life",
      src:       "",
    },
    {
      title: "Sala behta hi jayega",
      src:       "",
    },
    {
      title: "Camping is for pros",
      src:       "",
    },
    {
      title: "The road not taken",
      src:       "",
    },
    {
      title: "The First Rule",
      src:       "",
    },
  ];
 
  return (
    <>
      <h1 className="text-1xl md:text-4xl font-bold text-white py-6 text-center">
        <p>House of ArchDes</p>
      </h1>
      <FloatingNav navItems={navItems} />
      <FocusCards cards={cards} />;
      <Footer />
    </>
  )
}