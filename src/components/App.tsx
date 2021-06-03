import React from "react";
import Webcam from "react-webcam";
import { Button } from "reactstrap";

import "./App.css";

const videoConstraints = {
  facingMode: { exact: "environment" },
};

const App = () => {
  return (
    <div className="App">
      <Webcam
        audio={false}
        imageSmoothing={false}
        videoConstraints={videoConstraints}
      />
      <Button color="danger" id="scan-btn">
        Scan
      </Button>
    </div>
  );
};

export default App;
