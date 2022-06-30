import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import "../styles/hero.css";
import Lady from "../assets/lady2.png";
import Logo from "../assets/logo_FOR..png";
import Craftmanship from "./craftmanship";
import BigBeauty from "./bigBeauty";
import Testimonial from "./testimonials";
import Lookbook from "./lookbook";
import Testimony from "./testimony";
import Footer from "./footer";
import Couture from "./couture";

const navigation = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" },
];

function Hero() {
  return (
    <div className="bg-[#E6D9BF] bgg">
      <div className="relative overflow-hidden">
        <div className="relative">
          <Popover>
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
              <nav
                className="relative flex items-center justify-between sm:h-10 md:justify-center"
                aria-label="Global"
              >
                <div className="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
                  <div className="flex items-center justify-between w-full md:w-auto">
                    <a href="#">
                      <span className="sr-only">Workflow</span>
                      <img className="h-8 w-auto sm:h-10" src={Logo} alt="" />
                    </a>
                    <div className="-mr-2 flex items-center md:hidden">
                      <Popover.Button className="bg-gray-50 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <span className="sr-only">Open main menu</span>
                        <MenuIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                </div>
                <div className="hidden md:flex md:space-x-10">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="font-medium text-gray-500 hover:text-gray-900"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </nav>
            </div>

            <Transition
              as={Fragment}
              enter="duration-150 ease-out"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="duration-100 ease-in"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Popover.Panel
                focus
                className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
              >
                <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                  <div className="px-5 pt-4 flex items-center justify-between">
                    <div>
                      <img
                        className="h-8 w-auto"
                        src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                        alt=""
                      />
                    </div>
                    <div className="-mr-2">
                      <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <span className="sr-only">Close main menu</span>
                        <XIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className="px-2 pt-2 pb-3 space-y-1">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          <div className="bgg">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 mt-12">
              <div className="text-center">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl flex justify-center heroText">
                  <span>For.</span> <span className="heroEvery">every</span>
                </h1>
                <h1 className="heroWoman">Woman</h1>
              </div>
            </div>
            <div className="relative">
              <div className="max-w-5xl mx-auto px-4 sm:px-6 ladiesIMG">
                <img
                  className="relative rounded-lg"
                  src={Lady}
                  alt="App screenshot"
                />
              </div>
              <div id="scroll-container">
                <div id="scroll-text">
                  The Present Is Female: The Designers Behind a Fashion
                  Revolution The Present Is Female: The Designers Behind a
                  Fashion Revolution The Present Is Female: The Designers Behind
                  a Fashion Revolution
                </div>
              </div>
              <Craftmanship />
              <BigBeauty />
              <Testimonial />
              <Lookbook />
              <Couture/>
              <Testimony/>
              <Footer/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Hero;
