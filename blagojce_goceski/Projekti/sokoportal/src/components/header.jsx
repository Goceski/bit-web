import React from "react";
import { useNavigate } from "react-router-dom";
import { BiHomeAlt2, BiRestaurant } from "react-icons/bi";
import { FaBed } from "react-icons/fa";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { TbArrowsRightLeft } from "react-icons/tb";
import { RxFileText } from "react-icons/rx";
import "./header.scss";

const Header = () => {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        <BiHomeAlt2 />
      </button>
      <button
        onClick={() => {
          navigate("/oglasi");
        }}
      >
        <TbArrowsRightLeft />
      </button>
      <button
        onClick={() => {
          navigate("/izdavanje");
        }}
      >
        <FaBed />
      </button>
      <button
        onClick={() => {
          navigate("/restorani");
        }}
      >
        <BiRestaurant />
      </button>
      <button
        onClick={() => {
          navigate("/weather");
        }}
      >
        <TiWeatherPartlySunny />
      </button>
      <button
        onClick={() => {
          navigate("/info");
        }}
      >
        <RxFileText />
      </button>
    </nav>
  );
};

export default Header;
