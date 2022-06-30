import Link from "next/link";
import { ImFacebook, ImLinkedin2, ImTwitter } from "react-icons/im";
import { FaPinterestP } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { IoMailOutline } from "react-icons/io5";

import { footerData } from "../../public/data/footerData";
import ButtonWhite from "../shared/buttons/ButtonWhite";

const FooterDark = () => {
  return (
    <div className="bg-gray-800">
      <div className="box pt-16 pb-8">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-3 2xl:col-span-3">
            <img
              src="/images/logo_light.svg"
              alt=""
              className="h-7 lg:h-10 w-16 lg:w-20 mb-4 xl:mb-12 mx-auto md:mx-0"
            />
            <div className="flex justify-center md:justify-start gap-6 md:gap-4 lg:gap-6">
              <Link passHref href="/">
                <a>
                  <ImFacebook className="text-lg text-white hover:cursor-pointer hover:text-blue-700 transition-all duration-150 " />
                </a>
              </Link>
              <Link passHref href="/">
                <a>
                  <ImLinkedin2 className="text-lg text-white hover:cursor-pointer hover:text-blue-900 transition-all duration-150" />
                </a>
              </Link>
              <Link passHref href="/">
                <a>
                  <ImTwitter className="text-lg text-white hover:cursor-pointer hover:text-blue-700 transition-all duration-150" />
                </a>
              </Link>
              <Link passHref href="/">
                <a>
                  <FaPinterestP className="text-lg text-white hover:cursor-pointer hover:text-pink-800 transition-all duration-150" />
                </a>
              </Link>
            </div>
          </div>
          {footerData?.map(({ id, items }) => (
            <div
              key={id}
              className="col-span-12 xxxs:col-span-6 xs:col-span-4 md:col-span-3 2xl:col-span-2"
            >
              {items?.map(({ id, name }) => {
                return (
                  <Link passHref key={id} href="/">
                    <span className="block hover:cursor-pointer text-xs lg:text-sm leading-5 mb-2 lg:mb-4 text-white/60 hover:text-white">
                      {name}
                    </span>
                  </Link>
                );
              })}
            </div>
          ))}
          <div className="col-span-12 xxxs:col-span-6 xs:col-span-12 2xl:col-span-3">
            <div className="w-full block xs:flex 2xl:block justify-between">
              <p className="text-white/80 font-medium mb-3 xs:mb-0 2xl:mb-6 text-xs lg:text-sm">
                More Than Just A Job.
                <br /> We Offer An Opportunity To Grow.
              </p>
              <ButtonWhite title="Career" px={64} />
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between mt-14">
          <p className="text-white/40 text-xs lg:text-sm mb-2 lg:mb-0 text-center">
            © 2022 BYSL Global Technology Group. All Rights Reserved
          </p>
          <div className="flex gap-6">
            <div className="flex items-center gap-3">
              <IoMailOutline className="text-xs md:text-sm 3xl:text-lg text-white/40 hover:cursor-pointer" />
              <p className="text-white/40 text-xs lg:text-sm">
                info@byslglobal.com
              </p>
            </div>
            <div className="flex items-center gap-3">
              <FiPhoneCall className="text-xs md:text-sm 3xl:text-lg text-white/40 hover:cursor-pointer" />
              <p className="text-white/40 text-xs lg:text-sm">310-437-2766</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterDark;
