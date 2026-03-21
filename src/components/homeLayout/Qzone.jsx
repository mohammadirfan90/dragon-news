import React from "react";
import classImage from "../../assets/class.png";
import playground from "../../assets/playground.png";
import swimming from "../../assets/swimming.png";
const Qzone = () => {
  return (
    <div className="bg-base-200 p-3">
      <h2 className="font-bold mb-5">Qzone</h2>
      <div className="flex flex-col gap-5">
        <img src={classImage} alt="" />
        <img src={swimming} alt="" />
        <img src={playground} alt="" />
      </div>
    </div>
  );
};

export default Qzone;
