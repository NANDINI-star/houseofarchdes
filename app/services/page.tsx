import { FloatingNav } from "../components/FloatingNav";
import { HoverEffect } from "../components/CardHoverEffect";
import { Footer } from "../components/footer/footer";

export default function Services() {

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

  const projects = [
    {
      title: "Space Planning",
      description:
        "",
      link: "",
    },
    {
      title: "Material Selection",
      description:
        "",
      link: "",
    },
    {
      title: "Home Decor and Styling",
      description:
        "",
      link: "",
    },
    {
      title: "Theme Based Interiors",
      description:
        "",
      link: "",
    },
    {
      title: "3d Visualization",
      description:
        "",
      link: "",
    },
    {
      title: "Lighting Design",
      description:
        "",
      link: "",
    },

    {
      title: "Working Drawings",
      description:
        "",
      link: "",
    },

    {
      title: "End to End Execution (just give us land)",
      description:
        "",
      link: "",
    },
    {
      title: "Designer Rugs",
      description:
        "",
      link: "",
    },
    {
      title: "US imported Furniture",
      description:
        "",
      link: "",
    },
    {
      title: "Structural/ Civil Engineering",
      description:
        "",
      link: "",
    },
    {
      title: "On site and virtual consultancies",
      description:
        "",
      link: "",
    },
    {
      title: "Modular kitchens and wardrobes",
      description:
        "",
      link: "",
    },
    {
      title: "Building Construction",
      description:
        "",
      link: "",
    },
    {
      title: "Architectural services",
      description:
        "",
      link: "",
    },
    {
      title: "Pan India designing",
      description:
        "",
      link: "",
    },
    {
      title: "Execution in Delhi NCR",
      description:
        "",
      link: "",
    },
  ];

  return (
    <>
      <h1 className="text-1xl md:text-4xl font-bold text-white py-6 text-center">
        <p>House of ArchDes</p>
      </h1>
      <FloatingNav navItems={navItems} />
      <div className="max-w-5xl mx-auto px-8 py-20">
        <HoverEffect items={projects} />
      </div>
      <Footer />
    </>
  )
}