import Image from 'next/image';
import React, { useState } from 'react'
import generateBlur from '../../utils/generateBlur';

const Specificimage = () => {
  const [type, setType] = useState(538);

  const handleChange = (event) => setType(event.target.value);

  return (
    <div className="snippet">
      <div style={{display: 'flex', flexWrap: "wrap", gap: "8px", alignItems: 'center'}}>
        <code className="code">{'/api/images/[id]'}</code>

        <p> id: 0 - 538</p>
      </div>

      <div className="imageWrapper">
        <Image
          className="placeholder"
          src={`https://picc.vercel.app/api/images/${type}`}
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
}

export default Specificimage