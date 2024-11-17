import Loader from "@/components/loader/loader";
import Hero from "./home/hero/hero";
import About from "./home/about/about";
import Gallery from "./home/gallery/gallery";
import Work from "./home/work/work";
import Contact from "./home/contact/contact";

export default function Home() {
  return (
    <div>
      <Loader />
      <Hero />
      <About />
      <Gallery />
      <Work />
      <Contact />
    </div>
  );
}
