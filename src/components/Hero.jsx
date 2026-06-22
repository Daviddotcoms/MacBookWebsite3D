import React from "react";
import { useEffect } from "react";
import { useRef } from "react";

const Hero = () => {
  const videoRef = useRef(null);

  return (
    <section id="hero">
      <div>
        <h1>MacBook Pro</h1>
        <img src="/title.png" alt="MacBook Title" />
      </div>

      <video src="/videos/hero.mp4" autoPlay playsInline muted></video>
    </section>
  );
};

export default Hero;
