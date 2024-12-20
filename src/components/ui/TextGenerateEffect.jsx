"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "../../../utils/cn";

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
}) => {
  const [scope, animate] = useAnimate();
  const wordsArray = words.split(" ");

  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
        filter: filter ? "blur(0px)" : "none",
      },
      {
        duration: duration || 1,
        delay: stagger(0.2),
      }
    );
  }, [scope.current]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => (
          <motion.span
            key={word + idx}
            className={`${
              idx > 0 && idx < 3 ? "text-4xl text-pink-500 lg:text-5xl font-nicoMoji" : "text-6xl tracking-wide text-transparent md:text-7xl lg:text-8xl font-nicoMoji bg-clip-text bg-gradient-to-b from-neutral-200 to-neutral-400"
            } opacity-0`}
            style={{
              filter: filter ? "blur(10px)" : "none",
            }}
          >
            {word}{" "}
          </motion.span>
        ))}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-semibold text-5xl text-left", className)}>
      <div className="my-4">
        <div className="dark:text-white text-black leading-snug">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
