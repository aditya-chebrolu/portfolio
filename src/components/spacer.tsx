"use client";
import React from "react";

const Spacer = ({ h = 0, w = 50 }: { h?: number; w?: number }) => {
  return (
    <div
      style={{
        height: `${h}px`,
        width: `${w}px`
      }}
    />
  );
};

export default Spacer;
