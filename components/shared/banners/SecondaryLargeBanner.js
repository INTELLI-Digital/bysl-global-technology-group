import { SectionTitleGradient, TextGradient } from "../SharedTextgroups";

const SecondaryLargeBanner = ({ data, children }) => {
  const { heading, subTitle, img } = data;

  return (
    <div className="py-10 xl:py-16">
      <p className="text-sm md:text-base xl:text-lg font-bold text-center">
        <TextGradient text={heading} />
      </p>
      <SectionTitleGradient centered={true}>{children}</SectionTitleGradient>
      <p className="xs:px-4 sm:w-4/5 lg:w-3/5 3xl:w-1/2 mx-auto mt-5 text-gray-300 leading-5 text-sm md:text-base text-center">
        {subTitle}
      </p>
      <img src={img} alt="" className="mt-5 lg:mt-10 2xl:mt-20 mx-auto" />
    </div>
  );
};

export default SecondaryLargeBanner;
