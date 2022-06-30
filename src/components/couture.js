import React from "react";
import "../styles/couture.css";
import Carousell from "./carousel";

function Couture() {
  return (
    <div>
      <div className="bg-[#E6D9BF]">
        <div className="max-w-7xl mx-auto text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8 leading-none cout-con">
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl couture-head">
            For.<span className="couture-subhead">future</span>
          </h1>
          <h1 className="cout-head">Couture.</h1>
          <p className="couttext">
            With the young leading the charge against giant corporations, the
            appeal of small labels with big visions will only grow.
          </p>
        </div>
        <Carousell/>
      </div>
    </div>
  );
}

export default Couture;
