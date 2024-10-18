import { useState, useEffect } from "react";
import banner1 from "./img/banner1.png";
import banner2 from "./img/banner2.png";

function Slider() {
  const banners = [banner1, banner2]; // Array of images
  const [currentSlide, setCurrentSlide] = useState(0); // Track current slide

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === banners.length - 1 ? 0 : prevSlide + 1
      ); // Increment slide, reset to 0 if it's the last slide
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [banners.length]);

  return (
    <div className="relative w-full h-[650px] max-w-[1920px] mx-auto overflow-hidden">
      <div
        className={`flex transition-transform duration-1000 ease-in-out`}
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {banners.map((banner, index) => (
          <div key={index} className="flex-none w-full h-full">
            <img src={banner} alt={`Banner ${index + 1}`} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Slider;
