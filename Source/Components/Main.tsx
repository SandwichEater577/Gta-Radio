import Top from "./Top";
import Bottom from "./Bottom";
import { useRef, useEffect } from "react";

export default function App() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      // 0.5 is half speed. Change this to 0.75 for a little slower.
      videoRef.current.playbackRate = 0.5;
    }
  }, []);

  return (
    <>
      <video
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

      <Top />
      <Bottom />
    </>
  );
}
