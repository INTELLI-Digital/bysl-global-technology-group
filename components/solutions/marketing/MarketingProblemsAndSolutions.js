import Image from "next/image";
import { useEffect, useState } from "react";

import SectionHeader from "../../shared/SectionHeader";

const MarketingProblemsAndSolutions = ({ data }) => {
  const [tabOpen, setTabOpen] = useState(0);
  const [tabData, setTabData] = useState(data[0]);

  useEffect(() => {
    setTabData(data[tabOpen]);
  }, [tabOpen]);

  const {
    problem,
    problemInfo,
    solution,
    solutionInfo,
    solutionPoints,
    solutionImg,
    benefits,
  } = tabData;

  const Title = ({ label }) => (
    <div className="mb-2">
      <p className="text-sm lg:text-base xl:text-xl font-medium text-gray-800">
        {label}
      </p>
      <p className="mx-auto lg:mx-0 h-[2px] w-14 lg:w-16 xl:w-[82px] bg-gradient-to-r from-blue-900 to-blue-700 rounded-lg"></p>
    </div>
  );

  const Heading = ({ label }) => (
    <p className="mb-6 lg:text-xl xl:text-2xl font-semibold text-gray-800">
      {label}
    </p>
  );

  const Info = (props) => {
    const { text, noMargin } = props;

    return (
      <p
        className={`${!noMargin && "mb-6"}  text-sm xl:text-base text-gray-500`}
      >
        {text}
      </p>
    );
  };

  return (
    <div id="problems&solutions" className="py-10 xl:py-16">
      <SectionHeader>Problem & Solution</SectionHeader>
      <div
        className={`w-full overflow-x-auto mt-6 xl:mt-10 flex lg:grid grid-cols-5 gap-4 lg:gap-0 bg-white ${
          (tabOpen === 0 && "rounded-l-lg lg:rounded-l-[20px]") ||
          (tabOpen === 4 && "rounded-r-lg lg:rounded-r-[20px]")
        }`}
      >
        {data.map(({ id, problemImg, problemImgWhite, problem }) => {
          return (
            <div
              key={id}
              onClick={() => setTabOpen(id)}
              className={`w-max lg:w-full px-2 xl:px-5 2xl:px-10 rounded-lg lg:rounded-[20px] flex lg:flex-col items-center hover:cursor-pointer gap-2 lg:gap-4 transition-all duration-700 ${
                tabOpen === id
                  ? "bg-gradient-to-r from-blue-900 to-blue-700  text-white"
                  : " text-gray-800"
              } py-3 xl:py-5`}
            >
              <div className="relative h-8 w-8 lg:h-14 lg:w-14 2xl:h-20 2xl:w-20 lg:mx-auto">
                <Image
                  src={id === tabOpen ? problemImgWhite : problemImg}
                  alt=""
                  layout="fill"
                />
              </div>
              <p className="w-40 lg:w-fit text-sm xl:text-base text-center font-medium">
                {problem}
              </p>
            </div>
          );
        })}
      </div>
      <div className="pt-6 text-center lg:text-start lg:p-10 lg:pb-0">
        <Title label="Problem" />
        <Heading label={problem} />
        <Info text={problemInfo} />
        <div className="grid grid-cols-12 gap-6 lg:mt-16 mb-6">
          <div className="col-span-12 lg:col-span-8">
            <Title label="Solutions" />
            <Heading label={solution} />
            <Info text={solutionInfo} />
            <div className="flex flex-col gap-3">
              {solutionPoints?.map((item, i) => {
                return (
                  <div key={i} className="flex items-start text-start gap-3">
                    <Image
                      src="/images/items_icon.svg"
                      alt=""
                      height={24}
                      width={24}
                    />
                    <p className="text-gray-500 text-sm break-words w-full">
                      {item}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="col-span-12 lg:col-span-4">
            <Image src={solutionImg} alt="" height={400} width={444} />
          </div>
        </div>
        <Title label="Benefits" />
        <Info noMargin={true} text={benefits} />
      </div>
    </div>
  );
};

export default MarketingProblemsAndSolutions;
