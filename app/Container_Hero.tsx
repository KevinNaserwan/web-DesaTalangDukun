"use client";
import React, { useState } from "react";

type Props = {};

const Container_Hero = (props: Props) => {
  return (
    <div className=" flex flex-wrap mx-auto w-10/12 justify-around pt-8 items-center">
      <div className=" col-span-6 flex items-center gap-8">
        <img
          src="/images/Hero.png"
          alt="Hero"
          className="w-full h-auto rounded-xl"
        />
        <div className="">
          <div className=" slide1 w-[8px] mt-[8px] h-[8px] bg-slate-400 rounded-xl"></div>
          <div className=" slide2 w-[8px] mt-[8px] h-[8px] bg-slate-400 rounded-xl"></div>
          <div className=" slide3 w-[8px] mt-[8px] h-[24px] bg-black rounded-xl"></div>
        </div>
      </div>
      <div className=" col-span-6">
        <h1 className=" w-[500px] font-semibold text-xl">
          Talang Dukun adalah salah satu desa yang berada di Kecamatan Sungai
          Pinang, Kabupaten Ogan Ilir, Sumatera Selatan, Indonesia.
        </h1>
      </div>
    </div>
  );
};

export default Container_Hero;
