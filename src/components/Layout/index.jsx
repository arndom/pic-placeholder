import React from "react";
import { Container } from "@mui/material";
import Footer from "../footer";

const Layout = ({ children }) => {
  return (
    <>
      <Container maxWidth="xl" sx={{ px: {sm: 0} }}>
        {children}
      </Container>
      <Footer />
    </>
  );
};

export default Layout;
