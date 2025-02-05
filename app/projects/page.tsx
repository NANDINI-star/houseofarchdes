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
    {
      title: "Bedroom",
      src:       "/ten.png",
    },
    {
      title: "Bedroom",
      src:       "/eleven.png",
    },
    {
      title: "Kid's Room",
      src:       "/twelve.png",
    },
    {
      title: "Kid's Room",
      src:       "/thirteen.png",
    },
    {
      title: "Living Room",
      src:       "/forteen.png",
    },
    {
      title: "Bedroom",
      src:       "/fifteen.png",
    },
    {
      title: "Living Room",
      src:       "/eighteen.png",
    },
    {
      title: "Bedroom",
      src:       "/twenty.png",
    },
    {
      title: "Living Room",
      src:       "/twentyone.png",
    },
    {
      title: "Dining Area",
      src:       "/twentytwo.png",
    },
    {
      title: "Kitchen",
      src:       "/twentythree.png",
    },
    {
      title: "Kitchen",
      src:       "/twentyfour.png",
    },
    {
      title: "Living Area",
      src:       "/twentyfive.png",
    },
    {
      title: "Living Area",
      src:       "/twentysix.png",
    },
    {
      title: "Bedroom",
      src:       "/twentyseven.png",
    },
    {
      title: "Bedroom",
      src:       "/twentyeight.png",
    },
    {
      title: "Bedroom",
      src:       "/twentynine.png",
    },
    {
      title: "Bedroom",
      src:       "/thirty.png",
    },
    {
      title: "Bedroom",
      src:       "/thirtyone.png",
    },
    {
      title: "Bedroom",
      src:       "/thirtytwo.png",
    },
    {
      title: "Table",
      src:       "/thirtythree.png",
    },
    {
      title: "Table",
      src:       "/thirtythree.png",
    },
    {
      title: "Living Area",
      src:       "/thirtyfour.png",
    },
    {
      title: "Living Area",
      src:       "/thirtyfive.png",
    },
    {
      title: "Jewellery Store",
      src:       "/thirtysix.png",
    },
    {
      title: "Jewellery Store",
      src:       "/thirtyeight.png",
    },
    {
      title: "Bedroom",
      src:       "/forty.png",
    },
    {
      title: "Bedroom",
      src:       "/fortyone.png",
    },
    {
      title: "Jewellery",
      src:       "/fortytwo.png",
    },
    {
      title: "Office",
      src:       "/fortyfour.png",
    },
    {
      title: "Office",
      src:       "/fortyfive.png",
    },
    {
      title: "Jewellery Store",
      src:       "/fortysix.PNG",
    },
    {
      title: "Living Area",
      src:       "/fortynine.PNG",
    },
    {
      title: "Living Area",
      src:       "/fifty.PNG",
    },
    {
      title: "Living Area",
      src:       "/fiftytwo.PNG",
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