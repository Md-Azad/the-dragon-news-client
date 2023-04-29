import React from "react";
import qZone1 from "../../../assets/qZone1.png";
import qZone2 from "../../../assets/qZone2.png";
import qZone3 from "../../../assets/qZone3.png";

const Qzone = () => {
  return (
    <div className="bg-light my-5">
      <h4 className="text-center py-3">QZone</h4>
      <div className="text-center py-3">
        <img src={qZone1} alt="" />
        <img src={qZone2} alt="" />
        <img src={qZone3} alt="" />
      </div>
    </div>
  );
};

export default Qzone;
