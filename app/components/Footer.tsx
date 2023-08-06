"use client";
import React, { useState } from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className=" flex flex-wrap justify-between mx-auto mt-[110px] pl-[140px] pb-[84px] bg-gradient-footer items-center">
      <div className=" ml-[60px]">
        <div className="flex mt-[40px] gap-[22px]">
          <img
            src="/images/logo.png"
            alt="logo"
            className="w-[50px] h-[58px] rounded-xl"
          />
          <div>
            <h1 className="font-semibold text-lg">Desa Talang Dukun</h1>
            <h1 className=" font-normal text-base">Kabupaten Ogan Ilir</h1>
          </div>
        </div>
        <div className="alamat">
          <p className="w-[450px] mt-[26px] font-normal text-sm">
            Talang Dukun adalah salah satu desa yang berada di Kecamatan Sungai
            Pinang, Kabupaten Ogan Ilir, Sumatra Selatan, Indonesia.
          </p>
          <p className=" w-[160px] font-normal text-xs mt-1">
            Email : desatalangdukun@gmail.com Telp : 082181867602
          </p>
        </div>
      </div>
      <div className="pr-[210px]">
        <h3 className=" font-semibold text-lg">Media Sosial</h3>
        <div className=" flex gap-3 mt-4">
          <a href="">
            <img src="/images/fb.png" alt="fb" className="w-[40px] h-[40px]" />
          </a>
          <a href="">
            <img src="/images/ig.png" alt="ig" className="w-[40px] h-[40px]" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
