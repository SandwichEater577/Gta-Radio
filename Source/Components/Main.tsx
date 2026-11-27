import Top from "./Top";
import Bottom from "./Bottom";
import { useState } from "react";

export default function App() {
  const [currentStationID, setCurrentStationID] = useState<number>(2);

  return (
    <>
      <video
        autoPlay
        muted
        loop
        playsInline
        width="100%"
        style={{
          filter: "blur(10px) brightness(0.15)",
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          objectFit: "cover",
          zIndex: -1,
        }}
      >
        <source src="Videos/Background.webm" type="video/webm" />
      </video>

      <div className="flex flex-col justify-center w-screen min-h-screen">
        <Top currentStationID={currentStationID} />
        <Bottom />
      </div>
    </>
  );
}
