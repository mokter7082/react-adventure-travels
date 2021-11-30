import React from "react";
import { Carousel } from "react-bootstrap";
import "./Slider.css";
import sli1 from "../../../images/big-dodzy-_DmzCXFEczc-unsplash.jpg";
import sli2 from "../../../images/ehsan-rahman-ojA0DBpe7oc-unsplash.jpg";
import sli3 from "../../../images/fareed-akhyear-chowdhury-xRlZUxpMpY4-unsplash.jpg";

const Slider = () => {
  return (
    <Carousel variant="dark">
      <Carousel.Item>
        <img
          className="d-block w-100 slider-imges"
          src={sli1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 slider-imges"
          src={sli2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 slider-imges"
          src={sli3}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default Slider;
