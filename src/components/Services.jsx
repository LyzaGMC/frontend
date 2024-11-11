import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import servicesData from "../services.json";
const Services = () => {
  const [nbr_scroll, setnbr_scroll] = useState(4);
  useEffect(() => {
    const setWidth = () => {
      // Check the screen width and set the number of months accordingly
      if (window.innerWidth < 640) {
        // Adjust the breakpoint according to your needs
        setnbr_scroll(1); // For small screens like phones
      } else {
        if (window.innerWidth < 1000) setnbr_scroll(3);
        else setnbr_scroll(4); // For larger screens
      }
    };

    // Call setMonths initially and add a resize event listener to update months on window resize
    setWidth();
    window.addEventListener("resize", setWidth);

    // Remove the event listener on component unmount
    return () => {
      window.removeEventListener("resize", setWidth);
    };
  }, []);
  const settings_ltr = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: nbr_scroll,
    slidesToScroll: 1,

    autoplay: true, // Enable autoplay
    autoplaySpeed: 2000,
    rtl: true,
  };
  const [filteredItems, setfilteredItems] = useState([]);
  useEffect(() => {
    // Charger les données à partir du fichier JSON
    setfilteredItems(servicesData);
  }, []);
  return (
    <div className="flex flex-col gap-4 py-4 justify-center w-full my-10 px-2">
      <h3 className="text-3xl text-center font-bold text-color6">
        Nos Services
      </h3>
      <div
        className="  w-full p2-10 mt-10
    sm:px-20 md:px-20 lg:px-20 xl:px-20 2xl:px-20 3xl:px-20"
      >
        <Slider {...settings_ltr} className=" px-1">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className=" p-3 rounded-xl border border-[#e4e4e4] cursor-pointer w-[500px] mb-1 flex flex-row justify-center items-center "
            >
              {" "}
              <div className="flex flex-col gap-3 w-full justify-between items-start">
                <img
                  src={item.image}
                  alt={item.titre}
                  className="w-[700px] h-[150px]"
                />
                <p className="font-bold text-color6 text-lg">{item.titre}</p>
                <p className="text-xs">{item.description}</p>
                <p>Fonctionalités</p>
                {item.fonctionnalites.map((i, index) => (
                  <div className="flex flex-col" key={index}>
                    <li className="text-[11px] text-color1 font-Poppins">
                      {i}
                    </li>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Services;
