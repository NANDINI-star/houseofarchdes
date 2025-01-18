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
        "A technology company that builds economic infrastructure for the internet.",
      link: "https://stripe.com",
    },
    {
      title: "Material Selection",
      description:
        "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
      link: "https://netflix.com",
    },
    {
      title: "Home Decor and Styling",
      description:
        "A multinational technology company that specializes in Internet-related services and products.",
      link: "https://google.com",
    },
    {
      title: "Theme Based Interiors",
      description:
        "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
      link: "https://meta.com",
    },
    {
      title: "3d Visualization",
      description:
        "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
      link: "https://amazon.com",
    },
    {
      title: "Lighting Design",
      description:
        "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
      link: "https://microsoft.com",
    },

    {
      title: "Working Drawings",
      description:
        "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
      link: "https://microsoft.com",
    },

    {
      title: "Execution",
      description:
        "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
      link: "https://microsoft.com",
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