"use client";
import React, { useState } from "react";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="flex items-center justify-between w-full h-full my-14">
      <div className=" flex">
        <div>
          <h1 className="font-semibold text-lg">Desa Talang Dukun</h1>
          <h1 className=" font-normal text-base">Kabupaten Ogan Ilir</h1>
        </div>
      </div>
      <div>
        <ul className="flex gap-9">
          <li className=" font-semibold text-sm text-main-color">Profil Desa</li>
          <li className=" font-semibold text-sm  text-main-color">Pemerintahan</li>
          <li className=" font-semibold text-sm  text-main-color">Informasi Publik</li>
          <li className=" font-semibold text-sm  text-main-color">Transparasi</li>
          <li className=" font-semibold text-sm  text-main-color">Data Desa</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
