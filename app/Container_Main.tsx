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
        <div className=" flex items-center gap-5 pt-[70px] justify-center">
          <div>
            <div className=" w-[350px] h-[6px] bg-main-color"></div>
            <div className=" w-[350px] h-[6px] bg-main-color mt-1"></div>
          </div>
          <h1 className=" text-xl font-medium">Visi & Misi</h1>
          <div>
            <div className=" w-[390px] h-[6px] bg-main-color"></div>
            <div className=" w-[390px] h-[6px] bg-main-color mt-1"></div>
          </div>
        </div>
        <div className=" w-[900px]">
          <p className=" font-semibold text-xl mt-[66px] ml-[15px]">
            1. VISI DAN MISI
          </p>
          <p className=" ml-[30px]">
            Visi pembangunan Desa Talang Dukun tahun 2021 – 2027, adalah
            ”Mewujudkan Desa Talang Dukun yang Unggul, sejahtera, Santih, dan
            berbudaya”.
          </p>
          <p className=" font-semibold text-xl mt-[30px] ml-[15px]">2. Misi</p>
          <p className=" ml-[30px]">
            Misi pembangunan Desa Talang Dukun Tahun 2021-2027, adalah :
          </p>
          <p className=" ml-[45px] text-lg font-semibold mt-[15px]">
            a. Meningkatkan kualitas sumber daya manusia melalui program
            pendidikan dan program kesehatan, serta pengamalan ajaran agama.
          </p>
          <p className=" ml-[45px] text-lg font-semibold mt-[15px]">
            b. Membangunan Desa Talang Dukun dengan prinsip adil dan merata
            dengan berlandaskan konsep “Trihita Karana”
          </p>
          <p className=" ml-[45px] text-lg font-semibold mt-[15px]">
            c. Untuk mensejahterakan tarap hidup masyarakat baik ekonomi sosial,
            dan budaya.
          </p>
          <p className=" ml-[45px] text-lg font-semibold mt-[15px]">
            d. Menggali, melestarikan dan mengembangkan nilai-nilai budaya desa.
          </p>
          <p className=" ml-[45px] text-lg font-semibold mt-[15px]">
            e. Meningkatkan ketahanan ekonomi dengan menggalakkan usaha ekonomi
            kerakyatan, melalui program strategis di bidang produksi pertanian,
            pemasaran, koperasi, usaha kecil dan menengah, serta pariwisata.
          </p>
          <p className=" font-semibold text-xl mt-[30px] ml-[15px]">
            VISI MISI DESA Talang Dukun
          </p>
          <p className=" font-semibold text-xl mt-[30px] ml-[15px]">VISI</p>
          <p className=" ml-[15px]">
            Visi Desa Talang Dukun tahun 2015-2023 : Terwujudnya Desa Talang
            Dukun yang Aman, Damai dan Sejahtera.
          </p>
          <p className=" font-semibold text-xl mt-[30px] ml-[15px]">MISI</p>
          <p className=" ml-[15px]">Misi Pembangunan Desa Talang Dukun:</p>
          <p className=" ml-[15px] text-lg mt-[7px]">
            1. Peningkatan kualitas sumber daya manusia
          </p>
          <p className=" ml-[15px] text-lg mt-[7px]">
            2. Peningkatan pembangunan disegala bidang
          </p>
          <p className=" ml-[15px] text-lg mt-[7px]">
            3. Peningkatan Ekonomi Masyarakat
          </p>
          <p className=" ml-[15px] text-lg mt-[7px]">
            4. Peningkatan Pasrtisipasi Masyarakat
          </p>
        </div>
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
              src="/images/kepaladesa.jpeg"
              alt="kepaladesa"
              className="w-[300px] h-[323px] rounded-xl"
            />
            <h1 className=" text-center font-semibold text-xl mt-[14px]">
              Kepala Desa
            </h1>
            <h2 className=" text-center font-normal text-lg mt-[3px]">
              Rudi Hartono
            </h2>
          </div>
          <div className=" flex gap-[29px] justify-center mt-[28px]">
            <div className=" w-[32px] h-[10px] bg-black rounded-xl"></div>
            <div className=" w-[10px] h-[10px] bg-slate-400 rounded-xl"></div>
            <div className=" w-[10px] h-[10px] bg-slate-400 rounded-xl"></div>
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
            <div className=" button-map w-full h-[52px] bg-main-color mt-[27px] rounded-xl flex justify-center items-center">
              <p className=" font-medium text-xl text-white">Buka Peta</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Container_Main;
