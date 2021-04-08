import React from "react";
import PersonalInfo from "./PersonalInfo";
import Experience from "./Experience";
import Education from "./Education";
import Skills from "./Skills";
import Buttons from "./Buttons";

const CVData = () => {
  return (
    <>
      <PersonalInfo />
      <Experience />
      <Education />
      <Skills />
      <Buttons />
    </>
  );
};

export default CVData;
