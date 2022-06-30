import React from "react";
import "../styles/carousel.scss"

function carousel() {
  return (
    <div>
      <div class="caro-container">
        <h1 className="gal">Gallery</h1>

        <div class="gallery-wrap">
          <div class="item item-1"></div>
          <div class="item item-2"></div>
          <div class="item item-3"></div>
          <div class="item item-4"></div>
          <div class="item item-5"></div>
        </div>
      </div>

      <div class="social">
        <a href="https://twitter.com/StefCharle" target="_blank">
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/149103/twitter.svg"
            alt=""
          />
        </a>
      </div>
    </div>
  );
}

export default carousel;
