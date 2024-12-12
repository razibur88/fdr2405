import React from "react";
import One from "../assets/item.png";
import Soto from "../assets/soto.png";

const Gallery = () => {
  return (
    <section>
      <div className="flex justify-between">
        <div className="w-[24%]">
          <img src={One} alt="One" />
        </div>
        <div className="w-[24%]">
          <img src={One} alt="One" />
        </div>
        <div className="w-[24%]">
          <img src={One} alt="One" />
        </div>
        <div className="w-[24%]">
          <img src={One} alt="One" />
        </div>
      </div>
      <div className="py-4">
        <div className="flex flex-wrap">
          <div className="w-1/2 py-[134px]">
            <div className="w-[509px] pl-[42px] mx-auto">
              <h2 className="text-[64px] font-pops font-bold">Our Services</h2>
              <p className="text-[16px] font-pops font-medium">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </p>
            </div>
          </div>
          <div className="w-1/2">
            <div
              className="py-[148px] relative z-[1] after:absolute after:left-0 after:top-0 after:content-[''] after:z-[-1] after:w-full after:h-full after:bg-[rgba(34,34,34,0.6)]"
              style={{ backgroundImage: `url(${Soto})` }}
            >
              <div className="pl-[80px]">
                <h2 className="text-[36px] font-bold font-pops text-white pb-[30px]">
                  Modern natural oil and gas refineries.
                </h2>
                <a
                  className="py-[13px] px-[40px] bg-[#F40404] text-white font-pops font-normal text-[15px] transition duration-300 ease-in-out hover:bg-[gray]"
                  href="#"
                >
                  LEARN MORE
                </a>
              </div>
            </div>
          </div>
          <div className="w-1/2">
            <div
              className="py-[148px] relative z-[1] after:absolute after:left-0 after:top-0 after:content-[''] after:z-[-1] after:w-full after:h-full after:bg-[rgba(34,34,34,0.6)]"
              style={{ backgroundImage: `url(${Soto})` }}
            >
              <div className="pl-[80px]">
                <h2 className="text-[36px] font-bold font-pops text-white pb-[30px]">
                  Modern natural oil and gas refineries.
                </h2>
                <a
                  className="py-[13px] px-[40px] bg-[#F40404] text-white font-pops font-normal text-[15px]"
                  href="#"
                >
                  LEARN MORE
                </a>
              </div>
            </div>
          </div>
          <div className="w-1/2">
            <div
              className="py-[148px] relative z-[1] after:absolute after:left-0 after:top-0 after:content-[''] after:z-[-1] after:w-full after:h-full after:bg-[rgba(34,34,34,0.6)]"
              style={{ backgroundImage: `url(${Soto})` }}
            >
              <div className="pl-[80px]">
                <h2 className="text-[36px] font-bold font-pops text-white pb-[30px]">
                  Modern natural oil and gas refineries.
                </h2>
                <a
                  className="py-[13px] px-[40px] bg-[#F40404] text-white font-pops font-normal text-[15px]"
                  href="#"
                >
                  LEARN MORE
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
