import Image from "next/image";
import { useEffect, useState } from "react";

import { BPOCard, UIUXCard } from "./ITServicesDetails";
import { getItem, setItem } from "../../utils/sessionStorage";
import {
  SectionTitleType,
  TechnologiesSectionTitle,
} from "../shared/SharedTextgroups";

const ITServices = ({ data }) => {
  const [service, setService] = useState(0);
  const [done, setDone] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [open, setOpen] = useState(0);

  // function for accordion handle
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  // function for tab handle
  const handleClick = (id) => {
    setService(id);
    setItem(id);
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const serviceId = getItem();
    if (done === false && serviceId) {
      setService(serviceId);
      setDone(true);
      setOpen(serviceId);
    }
  }, [service, done, isOpen, open]);

  const serviceDetails = [
    <BPOCard />,
    <UIUXCard />,
    <BPOCard />,
    <UIUXCard />,
    <BPOCard />,
    <UIUXCard />,
    <BPOCard />,
    <UIUXCard />,
    <BPOCard />,
    <UIUXCard />,
    <BPOCard />,
    <UIUXCard />,
  ];

  return (
    <div className="py-10 xl:py-16">
      <SectionTitleType title="What We Do?" />
      <TechnologiesSectionTitle>
        We Provide Various IT services
      </TechnologiesSectionTitle>
      <div className="mt-10 xl:mt-20">
        <div className="md:hidden">
          <div className="flex flex-col space-y-4">
            {data.map(({ id, title, img }) => {
              return (
                <div key={id}>
                  <div
                    onClick={() => handleOpen(id)}
                    className={`py-3 rounded-[10px] hover:cursor-pointer w-full ${
                      open === id
                        ? "bg-gradient-to-r from-blue-900 to-blue-700"
                        : "bg-blue-300"
                    }`}
                  >
                    <div
                      className={`flex items-center w-max ${
                        open === id ? "mx-auto pl-0" : "pl-5"
                      }`}
                    >
                      <Image src={img} height={20} width={20} alt="" />
                      <p
                        className={`ml-5 text-sm xl:text-base font-bold md:font-extrabold ${
                          open === id ? "text-white" : "text-gray-800"
                        } `}
                      >
                        {title}
                      </p>
                    </div>
                  </div>
                  {open === id && (
                    <div className=" bg-white p-5 rounded-[10px] shadow-lg shadow-gray-200 mt-4">
                      {serviceDetails.filter((item, i) => i === service)}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className="hidden md:grid grid-cols-12 gap-6">
          <div className="col-span-4 lg:col-span-3 flex flex-col space-y-4">
            {data.map(({ id, title, img }) => {
              return (
                <div
                  key={id}
                  onClick={() => handleClick(id)}
                  className={`flex items-center py-3 pl-5 rounded-[10px] hover:cursor-pointer ${
                    service === id &&
                    "bg-gradient-to-r from-blue-900 to-blue-700"
                  }  `}
                >
                  <Image src={img} height={20} width={20} alt="" />
                  <p
                    className={`ml-5 text-sm xl:text-base font-bold md:font-extrabold ${
                      service === id ? "text-white" : "text-gray-800"
                    } `}
                  >
                    {title}
                  </p>
                </div>
              );
            })}
          </div>
          <div className="col-span-8 lg:col-span-9 bg-white p-10 rounded-[30px] shadow-lg shadow-gray-200">
            {serviceDetails.filter((item, i) => i === service)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ITServices;
