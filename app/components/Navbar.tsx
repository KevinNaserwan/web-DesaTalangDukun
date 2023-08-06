"use client";
import { Dropdown } from "flowbite-react";
import React, { useState } from "react";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="flex items-center justify-between w-full h-full my-14">
      <div className=" flex gap-5">
        <img
          src="/images/logo.png"
          alt="logo"
          className="w-[50px] h-[58px] rounded-xl"
        />
        <div>
          <h1 className="font-semibold text-lg">Desa Talang Dukun</h1>
          <h1 className=" font-normal text-base">Kabupaten Ogan Ilir</h1>
        </div>
      </div>
      <div>
        <ul className="flex gap-9">
          <a href="/">
            <li className=" font-semibold text-[14px] p-3 text-main-color">
              Beranda
            </li>
          </a>
          <Dropdown label="Pemerintahan">
            <a href="/Pemerintahan">
              <Dropdown.Item>Pemerintahan Desa</Dropdown.Item>
            </a>
            <a href="/BPDDesa">
              <Dropdown.Item>BPD Desa</Dropdown.Item>
            </a>
            <a href="/Sejarah">
              <Dropdown.Item>Sejarah Desa</Dropdown.Item>
            </a>
            <a href="/LambangDesa">
              <Dropdown.Item>Arti Lambang Desa</Dropdown.Item>
            </a>
            <a href="/Keunggulandesa">
              <Dropdown.Item>Keunggulan Desa</Dropdown.Item>
            </a>
            <a href="/DataDesa">
              <Dropdown.Item>Data Desa</Dropdown.Item>
            </a>
          </Dropdown>
          <a href="https://api.whatsapp.com/send?phone=6282181867602">
            <li className=" font-semibold text-[14px] p-3 bg-green-400  text-white rounded-lg hover:bg-green-700">
              Hubungi Kami
            </li>
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
