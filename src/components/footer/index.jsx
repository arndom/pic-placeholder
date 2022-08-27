import Image from "next/image";
import React from "react";
import styles from "./styles.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by{" "}
        <span className={styles.logo}>
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </span>
      </a>

      <a
        href="https://unsplash.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <p>
          Images from unsplash
        </p>
      </a>

      <a
        href="https://github.com/arndom/pic-placeholder"
        target="_blank"
        rel="noopener noreferrer"
      >
        <p>
          Source
        </p>
      </a>
    </footer>
  );
};

export default Footer;
