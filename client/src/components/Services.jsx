import { servicesData } from "../data/data";
import servicesImg from "../assets/img/services-main.png";
import servicesImgHover from "../assets/img/services-main-hover.png";
import { useState } from "react";
const Services = () => {
  const [hover, setHover] = useState(false);
  function handleHover() {
    setHover(!hover);
  }
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-4 mt-6">
        <div className="inline-flex item-center justify-center">
          <h1 className="text-yellow-500 font-semibold font-rubik text-2xl">
            What We Have To Offer
          </h1>
        </div>
        <div className="flex flex-col 800px:flex-row items-center justify-between gap-4 ">
          <div className="flex flex-col items-center justify-center gap-2 p-8 w-full">
            <h1 className=" text-2xl self-start mb-2 font-vans">
              We Offer Services Like:
            </h1>
            <ul className="list-none flex flex-col gap-4">
              {servicesData.map((item, key) => (
                <li className="flex items-center justify-start gap-3" key={key}>
                  <img
                    src={item.icon}
                    alt="icon for services"
                    className="inline-flex items-center justify-center w-[25px]"
                  />
                  <h3 className="font-medium">{item.description}</h3>
                </li>
              ))}
            </ul>
          </div>
          <div
            className="flex items-center justify-center w-full"
            onMouseEnter={handleHover}
            onMouseLeave={handleHover}
          >
            <img
              src={hover ? servicesImgHover : servicesImg}
              alt="services main image"
              className="object-contain w-[500px]"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
