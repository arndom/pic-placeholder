
import React from "react";
import {
  Box,
  Typography,
  IconButton
} from "@mui/material";
import Image from "next/image";
import styles from './styles.modules.scss';

const Others = () => {
  return (
    <>
      <Box className={styles.info}>
        <Box className={styles.left} mx={3}>
          <Box className={styles.leftContent}>
            <Typography variant="h1">Specific Image</Typography>

            <Typography variant="body1" component="p">
              Get a specific image by adding{" "}
              <Typography variant="inherit" component="span">
                <code className={styles.code}>{"/api/{id}"}</code> to the start
                of
              </Typography>
              the url.
            </Typography>

            <code className={styles.code}>https://pics.vercel.app/api/12</code>
          </Box>
        </Box>

        <Box className={styles.right} mx={3}>
          <Box className={styles.image} />
        </Box>
      </Box>

      <Box className={[styles.info, styles.reverse]}>
        <Box className={styles.left} mx={3}>
          <Box className={styles.leftContent}>
            <Typography variant="h1">List of images</Typography>

            <Typography variant="body1" component="p">
              Get a specific image by adding{" "}
              <Typography variant="inherit" component="span">
                <code className={styles.code}>{"/api/{id}"}</code> to the start
                of
              </Typography>
              the url.
            </Typography>

            <code className={styles.code}>https://pics.vercel.app/api/12</code>
          </Box>
        </Box>

        <Box className={styles.right} mx={3}>
          <Box className={styles.image} />
        </Box>
      </Box>

      <IconButton className={styles.scroll} disableRipple href="#/">
        <Typography component="p">Documentation</Typography>
        <Image
          src="/doubleCarett.svg"
          alt="scroll"
          width={25}
          height={25}
          className={styles.carett}
        />
      </IconButton>
    </>
  );
};

export default Others;
