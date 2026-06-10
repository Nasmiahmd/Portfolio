import React from "react";

const Card = () => {
  return (
    <>
      <div className="overflow-hidden">
        {/* Background Glow */}
        <div
          className="
          absolute
          left-1/2
          -translate-x-1/2
          w-[90vw]
          max-w-150
          rounded-full
          bg-[radial-gradient(circle,rgba(120,180,80,0.25)_0%,transparent_70%)]
          blur-3xl
        "
        />

        {/* Glass Card */}
        <div
          className="
          relative
          w-[90vw] max-w-105
          h-105
          rounded-4xl
          bg-white/10
          backdrop-blur-xl
          border border-white/10
          shadow-[0_8px_40px_rgba(0,0,0,0.35)]
          p-6
        "
        >
          {/* Inner White Card */}
          <div
            className="
            w-full
            h-62.5
            rounded-3xl
            bg-white/90
            border border-white/20
          "
          />

          <div className="mt-6 text-white">
            <h2 className="text-3xl font-bold">Your Enterprise card</h2>
            <p className="text-white/70">Powered by Wise Platform</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
