"use client";
import React, { useState } from "react";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div>
      <img
        src="../images/logo_bpd.png"
        alt="logo_bpd"
        className="w-[400px] h-[400px] mx-auto my-20"
      />
      <p className=" font-semibold text-xl w-7/12 mt-[100px]">
        SUSUNAN ORGANISASI BADAN PERMUSYAWARATAN DESA
      </p>
      <p className=" font-semibold text-xl mt-[40px]">
        Secara yuridis, tugas Badan Permusyawaratan Desa mengacu kepada regulasi
        desa yakni Undang-Undang Nomor 6 Tahun 2014 tentang Desa. Badan
        Permusyawaratan Desa yang selanjutnya disingkat BPD atau yang disebut
        dengan nama lain adalah lembaga yang melaksanakan fungsi pemerintahan
        yang anggotanya merupakan wakil dari penduduk Desa berdasarkan
        keterwakilan wilayah dan ditetapkan secara demokratis. Dalam Permendagri
        No.110/2016 Badan Permusyawaratan Desa mempunyai fungsi, membahas dan
        menyepakati Rancangan Peraturan Desa bersama Kepala Desa, menampung dan
        menyalurkan aspirasi masyarakat Desa, dan melakukan pengawasan kinerja
        Kepala Desa. Selain melaksanakan fungsi diatas, Badan Permusyawaratan
        Desa juga mempunyai tugas sebagai berikut.
      </p>
      <p className=" font-semibold text-xl mt-[40px]">BPD mempunyai fungsi:</p>
      <ul className=" mt-[20px] w-10/12">
        <li className=" font-normal text-lg">
          1. membahas dan menyepakati Rancangan Peraturan Desa bersama Kepala
          Desa;
        </li>
        <li className=" font-normal text-lg mt-3">
          2. menampung dan menyalurkan aspirasi masyarakat Desa;
        </li>
        <li className=" font-normal text-lg mt-3">
          3. Melakukan pengawasan kinerja Kepala Desa..
        </li>
      </ul>
      <p className=" font-semibold text-xl mt-[40px]">BPD mempunyai tugas:</p>
      <ul className=" mt-[20px] w-10/12">
        <li className=" font-normal text-lg">
          1. menggali aspirasi masyarakat;
        </li>
        <li className=" font-normal text-lg mt-3">
          2. menampung aspirasi masyarakat;
        </li>
        <li className=" font-normal text-lg mt-3">
          3. mengelola aspirasi masyarakat;
        </li>
        <li className=" font-normal text-lg mt-3">
          4. menyalurkan aspirasi masyarakat;
        </li>
        <li className=" font-normal text-lg mt-3">
          5. menyelenggarakan musyawarah BPD;
        </li>
        <li className=" font-normal text-lg mt-3">
          6. menyelenggarakan musyawarah Desa;
        </li>
        <li className=" font-normal text-lg mt-3">
          7. membentuk panitia pemilihan Kepala Desa;
        </li>
        <li className=" font-normal text-lg mt-3">
          8. menyelenggarakan musyawarah Desa khusus untuk pemilihan Kepala Desa
          antarwaktu;
        </li>
        <li className=" font-normal text-lg mt-3">
          9. membahas dan menyepakati rancangan Peraturan Desa bersama Kepala
          Desa;t;
        </li>
        <li className=" font-normal text-lg mt-3">
          10. melaksanakan pengawasan terhadap kinerja Kepala Desa;;
        </li>
        <li className=" font-normal text-lg mt-3">
          11. melakukan evaluasi laporan keterangan penyelenggaraan Pemerintahan
          Desa;
        </li>
        <li className=" font-normal text-lg mt-3">
          12. menciptakan hubungan kerja yang harmonis dengan Pemerintah Desa
          dan lembaga Desa lainnya;
        </li>
        <li className=" font-normal text-lg mt-3">
          13. melaksanakan tugas lain yang diatur dalam ketentuan peraturan
          perundang-undangan.
        </li>
      </ul>
    </div>
  );
};

export default Hero;
