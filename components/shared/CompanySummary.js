import { summaryData } from "../../public/data/summaryData";

const CompanySummary = () => {
  return (
    <div className="my-10 xl:my-16 bg-gradient-to-r from-blue-900 to-blue-700 min-h-max 2xl:h-80 px-5 md:px-16 lg:px-20 2xl:px-32 py-10 text-center text-white rounded-xl lg:rounded-3xl 2xl:rounded-[40px]">
      <p className="break-words text-2xl md:text-3xl  xl:text-4xl 2xl:text-5xl 3xl:text-[64px] font-bold">
        EXPLORE. INNOVATE. INVEST.
      </p>
      <div className="flex gap-6 flex-wrap items-center justify-center md:justify-between mt-6 2xl:mt-16 py-5">
        {summaryData.map(({ id, number, title }) => {
          return (
            <div key={id} className="w-24 xs:w-28 sm:w-32 md:w-20">
              <p className="text-xl md:text-2xl lg:text-3xl 2xl:text-[40px] font-bold">
                {number}
              </p>
              <p className="text-base md:text-lg lg:text-xl 2xltext-2xl">
                {title}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CompanySummary;
