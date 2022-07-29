import React, { Component } from "react";
import "../styles/couture.css";

import Carousel from "react-elastic-carousel";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];
class Couture extends Component {
  state = {
    items: [
      {
        id: 1,
        imageUrl:
          "https://images.unsplash.com/photo-1544717304-a2db4a7b16ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80",
      },
      {
        id: 2,
        imageUrl:
          "https://images.unsplash.com/photo-1503104834685-7205e8607eb9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      },
      {
        id: 3,
        imageUrl:
          "https://images.unsplash.com/photo-1600484732755-b8246d320dda?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      },
      {
        id: 4,
        imageUrl:
          "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      },
      {
        id: 5,
        imageUrl:
          "https://images.unsplash.com/photo-1577746838851-816a43ca8733?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      },
      {
        id: 6,
        imageUrl:
          "https://images.unsplash.com/photo-1643185539104-3622eb1f0ff6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      },
      {
        id: 7,

        imageUrl:
          "https://images.unsplash.com/photo-1525304937537-4d586f394674?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      },
      {
        id: 8,

        imageUrl:
          "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      },
      {
        id: 9,

        imageUrl:
          "https://images.unsplash.com/photo-1600484732755-b8246d320dda?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      },
    ],
  };

  render() {
    const { items } = this.state;
    return (
      <div>
        <div className="bg-[#E6D9BF]" id="couture">
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
          <div
            className="max-w-7xl py-10 mx-auto px-4 sm:px-6 lg:px-8"
            id="meals"
          >
            <Carousel breakPoints={breakPoints} itemPadding={[0, 20]}>
              {items.map((item) => (
                <div key={item.id}>
                  <img
                    className="object-cover shadow-lg rounded-lg food"
                    src={item.imageUrl}
                    alt=""
                  />
                  {/* <p className="text-center"> {item.title}</p> */}
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    );
  }
}

export default Couture;
