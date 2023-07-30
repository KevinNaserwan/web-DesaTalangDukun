"use client";
import React, { useState } from "react";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className=" mt-[120px]">
      <h1 className=" font-semibold text-[24px]">
        Keunggulan Desa Talang Dukun
      </h1>
      <div>
        <div className=" flex flex-wrap items-center gap-[102px] mt-[65px]">
          <img
            src="../images/duku.png"
            alt="duku"
            className="w-[300px] h-[300px] rounded-xl"
          />
          <p className=" w-7/12 font-medium text-xl">
            Duku adalah jenis buah-buahan dari anggota suku Meliaceae. Tanaman
            yang berasal dari Asia Tenggara sebelah barat ini memiliki kemiripan
            dengan buah langsat, kokosan, pisitan, celoring dan lain-lain dengan
            berbagai variasinya. buah ini menjadi keunggulan desa talang dukun
            karena di desa ini memiliki banyak sekali kebun duku dan hasil panen
            yang melimpah
          </p>
        </div>
        <div className=" flex flex-wrap items-center gap-[102px] mt-[85px]">
          <img
            src="../images/durian.png"
            alt="durian"
            className="w-[300px] h-[300px] rounded-xl"
          />
          <p className=" w-7/12 font-medium text-xl">
            Durian adalah nama tumbuhan tropis yang berasal dari wilayah Asia
            Tenggara, sekaligus nama buahnya yang bisa dimakan. Nama ini diambil
            dari ciri khas kulit buahnya yang keras dan berlekuk-lekuk tajam
            sehingga menyerupai duri. Sebutan populernya adalah raja dari
            segala buah King of Fruit. Durian adalah buah yang kontroversial,
            meskipun banyak orang yang menyukainya, tetapi sebagiannya kurang
            menyukai dengan aromanya.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
