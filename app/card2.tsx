"use client";
import React, { useState } from "react";

type Props = {};

const Card2 = (props: Props) => {
  return (
    <a href="/Berita/BLT">
      <div className=" w-full h-[264px] rounded-[15px] bg-third-color mt-[40px]">
        <div className=" w-fit h-[32px] bg-abu-abu rounded-xl ml-[30px] mt-[25px] absolute">
          <h3 className=" font-semibold text-base ml-[17px] mr-[17px] mt-[4px]">
            Dana BLT Desa Talang Dukun Kecamatan Sungai Pinang Sudah Dibagikan
          </h3>
          <div className=" flex mt-4 ml-[14px] items-center gap-2">
            <img
              src="/images/clock.png"
              alt="clock"
              className="w-[14px] h-[14px]"
            />
            <p className=" font-normal text-sm">31 Maret 2022</p>
          </div>
          <div className=" flex my-2 gap-10 items-center">
            <img
              src="/images/berita2.jpg"
              alt="berita2"
              className=" w-6/12 h-[120px] rounded-lg"
            />
            <p className=" w-[600px]">
              OGAN ILIR – JURNALISBICARA.COM Pemerintah Desa Talang Dukun,
              Kecamatan Sungai Pinang Kabupaten Ogan Ilir melaksanakan pembagian
              Dana Bantuan Langsung Tunai (BLT) Dana Desa Tahun Anggaran 2022
              kepada 114 Keluarga Penerima Manfaat (KPM) untuk 3 (tiga) bulan,
              mulai Januari sampai dengan Bulan Maret.
            </p>
          </div>
        </div>
      </div>
    </a>
  );
};

export default Card2;
