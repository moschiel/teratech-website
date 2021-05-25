import React from "react";
import { routes } from "../../components/Shared/constants";

// import basic style
import "../../components/BaseStyle/Base.css";
// import components
import Header from "../../components/Header/Header";
import Banner from "../../components/Banner/Banner";
import BriefServices from "../../components/BriefServices/BriefServices";
import Footer from "../../components/Footer/Footer";

function Home() {
  return (
    <>
      <Header />
      <Banner route={routes.home} />
      <BriefServices />
      <Footer />
    </>
  );
}

export default Home;
