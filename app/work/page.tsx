import React from "react";
import Hero from "@/app/components/Hero";
import Portfolio from "@/app/components/Portfolio";

const Work = () => {
  return (
    <div>
      <Hero heading="My Work" message="This is some of my recent works." />
      <Portfolio />
    </div>
  );
};

export default Work;
