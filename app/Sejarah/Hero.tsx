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
        Desa Sekartaji adalah salah satu desa di Kecamatan Nusa Penida, yang
        terletak 22 Kilometer dari Kota Kecamatan. Sampai saat ini sejarah
        kelahiran Desa Sekartaji belum bisa diketahui secara pasti karena tidak
        adanya bukti-bukti tertulis yang menerangkan tentang asal usul atau
        sejarah dari Desa Sekartaji, akan tetapi berdasarkan cerita dari para
        tetua kami, Penyusun mencoba merangkum Sejarah Desa Sekartaji dari
        informasi dan keterangan-keterangan yang Penyusun dapatkan. Desa
        Sekartaji adalah termasuk salah satu desa tua,hal ini dapat dibuktikan
        dengan ditemukannya banyak kerangka manusia yang ukurannya lebih kecil
        dari manusia normal dan sudah memakai perhiasan yang terbuat dari
        tembaga.Tetapi lahirnya nama Desa Sekartaji berawal dari cerita bahwa
        dahulu kala di Desa Ped ada 8 (delapan) orang bersaudara yang semuanya
        laki-laki,karena situasi pada saat itu tidak aman maka orang tua mereka
        memerintahkan kedelapan putra beliau untuk berpencar dan menyebar ke
        segala penjuru,salah seorang dari delapan bersaudara tersebut adalah I
        Gusti Nyoman Murdana yang berangkat menuju pesisir selatan Pulau Nusa
        Penida. Dengan berbekal pusaka berupa patung dan senjata berupa taji
        (senjata ayam saat diadu ),karena kesekartajian beliau di sepanjang
        jalan maka senjata (taji) tersebut disuntingkan ditelinga
        (kasumpangan/kasekaran) setelah sampai kepesisir selatan dan beliau
        menetap ditempat tersebut maka dinamakan wilayah tersebut dengan nama
        SEKARTAJI,YANG ARTINYA Taji yang dipakai bunga (sekar) sehingga sampai
        sekarang desa tersebut bernama Sekartaji.
      </p>
    </div>
  );
};

export default Hero;
