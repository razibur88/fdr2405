import React from "react";
import { MdOutlineEmail, MdCall } from "react-icons/md";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const Header = () => {
  return (
    <header className="bg-bghead py-[15px]">
      <div className="max-w-container mx-auto">
        <div className="flex">
          <div className="w-1/4">
            <div className="flex items-center gap-x-2">
              <MdOutlineEmail className="text-[#fff]" />
              <h2 className="font-pops font-normal text-[12px] text-[#fff]">
                mail@yourcompany.com
              </h2>
            </div>
          </div>
          <div className="w-1/4">
            <div className="flex items-center gap-x-2">
              <MdCall className="text-[#fff]" />
              <h3 className="font-pops font-normal text-[12px] text-[#fff]">
                +896 120 5889 (Toll free)
              </h3>
            </div>
          </div>
          <div className="w-1/2">
            <div className="flex justify-end gap-x-3">
              <FaFacebookF className="text-[#fff]" />
              <FaTwitter className="text-[#fff]" />
              <FaLinkedinIn className="text-[#fff]" />
              <FaInstagram className="text-[#fff]" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
