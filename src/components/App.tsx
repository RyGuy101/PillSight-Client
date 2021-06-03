import React from "react";
import Webcam from "react-webcam";
import { Button } from "reactstrap";

import "./App.css";

const videoConstraints = {
  facingMode: { exact: "environment" },
};

const App = () => {
  const webcamRef = React.useRef<Webcam>(null);

  // https://stackoverflow.com/questions/7951326/how-to-save-a-base64-image-to-users-disk-using-javascript
  const saveBase64AsFile = (base64: string, fileName: string) => {
    const link = document.createElement("a");

    document.body.appendChild(link); // for Firefox

    link.setAttribute("href", base64);
    link.setAttribute("download", fileName);
    link.click();
  };

  return (
    <div className="App">
      <Webcam
        id="webcam"
        audio={false}
        imageSmoothing={false}
        videoConstraints={videoConstraints}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
      />
      <Button
        color="danger"
        id="scan-btn"
        onClick={() => {
          if (webcamRef.current) {
            const imageSrc = webcamRef.current.getScreenshot();
            if (imageSrc) {
              saveBase64AsFile(imageSrc, "pills.jpeg");
            }
          }
        }}
      >
        Scan
      </Button>
    </div>
  );
};

export default App;
