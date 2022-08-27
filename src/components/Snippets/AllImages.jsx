import Image from 'next/image'
import React from 'react'
import generateBlur from '../../utils/generateBlur';

const AllImages = () => {
  return (
    <div className="snippet">
      <code className="code">/api/images</code>

      <div className="imageWrapper">
        <Image
          className="placeholder"
          src="/allImages.png"
          alt="random image"
          layout="responsive"
          objectFit="cover"
          objectPosition="left"
          width="100%"
          height="100%"
          placeholder='blur'
          blurDataURL={generateBlur("100%", "100%")}
        />
      </div>
    </div>
  );
}

export default AllImages