import Link from "next/link";
import { useState } from "react";
import { RiSearchLine } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";

const CareerJobCirculars = () => {
  const [departmentOpen, setDepartmentOpen] = useState(false);
  const [department, setDepartment] = useState("");
  const [positionOpen, setPositionOpen] = useState(false);
  const [position, setPosition] = useState("");

  const handleDepartment = (item) => {
    setDepartment(item);
    setDepartmentOpen(false);
  };
  const handlePosition = (item) => {
    setPosition(item);
    setPositionOpen(false);
  };

  const departmentList = [
    "Graphics and Multimedia",
    "Core Development",
    "Web Development",
    "Mobile App Development",
    "Supply Chain & Logistics",
    "Human Resource",
  ];
  const positionTypeList = [
    "Jr. Executive",
    "Executive",
    "Sr. Executive",
    "Executive Incharge",
    "Assistant Manager",
    "Deputy Manager",
  ];

  const JobCircularList = ({ data }) => {
    return (
      <div className="grid grid-cols-1 lg:grid-cols-10 place-items-center gap-4 lg:gap-6 py-6 border-b border-blue-700 lg:hover:bg-[#EDF1F8] transition duration-500">
        <p className="lg:col-span-3 text-gray-800 font-semibold">
          Application Software Engineer
        </p>
        <p className="lg:col-span-2 text-gray-400 font-medium">
          5+ Years Experience
        </p>
        <p className="lg:col-span-2 text-gray-400 font-medium">
          Last Date 31st june,2022
        </p>
        <p className="text-gray-400 font-medium">Full-Time</p>
        <div className="lg:col-span-2 text-gray-400 font-medium w-full">
          <Link passHref href="/application-form">
            <div className="w-full lg:w-max h-max mx-auto lg:mx-0 text-center rounded-lg text-white text-sm font-semibold px-8 xl:px-[42px] py-2 xl:py-2.5 hover:cursor-pointer bg-gradient-to-r hover:from-blue-600 hover:to-blue-800  from-blue-900 to-blue-700">
              Apply Now
            </div>
          </Link>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className="max-w-[856px] mx-auto">
        <div className="relative max-w-[416px] mx-auto">
          <input
            //   value={phone}
            //   onChange={(e) => setPhone(e.target.value)}
            required
            name="phone"
            type="text"
            placeholder="Search Careers"
            className=" bg-white text-sm w-full pr-10 p-4 rounded-[11px] text-gray-500 focus:outline-gray-500/10 shadow-[0px_4px_15px_0px_#F1F0F0]"
          />
          <RiSearchLine className="flex text-4xl absolute inset-y-0 right-0 pt-4 items-center pr-3 pointer-events-none text-gray-500" />
        </div>
        <div className="flex gap-6 mt-6">
          <div className="w-full relative">
            <div
              onClick={() => setDepartmentOpen(!departmentOpen)}
              className={`flex justify-between items-center bg-white text-sm px-5 py-4  ${
                departmentOpen ? "rounded-t-[11px]" : "rounded-[11px]"
              } text-gray-500 focus:outline-gray-500/10 shadow-[0px_4px_15px_0px_#F1F0F0] hover:cursor-pointer `}
            >
              <span>{department ? department : "Departments"} </span>
              <MdKeyboardArrowDown className="text-xl" />
            </div>
            {departmentOpen && (
              <div className="careerScrollbar h-max max-h-[225px] divide-y divide-solid divide-gray-200/50 w-full bg-white absolute top-12 rounded-b-[11px] left-0 px-5 ">
                {departmentList.map((item, i) => (
                  <p
                    onClick={() => handleDepartment(item)}
                    key={i}
                    className="py-3 text-sm text-gray-800 hover:cursor-pointer"
                  >
                    {item}
                  </p>
                ))}
              </div>
            )}
          </div>

          <div className="w-full relative">
            <div
              onClick={() => setPositionOpen(!positionOpen)}
              className={`flex justify-between items-center bg-white text-sm px-5 py-4  ${
                positionOpen ? "rounded-t-[11px]" : "rounded-[11px]"
              } text-gray-500 focus:outline-gray-500/10 shadow-[0px_4px_15px_0px_#F1F0F0] hover:cursor-pointer `}
            >
              <span>{position ? position : "Position Type"} </span>
              <MdKeyboardArrowDown className="text-xl" />
            </div>
            {positionOpen && (
              <div className="careerScrollbar h-max max-h-[225px] divide-y divide-solid divide-gray-200/50 w-full bg-white absolute top-12 rounded-b-[11px] left-0 px-5 ">
                {positionTypeList.map((item, i) => (
                  <p
                    onClick={() => handlePosition(item)}
                    key={i}
                    className="py-3 text-sm text-gray-800 hover:cursor-pointer"
                  >
                    {item}
                  </p>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="max-w-[1076px] mx-auto mt-10 lg:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 lg:gap-0">
        {[...Array(5)].map((item, i) => (
          <JobCircularList key={i} data={item} />
        ))}
      </div>
    </div>
  );
};

export default CareerJobCirculars;
