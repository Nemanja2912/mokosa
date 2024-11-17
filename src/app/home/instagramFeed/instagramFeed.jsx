"use client";

import dynamic from "next/dynamic";
import { useEffect } from "react";

const InstagramEmbed = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const script = document.createElement("script");
      script.src = "https://www.instagram.com/embed.js";
      script.async = true;
      document.body.appendChild(script);

      script.onload = () => {
        if (window.instgrm) {
          window.instgrm.Embeds.process();
        }
      };
    }
  }, []);

  return (
    <blockquote
      className="instagram-media"
      data-instgrm-permalink="https://www.instagram.com/mokosa.vracar/?hl=en"
      data-instgrm-version="12"
      style={{
        border: 0,
        margin: "1px auto", // Centriranje
        padding: 0,
        width: "100%", // Postavljanje širine na 100%
        maxWidth: "none", // Uklanjanje default max-width
      }}
    >
      <a
        href="https://www.instagram.com/mokosa.vracar/?hl=en"
        target="_blank"
        rel="noopener noreferrer"
      >
        View this post on Instagram
      </a>
    </blockquote>
  );
};

export default dynamic(() => Promise.resolve(InstagramEmbed), {
  ssr: false,
});
