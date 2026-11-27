import Top from "./Top";
import Bottom from "./Bottom";
import { useState, useEffect } from "react";
import { radioStations } from "../Data/Data";

export default function Main() {
  const [currentStationID, setCurrentStationID] = useState<number>(1);
  const [currentStationName, setCurrentStationName] = useState<string>("");
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    setCurrentStationName(radioStations[currentStationID - 1]?.name || "");
  }, [currentStationID]);

  return (
    <>
      <video
        autoPlay
        muted
        loop
        playsInline
        width="100%"
        style={{
          filter: "blur(10px) brightness(0.35)",
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
        <Top
          currentStationID={currentStationID}
          setStationID={setCurrentStationID}
        />
        <Bottom currentStationName={currentStationName} />
      </div>
    </>
  );
}
