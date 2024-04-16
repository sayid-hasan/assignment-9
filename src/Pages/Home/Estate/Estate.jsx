import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "./estate.css";
import { useEffect } from "react";

const Estate = ({ estate }) => {
  useEffect(() => {
    AOS.init({ duration: "300", delay: "70" });
  }, []);
  const {
    image,
    estate_title,
    segment_name,

    status,
    price,
    area,
    facilities,
    id,
  } = estate;
  //console.log(estate);
  return (
    <div>
      <div
        data-aos="zoom-in-up"
        className="bg-white border  border-[#05A081] border-opacity-20 p-6 rounded-md shadow-md  text-black space-y-5"
      >
        <div className="relative">
          <img
            src={image}
            alt=""
            className="object-cover object-center w-full rounded-md h-72 bg-gray-500"
          />
          <div className="absolute top-2 right-2 self-center px-8 py-3 font-semibold rounded-[50%] bg-[#05A081] text-white  ">
            {status}
          </div>
        </div>
        <div className="mt-6 mb-2 min-h-[75px]">
          <span className="block text-xs font-medium tracking-widest uppercase text-violet-400">
            {segment_name}
          </span>
          <h2 className="text-xl font-semibold tracking-wide">
            {estate_title}
          </h2>
        </div>
        <div className="text-black flex flex-col justify-center">
          <h2 className="text-base mb-4  font-semibold text-[#05a081] text-opacity-60">
            {" "}
            Facilities
          </h2>
          <ul className="list-disc pl-5 min-h-[150px] ">
            {facilities.map((facility, idx) => (
              <li className="text-gray-400 leading-6" key={idx}>
                {facility}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex justify-between mb-4 items-center font-bold text-[#05a081] text-opacity-70">
          <div>{price}</div>
          <div>{area}</div>
        </div>

        <div>
          <Link
            to={`/${id}`}
            className="self-center px-8 py-3 font-semibold rounded bg-[#05A081] text-white"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

Estate.propTypes = {
  estate: PropTypes.object,
};

export default Estate;
