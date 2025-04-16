"use client";

import React from "react";
import Lottie from "lottie-react";

interface Props {
  animationData: any;
  className?: string;
  loop?: boolean;
  autoplay?: boolean;
}

const LottieClientOnly = ({ animationData, className, loop = true, autoplay = true }: Props) => {
  return <Lottie animationData={animationData} loop={loop} autoplay={autoplay} className={className} />;
};

export default LottieClientOnly;
