"use client";
import {FrameMotion} from "@/Components/FrameMotion";
import Link from "next/link";
import React from "react";
export default function Portfolio() {
  return (
    <div className="px-3">
        <h1 className="text-2xl mb-3 font-bold">Chosse a gallery</h1>
      <FrameMotion animate = {{ x: [50, 150,60,10], opacity: 1, scale: 1 }}>

        <div className="flex gap-[50px]">
          <Link
            className={`border rounded w-[250px] relative h-[300px] bg-[url("/illustration.png")] bg-cover`}
            href="/portfolio/illustrations"
          >
            <span className="absolute right-3 bottom-3 font-bold text-2xl">
              illustrations
            </span>
          </Link>
          <Link
            className="border rounded w-[250px] relative h-[300px] bg-[url('/websites.jpg')] bg-cover"
            href="/portfolio/websites"
          >
            <span className="absolute right-3 bottom-3 font-bold text-2xl">
              websites
            </span>
          </Link>
          <Link
            className="border rounded w-[250px] relative h-[300px] bg-[url('/apps.jpg')] bg-cover"
            href="/portfolio/applications"
          >
            <span className="absolute right-3 bottom-3 font-bold text-2xl">
              applications
            </span>
          </Link>
        </div>
      </FrameMotion>
    </div>
  );
}
