import Image from "next/image";
import React, { useState } from "react";
import generateBlur from "../../utils/generateBlur";
import { supportedTypes } from "../../utils/supportedTypes";

const AllImagesByCategory = () => {
  const [type, setType] = useState(supportedTypes[5]);

  return (
    <div className="snippet">
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "8px",
          alignItems: "center",
        }}
      >
        <code className="code">{'/api/categories/[type]'}</code>

        <select value={type} placeholder="category">
          {supportedTypes.map((item, i) => (
            <option key={i} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>

      <div className="imageWrapper">
        <Image
          className="placeholder"
          src="/imageCategory.png"
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
};

export default AllImagesByCategory;
