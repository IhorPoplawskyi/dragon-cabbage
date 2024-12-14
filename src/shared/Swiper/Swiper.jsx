import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination, Scrollbar } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import { useId } from "react";
import { SwiperWrapper } from "./Swiper.styled";

// import "swiper/css/pagination";

export const CustomSwiper = ({ vacancies }) => (
  <SwiperWrapper>
    <Swiper
      modules={[Navigation, Pagination, Scrollbar]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      // pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    >
      {vacancies.map((vacancy) => {
        return (
          <SwiperSlide className="vacancy-card" key={useId()}>
            <h2 className="vacancy__title">{vacancy.title}</h2>
            <span className="vacancy__salary">{vacancy.salary}</span>
          </SwiperSlide>
        );
      })}
    </Swiper>
  </SwiperWrapper>
);
