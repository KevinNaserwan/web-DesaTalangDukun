"use client";
import React, { useState } from "react";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div>
      <div className=" flex flex-wrap justify-between mt-[120px]">
        <div className=" col-span-8">
          <div className=" flex items-center gap-3">
            <img
              src="/images/logo-map.png"
              alt="logo-map"
              className="w-[30px] h-[30px]"
            />
            <h1 className=" font-semibold">Statistik Wilayah</h1>
          </div>
          <img
            src="/images/wilayah.png"
            alt="wilayah"
            className="w-full h-[400px] mt-14"
          />
          <div className=" flex items-center gap-3 mt-14">
            <img
              src="/images/logo-map.png"
              alt="logo-map"
              className="w-[30px] h-[30px]"
            />
            <h1 className=" font-semibold">Peta Wilayah Desa</h1>
          </div>
          <a href="https://www.google.com/maps/place/Talang+Dukun,+Sungai+Pinang,+Ogan+Ilir+Regency,+South+Sumatra/@-3.384057,104.7882302,15z/data=!3m1!4b1!4m6!3m5!1s0x2e3bec2aac4e8c91:0x57638b2ad3f1984a!8m2!3d-3.3869986!4d104.7958532!16s%2Fg%2F120qkm51?entry=ttu">
            <img
              src="/images/map2.png"
              alt="map2"
              className="w-full h-[368px] mt-14"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
