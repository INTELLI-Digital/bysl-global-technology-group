import ServicesCard from "../../shared/ServicesCard";
import {
  SectionTitleType,
  TechnologiesSectionTitle,
} from "../../shared/SharedTextgroups";

const TriangleCardBanner = (props) => {
  const { children, data, img, black, padding, type } = props;

  return (
    <div className="py-10 xl:py-16">
      {type && <SectionTitleType title={type} />}
      <TechnologiesSectionTitle>{children}</TechnologiesSectionTitle>
      <div className="md:flex items-center mt-10 xl:mt-20 gap-5 3xl:gap-8">
        <div className="w-full md:w-1/2 mb-10 md:mb-0 order-1 md:order-2">
          <ServicesCard data={data} black={black} padding={padding} />
        </div>
        <img
          src={img}
          alt=""
          className="md:w-1/2 max-h-80 lg:max-h-[440px] mx-auto order-2 md:order-1 rounded-xl 2xl:rounded-[20px]"
        />
      </div>
    </div>
  );
};

export default TriangleCardBanner;
