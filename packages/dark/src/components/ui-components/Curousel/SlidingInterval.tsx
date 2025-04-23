import { Carousel } from "flowbite-react";

import CardBox from "src/components/shared/CardBox";
import SlidingCuroselCode from "./Code/SlidingCuroselCode";
import blogImg1 from "/src/assets/images/blog/blog-img1.jpg"
import blogImg2 from "/src/assets/images/blog/blog-img2.jpg"
import blogImg3 from "/src/assets/images/blog/blog-img3.jpg"
import blogImg4 from "/src/assets/images/blog/blog-img4.jpg"
import blogImg5 from "/src/assets/images/blog/blog-img5.jpg"

const SlidingInterval = () => {
  return (
    <div>
      <CardBox>
        <div className="flex items-center justify-between">
          <h4 className="text-lg font-semibold">Sliding Interval</h4>
          <SlidingCuroselCode/>
        </div>
        <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
          <Carousel slideInterval={5000}>
          <img src={blogImg1} alt="..." />
            <img src={blogImg2} alt="..." />
            <img src={blogImg3} alt="..." />
            <img src={blogImg4} alt="..." />
            <img src={blogImg5} alt="..." />
          </Carousel>
        </div>
      </CardBox>
    </div>
  );
};

export default SlidingInterval;
