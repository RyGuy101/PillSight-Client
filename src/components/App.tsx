import React from "react";
import Webcam from "react-webcam";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Webcam audio={false} imageSmoothing={false} />
    </div>
  );
};

export default App;
