import {
  TechnologiesSectionTitle,
  TextGradient,
} from "../../shared/SharedTextgroups";

const HowItWorks = () => {
  return (
    <div className="py-10 xl:py-16">
      <TechnologiesSectionTitle>
        How does it <TextGradient text="works" /> ?
      </TechnologiesSectionTitle>
      <img src="/images/technologies/ar_vr/ar_vr_slider.gif" alt="" className="mt-10 lg:mt-16 2xl:mt-20 w-full h-48 sm:h-64 md:h-80 lg:h-[400px] 2xl:h-[500px] 3xl:h-[674px] rounded-xl 2xl:rounded-[20px] 3xl:rounded-[40px]" />
    </div>
  );
};

export default HowItWorks;
