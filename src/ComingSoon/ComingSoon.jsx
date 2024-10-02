import { useState, useEffect } from "react";
import "./ComingSoon.css";

import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown";
import "@leenguyen/react-flip-clock-countdown/dist/index.css";

const ComingSoon = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust for mobile screens
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Set initial value

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const now = new Date();
  const today7PM = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate(),
    19,
    0,
    0
  ); // Today at 7 PM (19:00 in 24-hour format)

  // If it's already past 7 PM today, set it to tomorrow 7 PM
  if (now.getTime() > today7PM.getTime()) {
    today7PM.setDate(today7PM.getDate() + 1); // Move to tomorrow 7 PM
  }

  const countdownTime = today7PM.getTime();

  return (
    <div className="coming-soon-container">
      <video autoPlay loop muted playsInline id="background-video">
        <source
          src="https://lexodd.s3.ap-south-1.amazonaws.com/LEXODD+PROMO.mp4"
          type="video/mp4"
        />
      </video>
      <h1 className="title">COMING SOON</h1>
      <div className="countdown">
        <FlipClockCountdown
          to={countdownTime}
          labels={["DAYS", "HOURS", "MINUTES", "SECONDS"]}
          labelStyle={{
            fontSize: isMobile ? 8 : 10, // Smaller font for mobile
            fontWeight: 500,
            textTransform: "uppercase",
          }}
          digitBlockStyle={{
            width: isMobile ? 30 : 40, // Smaller width for mobile
            height: isMobile ? 50 : 60, // Smaller height for mobile
            fontSize: isMobile ? 20 : 30, // Smaller font for mobile
            opacity: 0.8,
          }}
          dividerStyle={{ color: "white", height: 1 }}
          separatorStyle={{ color: "#823e8f", size: "6px" }}
          duration={0.5}
        >
          Finished
        </FlipClockCountdown>
      </div>
    </div>
  );
};

export default ComingSoon;
