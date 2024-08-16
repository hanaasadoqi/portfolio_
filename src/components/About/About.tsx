"use client";

import { items } from "./data.json";
import { Video } from "../shared/Media";
import Image from "next/image";
import React from "react";

const About: React.FC = () => {
  return (
    <div className="container mx-auto overflow-x-auto p-4">
      <div
        className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
        style={{
          gridTemplateColumns: `repeat(${items.length}, 150px)`,
          gridAutoRows: "150px",
        }}
      >
        {items.map((item) => (
          <div
            key={item.id}
            className="relative z-10 m-1 rounded-xl"
            style={{
              gridRowEnd: `span ${item.rows}`,
              gridColumnEnd: `span ${item.columns}`,
              width: `${item.columns * 150}px`,
              height: `${item.rows * 150}px`,
            }}
          >
            <div className="[perspective-1000px] group relative h-full w-full">
              <div className="relative h-full w-full rounded-xl ring-offset-secondary transition-all duration-1000 [transform-style:preserve-3d] group-hover:shadow-inner group-hover:ring-2 group-hover:ring-offset-4 group-hover:[transform:rotateY(180deg)]">
                <div className="absolute inset-0 h-full w-full overflow-y-scroll rounded-xl">
                  {item.type === "image" && (
                    <Image
                      src={item.src}
                      alt={item.alt || ""}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-xl"
                    />
                  )}
                  {item.type === "video" && (
                    <Video
                      src={item.src}
                      poster={item.poster}
                      className="h-full w-full rounded-xl object-cover"
                    />
                  )}
                </div>
                <div className="absolute inset-0 h-full w-full rounded-xl bg-about-gradient p-2 text-center text-slate-200 [backface-visibility:hidden] [transform:rotateY(180deg)]">
                  <div className="flex h-full w-full items-center justify-center overflow-hidden text-secondary95">
                    <div className="p-4 text-center">
                      <h3 className="mb-2 text-xl font-semibold">
                        {item.title}
                      </h3>
                      <p className="text-sm">{item.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
