import React from "react";

interface ProgressBarProps {
  progress: number;
  height?: number;
  animated?: boolean;
}

const CustomProgressBar: React.FC<ProgressBarProps> = ({
  progress,
  height = 20,
  animated = true,
}) => {
  const clampedProgress = Math.min(Math.max(progress, 0), 100);
  const clipPath = "polygon(0% 50%, 2% 0%, 98% 0%, 100% 50%, 98% 100%, 2% 100%)"
return (
  <div
    className="relative w-full border-2 border-[#230203] rounded-none overflow-hidden"
    style={{
      height: `${height}px`,
      clipPath: clipPath,
    }}
  >
    <div className="absolute inset-0 bg-gradient-to-b from-[#230203] via-[#430109] to-[#230203]" />

    <div
      className={`absolute inset-y-0 left-0 bg-gradient-to-r from-[#C68B37] to-[#EED199]
        ${animated ? "transition-all duration-500 ease-out" : ""}`}
      style={{
        width: `${clampedProgress}%`,
        boxShadow: "2px 0 8px rgba(255, 200, 0, 0.3)",
        clipPath: clipPath,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent" />
    </div>

    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        boxShadow:
          "inset 0 2px 4px rgba(255, 255, 255, 0.1), inset 0 -2px 4px rgba(0, 0, 0, 0.2)",
      }}
    />
  </div>
);
};

export default CustomProgressBar;
