import Image from "next/image";
import Link from "next/link";
import Router from "next/router";
import { ImFacebook, ImLinkedin2, ImTwitter, ImYoutube } from "react-icons/im";
import { FaPinterestP } from "react-icons/fa";

import {
  companyItems,
  footerBottomData,
  footerDataDesktop,
  footerDataMobile,
} from "../../public/data/footerData";
import { setLegalState } from "../../utils/sessionStorage";

const TemporaryFooter = () => {
  const handleClick = (id) => {
    setLegalState(id);
    window.location.pathname === "/legal" &&
      Router.reload(window.location.pathname);
  };

  const ItemTitle = ({ title }) => {
    return (
      <p
        className={`text-white mb-6 ${
          title !== "Technologies" &&
          title !== "About Us" &&
          title !== "Investments" &&
          "xxxs:text-end sm:text-start"
        } ${
          (title === "Company" && "sm:mt-10") ||
          (title === "Social" && "sm:mt-10")
        } font-semibold`}
      >
        {title}
      </p>
    );
  };

  const Items = ({ title, data }) => {
    return (
      <>
        <ItemTitle title={title} />
        {data?.map(({ id, name, path }) => {
          return (
            <Link passHref key={id} href={path}>
              <span
                className={`block hover:cursor-pointer text-sm mb-4 text-white/60 hover:text-white ${
                  title !== "Technologies" &&
                  title !== "About Us" &&
                  title !== "Investments" &&
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

  return (
    <div className="bg-gray-800">
      <div className="box pt-16 pb-8">
        <div className="grid grid-cols-12 lg:grid-cols-10 gap-y-10 gap-x-2">
          <div className="col-span-12 lg:col-span-2">
            <Link passHref href="/">
              <div className="h-7 md:h-10 w-16 md:w-20 mx-auto lg:mx-0 relative hover:cursor-pointer">
                <Image src="/images/logo_light.svg" layout="fill" alt="" />
              </div>
            </Link>
          </div>
          {footerDataDesktop?.map(({ id, title, items, title2, items2 }) => (
            <div
              key={id}
              className="hidden sm:block col-span-12 xxxs:col-span-6 sm:col-span-3 lg:col-span-2"
            >
              <Items title={title} data={items} />
              <span className="">
                {title2 && title2 === "Social" ? (
                  <>
                    <div className="w-max mx-auto sm:w-full">
                      <ItemTitle title="Social" />
                    </div>
                    <div className="flex gap-4 lg:gap-6">
                      <Link passHref href="/">
                        <a>
                          <ImFacebook className="text-xl text-white/40 hover:cursor-pointer hover:text-blue-700 transition-all duration-300 " />
                        </a>
                      </Link>
                      <Link passHref href="/">
                        <a>
                          <ImLinkedin2 className="text-xl text-white/40 hover:cursor-pointer hover:text-blue-900 transition-all duration-300" />
                        </a>
                      </Link>
                      <Link passHref href="/">
                        <a>
                          <ImTwitter className="text-xl text-white/40 hover:cursor-pointer hover:text-blue-700 transition-all duration-300" />
                        </a>
                      </Link>
                      <Link passHref href="/">
                        <a>
                          <ImYoutube className="text-xl text-white/40 hover:cursor-pointer hover:text-red-600 transition-all duration-300" />
                        </a>
                      </Link>
                    </div>
                  </>
                ) : (
                  <Items title={title2} data={items2} />
                )}
              </span>
            </div>
          ))}
          {footerDataMobile?.map(({ id, title, items }) => (
            <div
              key={id}
              className="sm:hidden col-span-12 xxxs:col-span-6 sm:col-span-3 lg:col-span-2"
            >
              {title === "Social" ? (
                <>
                  <ItemTitle title="Social" />
                  <div className="flex justify-end gap-4">
                    <Link passHref href="/">
                      <a>
                        <ImFacebook className="text-white/40 hover:cursor-pointer hover:text-blue-700 transition-all duration-300 " />
                      </a>
                    </Link>
                    <Link passHref href="/">
                      <a>
                        <ImLinkedin2 className="text-white/40 hover:cursor-pointer hover:text-blue-900 transition-all duration-300" />
                      </a>
                    </Link>
                    <Link passHref href="/">
                      <a>
                        <ImTwitter className="text-white/40 hover:cursor-pointer hover:text-blue-700 transition-all duration-300" />
                      </a>
                    </Link>
                    <Link passHref href="/">
                      <a>
                        <ImYoutube className="text-white/40 hover:cursor-pointer hover:text-red-600 transition-all duration-300" />
                      </a>
                    </Link>
                  </div>
                </>
              ) : (
                <Items title={title} data={items} />
              )}
            </div>
          ))}
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between mt-10 pt-5 border-t gap-y-6 border-white/40">
          <div className="flex gap-6 lg:order-2">
            {footerBottomData.map(({ id, name }) => {
              return (
                <Link passHref key={id} href="/legal">
                  <p
                    onClick={() => handleClick(id)}
                    className="text-white/40 text-sm hover:cursor-pointer hover:text-white"
                  >
                    {name}
                  </p>
                </Link>
              );
            })}
          </div>
          <p className="text-white/40 text-sm lg:text-base mb-2 md:mb-0 text-center">
            © 2022 BYSL Global Technology Group. All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default TemporaryFooter;
