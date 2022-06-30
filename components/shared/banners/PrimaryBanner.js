import { SectionTitleGradient, TextGradient } from "../SharedTextgroups";

const PrimaryBanner = ({ title, sub, img, children }) => {
  return (
    <div className="py-10 xl:py-16 md:flex justify-between gap-6 max-h-max">
      <div className="md:w-[55%] my-10 md:my-0 md:pt-10">
        <div className="text-center md:text-start">
          <p className="text-sm md:text-base xl:text-lg font-bold">
            <TextGradient text={title} />
          </p>
          <SectionTitleGradient>{children}</SectionTitleGradient>
          <p className="2xl:w-3/4 mt-5 text-gray-300 leading-5 text-sm md:text-base">
            {sub}
          </p>
        </div>
      </div>
      <div className="md:w-[45%]">
        <img
          src={`/images/banners/${img}_banner.svg`}
          alt=""
          className="h-[30vh] md:h-full 2xl:h-[45vh] w-full"
        />
      </div>
    </div>
  );
};

export default PrimaryBanner;
