"use client";
import React, { useState } from "react";

type Props = {};

const Card = (props: Props) => {
  return (
    <div className=" w-full h-[264px] rounded-[15px] bg-third-color mt-[40px]">
      <div className="w-[420px] h-[32px] bg-abu-abu rounded-xl ml-[30px] mt-[25px] absolute">
        <h3 className=" font-semibold text-base ml-[17px] mt-[4px]">Judul Artikel</h3>
        <div className=" flex mt-4 ml-[40px]">
          <p className=" font-normal text-sm">18 Maret 2023</p>
        </div>
        <div className=" flex">
            
        </div>
      </div>
    </div>
  );
};

export default Card;
