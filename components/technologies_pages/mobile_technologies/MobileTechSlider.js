import Image from "next/image";

import { TechnologiesSectionTitle } from "../../shared/SharedTextgroups";
import Slider from "../../shared/Slider";

const MobileTechSlider = ({ mobileTechData }) => {
  return (
    <div className="py-10 xl:py-16 ">
      <div className="mb-10">
        <TechnologiesSectionTitle>
          Intuitive applications that attract
          <br className="hidden xxs:block" />
          &nbsp;& retain users
        </TechnologiesSectionTitle>
      </div>
      <div className="relative">
        <div className="md:hidden">
          <Slider data={mobileTechData} size={1} />
        </div>
        <div className="hidden md:block 2xl:hidden">
          <Slider data={mobileTechData} size={3} />
        </div>
        <div className="hidden 2xl:block">
          <Slider data={mobileTechData} size={5} />
        </div>
        <div className="centered z-40">
          <div className="h-[277px] xxxs:h-[270px] xxs:h-[340px] xl:h-[430px] w-[140px] xxs:w-[165px] xl:w-[210px] relative drop-shadow-3xl">
            <Image
              src="/images/technologies/mobile/slider/mobileTechnologies_slider_frame.webp"
              layout="fill"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default MobileTechSlider;
