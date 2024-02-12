import React from "react";

export default function Page() {
  return (
    <div className="w-full h-[100dvh] flex flex-col items-center justify-center">
      <p className="text-3xl sm:text-4xl">
        <span className="text-secondary-light">@somehq/</span>sometrek
      </p>
      <p className="text-sm sm:text-base text-secondary-light mt-2">
        Say goodbye to overspending. Track expenses effortlessly with sometrek.
      </p>
    </div>
  );
}
