import Image from "next/image";
import Slider from "../../shared/Slider";

const MobileTechSlider = () => {
  return (
    <div className="py-10 xl:py-16 relative">
      <div className="md:hidden">
        <Slider size={1} />
      </div>
      <div className="hidden md:block 2xl:hidden">
        <Slider size={3} />
      </div>
      <div className="hidden 2xl:block">
        <Slider size={5} />
      </div>
      <div className="centered z-40">
        <div className="h-[277px] xxxs:h-[270px] xxs:h-[340px] xl:h-[430px] w-[230px] relative">
          <Image
            src="/images/technologies/mobile/slider/mobileTechnologies_slider_frame.svg"
            layout="fill"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
export default MobileTechSlider;
