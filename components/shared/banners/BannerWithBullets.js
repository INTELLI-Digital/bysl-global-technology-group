import { TechnologiesSectionTitle } from "../SharedTextgroups";

const BannerWithBullets = (props) => {
  const { data, reversed, group, children } = props;
  const { subTitle, img, features, title } = data;

  return (
    <div
      className={`lg:flex gap-6
      ${group ? "pb-20 xl:pb-16" : "py-10 xl:py-16"}`}
    >
      <div
        className={`lg:w-[55%] lg:pt-10 order-1 ${reversed && "lg:order-2"}`}
      >
        <TechnologiesSectionTitle start={true}>
          {children ? children : title}
        </TechnologiesSectionTitle>
        {subTitle && <p className="mt-5 text-gray-300">{subTitle}</p>}
        <div className="grid grid-cols-1 xxs:grid-cols-2 my-5 sm:my-10 lg:mb-0">
          {features.map((item, i) => (
            <div key={i} className="flex items-center mt-1 3xl:mt-3">
              <img src="/images/items_icon.svg" alt="" />
              <p className="text-gray-300 text-sm lg:text-base 3xl:text-xl ml-3">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
      <img
        src={img}
        alt=""
        className={`lg:w-[45%] mx-auto max-h-80 lg:max-h-[400px] mt-5 lg:mt-0 order-2 ${
          reversed && "lg:order-1"
        }`}
      />
    </div>
  );
};

export default BannerWithBullets;
