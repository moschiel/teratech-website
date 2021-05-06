import React from "react";
import { routes } from "../Shared/constants";
import BannerHome from "./BannerHome/BannerHome";
import BannerServices from "./BannerServices/BannerServices";

//RETORNA O BANNER ESCOLHIDO
function Banner(props) {
  if (props.route === routes.home) return <BannerHome />;
  else {
    return <BannerServices route={props.route} />;
  }
}

Banner.defaultProps = {
  route: routes.home,
};

export default Banner;
