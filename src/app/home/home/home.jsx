"use client";

import Loader from "@/components/loader/loader";
import Hero from "../hero/hero";
import About from "../about/about";
import Gallery from "../gallery/gallery";
import Work from "../work/work";
import Contact from "../contact/contact";
import { useEffect, useState } from "react";

const HomeBody = () => {
  const [load, setLoad] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoad(true);
    }, [100]);
  }, []);

  return (
    <>
      {load && (
        <>
          <Loader />
          <Hero />
          <About />
          <Gallery />
          <Work />
          <Contact />
        </>
      )}
    </>
  );
};

export default HomeBody;
