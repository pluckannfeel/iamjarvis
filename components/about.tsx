"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p>
        I am a developer with passion and optimism,{" "}
        <span className="font-medium">desire to meet success and happiness in life.</span> I
        specialize in full-stack development, with a core stack that includes
        <span className="font-medium">
          React (JavaScript, TypeScript), Python (FastAPI), and PostgreSQL.
        </span>
        Additionally, I have hands-on experience with cloud technology services
        from{" "}
        <span className="font-medium">
          {" "}
          Amazon Web Services and Google Cloud Platform.
        </span>
        In addition, I have a strong background in{" "}
        <span className="font-medium">
          data analysis, including ETL data pipelines and data automation used
          for graphs and reports.{" "}
        </span>
      </p>

      <br></br>

      <p>
        <span className="italic">When I am not working</span>, I enjoy walking
        and outdoor activities (hiking and camping). I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">
          new tools in technology such as building mobile apps in React Native
        </span>
        . I am also also passionate about wonderful scenery and photography.
        Lastly, I want to learn how to swim.
      </p>
    </motion.section>
  );
}
