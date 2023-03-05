import React, { useEffect } from "react";
import WorkSection from "../components/WorkSection";
import { workSectionInfo } from "../components/constants/workSectionInfo";
import { CarDel } from "../components/CarDel";

const Work = () => {
  return (
    <div>
      <WorkSection slidesInfo={workSectionInfo} />
      {/* <CarDel info={workSectionInfo} /> */}
    </div>
  );
};

export default Work;
