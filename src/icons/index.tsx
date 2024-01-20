"use client"
import React from "react";

const sizes = {
    xs: "h-auto w-3",
    sm: "h-auto w-4",
    md: "h-auto w-5",
    mid: "h-auto w-6",
    lg: "h-auto w-7",
    xl: "h-auto w-9",
    xxl: "h-auto w-14",
    original: "",
  };
  
  interface iconProp {
    size?: "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | "original";
    className?: string;
  }
  //1
  export const EmailIcon = ({ size = "original", className }: iconProp) => {
    return (
      <svg
        width="22"
        height="18"
        viewBox="0 0 22 18"
        className={`${sizes[size]} ${className ? className : ""}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.97518e-09 5.124L10.654 10.665C10.7609 10.7206 10.8795 10.7496 11 10.7496C11.1205 10.7496 11.2391 10.7206 11.346 10.665L22 5.125V14.75C22.0001 15.5801 21.6824 16.3788 21.1123 16.9822C20.5422 17.5856 19.7628 17.948 18.934 17.995L18.75 18H3.25C2.41986 18.0001 1.62117 17.6824 1.01777 17.1123C0.414367 16.5422 0.0519987 15.7628 0.00500012 14.934L6.97518e-09 14.75V5.124ZM3.25 6.97519e-09H18.75C19.5801 -5.43467e-05 20.3788 0.317554 20.9822 0.887671C21.5856 1.45779 21.948 2.23719 21.995 3.066L22 3.25V3.434L11 9.154L6.97518e-09 3.434V3.25C-5.43467e-05 2.41986 0.317554 1.62117 0.887672 1.01777C1.45779 0.414367 2.23719 0.0519987 3.066 0.00500012L3.25 6.97519e-09H18.75H3.25Z"
          fill="#2A2A2A"
        />
      </svg>
    );
  };