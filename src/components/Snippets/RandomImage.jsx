import React from "react";
import Image from "next/image";
import generateBlur from "../../utils/generateBlur";

const RandomImage = () => {
  return (
    <div className="snippet">
      <code className="code">/api/random</code>

      <div className="imageWrapper">
        <Image
          className="placeholder"
          src="https://picc.vercel.app/api/random"
          alt="random image"
          layout="responsive"
          objectFit="cover"
          width="100%"
          height="100%"
          placeholder='blur'
          blurDataURL={generateBlur("100%", "100%")}
        />
      </div>
    </div>
  );
};

export default RandomImage;
