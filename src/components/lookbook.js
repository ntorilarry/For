import React from "react";
import "../styles/lookbook.css";

function Lookbook() {
  return (
    <div id="lookgood">
      <div className="lbook">
        <div className="mx-auto max-w-7xl">
          <div className="text-center looking-head">
            <h1 className="text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl flex justify-center ">
              <span className="lookhead">Look</span>{" "}
              <span className="lookgood-head">Good</span>
            </h1>
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl flex justify-center">
              <span className="bookhead">For.</span>{" "}
              <span className="bookspan">you darling</span>
            </h1>
            <button className="mt-6 button-59"><a href="https://blog.flipsnack.com/10-fashion-lookbook-examples-for-design-inspiration/">Check out our Lookbook</a></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Lookbook;
