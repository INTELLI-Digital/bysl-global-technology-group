import { Link } from "react-scroll";
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
      <SectionTitleType title="What We Do." />
      <TechnologiesSectionTitle>
        We Provide Various IT services
      </TechnologiesSectionTitle>
      <div className="mt-10 xl:mt-16">
        <div className="lg:hidden bg-white px-4 py-5 rounded-md">
          <div className="flex flex-col space-y-4 ">
            {data.map(({ id, title, img, activeImg }) => {
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
                      {open === id ? (
                        <Image src={activeImg} height={20} width={20} alt="" />
                      ) : (
                        <Image src={img} height={20} width={20} alt="" />
                      )}
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
                    <div className="p-5 mt-4">
                      {/* {serviceDetails.filter((item, i) => i === open)} */}
                      {serviceDetails.map((el, i) => (
                        <div key={i}>{open === i + 1 && el}</div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className="hidden lg:grid grid-cols-12 gap-6">
          <div className="col-span-4 lg:col-span-4 2xl:col-span-3 flex flex-col space-y-4 bg-white p-5 rounded-[20px] shadow-[-4px_-4px_25px_0px_#E5EBF3]">
            {data.map(({ id, title, path, img, activeImg }) => {
              return (
                // <Link activeClass="active" smooth spy to={path}>
                <div
                  key={id}
                  onClick={() => handleClick(id)}
                  className={`flex items-center py-2.5 pl-5 rounded-[10px] hover:cursor-pointer ${
                    service === id &&
                    "bg-gradient-to-r from-blue-900 to-blue-700"
                  }  `}
                >
                  {service === id ? (
                    <Image src={activeImg} height={20} width={20} alt="" />
                  ) : (
                    <Image src={img} height={20} width={20} alt="" />
                  )}
                  <p
                    className={`ml-5 text-sm xl:text-base font-bold md:font-extrabold ${
                      service === id ? "text-white" : "text-gray-800"
                    }`}
                  >
                    {title}
                  </p>
                </div>
                // </Link>
              );
            })}
          </div>
          <div className="col-span-8 lg:col-span-8 2xl:col-span-9 p-10 h-[760px]">
            {serviceDetails.map((el, i) => (
              <div key={i} className={`${service === i && "scroll-animation"}`}>
                {service === i + 1 && el}
              </div>
            ))}
          </div>

          {/* <div className="col-span-8 lg:col-span-9 p-10 h-[calc(100vh-1rem)] bg-slate-200 overflow-y-auto">
            <div className="section" id="bpo">
              <BPOCard />
            </div>
            <div className="section" id="ui-ux">
              <UIUXCard />
            </div>
            <div className="section" id="web">
              <BPOCard />
            </div>
            <div className="section" id="app">
              <UIUXCard />
            </div>
            <div className="section" id="e-commerce">
              <BPOCard />
            </div>
            <div className="section" id="erp">
              <UIUXCard />
            </div>
            <div className="section" id="fintech">
              <BPOCard />
            </div>
            <div className="section" id="aiml">
              <UIUXCard />
            </div>
            <div className="section" id="fulfilment">
              <BPOCard />
            </div>
            <div className="section" id="logistics">
              <UIUXCard />
            </div>
            <div className="section" id="cloud">
              <BPOCard />
            </div>
            <div className="section" id="customer">
              <UIUXCard />
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ITServices;
