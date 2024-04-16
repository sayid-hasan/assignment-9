import { Helmet } from "react-helmet";
import { Link, useLoaderData, useParams } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { FaMapLocationDot } from "react-icons/fa6";

const EstateDetails = () => {
  const { id } = useParams();
  const idint = parseInt(id);
  useEffect(() => {
    AOS.init({ duration: "500", delay: "500" });
  }, []);

  const estates = useLoaderData();
  const estate = estates.find((estate) => estate.id === idint);
  const {
    image,
    estate_title,
    segment_name,
    location,

    status,
    price,
    area,
    facilities,

    description,
  } = estate;
  return (
    <div>
      <Helmet>
        <title>Estate Details</title>
      </Helmet>

      {/* content */}
      <div data-aos="fade-up" className="font-montserate mt-14 mb-12">
        <h2 className="text-center text-[#05a081] font-montserate font-bold text-2xl md:text-4xl mb-5 ">
          Estate Details
        </h2>
        <div className="md:p-6 px-4 gap-7   flex md:flex-row-reverse flex-col min-h-screen md:items-center ">
          {/* 1 */}
          <div className="  flex-grow flex flex-col relative">
            <img src={image} className=" rounded-lg" />
            <div className="absolute top-2 right-2 self-center px-8 py-3 font-semibold rounded-[50%] bg-[#05A081] text-white  ">
              {status}
            </div>

            {/* facilitis */}
            <div className="flex mt-10 flex-col md:flex-row md:justify-between md:items-baseline">
              <div className="text-black flex flex-col justify-center">
                <h2 className="text-xl mb-4  font-bold text-[#05a081] ">
                  {" "}
                  Facilities
                </h2>
                <ul className="list-disc pl-5 min-h-[150px] ">
                  {facilities.map((facility, idx) => (
                    <li className=" leading-6" key={idx}>
                      {facility}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col gap-5 mb-4 items-center font-bold text-black text-opacity-70 md:mr-16 ">
                <div>
                  <span className="text-[#05a081] font-bitter text-lg font-bold">
                    Price :{" "}
                  </span>
                  {price}
                </div>
                <div>
                  <span className="text-[#05a081] font-bitter text-lg font-bold">
                    Area :{" "}
                  </span>
                  {area}
                </div>
              </div>
            </div>
            {/* location */}
            <div className="  flex justify-center items-center gap-4">
              <span className="text-[#05a081] text-3xl">
                <FaMapLocationDot></FaMapLocationDot>
              </span>
              <span className="text-xl font-bold tracking-widest text-black">
                {location}
              </span>
            </div>
          </div>
          {/* 2 */}
          <div className="flex-grow">
            <h1 className="text-2xl md:text-3xl text-[#05a081] font-bold">
              {estate_title}
            </h1>
            <span className="block text-xs font-medium tracking-widest uppercase text-violet-400 mt-5">
              {segment_name}
            </span>

            <p className="py-6 font-bitter leading-9">{description}</p>

            {/* back to homepage */}
            <Link
              to="/"
              className="self-center px-8 py-3 font-semibold rounded bg-[#05A081] text-white"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EstateDetails;
