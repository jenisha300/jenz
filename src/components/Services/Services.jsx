import React from "react";
import Img1 from "../../assets/service-1.jpg";
import Img2 from "../../assets/service-2.jpg";
import Img3 from "../../assets/service-3.jpg";
import StarRatings from "react-star-ratings";
const ServicesData = [
  {
    id: 1,
    img: Img1,
    name: "Breakfast",
    description:
      "Begin your day with a delightful breakfast, featuring fresh ingredients daily.",
  },
  {
    id: 2,
    img: Img2,
    name: "Lunch ",
    description:
      "Lunch made fresh daily with diverse flavors,  satisfying options to fuel your afternoon.",
  },
  {
    id: 3,
    img: Img3,
    name: "Dinner",
    description:
      "End your day with a memorable dinner, crafted  vibrant flavors, and warm ambiance.",
  },
];
const Services = () => {
  return (
    <>
    <div className="bg-[url('src/assets/rb_2148939739.png')]">
    <span id="services"></span>
      <div className="py-10 ">
        <div className="container ">
          <div className="text-center mb-20 max-w-[400px] mx-auto">
            <p className="text-[18px] text-yellow-800 text-[poppins] font-medium ">
            Flavors For Royalty
            </p>


            <h1 className="text-[30px]  bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary  font-medium "> Our Services</h1>
            <p className="text-[40px] text-[poppins] font-bold text-black">
            We offer premium dining
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center">
            {ServicesData.map((service) => (
              <div
                data-aos="zoom-in"
                data-aos-duration="300"
                className="rounded-2xl  bg-gray-800 hover:bg-primary dark:hover:bg-primary hover:text-white relative shadow-xl duration-high group max-w-[300px]"
              >
                <div className="h-[170px]">
                  <img
                    src={service.img}
                    alt=""
                    className="max-w-[200px] block mx-auto transform -translate-y-14
                  group-hover:scale-105 group-hover:rotate-6 duration-300"
                  />
                </div>
                <div className="p-4 text-center">
                  <div className="w-full ">
                    <StarRatings
                      rating={5}
                      starRatedColor="yellow"
                      isSelectable={false}
                      starHoverColor="yellow"
                      starDimension="20px"
                      changeRating={() => {}}
                      numberOfStars={5}
                      name="rating"
                    />
                  </div>
                  <h1 className="text-[26px]  hover:text-white duration-high font-bold">{service.name}</h1>
                  <p className="text-white text-sm line-clamp-2">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
      
    </>
  );
};

export default Services;
