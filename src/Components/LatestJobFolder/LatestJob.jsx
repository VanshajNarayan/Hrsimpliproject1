import "./LatestJob.css";
import { MdArrowOutward } from "react-icons/md";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import Posts from "./Posts";

function LatestJob(){
  return (
    <>
      <section className="latestJob_section">

        <div className="job_heading">
          <h3>Latest <span>Job</span> post</h3>
          <p className="browse">browse all </p>
          <MdArrowOutward className="arrow_icon"/>
        </div>
        <div className="jobPost_box">

      <Swiper
        slidesPerView={3}
        spaceBetween={50}
        autoplay={{delay:2500, disableOnInteraction:false}}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><Posts/></SwiperSlide>
        <SwiperSlide><Posts/></SwiperSlide>
        <SwiperSlide><Posts/></SwiperSlide>
        <SwiperSlide><Posts/></SwiperSlide>
        <SwiperSlide><Posts/></SwiperSlide>
        <SwiperSlide><Posts/></SwiperSlide>
        <SwiperSlide><Posts/></SwiperSlide>
        <SwiperSlide><Posts/></SwiperSlide>
        <SwiperSlide><Posts/></SwiperSlide>
      </Swiper>


        </div>
      </section>
    </>
  )
};

export default LatestJob;