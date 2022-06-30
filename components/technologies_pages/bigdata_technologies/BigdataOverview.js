import { bigdataOverviewData } from "../../../public/data/bigdataTechnologiesData";

const BigdataOverview = () => {
  return (
    <div className="py-10 xl:py-16">
      <div className="w-full flex flex-wrap md:flex-nowrap justify-evenly gap-6">
        {bigdataOverviewData.map(({ id, title, img }) => {
          return (
            <div
              key={id}
              className="p-3 xl:p-5 3xl:p-10 text-center max-w-[100px] xxs:max-w-none"
            >
              <img
                src={img}
                alt=""
                className="mx-auto h-10 2xl:h-16 w-10 2xl:w-16"
              />
              <p className="2xl:text-xl font-medium text-gray-800 mt-5">
                {title}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BigdataOverview;
