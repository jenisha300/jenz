import React from "react";
import banner from "../../assets/ourstory.png";
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";

const Story = () => {
 
  return (
    <>
      <div className="min-h-[750px] bg-[url(src/assets/footer-bg.jpg)] bg-no-repeat bg-cover">
      
        <div className="min-h-[680px] flex justify-center items-center  py-12 sm:py-0 ">
        
          <div
            data-aos="slide-up"
            data-aos-duration="300"
            className="container"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Image section */}
              <div className="flex justify-center items-center">
                <img
                  src={banner}
                  alt="banner img"
                  className="max-w-[430px] h-[450px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]"
                />
                
              </div>
              {/* text content section */}
              <div className="flex flex-col justify-center items-center  gap-6 sm:pt-0">
                <h1 className="text-3xl sm:text-4xl font-bold text-yellow-400 ">
                Our Story
                </h1>
                <img src="src/assets/separator.svg" className="h-7  "/>
                <p className="text-[17px] text-white text-center">
                Welcome to JenZ! We are dedicated to serving delicious meals made from fresh, high-quality ingredients. 
                  Our cozy and inviting space is perfect for casual lunches or special dinners with friends and family. Each dish is crafted with care to highlight the best flavors, ensuring a delightful experience for every guest.
                Join us for great food and a welcoming atmosphere that will keep you coming back for more! 
                </p>
                
                <div>
                <img src="src/assets/jenz_logo-removebg-preview.png" className="h-[200px] "/>
                  
                </div>
                <div className="flex gap-6">
                  <div >
                    <GrSecure className="text-2xl h-20 w-20 shadow-sm p-5 rounded-full bg-gray-200 " /><p className="text-purple-300 text[poppins] text-center text-[17px]">Secure</p>
                  </div>
                  <div>
                    <IoFastFood className="text-2xl h-20 w-20 shadow-sm p-5 rounded-full bg-gray-200" /> <p className="text-purple-300 text[poppins] text-center text-[17px]">Healthy</p>
                  </div>
                  <div>
                    <GiFoodTruck className="text-2xl h-20 w-20 shadow-sm p-5 rounded-full bg-gray-200" /><p className="text-purple-300 text[poppins] text-center text-[17px]">Nutrious</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Story;
