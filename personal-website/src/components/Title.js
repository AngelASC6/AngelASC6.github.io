import React from "react";

export default function Title({ title }) {
  return (
    <div className="inline-block">
      <h1 className="text-5xl font-bold text-[#064523] mb-4">{title}</h1>
      {/* Stylized underline for the above title */}
      <div
        className="h-1 bg-[#158749] rounded-md mx-auto"
        style={{ width: "75%" }}
      ></div>
    </div>
  );
}
