import { useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import home2 from "../../../assets/Homes/home 2.jpg";
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
      <div data-aos="fade-up" className="mt-10 mb-10 rounded-2xl">
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
            <div className="w-full relative">
              <div
                className="flex-grow md:object-cover object-center object-contain
"
              >
                <img
                  src="https://i.ibb.co/rHBxZ3h/slider-1.jpg"
                  className="w-full aspect-auto "
                  alt=""
                />
              </div>
              <div data-aos="fade-up ">
                <div className="absolute bottom-5  right-1/2 translate-x-1/2">
                  <div className="stats glass bg-white bg-opacity-20 grid md:grid-cols-3 md:grid-rows-1 grid-cols-1 grid-rows-3 shadow ">
                    <div className="stat">
                      <div className="stat-figure text-secondary">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          className="inline-block w-8 h-8 stroke-current"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          ></path>
                        </svg>
                      </div>
                      <div className="stat-title">Downloads</div>
                      <div className="stat-value text-xl md:text-4xl text-[#71b100]">
                        31K
                      </div>
                      <div className="stat-desc">Jan 1st - Feb 1st</div>
                    </div>

                    <div className="stat">
                      <div className="stat-figure text-secondary">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          className="inline-block w-8 h-8 stroke-current"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                          ></path>
                        </svg>
                      </div>
                      <div className="stat-title">New Users</div>
                      <div className="stat-value text-xl md:text-4xl text-[#71b100]">
                        4,200
                      </div>
                      <div className="stat-desc">↗︎ 400 (22%)</div>
                    </div>

                    <div className="stat">
                      <div className="stat-figure text-secondary">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          className="inline-block w-8 h-8 stroke-current"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                          ></path>
                        </svg>
                      </div>
                      <div className="stat-title">New Registers</div>
                      <div className="stat-value text-xl md:text-4xl text-[#71b100]">
                        1,200
                      </div>
                      <div className="stat-desc">↘︎ 90 (14%)</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="w-full relative">
              <div className="flex-grow  md:object-cover object-center object-contain">
                <img src={home2} className="w-full aspect-auto " alt="" />
              </div>

              <div data-aos="flip-right">
                <div className="absolute bottom-5  right-1/2 translate-x-1/2">
                  <div className="stats  grid md:grid-cols-3 md:grid-rows-1 grid-cols-1 grid-rows-3 shadow ">
                    <div className="stat">
                      <div className="stat-figure text-secondary">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          fill="currentColor"
                          className="h-9 w-9 dark:text-gray-100"
                        >
                          <polygon points="160 96.039 160 128.039 464 128.039 464 191.384 428.5 304.039 149.932 304.039 109.932 16 16 16 16 48 82.068 48 122.068 336.039 451.968 336.039 496 196.306 496 96.039 160 96.039"></polygon>
                          <path d="M176.984,368.344a64.073,64.073,0,0,0-64,64h0a64,64,0,0,0,128,0h0A64.072,64.072,0,0,0,176.984,368.344Zm0,96a32,32,0,1,1,32-32A32.038,32.038,0,0,1,176.984,464.344Z"></path>
                          <path d="M400.984,368.344a64.073,64.073,0,0,0-64,64h0a64,64,0,0,0,128,0h0A64.072,64.072,0,0,0,400.984,368.344Zm0,96a32,32,0,1,1,32-32A32.038,32.038,0,0,1,400.984,464.344Z"></path>
                        </svg>
                      </div>
                      <div className="stat-title">Orders</div>
                      <div className="stat-value text-xl md:text-4xl text-[#71b100]">
                        200
                      </div>
                      <div className="stat-desc">Jan 1st - Feb 1st</div>
                    </div>

                    <div className="stat">
                      <div className="stat-figure text-secondary">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          fill="currentColor"
                          className="h-9 w-9 dark:text-gray-100"
                        >
                          <path d="M425.706,142.294A240,240,0,0,0,16,312v88H160V368H48V312c0-114.691,93.309-208,208-208s208,93.309,208,208v56H352v32H496V312A238.432,238.432,0,0,0,425.706,142.294Z"></path>
                          <rect width="32" height="32" x="80" y="264"></rect>
                          <rect width="32" height="32" x="240" y="128"></rect>
                          <rect width="32" height="32" x="136" y="168"></rect>
                          <rect width="32" height="32" x="400" y="264"></rect>
                          <path d="M297.222,335.1l69.2-144.173-28.85-13.848L268.389,321.214A64.141,64.141,0,1,0,297.222,335.1ZM256,416a32,32,0,1,1,32-32A32.036,32.036,0,0,1,256,416Z"></path>
                        </svg>
                      </div>
                      <div className="stat-title">New Users</div>
                      <div className="stat-value text-xl md:text-4xl text-[#71b100]">
                        172%
                      </div>
                      <div className="stat-desc">↗︎Growth</div>
                    </div>

                    <div className="stat">
                      <div className="stat-figure text-secondary">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          fill="currentColor"
                          className="h-9 w-9 dark:text-gray-100"
                        >
                          <path d="M454.423,278.957,328,243.839v-8.185a116,116,0,1,0-104,0V312H199.582l-18.494-22.6a90.414,90.414,0,0,0-126.43-13.367,20.862,20.862,0,0,0-8.026,33.47L215.084,496H472V302.08A24.067,24.067,0,0,0,454.423,278.957ZM192,132a84,84,0,1,1,136,65.9V132a52,52,0,0,0-104,0v65.9A83.866,83.866,0,0,1,192,132ZM440,464H229.3L79.141,297.75a58.438,58.438,0,0,1,77.181,11.91l28.1,34.34H256V132a20,20,0,0,1,40,0V268.161l144,40Z"></path>
                        </svg>
                      </div>
                      <div className="stat-title">New Registers</div>
                      <div className="stat-value text-xl md:text-4xl text-[#71b100]">
                        17%
                      </div>
                      <div className="stat-desc">Bounce rate</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" w-full relative">
              <div className="flex-grow  md:object-cover object-center object-contain">
                <img
                  src={"https://i.ibb.co/MVDQTVr/slider-3.jpg"}
                  className="w-full aspect-auto"
                  alt=""
                />
              </div>

              <div data-aos="fade-right">
                <div className="absolute bottom-5  right-1/2 translate-x-1/2">
                  <div className="stats  grid md:grid-cols-3 md:grid-rows-1 grid-cols-1 grid-rows-3 shadow ">
                    <div className="stat">
                      <div className="stat-figure text-secondary">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          fill="currentColor"
                          className="h-9 w-9 dark:text-gray-100"
                        >
                          <polygon points="160 96.039 160 128.039 464 128.039 464 191.384 428.5 304.039 149.932 304.039 109.932 16 16 16 16 48 82.068 48 122.068 336.039 451.968 336.039 496 196.306 496 96.039 160 96.039"></polygon>
                          <path d="M176.984,368.344a64.073,64.073,0,0,0-64,64h0a64,64,0,0,0,128,0h0A64.072,64.072,0,0,0,176.984,368.344Zm0,96a32,32,0,1,1,32-32A32.038,32.038,0,0,1,176.984,464.344Z"></path>
                          <path d="M400.984,368.344a64.073,64.073,0,0,0-64,64h0a64,64,0,0,0,128,0h0A64.072,64.072,0,0,0,400.984,368.344Zm0,96a32,32,0,1,1,32-32A32.038,32.038,0,0,1,400.984,464.344Z"></path>
                        </svg>
                      </div>
                      <div className="stat-title">Orders</div>
                      <div className="stat-value text-xl md:text-4xl text-[#71b100]">
                        200
                      </div>
                      <div className="stat-desc">Jan 1st - Feb 1st</div>
                    </div>

                    <div className="stat">
                      <div className="stat-figure text-secondary">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          fill="currentColor"
                          className="h-9 w-9 dark:text-gray-100"
                        >
                          <path d="M425.706,142.294A240,240,0,0,0,16,312v88H160V368H48V312c0-114.691,93.309-208,208-208s208,93.309,208,208v56H352v32H496V312A238.432,238.432,0,0,0,425.706,142.294Z"></path>
                          <rect width="32" height="32" x="80" y="264"></rect>
                          <rect width="32" height="32" x="240" y="128"></rect>
                          <rect width="32" height="32" x="136" y="168"></rect>
                          <rect width="32" height="32" x="400" y="264"></rect>
                          <path d="M297.222,335.1l69.2-144.173-28.85-13.848L268.389,321.214A64.141,64.141,0,1,0,297.222,335.1ZM256,416a32,32,0,1,1,32-32A32.036,32.036,0,0,1,256,416Z"></path>
                        </svg>
                      </div>
                      <div className="stat-title">New Users</div>
                      <div className="stat-value text-xl md:text-4xl text-[#71b100]">
                        172%
                      </div>
                      <div className="stat-desc">↗︎Growth</div>
                    </div>

                    <div className="stat">
                      <div className="stat-figure text-secondary">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          fill="currentColor"
                          className="h-9 w-9 dark:text-gray-100"
                        >
                          <path d="M454.423,278.957,328,243.839v-8.185a116,116,0,1,0-104,0V312H199.582l-18.494-22.6a90.414,90.414,0,0,0-126.43-13.367,20.862,20.862,0,0,0-8.026,33.47L215.084,496H472V302.08A24.067,24.067,0,0,0,454.423,278.957ZM192,132a84,84,0,1,1,136,65.9V132a52,52,0,0,0-104,0v65.9A83.866,83.866,0,0,1,192,132ZM440,464H229.3L79.141,297.75a58.438,58.438,0,0,1,77.181,11.91l28.1,34.34H256V132a20,20,0,0,1,40,0V268.161l144,40Z"></path>
                        </svg>
                      </div>
                      <div className="stat-title">New Registers</div>
                      <div className="stat-value text-xl md:text-4xl text-[#71b100]">
                        17%
                      </div>
                      <div className="stat-desc">Bounce rate</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" w-full relative">
              <div className="flex-grow  md:object-cover object-center object-contain">
                <img
                  src={"https://i.ibb.co/5jypqMT/slider-4.jpg"}
                  className="w-full aspect-auto"
                  alt=""
                />
              </div>

              <div data-aos="fade-left">
                <div className="absolute bottom-5  right-1/2 translate-x-1/2">
                  <div className="stats glass bg-white bg-opacity-20 grid md:grid-cols-3 md:grid-rows-1 grid-cols-1 grid-rows-3 shadow ">
                    <div className="stat">
                      <div className="stat-figure text-secondary">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          className="inline-block w-8 h-8 stroke-current"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          ></path>
                        </svg>
                      </div>
                      <div className="stat-title">Downloads</div>
                      <div className="stat-value text-xl md:text-4xl text-[#71b100]">
                        31K
                      </div>
                      <div className="stat-desc">Jan 1st - Feb 1st</div>
                    </div>

                    <div className="stat">
                      <div className="stat-figure text-secondary">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          className="inline-block w-8 h-8 stroke-current"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                          ></path>
                        </svg>
                      </div>
                      <div className="stat-title">New Users</div>
                      <div className="stat-value text-xl md:text-4xl text-[#71b100]">
                        4,200
                      </div>
                      <div className="stat-desc">↗︎ 400 (22%)</div>
                    </div>

                    <div className="stat">
                      <div className="stat-figure text-secondary">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          className="inline-block w-8 h-8 stroke-current"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                          ></path>
                        </svg>
                      </div>
                      <div className="stat-title">New Registers</div>
                      <div className="stat-value text-xl md:text-4xl text-[#71b100]">
                        1,200
                      </div>
                      <div className="stat-desc">↘︎ 90 (14%)</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
