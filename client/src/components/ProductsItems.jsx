import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination, Scrollbar } from "swiper/modules";
import { petItemsData } from "../data/data";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "swiper/css/scrollbar";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";

import { useEffect, useRef } from "react";

const ProductsItems = () => {
  const swiperRef = useRef(null);

  useEffect(() => {
    const swiper = swiperRef.current.swiper;
    swiper.on("reachEnd", () => {
      setTimeout(() => {
        swiper.slideTo(0);
      }, 5000);
    });
  }, []);
  return (
    <div className="flex flex-col items-center justify-center mt-8 gap-6">
      <h1 className="font-vans text-[30px] self-center">Pet Items</h1>
      <Swiper
        breakpoints={{
          0: {
            slidesPerView: 1.15,
            spaceBetween: 5,
          },
          390: {
            slidesPerView: 1.5,
            spaceBetween: 5,
          },
          480: {
            slidesPerView: 2.25,
            spaceBetween: 30,
          },
          785: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          960: { slidesPerView: 4.15, spaceBetween: 15 },
          1200: {
            slidesPerView: 5,
            spaceBetween: 15,
          },
        }}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        scrollbar={{
          hide: true,
        }}
        modules={[FreeMode, Pagination, Scrollbar]}
        className="max-w-[90%] items-center justify-center relative "
        ref={swiperRef}
      >
        {petItemsData.map((item) => (
          <SwiperSlide key={item.title}>
            <div className="flex flex-col items-center justify-center gap-2 p-5 w-[200px] h-[350px] rounded-md shadow-xl hover:cursor-pointer hover:bg-yellow-300 hover:text-black border-black/10 border-[2px]  transition-all duration-500">
              <img src={item.image} alt={item.alt} className="w-[125px]" />
              <h1 className="font-semibold text-[15px] self-start">
                {item.title}
              </h1>
              <p className="text-[12px] self-center">{item.content}</p>
            </div>
          </SwiperSlide>
        ))}
        <div className="flex absolute right-0 top-1/2 transform z-[999] bg-black items-center justify-center w-[45px] p-2 rounded-full hover:cursor-pointer">
          <FaArrowRight
            size={30}
            color="#facc15"
            onClick={() => swiperRef.current.swiper.slideNext()}
          />
        </div>
        <div className="flex absolute left-0 top-1/2 transform z-[999] bg-black items-center justify-center w-[45px] p-2 rounded-full hover:cursor-pointer">
          <FaArrowLeft
            size={30}
            color="#facc15"
            onClick={() => swiperRef.current.swiper.slidePrev()}
          />
        </div>
      </Swiper>
    </div>
  );
};

export default ProductsItems;
