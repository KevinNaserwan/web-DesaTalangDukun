"use client";
import React, { useState } from "react";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div>
      <img
        src="../images/Hero.png"
        alt="Hero"
        className="w-full h-[408px] rounded-xl"
      />
      <p className=" font-semibold text-xl w-7/12 mt-[100px]">
        SUSUNAN ORGANISASI DAN TATA KERJA PEMERINTAH DESA DESA TALANG DUKUN
        KECAMATAN SUNGAI PINANG KABUPATEN OGAN ILIR
      </p>
      <p className=" font-normal text-xl mt-[40px]">
        Kepala Desa bertugas menyelenggarakan Pemerintahan Desa, melaksanakan
        pembangunan, pembinaan kemasyarakatan, dan pemberdayaan masyarakat.
        Untuk melaksanakan tugas Kepala Desa memiliki fungsi-fungsi sebagai
        berikut:
      </p>
      <ul className=" mt-[20px] w-10/12">
        <li className=" font-semibold text-lg">
          1. Menyelenggarakan Pemerintahan Desa, seperti tata praja
          Pemerintahan, penetapan peraturan di desa, pembinaan masalah
          pertanahan, pembinaan ketentraman dan ketertiban, melakukan upaya
          perlindungan masyarakat, administrasi kependudukan, dan penataan dan
          pengelolaan wilayah.
        </li>
        <li className=" font-semibold text-lg mt-3">
          2. Melaksanakan pembangunan, seperti pembangunan sarana prasarana
          perdesaan, dan pembangunan bidang pendidikan, kesehatan.
        </li>
        <li className=" font-semibold text-lg mt-3">
          3. Pembinaan kemasyarakatan, seperti pelaksanaan hak dan kewajiban
          masyarakat, partisipasi masyarakat, sosial budaya masyarakat,
          keagamaan, dan ketenagakerjaan.
        </li>
        <li className=" font-semibold text-lg mt-3">
          4. Pemberdayaan masyarakat, seperti tugas sosialisasi dan motivasi
          masyarakat di bidang budaya, ekonomi, politik, lingkungan hidup,
          pemberdayaan keluarga, pemuda, olahraga, dan karang taruna.
        </li>
        <li className=" font-semibold text-lg mt-3">
          5. Menjaga hubungan kemitraan dengan lembaga masyarakat dan lembaga
          lainnya.
        </li>
      </ul>
      <p className=" font-normal text-xl mt-[40px]">
        Sekretaris Desa berkedudukan sebagai unsur pimpinan Sekretariat Desa.
        Sekretaris Desa bertugas membantu Kepala Desa dalam bidang administrasi
        pemerintahan. Untuk melaksanakan tugas, Sekretaris Desa mempunyai
        fungsi:
      </p>
      <ul className=" mt-[20px] w-10/12">
        <li className=" font-semibold text-lg">
          1. Melaksanakan urusan ketatausahaan seperti tata naskah, administrasi
          surat menyurat, arsip, dan ekspedisi.
        </li>
        <li className=" font-semibold text-lg mt-3">
          2. Melaksanakan urusan umum seperti penataan administrasi perangkat
          desa, penyediaan prasarana perangkat desa dan kantor, penyiapan rapat,
          pengadministrasian aset, inventarisasi, perjalanan dinas, dan
          pelayanan umum.
        </li>
        <li className=" font-semibold text-lg mt-3">
          3. Melaksanakan urusan keuangan seperti pengurusan administrasi
          keuangan, administrasi sumber-sumber pendapatan dan pengeluaran,
          verifikasi administrasi keuangan, dan admnistrasi penghasilan Kepala
          Desa, Perangkat Desa, BPD, dan lembaga pemerintahan desa lainnya.
        </li>
        <li className=" font-semibold text-lg mt-3">
          4. Melaksanakan urusan perencanaan seperti menyusun rencana anggaran
          pendapatan dan belanja desa, menginventarisir data-data dalam rangka
          pembangunan, melakukan monitoring dan evaluasi program, serta
          penyusunan laporan.
        </li>
      </ul>
    </div>
  );
};

export default Hero;
