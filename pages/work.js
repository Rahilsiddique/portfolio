import React from "react";
import WorkSection from "../components/WorkSection";
import { workSectionInfo } from "../components/constants/workSectionInfo";

const Work = () => {
  console.log(workSectionInfo);
  return (
    <div>
      <WorkSection slidesInfo={workSectionInfo} />
    </div>
  );
};

export default Work;
