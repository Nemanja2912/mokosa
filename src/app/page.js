"use client";

import Loader from "@/components/loader/loader";
import Hero from "./home/hero/hero";
import About from "./home/about/about";
import Gallery from "./home/gallery/gallery";
import Work from "./home/work/work";
import Contact from "./home/contact/contact";
import { useEffect, useState } from "react";
import Testimonials from "./home/testimonials/testimonials";

export default function Home() {
  const [load, setLoad] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoad(true);
    }, [50]);
  }, []);

  return (
    <div>
      <Loader />
      {load && (
        <>
          <Hero />
          <About />
          <Gallery />
          <Work />
          <Contact />
          <Testimonials />
        </>
      )}
    </div>
  );
}
