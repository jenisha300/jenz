import React from "react";
import BiryaniImg1 from "../../assets/food-1.png";
import BiryaniImg2 from "../../assets/food-2.png";
import BiryaniImg3 from "../../assets/food-31.png";
import Vector from "../../assets/bg.jpg";
const ImageList = [
  {
    id: 1,
    img: BiryaniImg1,
  },
  {
    id: 2,
    img: BiryaniImg2,
  },
  {
    id: 3,
    img: BiryaniImg3,
  },
];

const Hero = () => {
  const [imageId, setImageId] = React.useState(BiryaniImg1);

  const bgImage = {
    backgroundImage: `url(${Vector})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "[500vh]",
    width: "[5oovh]",
  };

  return (
    <>
      <div
        className="min-h-[600px] sm:min-h-[700px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200"
        style={bgImage}
      >
        <div className="container pb-8 sm:pb-0">
          <div className="grid grid-cols-1 sm:grid-cols-2">
           
            
            <div
              data-aos="zoom-out"
              data-aos-duration="400"
              data-aos-once="true"
              className="flex flex-col justify-center items-center  gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1"
            >
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-medium">
                
                <span class="bg-clip-text text-transparent bg-gradient-to-b from-primary to-secondary">
                  JENZ
                </span>{"  "}
                Welcomes You!!
              </h1>
              <img src="src/assets/separator.svg" className="h-6  "/>
              <p className="text-[poppins] text-secondary text-[40px]">
              Where every flavor
              tells a story 
              </p>
              <div>
                <button className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white text-[18px] font-[poppins] py-3 px-6 rounded-full">
                  view menu
                </button>
              </div>
            </div>
          
            <div className="min-h-[450px] sm:min-h-[450px] flex justify-center items-center relative order-1 sm:order-2 ">
              <div className="h-[300px] sm:h-[450px] overflow-hidden flex justify-center items-center">
                <img
                  data-aos="zoom-in"
                  data-aos-duration="300"
                  data-aos-once="true"
                  src={imageId}
                  alt="biryani img"
                  className="w-[500px] sm:w-[800px] sm:scale-125  mx-auto spin "
                />
              </div>
              <div className="flex lg:flex-col lg:top-1/2 lg:-translate-y-1/2 lg:py-2 justify-center gap-4 absolute bottom-[0px] lg:-right-10  rounded-full">
                {ImageList.map((item) => (
                  <img
                    data-aos="zoom-in"
                    data-aos-duration="400"
                    data-aos-once="true"
                    src={item.img}
                    onClick={() => {
                      setImageId(
                        item.id === 1
                          ? BiryaniImg1
                          : item.id === 2
                          ? BiryaniImg2
                          : BiryaniImg3
                      );
                    }}
                    alt="biryani img"
                    className="max-w-[80px] h-[80px] object-contain inline-block hover:scale-105 duration-200"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
