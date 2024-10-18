import banner from "./img/banner.png";

function HeroSection() {
  return (
    <div className="w-full h-[650px] max-w-[1920px] mx-auto">
      <img className="w-full h-full object-cover" src={banner} alt="Banner" />
    </div>
  );
}

export default HeroSection;
