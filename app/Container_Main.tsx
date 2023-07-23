"use client";
import Image from "public/images/hero.png";
import React, { useState } from "react";
import Card from "./card";

type Props = {};

const Container_Main = (props: Props) => {
  return (
    <div className=" flex flex-wrap mx-auto w-10/12 pt-[100px] justify-between">
      <div className=" col-span-8">
        <div className=" flex items-center gap-5">
          <div>
            <div className=" w-[350px] h-[6px] bg-main-color"></div>
            <div className=" w-[350px] h-[6px] bg-main-color mt-1"></div>
          </div>
          <h1 className=" text-xl font-medium">Artikel Terkini</h1>
          <div>
            <div className=" w-[350px] h-[6px] bg-main-color"></div>
            <div className=" w-[350px] h-[6px] bg-main-color mt-1"></div>
          </div>
        </div>
        <Card />
        <Card />
        <Card />
      </div>
      <div className=" col-span-4">
        <div>
          <div className="flex gap-[10px] items-center">
          <img
              src="/images/person.png"
              alt="person"
              className="w-[30px] h-[30px]"
            />
            <h1 className=" text-lg font-semibold">Aparatur Desa</h1>
          </div>
          <div className=" flex mt-[20px]">
            <div className=" w-6/12 h-[5px] bg-main-color"></div>
            <div className=" w-6/12 h-[5px] bg-second-color"></div>
          </div>
          <div className="image mt-[40px]">
          <img
              src="/images/kepaladesa.png"
              alt="kepaladesa"
              className="w-[300px] h-[323px] rounded-xl"
            />
            <h1 className=" text-center font-semibold text-xl mt-[14px]">
              Kepala Desa
            </h1>
            <h2 className=" text-center font-normal text-lg mt-[3px]">
              Muhammad Akbar
            </h2>
          </div>
          <div className=" flex gap-[29px] justify-center mt-[28px]">
            <div className=" w-[49px] h-[15px] bg-black rounded-xl"></div>
            <div className=" w-[15px] h-[15px] bg-slate-400 rounded-xl"></div>
            <div className=" w-[15px] h-[15px] bg-slate-400 rounded-xl"></div>
            <div className=" w-[15px] h-[15px] bg-slate-400 rounded-xl"></div>
            <div className=" w-[15px] h-[15px] bg-slate-400 rounded-xl"></div>
            <div className=" w-[15px] h-[15px] bg-slate-400 rounded-xl"></div>
          </div>
        </div>
        <div className=" mt-[70px]">
          <div className="flex gap-[7px] items-center">
          <img
              src="/images/logo-map.png"
              alt="logo-map"
              className="w-[30px] h-[30px]"
            />
            <h1 className=" text-lg font-semibold">Peta Wilayah Desa</h1>
          </div>
          <div className=" flex mt-[20px]">
            <div className=" w-6/12 h-[5px] bg-main-color"></div>
            <div className=" w-6/12 h-[5px] bg-second-color"></div>
          </div>
          <div className="image mt-[40px]">
            <img
              src="/images/map.png"
              alt="map"
              className="w-[300px] h-[323px] rounded-xl"
            />
          </div>
          <a href="https://www.google.com/maps/place/Talang+Dukun,+Sungai+Pinang,+Ogan+Ilir+Regency,+South+Sumatra/@-3.384057,104.7882302,15z/data=!3m1!4b1!4m6!3m5!1s0x2e3bec2aac4e8c91:0x57638b2ad3f1984a!8m2!3d-3.3869986!4d104.7958532!16s%2Fg%2F120qkm51?entry=ttu">
            <div className=" w-full h-[52px] bg-main-color mt-[27px] rounded-xl flex justify-center items-center">
              <a
                href="https://www.google.com/maps/place/Talang+Dukun,+Sungai+Pinang,+Ogan+Ilir+Regency,+South+Sumatra/@-3.384057,104.7882302,15z/data=!3m1!4b1!4m6!3m5!1s0x2e3bec2aac4e8c91:0x57638b2ad3f1984a!8m2!3d-3.3869986!4d104.7958532!16s%2Fg%2F120qkm51?entry=ttu"
                className=" font-medium text-xl text-white"
              >
                Buka Peta
              </a>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Container_Main;
