"use client";
import React, { useState } from "react";

type Props = {};

const Card = (props: Props) => {
  return (
    <a href="/Berita/ProgramDana">
      <div className=" w-full h-[264px] rounded-[15px] bg-third-color mt-[40px]">
        <div className=" w-fit h-[32px] bg-abu-abu rounded-xl ml-[30px] mt-[25px] absolute">
          <h3 className=" font-semibold text-base ml-[17px] mr-[17px] mt-[4px]">
            Melalui Program Dana Desa Kades Talang Dukun Bedah Rumah Warga
          </h3>
          <div className=" flex mt-4 ml-[14px] items-center gap-2">
            <img
              src="/images/clock.png"
              alt="clock"
              className="w-[14px] h-[14px]"
            />
            <p className=" font-normal text-sm">1 Desember 2021</p>
          </div>
          <div className=" flex my-2 gap-10 items-center">
            <img
              src="/images/berita1.jpg"
              alt="berita1"
              className=" w-6/12 h-[120px] rounded-lg"
            />
            <p className=" w-[600px]">
              Ogan Ilir | Gerbang Indonesia Melalui Program Dana Desa Kades
              Talang Dukun Bedah Rumah Warga, karena rasa peduli kepada Warga
              yang tidak mampu membuat Kepala Desa Talang Dukun, Kecamatan
              Sungai Pinang Kabupaten Ogan Ilir (OI) tersentuh hatinya, sehingga
              melalui Dana Desa Tahun 2021.
            </p>
          </div>
        </div>
      </div>
    </a>
  );
};

export default Card;
