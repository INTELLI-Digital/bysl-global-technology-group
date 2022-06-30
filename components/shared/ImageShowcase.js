import { getPath } from "../../utils/paths";
import { SectionTitleType, TechnologiesSectionTitle } from "./SharedTextgroups";

const ImageShowcase = (props) => {
  const { children, sub, img, type } = props;

  return (
    <div className="py-10 xl:py-16">
      {type && <SectionTitleType title={type} />}
      <TechnologiesSectionTitle>{children}</TechnologiesSectionTitle>
      {sub && (
        <p className="xs:px-4 sm:w-4/5 lg:w-3/5 3xl:w-1/2 mx-auto text-center mt-4 xl:mt-5 text-gray-300 text-sm md:text-base">
          {sub}
        </p>
      )}
      <img
        src={img}
        alt=""
        className={`mx-auto mt-10 xl:mt-16 max-h-56 md:max-h-64 lg:max-h-72 xl:max-h-96 3xl:max-h-full ${
          getPath("/ites") ||
          (getPath("/data-science") && "shadow-2xl shadow-blue-500/25")
        } rounded-[20px]`}
      />
    </div>
  );
};

export default ImageShowcase;
