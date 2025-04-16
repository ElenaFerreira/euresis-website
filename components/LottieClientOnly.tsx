"use client";

import React from "react";
import Lottie, { LottieOptions } from "lottie-react";

interface Props {
  animationData: LottieOptions["animationData"];
  className?: string;
  loop?: boolean;
  autoplay?: boolean;
}

const LottieClientOnly = ({ animationData, className, loop = true, autoplay = true }: Props) => {
  return <Lottie animationData={animationData} loop={loop} autoplay={autoplay} className={className} />;
};

export default LottieClientOnly;
