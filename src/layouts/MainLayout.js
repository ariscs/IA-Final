import React from "react";
import PropTypes from "prop-types";

import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

const MainLayout = ({ children }) => {
  return (
    <>
      <NavBar/>
      <section className="section">
        <main className="container">{children}</main>  
      </section>
      <Footer/>
    </>
  )
}

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainLayout;
