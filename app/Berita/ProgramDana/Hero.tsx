"use client";
import React, { useState } from "react";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div>
      <div>
        <h1 className=" text-start w-6/12 font-extrabold text-3xl">
          Melalui Program Dana Desa Kades Talang Dukun Bedah Rumah Warga
        </h1>
        <img
          src="/images/berita1.jpg"
          alt="berita1"
          className=" w-6/12 h-[420px] rounded-lg mt-9"
        />
        <p className=" mt-8">
          Melalui Program Dana Desa Kades Talang
          Dukun Bedah Rumah Warga, karena rasa peduli kepada Warga yang tidak
          mampu membuat Kepala Desa Talang Dukun, Kecamatan Sungai Pinang
          Kabupaten Ogan Ilir (OI) tersentuh hatinya, sehingga melalui Dana Desa
          Tahun 2021. Dua rumah warga desa setempat berhasil di bedah rumah
          menjadi lebih baik.
        </p>
        <p className=" my-4">
          ” Ya kita Peduli kepada Masyarakat yang tidak mampu, melalui Dana Desa
          (DD) Tahun 2021, ada dua rumah Warga yang sudah kita bedah, dan kini
          sangat layak di tempati,” ujar Kepala Desa Talang Dukun Rudi saat di
          wawancarai awak media Rabu (01/12/2021). Dikatakannya juga, semoga
          dengan di bedahnya rumah tersebut dapat bermanfaat dan sedikit
          terbantu meringankan beban mereka, sehingga keluarga mereka nyaman.
        </p>
        <p>
          ” Pemerintah Desa Talang Dukun hanya bisa membantu, dan menjadi
          prioritas untuk kepentingan masyarakat,” terangnya. Di tempat terpisah
          Iwan dan Sukemi Warga setempat mengaku sangat senang dan
          berterimakasih kepada Pemerintah Desa Talang Dukun karena dirinya
          merasa terbantu telah mendapat program bedah rumah dari Dana Desa. ”
          Terima kasih Pak Kades, saya sangat berterima kasih, sebab rumah kami
          sudah di bedah dan menjadi layak sehingga tidak lagi merasa takut
          roboh,” ungkap warga yang menerima bedah rumah.
        </p>
      </div>
    </div>
  );
};

export default Hero;
