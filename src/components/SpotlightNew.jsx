"use client";

import React, { useState } from "react";
import { spotlight } from "@/constants";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export function SpotlightNew() {
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const getVideoThumbnail = (link) => {
    // Extract YouTube video ID from embed link
    const videoId = link.split('/').pop().split('?')[0];
    return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
  };

  return (
    <div className="w-full justify-center items-center text-n-1 mt-20 px-4" id="spotlight">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 2
          }
        }}
        className="text-4xl text-white sm:text-5xl font-poppins text-center mb-10"
      >
        <div className="audiowide text-4xl sm:text-5xl mt-32 mb-24 text-center text-[#77FF00]">SLIoT IN THE SPOTLIGHT</div>
      </motion.h2>

      <div className="max-w-4xl mx-auto space-y-3">
        {spotlight.map(({ id, title, link }) => (
          <motion.div
            key={id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: id * 0.05 }}
            className="border border-white/20 rounded-lg overflow-hidden bg-black-100/50 backdrop-blur-sm"
          >
            {/* Question Strip - Always Visible */}
            <button
              onClick={() => toggleExpand(id)}
              className="w-full p-5 flex items-center justify-between text-left hover:bg-white/5 transition-colors group"
            >
              <h3 className="text-base sm:text-lg font-medium text-white pr-4 group-hover:text-green-300 transition-colors">
                {title}
              </h3>
              <motion.div
                animate={{ rotate: expandedId === id ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="flex-shrink-0"
              >
                <ChevronDown className="w-5 h-5 text-white/70 group-hover:text-green-300 transition-colors" />
              </motion.div>
            </button>

            {/* Video Thumbnail - Only Shows When Expanded */}
            <AnimatePresence>
              {expandedId === id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="p-5 pt-0 border-t border-white/10">
                    <a
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block group"
                    >
                      <div className="relative aspect-video rounded-lg overflow-hidden shadow-2xl">
                        <img
                          src={getVideoThumbnail(link)}
                          alt={title}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        {/* Play Button Overlay */}
                        <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/20 transition-colors">
                          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                            <svg
                              className="w-8 h-8 sm:w-10 sm:h-10 text-white ml-1"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M8 5v14l11-7z" />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <p className="mt-3 text-center text-white/60 text-sm group-hover:text-green-300 transition-colors">
                        Click to watch on YouTube
                      </p>
                    </a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
