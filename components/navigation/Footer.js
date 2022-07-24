import Image from "next/image";
import Link from "next/link";
import { ImFacebook, ImLinkedin2, ImTwitter, ImYoutube } from "react-icons/im";
import { FaPinterestP } from "react-icons/fa";

import {
  companyItems,
  footerBottomData,
  footerData,
} from "../../public/data/footerData";

const Footer = () => {
  const ItemTitle = ({ title }) => {
    return (
      <p
        className={`text-white mb-6 ${
          title !== "Technologies" &&
          title !== "About Us" &&
          "xxxs:text-end sm:text-start"
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
                className={`block hover:cursor-pointer text-xs md:text-sm leading-5 mb-2 lg:mb-4 text-white/60 hover:text-white ${
                  title !== "Technologies" &&
                  title !== "About Us" &&
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
        <div className="grid grid-cols-12 lg:grid-cols-10 gap-4">
          <div className="col-span-12 lg:col-span-2">
            <div className="h-7 md:h-10 w-16 md:w-20 mx-auto lg:mx-0 mb-10 lg:mb-0 relative">
              <Image src="/images/logo_light.svg" layout="fill" alt="" />
            </div>
          </div>
          {footerData?.map(({ id, title, items, title2, items2 }) => (
            <div
              key={id}
              className="col-span-12 xxxs:col-span-6 sm:col-span-3 lg:col-span-2"
            >
              <Items title={title} data={items} />
              <span className="hidden sm:block">
                {title2 && <Items title={title2} data={items2} />}
              </span>
            </div>
          ))}
          <div className="sm:hidden col-span-12 xxxs:col-span-6">
            <Items title="Company" data={companyItems.items} />
          </div>
          <div className="col-span-12 sm:col-span-3 lg:col-span-2">
            <div className="w-max mx-auto sm:w-full">
              <ItemTitle title="Social" />
            </div>
            <div className="flex sm:flex-col justify-center md:justify-start gap-6 md:gap-4 lg:gap-6">
              <Link passHref href="/">
                <a>
                  <ImFacebook className="text-lg text-white/40 hover:cursor-pointer hover:text-blue-700 transition-all duration-300 " />
                </a>
              </Link>
              <Link passHref href="/">
                <a>
                  <ImLinkedin2 className="text-lg text-white/40 hover:cursor-pointer hover:text-blue-900 transition-all duration-300" />
                </a>
              </Link>
              <Link passHref href="/">
                <a>
                  <ImTwitter className="text-lg text-white/40 hover:cursor-pointer hover:text-blue-700 transition-all duration-300" />
                </a>
              </Link>
              <Link passHref href="/">
                <a>
                  <ImYoutube className="text-lg text-white/40 hover:cursor-pointer hover:text-red-600 transition-all duration-300" />
                </a>
              </Link>
              <Link passHref href="/">
                <a>
                  <FaPinterestP className="text-lg text-white/40 hover:cursor-pointer hover:text-pink-800 transition-all duration-300" />
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between mt-10 pt-5 border-t gap-y-6 border-white/40">
          <div className="flex gap-6 lg:order-2">
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
          <p className="text-white/40 text-sm mb-2 md:mb-0 text-center">
            © 2022 BYSL Global Technology Group. All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
