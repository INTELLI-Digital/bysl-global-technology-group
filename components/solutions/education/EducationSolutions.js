import { useState } from "react";

import SectionHeader from "../../shared/SectionHeader";
import SolutionCard from "../SolutionCard";

const EducationSolutions = ({ data }) => {
  const [open, setOpen] = useState(0);

  return (
    <div id="solutions" className="py-10 xl:py-16 relative">
      <SectionHeader type="Solutions">
        The problems we found in education
        <br className="hidden xs:block" />
        &nbsp;industries
      </SectionHeader>

      <div className="mt-6 xl:mt-10 ">
        <div className="overflow-x-auto">
          <div className="flex gap-6 w-max mx-auto">
            {data.map(({ id }) => (
              <p
                key={id}
                onClick={() => setOpen(id)}
                className={`hover:cursor-pointer font-medium text-sm rounded-lg px-5 py-2.5 text-gray-800 ${
                  open === id &&
                  "text-white bg-gradient-to-r from-blue-900 to-blue-700"
                }`}
              >
                Solution {id + 1}
              </p>
            ))}
          </div>
        </div>
        <div className="mt-10">
          {data.map((item) => {
            return (
              item.id === open && (
                <div key={item.id} className="zooming-animation">
                  <SolutionCard data={item} />
                </div>
              )
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default EducationSolutions;
