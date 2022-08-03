import { useEffect, useState } from "react";
// import Router from "next/router";

import BasicLayout from "../layouts/BasicLayout";
import CookiesPolicy from "../components/legal/CookiesPolicy";
import PrivacyPolicy from "../components/legal/PrivacyPolicy";
import TearmsOfUse from "../components/legal/TearmsOfUse";
import {
  cookiesPolicyData,
  privacyPolicyData,
  termsAndConditionData,
} from "../public/data/legalPagesData";
import { getLegalState, setLegalState } from "../utils/sessionStorage";

const Legal = ({ termsAndCondition, privacyPolicy, cookiesPolicy }) => {
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

  return (
    <BasicLayout title="Legal">
      <div className="py-10 lg:py-16 grid grid-cols-12">
        <div className="col-span-12 md:col-span-3 overflow-x-scroll md:overflow-hidden">
          <div className="flex flex-nowrap md:flex-col gap-6 mb-10 md:mb-0 md:mt-6 w-max mx-auto md:mx-0">
            {["Terms of Use", "Privacy Policy", "Cookies Policy"].map(
              (item, i) => (
                <p
                  key={i}
                  onClick={() => handleClick(i)}
                  className={`w-max hover:cursor-pointer hover:text-blue-700 transition-all duration-150 text-sm lg:text-base  ${
                    legal === i
                      ? "text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-blue-700 text-lg font-semibold transition-all duration-700 "
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
          {(legal === 0 && <TearmsOfUse data={termsAndCondition} />) ||
            (legal === 1 && <PrivacyPolicy data={privacyPolicy} />) ||
            (legal === 2 && <CookiesPolicy data={cookiesPolicy} />)}
        </div>
      </div>
    </BasicLayout>
  );
};

export async function getServerSideProps() {
  return {
    props: {
      termsAndCondition: termsAndConditionData,
      privacyPolicy: privacyPolicyData,
      cookiesPolicy: cookiesPolicyData,
    },
  };
}

export default Legal;
