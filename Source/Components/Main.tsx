import Top from "./Top";
import Bottom from "./Bottom";
import { useRef, useEffect, useState } from "react";

export default function App() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [shouldPlayBackwards, setShouldPlayBackwards] =
    useState<boolean>(false);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 2;
    }
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = shouldPlayBackwards ? -1 : 1;
    }
  }, [shouldPlayBackwards]);

  return (
    <>
      <video
        onEnded={() => {
          setShouldPlayBackwards((prev) => !prev);
        }}
        ref={videoRef}
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
        <source src="/Videos/Background.webm" type="video/webm" />
      </video>

      <div className="flex flex-col justify-center min-h-screen">
        <Top />
        <Bottom />
      </div>
    </>
  );
}
