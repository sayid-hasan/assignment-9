//import React from 'react';

import { useLoaderData } from "react-router-dom";
import SliderSweeper from "./slidersweeper/SliderSweeper";
import Estate from "./Estate/Estate";
import Faq from "./Faq/Faq";
import { Helmet } from "react-helmet";

//import Navbar from "../../Shared/Navbar/Navbar";

const Home = () => {
  const estates = useLoaderData();
  //console.log(estates);
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <SliderSweeper></SliderSweeper>
      {
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-16 mb-12">
          {estates.map((estate, idx) => (
            <Estate estate={estate} key={idx}></Estate>
          ))}
        </div>
      }

      <Faq></Faq>
    </>
  );
};

export default Home;
