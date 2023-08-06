"use client";
import React, { useState } from "react";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div>
      <div>
        <h1 className=" text-start w-6/12 font-extrabold text-3xl">
          Dana BLT Desa Talang Dukun Kecamatan Sungai Pinang Sudah Dibagikan
        </h1>
        <img
          src="/images/berita2.jpg"
          alt="berita2"
          className=" w-6/12 h-[420px] rounded-lg mt-9"
        />
        <p className=" mt-8">
          Pemerintah Desa Talang Dukun, Kecamatan
          Sungai Pinang Kabupaten Ogan Ilir melaksanakan pembagian Dana Bantuan
          Langsung Tunai (BLT) Dana Desa Tahun Anggaran 2022 kepada 114 Keluarga
          Penerima Manfaat (KPM) untuk 3 (tiga) bulan, mulai Januari sampai
          dengan Bulan Maret. Masing – masing KPM akan mendapatkan dana BLT-DD
          sebesar Rp.900 ribu (Rp.300 ribu/per bulan). Acara tersebut dihadiri
          oleh Tim pendamping PKH dari Kecamatan Sungai Pinang, Kepala Desa
          Talang Dukun, Rudi Hartono, Babinsa, Kamtibmas serta para tamu
          undangan lainnya.
        </p>
        <p className=" my-4">
          Kepala Desa Talang Dukun, Rudi Hartono mengatakan, pembagian Dana
          BLT-DD kali ini dilaksanakan berbarengan dengan kegiatan vaksinasi.
          “Selain pembagian BLT, kepada 114 orang, hari ini juga ada vaksinasi
          bagi warga yang belum di vaksinasi,” katanya pada awak media
          JURNALISBICARA.COM, Kamis (31/03). Ia menyampaikan ucapan terima kasih
          kepada seluruh pihak yang telah membantu dan mengawal acara tersebut
          dari awal hingga akhir, sehingga seluruh kegiatan bisa berjalan lancar
          dan tertib. “Saya berharap semoga dana BLT DD ini bisa membantu
          meringankan beban masyarakat desa, yang mana saat ini masih mengalami
          masa pandemik, sekaligus mau menyambut bulan suci Romadon,”
          pungkasnya.
        </p>
        <p>
          Sementara Mulyani, salah satu warga Dusun 1, Desa Talang Dukun mengaku
          baru pertama kali mendapat dana Bantuan Langsung Tunai Dana Desa
          (BLT-DD). “Saya baru pertama ini mendapatkan BLT, tentunya sangat
          senang,” ucapnya. Dia mengaku akan mempergunakan bantuan yang
          diterimanya tersebut untuk membeli sembako guna menyambut bulan suci
          Romadon, dan juga buat ongkos anaknya bersekolah. “Penghasilan suami
          saya tidak pasti, ia hanya perkerja serabutan di pasar,” ujarnya.
          (Heri).**
        </p>
      </div>
    </div>
  );
};

export default Hero;
