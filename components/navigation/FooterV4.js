import Image from "next/image";
import Link from "next/link";
import Router from "next/router";
import { ImFacebook, ImLinkedin2, ImTwitter } from "react-icons/im";
import { FaPinterestP } from "react-icons/fa";

import { footerBottomData, footerData } from "../../public/data/footerData";
import ButtonWhite from "../shared/buttons/ButtonWhite";
import { setItem } from "../../utils/sessionStorage";

const FooterV4 = () => {
  const handleClick = (id) => {
    setItem(id);
    window.location.pathname === "/service" &&
      Router.reload(window.location.pathname);
  };

  const Items = ({ title, data }) => {
    return (
      <>
        <p
          className={`text-white mb-6 ${title === "Company" && "mt-10"} ${
            title !== "Technologies" &&
            title !== "Divisions" &&
            "xxxs:text-end sm:text-start"
          } font-semibold`}
        >
          {title}
        </p>
        {data?.map(({ id, name, path }) => {
          return (
            <Link passHref key={id} href={path}>
              <span
                onClick={() => title === "Services" && handleClick(id)}
                className={`block hover:cursor-pointer text-xs md:text-sm leading-5 mb-2 lg:mb-4 text-white/60 hover:text-white ${
                  title !== "Technologies" &&
                  title !== "Divisions" &&
                  "xxxs:text-end sm:text-start"
                }`}
              >
                {name}
              </span>
            </Link>
          );
        })}
      </>
    );
  };

  const Career = () => {
    return (
      <>
        <p className="text-white/60 font-medium my-6 text-xs md:text-sm">
          More Than Just A Job.
          <br /> We Offer An Opportunity To Grow.
        </p>
        <div className="w-max mx-auto lg:mx-0">
          <ButtonWhite link="careers" title="Careers" px={76} />
        </div>
      </>
    );
  };

  return (
    <div className="bg-gray-800">
      <div className="box pt-16 pb-8">
        <div className="grid grid-cols-12 lg:grid-cols-10 gap-4">
          <div className="col-span-12 lg:col-span-2">
            <div className="h-7 md:h-10 w-16 md:w-20 mx-auto lg:mx-0 mb-10 lg:mb-0 relative">
              <Image src="/images/logo_light.svg" layout="fill" alt="" />
            </div>
            <div className="hidden lg:block">
              <Career />
            </div>
          </div>
          {footerData?.map(({ id, title, items, title2, items2 }) => (
            <div
              key={id}
              className="col-span-12 xxxs:col-span-6 sm:col-span-3 lg:col-span-2"
            >
              <Items title={title} data={items} />
              {title2 && <Items title={title2} data={items2} />}
            </div>
          ))}

          <div className="lg:hidden col-span-12 w-max mx-auto text-center">
            <Career />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between mt-10 pt-5 border-t gap-y-6 border-white/40">
          <div className="flex gap-6 lg:order-3">
            {footerBottomData.map(({ id, name, path }) => {
              return (
                <Link passHref key={id} href={path}>
                  <p className="text-white/40 text-xs md:text-sm hover:cursor-pointer hover:text-white">
                    {name}
                  </p>
                </Link>
              );
            })}
          </div>
          <div className="flex justify-center md:justify-start gap-6 md:gap-4 lg:gap-6">
            <Link passHref href="/">
              <a>
                <ImFacebook className="text-lg text-white/40 hover:cursor-pointer hover:text-blue-700 transition-all duration-150 " />
              </a>
            </Link>
            <Link passHref href="/">
              <a>
                <ImLinkedin2 className="text-lg text-white/40 hover:cursor-pointer hover:text-blue-900 transition-all duration-150" />
              </a>
            </Link>
            <Link passHref href="/">
              <a>
                <ImTwitter className="text-lg text-white/40 hover:cursor-pointer hover:text-blue-700 transition-all duration-150" />
              </a>
            </Link>
            <Link passHref href="/">
              <a>
                <FaPinterestP className="text-lg text-white/40 hover:cursor-pointer hover:text-pink-800 transition-all duration-150" />
              </a>
            </Link>
          </div>
          <p className="text-white/40 text-xs md:text-sm mb-2 lg:mb-0 text-center">
            © 2022 BYSL Global Technology Group. All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default FooterV4;
