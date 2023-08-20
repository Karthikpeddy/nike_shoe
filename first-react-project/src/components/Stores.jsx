import React from "react";
import HYD from "../assests/hyd.png";
import MUMBAI from "../assests/mumbai.png";
import BANG from "../assests/bang.png";
import KOL from "../assests/kolk.png";
import PUNE from "../assests/pune.png";
import KOCH from "../assests/koch.png";
import AHD from "../assests/ahd.png";
import CHEN from "../assests/chen.png";
import CHD from "../assests/chd.png";
import NCR from "../assests/ncr.png";

const Stores = () => {
  return (
    <div className="stores">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-2xl font-bold text-center">Stores</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-5 gap-4 text-center py-8">
          <div className="rounded-xl shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={HYD} alt="HTML icon" />
            <p className="my-4">Hyderabad</p>
          </div>
          <div className="rounded-xl shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={MUMBAI} alt="HTML icon" />
            <p className="my-4">Mumbai</p>
          </div>
          <div className="rounded-xl shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={BANG} alt="HTML icon" />
            <p className="my-4">Bangalore</p>
          </div>
          <div className="rounded-xl shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={KOL} alt="HTML icon" />
            <p className="my-4">Kolkata</p>
          </div>
          <div className="rounded-xl shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={PUNE} alt="HTML icon" />
            <p className="my-4">Pune</p>
          </div>
          <div className="rounded-xl shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={KOCH} alt="HTML icon" />
            <p className="my-4">Kochin</p>
          </div>
          <div className="rounded-xl shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={AHD} alt="HTML icon" />
            <p className="my-4">Ahmedabad</p>
          </div>
          <div className="rounded-xl shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={CHEN} alt="HTML icon" />
            <p className="my-4">Chennai</p>
          </div>
          <div className="rounded-xl shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={NCR} alt="HTML icon" />
            <p className="my-4">Delhi-NCR</p>
          </div>
          <div className="rounded-xl shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={CHD} alt="HTML icon" />
            <p className="my-4">Chandigarh</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Stores;
