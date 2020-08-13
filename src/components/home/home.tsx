import React from "react";

import { Model } from "./model";
import { About } from "./about";
import { Mission } from "./mission";

export const Home: React.FC = () => {
  return (
    <>
      <About />
      <Mission />
      <Model />
    </>
  );
};
