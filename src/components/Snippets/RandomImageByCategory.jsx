import Image from "next/image";
import React, { useEffect, useState } from "react";
import generateBlur from "../../utils/generateBlur";
import { supportedTypes } from "../../utils/supportedTypes";

const RandomImageByCategory = () => {
  const [type, setType] = useState(supportedTypes[0]);

  const handleChange = (event) => setType(event.target.value);

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
        <code className="code">{`/api/random/${[type]}`}</code>

        <select value={type} placeholder="category" onChange={handleChange}>
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
          src={`https://picc.vercel.app/api/random/${type}`}
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

export default RandomImageByCategory;
