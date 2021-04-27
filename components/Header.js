import React from "react";
import Image from "next/image";
import HeaderItems from "./HeaderItems";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import TrendingUpOutlinedIcon from "@material-ui/icons/TrendingUpOutlined";
import VerifiedUserOutlinedIcon from "@material-ui/icons/VerifiedUserOutlined";
import CollectionsOutlinedIcon from "@material-ui/icons/CollectionsOutlined";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
function Header() {
  return (
    <header className="flex flex-col m-10 sm:flex-row justify-between items-center h-auto">
      <div className="flex flex-grow justify-evenly max-w-2xl">
        <HeaderItems title="HOME" Icon={HomeOutlinedIcon} />
        <HeaderItems title="TRENDING" Icon={TrendingUpOutlinedIcon} />
        <HeaderItems title="VERIFIED" Icon={VerifiedUserOutlinedIcon} />
        <HeaderItems title="COLLECTIONS" Icon={CollectionsOutlinedIcon} />
        <HeaderItems title="SEARCH" Icon={SearchOutlinedIcon} />
        <HeaderItems title="ACCOUNT" Icon={AccountCircleOutlinedIcon} />
      </div>

      <Image
        className="object-contain"
        src="https://links.papareact.com/ua6"
        width={150}
        height={100}
      ></Image>
    </header>
  );
}

export default Header;
