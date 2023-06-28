import React from "react";
import Contact from "@/app/components/Contact";
import Hero from "@/app/components/Hero";

const contact = () => {
  return (
    <div>
      <Hero
        heading="Contact"
        message="Submit the form below for more work and quotes"
      />
      <Contact />
    </div>
  );
};

export default contact;
