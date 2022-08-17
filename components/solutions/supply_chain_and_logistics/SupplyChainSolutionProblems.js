import { useState } from "react";

import {
  SectionTitleType,
  TechnologiesSectionTitle,
} from "../../shared/SharedTextgroups";

const SupplyChainSolutionProblems = ({ type, children }) => {
  const [open, setOpen] = useState(0);

  return (
    <div id="problems" className="py-10 xl:py-16">
      <SectionTitleType title={type} />
      <TechnologiesSectionTitle>{children}</TechnologiesSectionTitle>
      <div className="mt-6 lg:mt-10 grid grid-cols-12 gap-6 items-center">
        <div className="col-span-3">
          <div className="flex flex-col gap-y-6">
            {[
              "Controlling cost",
              "Standardized learning",
              "Cost & performance cost",
              "Wasted resources",
            ].map((item, i) => (
              <div className="flex items-center gap-5">
                <hr
                  className={`h-6 w-[3px] rounded-xl ${
                    open === i
                      ? "bg-gradient-to-b from-blue-900 to-blue-700"
                      : "bg-transparent"
                  }`}
                />
                <p
                  key={i}
                  onClick={() => setOpen(i)}
                  className={`font-medium lg:text-xl ${
                    open === i
                      ? "text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-blue-700"
                      : "text-gray-900"
                  } `}
                >
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="col-span-9 grid grid-cols-9 gap-6">
          <div className="col-span-5">
            <p className="text-2xl lg:mt-10 mb-6 text-gray-900">
              Controlling cost
            </p>
            <p className="text-gray-300">
              BYSL Global Technology Group stands on four core values regarded
              as the fundamental ideological constants to govern the
              organization.BYSL Global Technology Group stands on four core
              values regarded as the fundamental ideological constants to govern
              the organization.BYSL Global Technology Group stands on four core
              values regarded as the fundamental ideological constants to govern
              the organization
            </p>
          </div>
          <div className="col-span-4">{open} image</div>
        </div>
      </div>
    </div>
  );
};

export default SupplyChainSolutionProblems;
