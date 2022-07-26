import { useEffect, useState } from "react";
// import Router from "next/router";

import TearmsAndConditionDetails from "../components/legal/Tearms&Condition";
import BasicLayout from "../layouts/BasicLayout";
import { getLegalState, setLegalState } from "../utils/sessionStorage";

const Legal = () => {
  const [legal, setLegal] = useState(0);
  const [done, setDone] = useState(false);

  // function for tab handle
  const handleClick = (id) => {
    setLegal(id);
    setLegalState(id);
  };

  useEffect(() => {
    const tabState = getLegalState();
    if (done === false && tabState) {
      setLegal(tabState);
      setDone(true);
    }
    // Router.reload(window.location.pathname) && setLegal(0);
  }, []);

  const legalItems = [
    <TearmsAndConditionDetails title="Terms & Condition" />,
    <TearmsAndConditionDetails title="Privacy Policy" />,
    <TearmsAndConditionDetails title="Cookies Policy" />,
  ];

  return (
    <BasicLayout title="Legal">
      <div className="py-10 lg:py-16 grid grid-cols-12">
        <div className="col-span-12 md:col-span-3 overflow-x-scroll md:overflow-hidden">
          <div className="flex flex-nowrap md:flex-col gap-6 mb-6 md:mb-0 md:mt-6 w-max mx-auto md:mx-0">
            {["Terms & Condition", "Privacy Policy", "Cookies Policy"].map(
              (item, i) => (
                <p
                  key={i}
                  onClick={() => handleClick(i)}
                  className={`w-max hover:cursor-pointer hover:text-blue-700 transition-all duration-150 text-sm lg:text-base font-semibold ${
                    legal === i
                      ? "text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-blue-700 text-lg transition-all duration-700 "
                      : "text-[#808D9E]"
                  }`}
                >
                  {item}
                </p>
              )
            )}
          </div>
        </div>
        <div className="col-span-12 md:col-span-9">
          {legalItems.filter((item, i) => i === legal)}
        </div>
      </div>
    </BasicLayout>
  );
};

export default Legal;
