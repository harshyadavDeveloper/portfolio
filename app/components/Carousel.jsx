"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";

function Carousel({ images = [], projectName = "Project" }) {
  const hasImages = images && images.length > 0;
  const hasMultiple = images && images.length > 1;

  const [[current, direction], setCurrent] = React.useState([0, 0]);
  const [isPaused, setIsPaused] = React.useState(false);

  // 👉 Auto-play (ONLY if multiple images)
  React.useEffect(() => {
    if (!hasImages || !hasMultiple || isPaused) return;

    const interval = setInterval(() => {
      paginate(1);
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused, current, hasImages, hasMultiple]);

  const paginate = (newDirection) => {
    setCurrent(([prev]) => [
      (prev + newDirection + images.length) % images.length,
      newDirection,
    ]);
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  return (
    <div
      className="relative w-full h-[200px] overflow-hidden rounded-t-lg"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* 🔥 FALLBACK */}
      {!hasImages ? (
        <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#0f172a] to-[#020617] text-gray-400 relative">
          <div className="absolute w-32 h-32 bg-violet-600/20 blur-3xl rounded-full"></div>

          <div className="text-4xl mb-2">📦</div>

          <p className="text-sm tracking-wide text-gray-300">
            {projectName}
          </p>

          <p className="text-xs text-gray-500">
            Preview Coming Soon
          </p>
        </div>
      ) : (
        <>
          {/* 🎞️ IMAGE SLIDER */}
          <AnimatePresence initial={false} custom={direction}>
            <motion.img
              key={current}
              src={images[current]}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              drag={hasMultiple ? "x" : false} // disable swipe if 1 image
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                if (!hasMultiple) return;

                const swipe = swipePower(offset.x, velocity.x);

                if (swipe < -swipeConfidenceThreshold) paginate(1);
                else if (swipe > swipeConfidenceThreshold) paginate(-1);
              }}
              className="absolute w-full h-full object-cover"
            />
          </AnimatePresence>

          {/* ⬅️ ➡️ Buttons (only if multiple images) */}
          {hasMultiple && (
            <>
              <button
                onClick={() => paginate(-1)}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white px-2 py-1 rounded z-10"
              >
                ◀
              </button>
              <button
                onClick={() => paginate(1)}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white px-2 py-1 rounded z-10"
              >
                ▶
              </button>
            </>
          )}

          {/* 🔵 Dots (only if multiple images) */}
          {hasMultiple && (
            <div className="absolute bottom-2 w-full flex justify-center gap-2 z-10">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() =>
                    setCurrent([index, index > current ? 1 : -1])
                  }
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    index === current
                      ? "bg-white scale-110"
                      : "bg-white/50"
                  }`}
                />
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default Carousel;