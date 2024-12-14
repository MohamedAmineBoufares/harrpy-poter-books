import React from "react";

function Loading() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center">
      <h1 className="animate-pulse text-2xl">Fetching Books... 🔮</h1>
    </div>
  );
}

export default Loading;
