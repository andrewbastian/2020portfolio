import React from "react";
import Clouds from "./Clouds";
import { Provider, lightTheme } from "@adobe/react-spectrum";

const LoadingScreen = () => {
  return (
    <div>
      <Provider theme={lightTheme} colorScheme="light">
        <h1 className="NeonHeader">Loading...</h1>
        <Clouds />
      </Provider>
    </div>
  );
};

export default LoadingScreen;
