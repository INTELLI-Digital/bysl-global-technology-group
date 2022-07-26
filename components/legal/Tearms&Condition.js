import { termsAndConditionData } from "../../public/data/legalPagesData";

const TearmsAndConditionDetails = ({ title }) => {
  const TermsText = (props) => {
    const { title, subTitle } = props;
    return (
      <p className="text-[#808D9E] mb-6 text-sm md:text-base">
        {title && (
          <span className="font-semibold text-gray-800">{title}&nbsp;</span>
        )}
        {subTitle}
      </p>
    );
  };

  return (
    <>
      <p className="text-xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-[64px] 2xl:leading-[90px] text-[#404040] font-extrabold">
        {title}
      </p>
      <div className="flex mt-1.5 mb-10 xl:mb-20 items-center">
        <p className="text-sm md:text-lg text-[#408CD9]">Version 1.2</p>
        <div className="w-[22px] bg-[#2D425F] h-px rounded-xl ml-1.5 mr-4"></div>
        <p className="text-sm md:text-lg text-[#808D9E]">January 12, 2022</p>
      </div>
      <div className="flex flex-col gap-16 lg:gap-36">
        {termsAndConditionData.map(({ id, title, subTitle, sections }) => {
          return (
            <div key={id}>
              <p className="text-base md:text-lg text-gray-800 mb-3 font-semibold">
                {title}
              </p>
              <p className="text-[#808D9E] mb-6 text-sm md:text-base">
                {subTitle}
              </p>
              {sections.map(({ id, title, subTitle, subTitle2, subTitle3 }) => {
                return (
                  <div key={id}>
                    <TermsText title={title} subTitle={subTitle} />
                    {subTitle2 && <TermsText subTitle={subTitle2} />}
                    {subTitle3 && <TermsText subTitle={subTitle3} />}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
      <div className="mt-28 bg-white shadow-[-4px_4px_18px_rgba(34,82,155,0.1)] px-4 lg:px-10 py-5 lg:py-12 flex items-center justify-between max-w-[804px] mx-auto rounded-[15px] flex-col lg:flex-row gap-5">
        <p className="font-semibold text-lg text-transparent bg-clip-text bg-gradient-to-r from-[#182A44] to-[#3C5271]">
          Was this article helpful?
        </p>
        <div className="flex items-center justify-center gap-5">
          <p className="hover:cursor-pointer hover:text-gray-700 transition-all duration-300 py-[10px] px-[15px] bg-[#F9FAFD] rounded-[10px] text-[#808D9E]">
            Yes
          </p>
          <p className="hover:cursor-pointer hover:text-gray-700 transition-all duration-300 py-[10px] px-[15px] bg-[#F9FAFD] rounded-[10px] text-[#808D9E]">
            No
          </p>
        </div>
      </div>
    </>
  );
};

export default TearmsAndConditionDetails;
