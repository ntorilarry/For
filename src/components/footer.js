import React from "react";
import "../styles/footer.css"

function Footer() {
  return (
   <div className="footbg">
       <section class="text-gray-600 body-font">
       <h1 className="forLogo">For.</h1>
  <div class="container flex flex-wrap px-5 py-20 mx-auto items-center">
    
    <div class="md:w-1/2 md:pr-12 md:py-8 md:border-r md:border-b-0 mb-10 md:mb-0 pb-10 border-b border-[#713C25]">
      <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-[#713C25]">Want to be the first to know?</h1>
      <p class="leading-relaxed text-base text-[#713C25]">FOLLOW US ON SOCIAL</p>
    </div>
    <div class="flex flex-col md:w-1/2 md:pl-12">
      <nav class="flex flex-wrap list-none -mb-1">
        <li class="lg:w-1/3 mb-1 w-1/2">
          <a class="text-[#713C25]">FAQ</a>
        </li>
        <li class="lg:w-1/3 mb-1 w-1/2">
          <a class="text-[#713C25] ">Shipping</a>
        </li>
        <li class="lg:w-1/3 mb-1 w-1/2">
          <a class="text-[#713C25] ">Return and refund policy</a>
        </li>
        <li class="lg:w-1/3 mb-1 w-1/2">
          <a class="text-[#713C25] ">Contact Us</a>
        </li>
      </nav>
    </div>
  </div>
</section>
   </div>
  );
}

export default Footer;
