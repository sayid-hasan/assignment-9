import { useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

// import slider1 from "../../../assets/Images/slider 1.jpg";
// import slider2 from "../../../assets/Images/slider 2.jpg";
// import slider3 from "../../../assets/Images/slider 3.jpg";
// import slider4 from "../../../assets/Images/slider 4.jpg";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./SliderSweeper.css";

// import required modules
import { Autoplay, Pagination, Navigation, EffectCube } from "swiper/modules";

const SliderSweeper = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  // data aos
  useEffect(() => {
    AOS.init({ duration: "500", delay: "70" });
  }, []);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <>
      <div data-aos="fade-right" className="mt-10 mb-10 rounded-2xl">
        <Swiper
          slidesPerView={1}
          effect={"cube"}
          grabCursor={true}
          cubeEffect={{
            shadow: true,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 0.94,
          }}
          loop={true}
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[EffectCube, Autoplay, Pagination, Navigation]}
          onAutoplayTimeLeft={onAutoplayTimeLeft}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src="https://i.ibb.co/rHBxZ3h/slider-1.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={"https://i.ibb.co/LnMVbmX/slider-2.jpg"} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={"https://i.ibb.co/MVDQTVr/slider-3.jpg"} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={"https://i.ibb.co/5jypqMT/slider-4.jpg"} alt="" />
          </SwiperSlide>

          <div className="autoplay-progress" slot="container-end">
            <svg viewBox="0 0 48 48" ref={progressCircle}>
              <circle cx="24" cy="24" r="20"></circle>
            </svg>
            <span ref={progressContent}></span>
          </div>
        </Swiper>
      </div>
    </>
  );
};
export default SliderSweeper;
