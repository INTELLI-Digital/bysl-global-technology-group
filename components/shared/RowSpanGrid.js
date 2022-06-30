import { TechnologiesSectionTitle } from "./SharedTextgroups";

const RowSpanGrid = (props) => {
  const { children, data } = props;

  return (
    <div className="py-10 xl:py-16">
      <TechnologiesSectionTitle>{children}</TechnologiesSectionTitle>
      <div className="mt-6 xl:mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-2 gap-4 2xl:gap-6">
        {data.map(
          ({ id, title, title2, subTitle, subTitle2, img, benefits }) => {
            return (
              <div
                key={id}
                className={`${
                  id === 0 && "xl:row-span-2 2xl:pt-10 text-start"
                } bg-white rounded-[10px] md:rounded-2xl xl:rounded-[20px] p-5 2xl:p-10 2xl:pt-16 ${
                  id !== 0 && "xl:text-center"
                } border-[1px] border-[#393E50]/10`}
              >
                <div
                  className={`p-2.5 xl:p-3 3xl:p-4 bg-blue-200 h-10 xl:h-12 3xl:h-16 w-10 xl:w-12 3xl:w-16 rounded-full flex items-center justify-center ${
                    id !== 0 && "xl:mx-auto"
                  }`}
                >
                  <img src={img} alt="" className="" />
                </div>
                <p
                  className={`text-lg xl:text-xl 2xl:text-2xl 3xl:text-[32px] font-bold text-gray-800 leading-7 xl:leading-[48px] my-2.5 xl:my-3 3xl:my-6 ${
                    id === 0 && "3xl:mt-8 3xl:mb-4"
                  }`}
                >
                  {title}
                </p>
                <p className="text-gray-300 text-sm xl:text-base">{subTitle}</p>
                {subTitle2 && (
                  <p className="text-gray-300 text-sm xl:text-base mt-4 hidden xl:block">
                    {subTitle2}
                  </p>
                )}
                {title2 && (
                  <div className="mt-4 3xl:mt-8 hidden xl:block">
                    <p className="text-xl font-bold text-gray-800 pb-1">
                      {title2}
                    </p>
                    {benefits.map((item, i) => (
                      <div key={i} className="flex items-center mt-1 3xl:mt-3">
                        <img src="/images/items_icon.svg" alt="" />
                        <p className="text-gray-300 ml-3">{item}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          }
        )}
      </div>
    </div>
  );
};

export default RowSpanGrid;
