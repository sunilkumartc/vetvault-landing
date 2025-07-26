"use client";

import React, { useEffect, useRef } from "react";

const scrollingFeatures = [
  "Health records",
  "Online appointments",
  "Invoicing",
  "Stock Management",
  "Pet Parent app",
  "Chat & Telemedicine",
  "Reports",
  "Data migration",
  "Cloud-based veterinary software",
];

export default function ScrollingBanner() {
  const scrollingTextRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollingElement = scrollingTextRef.current;
    if (scrollingElement) {
      const scrollWidth = scrollingElement.scrollWidth;
      const clientWidth = scrollingElement.clientWidth;
      let scrollPosition = 0;

      const scroll = () => {
        scrollPosition += 1;
        if (scrollPosition >= scrollWidth - clientWidth) {
          scrollPosition = 0;
        }
        scrollingElement.scrollLeft = scrollPosition;
      };

      const interval = setInterval(scroll, 30);
      return () => clearInterval(interval);
    }
  }, []);

  return (
    <section className="py-4 bg-indigo-600 text-white overflow-hidden">
      <div
        ref={scrollingTextRef}
        className="flex whitespace-nowrap"
        style={{
          animation: "scroll 30s linear infinite",
          width: "max-content",
        }}
      >
        {[...Array(3)].map((_, setIndex) => (
          <div key={setIndex} className="flex items-center">
            {scrollingFeatures.map((feature, index) => (
              <React.Fragment key={`${setIndex}-${index}`}>
                <span className="text-lg font-medium px-8">{feature}</span>
                <span className="text-cyan-300">•</span>
              </React.Fragment>
            ))}
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
      `}</style>
    </section>
  );
}
