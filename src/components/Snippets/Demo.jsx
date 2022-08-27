import Image from "next/image";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import generateBlur from "../../utils/generateBlur";

const Demo = () => {
  const images = [257, 473, 124, 538, 238, 336, 352, 350, 239, 258, 327];

  const slideSettings = {
    centerMode: true,
    infinite: true,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  };

  return (
    <div className="snippet">
      <Slider {...slideSettings}>
        {images.map((image, i) => (
          <div className="imageWrapper slideImage" key={i}>
            <Image
              className="placeholder"
              src={`https://picc.vercel.app/api/images/${image}`}
              alt="random image"
              layout="responsive"
              objectFit="cover"
              width="100%"
              height="100%"
              placeholder='blur'
              blurDataURL={generateBlur("100%", "100%")}
            />

            <code className="code">{`/api/images/${[image]}`}</code>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Demo;
