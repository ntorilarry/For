import React from "react";
import Badge from "../assets/badge.png";
import "../styles/testimony.css"

function Testimony() {
  return (
    <section className="py-12 bg-[#BE6C42] overflow-hidden md:py-20 lg:py-24">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          <img className="badge" src={Badge} alt="" />
          <blockquote className="mt-10">
            <div className="max-w-4xl mx-auto text-center text-3xl leading-9 font-medium text-[#F7E7CE]">
              <p className="testim">
                Shapes traded between slouchy and blouson and utterly sleek,
                with one of the collection’s standout garments, pairs of
                sheer-ish nylon cargo pants, finding a middle ground between the
                two.
              </p>
            </div>
            <footer className="mt-8">
              <div className="md:flex md:items-center md:justify-center">
                <div className="md:flex-shrink-0"></div>
                <div className="mt-3 text-center md:mt-0 md:ml-4 md:flex md:items-center">
                  <div className="text-base font-light text-[#F7E7CE]">
                    Discover
                  </div>
                </div>
              </div>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
}

export default Testimony;
