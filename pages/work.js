import React from "react";
import WorkSection from "../components/WorkSection";
import { workSectionInfo } from "../components/constants/workSectionInfo";

const Work = () => {
  return (
    <div>
      <WorkSection slidesInfo={workSectionInfo} />
    </div>
  );
};

export default Work;
