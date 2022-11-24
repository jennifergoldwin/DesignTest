/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
const Main = () => {
  return (
    <div className="bg-white rounded-lg mt-4">
      <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        <SwiperSlide className="flex justify-center  pb-8 mt-4">
          <img src="/images/post.png" alt="" />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center  pb-8 mt-4">
          <img src="/images/post.png" alt="" />
        </SwiperSlide>
      </Swiper>
      <div className="flex justify-center flex-col px-4 sm:px-6 py-6 ">
        <div className="font-[600]">Xiuxian, 22</div>
        <div className="flex gap-4">
          <div className="flex">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/work.png" alt="" />
            <div className="font-medium ml-2">SIM-UOL</div>
          </div>
          <div className="flex">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/univ.png" alt="" />
            <div className="font-medium ml-2">Student at University</div>
          </div>
        </div>
        <hr className="my-4 h-px bg-gray-200 border-0 dark:bg-gray-700" />
        <div>Gemini. Art student and tall.</div>
        <div>Coffee, cold showers and early morning walks!</div>
      </div>
    </div>
  );
};

export default Main;
