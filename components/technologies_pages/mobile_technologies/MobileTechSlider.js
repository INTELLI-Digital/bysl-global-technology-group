import Image from "next/image";

import { TechnologiesSectionTitle } from "../../shared/SharedTextgroups";
import Slider from "../../shared/Slider";

const MobileTechSlider = ({ mobileTechData }) => {
  const { mobileSliderData, frame } = mobileTechData;

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
          <Slider data={mobileSliderData} size={1} />
        </div>
        <div className="hidden md:block 2xl:hidden">
          <Slider data={mobileSliderData} size={3} />
        </div>
        <div className="hidden 2xl:block">
          <Slider data={mobileSliderData} size={5} />
        </div>
        <div className="centered z-40">
          <div className="h-[277px] xxxs:h-[270px] xxs:h-[330px] xl:h-[420px] w-[135px] xxs:w-[165px] xl:w-[210px] relative drop-shadow-3xl">
            <Image
              src={frame}
              placeholder="blur"
              blurDataURL={frame}
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
