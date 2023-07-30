"use client";
import React, { useState } from "react";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div>
      <img
        src="../images/sejarah.jpg"
        alt="sejarah"
        className="w-full h-[408px] rounded-xl"
      />
      <p className=" text-xl font-medium mt-24">
        Desa Talang dukun dalah salah satu desa di kabupaten ogan ilir , Sampai
        saat ini sejarah kelahiran Desa talang dukun belum bisa diketahui secara
        pasti karena tidak adanya bukti-bukti tertulis yang menerangkan tentang
        asal usul atau sejarah dari Desa Sekartaji, akan tetapi berdasarkan
        cerita dari para tetua kami, Penyusun mencoba merangkum Sejarahi dari
        informasi dan keterangan-keterangan yang Penyusun dapatkan. Desa Talang
        dukun adalah termasuk salah satu desa tua.
      </p>
    </div>
  );
};

export default Hero;
