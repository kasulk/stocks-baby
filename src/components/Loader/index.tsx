import React from "react";

export default function Loader() {
  return (
    // <div className="flex justify-center items-center h-screen">
    <div className="flex justify-center items-start h-[50vh] pt-12">
      {/* <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-solid"></div> */}
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-solid border-accent-2"></div>
    </div>
  );
}
