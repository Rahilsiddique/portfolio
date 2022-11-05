import React from "react";
import WorkSection from "../components/WorkSection";
import { workSectionInfo } from "../pages/constants/workSectionInfo";

const Work = () => {
  console.log(workSectionInfo);
  return (
    <div>
      {workSectionInfo.map((info) => {
        return <WorkSection {...info} />;
      })}
    </div>
  );
};

export default Work;
