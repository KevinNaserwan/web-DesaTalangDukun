"use client";
import React, { useState } from "react";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div>
      <img
        src="../images/logo2.png"
        alt="logo2"
        className="w-[350px] h-[415px] mx-auto my-24"
      />
      <p className=" font-semibold text-xl w-7/12 mt-[100px]">
        URAIAN DAN ARTI LAMBANG
      </p>
      <p className=" font-semibold text-xl mt-[40px]">A. Bentuk Lambang</p>
      <p className=" font-normal text-xl mt-[10px]">
        Lambang berbentuk segi lima sama sisi dengan warna dasar biru
        berpinggirkan warna hitam sebagai dasar dari keseluruhan lambang.
      </p>
      <p className=" font-semibold text-xl mt-[40px]">
        B. Unsur- unsure Lambang dan Maksudnya
      </p>
      <ul className=" mt-[20px] w-10/12">
        <li className=" font-normal text-lg">
          1. Segi lima yang melambangkan Dasar Negara Republik Indonesia yaitu
          Pancasila yang merupakan produk dari undang-undang
        </li>
        <li className=" font-normal text-lg mt-3">
          2. Cat dasar lambang bertinta biru tua sebab lokasi desa ada
          dipedesaan atau jauh dari lokasi kota sehingga kelihatan kebiru-biruan
        </li>
        <li className=" font-normal text-lg mt-3">
          3. Gambar padi dan kapas melambangkan kesejahteraan warga masyarakat
          Desa Talang Dukun.
        </li>
        <li className=" font-normal text-lg mt-3">
          4. Gambar Rantai melambangkan persatuan.
        </li>
        <li className=" font-normal text-lg mt-3">
          5. Gambar Bunga melambangkan Keindahan.
        </li>
        <li className=" font-normal text-lg mt-3">
          6. Gambar Taji melambangkan ketajaman Pikiran/Kecerdasan.
        </li>
        <li className=" font-normal text-lg mt-3">
          7. Gambar Gapura melambangkan pintu interaksi dengan dunia luar,
          symbol inklusifitas dan Keterbukaan.
        </li>
        <li className=" font-normal text-lg mt-3">
          8. Gambar Swastika melambangkan Keselamatan/ Kesejahteraan.
        </li>
        <li className=" font-normal text-lg mt-3">
          9. Tulisan Talang Dukun sebagai identitas nama Desa
        </li>
        <p className=" font-semibold text-xl mt-[40px]">C. Arti Lambang</p>
        <p className=" font-normal text-xl mt-[10px]">
          Desa Talang Dukun Terdiri Dari 6 Dusun yang bersatu padu dengan anggota
          masyarakatnya yang mempunyai semangat ketajaman pikiran/kecerdasan,
          keterbukaan dalam setiap hal diimbangi dengan jiwa patriotism tinggi
          untuk memajukan Desanya baik di bidang seni budaya bangsa dengan sikap
          Taqwa terhadap Tuhan Yang Maha Esa tercermin dalam sikap hidup yang
          selalu berdasarkan Pancasila untuk mewujudkan masyarakat sejahtera,
          Aman, damai, serta indah.
        </p>
      </ul>
    </div>
  );
};

export default Hero;
