import Head from "next/head";
import { Button } from "@mui/material";
import styles from "../styles/Home.module.scss";
import { useState } from "react";
import * as NextImage from "next/image";
import MainModal from "../components/mainModal";

export default function Home() {
  const [open, setOpen] = useState(false);
  const mainModalProps = { open, setOpen };

  return (
    <div className={styles.container}>
      <MainModal {...mainModalProps} />

      <Head>
        <title>Pic Placeholder</title>
        <meta name="description" content="The home of placeholder images" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.main}>
        <div className={styles.gradient}>
          <video playsInline autoPlay muted loop poster="/main-gradient.png">
            <source src="/main-gradient.webm" />
          </video>
        </div>

        <div className={styles.imageContainer}>
          <NextImage src='/logo.png' alt="logo" width={100} height={100} />
        </div>

        <p className={styles.title}>
          Welcome to <span className={styles.headline}>Pic Placeholder</span>
        </p>

        <p className={styles.description}>The home of placeholder images</p>

        <div className={styles.search}>
          <Button
            variant="contained"
            className={styles.searchBtn}
            onClick={() => setOpen(true)}
          >
            Try it !
          </Button>
        </div>
      </div>
    </div>
  );
}
