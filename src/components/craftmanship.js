import React from "react";
import Model from "../assets/shutterstock_1749300185 copy.png";
import "../styles/craftmanship.css";

function Craftmanship() {
  return (
    <div className="relative bg-[#E6D9BF]">
      <div className="lg:absolute lg:inset-0">
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 model-img">
          {/* <img
            className="h-56 w-full object-cover lg:absolute lg:h-full model-img"
            src={Model}
            alt=""
          /> */}
        </div>
      </div>
      <div className="relative py-16 px-4 sm:py-24 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:py-32 lg:grid lg:grid-cols-2">
        <div className="lg:pr-8">
          <div className="max-w-md mx-auto sm:max-w-lg lg:mx-0">
            <h2 class="text-sm title-font text-gray-500 tracking-widest headCraft">
              Craftmanship
            </h2>
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl craft-head">
              Real women fashion state, insidious whispering of male
            </h2>
            <p className="mt-4 text-lg text=[#713C25] sm:mt-3 text-[#713C25] craft-subtext">
              Still, what we never reckoned with then was the notion that the
              achievement of women designers today would amount to a reshaping
              of the industry—not by fitting in with male-led corporate rules
              but by steadily ignoring them, trusting their own instincts,
              living how they wish, and opening wide the creative space for a
              whole generation to thrive.
            </p>
          </div>
        </div>
        <section class="text-gray-600 body-font">
          <div class="container px-5 py-24 mx-auto">
            <div class="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-[#713C25] sm:flex-row flex-col">
              <div class="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="sm:w-16 sm:h-16 w-10 h-10"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                <h2 class="text-[#713C25] text-lg title-font font-medium mb-2">
                  The Power Of Feminine Fashion
                </h2>
                <p class="leading-relaxed text-base text-[#713C25] craft-subtext">
                Feminist Fashion Continues To Empower
                </p>
                <a href="https://www.fashionabc.org/feminist-fashion-continues-empower/" class="mt-3 text-indigo-500 inline-flex items-center">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div class="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-[#713C25] sm:flex-row flex-col">
              <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                <h2 class="text-[#713C25] text-lg title-font font-medium mb-2">
                 A Female Culture
                </h2>
                <p class="leading-relaxed text-base text-[#713C25] craft-subtext">
                The Present Is Female: The Designers Behind a Fashion Revolution
                </p>
                <a href="https://www.vogue.com/article/female-designers-fashion-revolution-vogue-august-2019-issue" class="mt-3 text-indigo-500 inline-flex items-center">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
              <div class="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="sm:w-16 sm:h-16 w-10 h-10"
                  viewBox="0 0 24 24"
                >
                  <circle cx="6" cy="6" r="3"></circle>
                  <circle cx="6" cy="18" r="3"></circle>
                  <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                </svg>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
export default Craftmanship;
