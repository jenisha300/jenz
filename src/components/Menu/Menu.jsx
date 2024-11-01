import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Menu() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
    
  };
  return (
    <div className="w-5/6 m-auto ">
      <div className="mt-20 mb-20">
             
        <h1 className="text-[20px]  bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary  font-semibold  "> Special Selection</h1>
        <p className="text-[40px] text-[poppins] font-bold text-secondary">
          Delicious Menu.....!
        </p>

        
        <Slider {...settings}>
          
          {data.map((d) => (
            
            <div key={d.name} className="bg-white h-[450px] text-black rounded-xl ">
              <div className="h-56 bg-[url('src/assets/green-background2.jpg')] flex justify-center items-center rounded-t-xl  ">
                <img src={d.img} alt="" className="h-44 w-44 rounded-full " />
              </div>

              <div className="flex flex-col items-center justify-center gap-4 p-4">
                <p className="text-xl font-semibold">{d.name}</p>
                <p className="text-center">{d.review}</p>
                <button className='bg-[#185823dd] text-white text-lg px-6 py-1 rounded-xl '>view dish</button>
              </div>
            </div>
          ))}
        </Slider>
      </div>

    </div>
  );
}
const data = [
  {
    name: `Greek Salad `,
    img: `src/assets/menu-1.png`,
    review: `Tomatoes, green bell pepper, sliced cucumber onion, olives, and feta cheese. .`
  },
  {
    name: `ButtePumpkin`,
    img: `src/assets/menu-2.png`,
    review: `Typesetting industry lorem Lorem Ipsum is simply dummy text of the priand.`
  },
  {
    name: ` Olivas Rellenas`,
    img: `src/assets/menu-3.png`,
    review: ` Olivas Rellenas

Avocados with crab meat, red onion, crab salad stuffed red bell pepper . `
  },
  {
    name: `
Lasagne
`,
    img: `src/assets/menu-4.png`,
    review: `Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices .`
  },
  {
    name: `
Tokusen Wagyu
`,
    img: `src/assets/menu-5.png`,
    review: `Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices. `
  },
  {
    name: `
Opu Fish
`,
    img: `src/assets/menu-6.png`,
    review: `Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices .`
  },

];

export default Menu;




