import React from "react";

interface LogoProps {
  className?: string;
  iconOnly?: boolean;
  size?: "sm" | "md" | "lg" | "xl";
}

export default function Logo({ className = "", iconOnly = false, size = "md" }: LogoProps) {
  // Height classes based on size preset
  const heights = {
    sm: "h-7",
    md: "h-11",
    lg: "h-16",
    xl: "h-24 md:h-28"
  };

  const selectedHeight = heights[size] || "h-11";

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* High-fidelity Vector Representation of the "SM" Monogram */}
      <svg
        viewBox="0 0 160 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${selectedHeight} w-auto`}
      >
        {/* Stylized bold 'S' */}
        <path
          d="M 45 42 
             C 28 42, 23 53, 23 60 
             C 23 72, 45 69, 45 81 
             C 45 87, 40 91, 32 91 
             C 24 91, 22 86, 22 81 
             L 11 81 
             C 11 91, 19 101, 32 101 
             C 46 101, 56 93, 56 81 
             C 56 67, 34 69, 34 59 
             C 34 53, 39 49, 45 49 
             C 51 49, 53 53, 53 57 
             L 64 57 
             C 64 47, 56 42, 45 42 Z"
          fill="currentColor"
        />

        {/* Stylized 'M' Column Left */}
        <path
          d="M 75 42 L 75 101"
          stroke="currentColor"
          strokeWidth="11"
          strokeLinecap="round"
        />

        {/* Stylized 'M' Diagonal Down-Right (Black/White) */}
        <path
          d="M 75 42 L 98 78"
          stroke="currentColor"
          strokeWidth="11"
          strokeLinecap="round"
        />

        {/* Stylized 'M' Diagonal Up-Right (Bronze/Brown) */}
        <path
          d="M 98 78 L 121 42"
          stroke="#9c6f44"
          strokeWidth="11"
          strokeLinecap="round"
        />

        {/* Stylized 'M' Column Right (Bronze/Brown) */}
        <path
          d="M 121 42 L 121 101"
          stroke="#9c6f44"
          strokeWidth="11"
          strokeLinecap="round"
        />

        {/* Extra Stylized Inner Pillar inside M (Bronze/Brown) */}
        <path
          d="M 136 62 L 136 101"
          stroke="#9c6f44"
          strokeWidth="11"
          strokeLinecap="round"
        />

        {/* Elegant Sweeping Bronze Wave intersecting the entire monogram */}
        <path
          d="M 15 80 C 25 76, 45 55, 65 72 C 85 89, 100 81, 115 62 C 125 50, 135 55, 145 68"
          stroke="#9c6f44"
          strokeWidth="6.5"
          strokeLinecap="round"
          fill="none"
        />
      </svg>

      {!iconOnly && (
        <div className="flex flex-col justify-center leading-none">
          <span className="font-display font-black tracking-wider text-[#2e251f] text-base md:text-lg uppercase">
            SMART MOVE
          </span>
          <span className="font-mono text-[9px] md:text-[10px] tracking-[0.25em] text-[#9c6f44] mt-1 uppercase font-bold">
            MARKETING AGENCY
          </span>
        </div>
      )}
    </div>
  );
}
