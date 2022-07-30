import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
// import { ImArrowRight2 } from "react-icons/im";

import { navbars } from "../../public/data/navbarData";
import { getPath } from "../../utils/paths";
import { getState, setState } from "../../utils/sessionStorage";
import { TextGradient } from "../shared/SharedTextgroups";
import Button from "../shared/buttons/Button";

const Navbar = () => {
  const [colorChange, setColorchange] = useState(false);
  const navState = getState();
  const arvrPath = getPath("/ar-vr-technologies");
  const router = useRouter();

  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setState(true);
      setColorchange(true);
    } else {
      setState(false);
      setColorchange(false);
    }
  };

  useEffect(() => {
    setColorchange(
      typeof window !== "undefined" && window.scrollY >= 80 ? true : false
    );
    window.addEventListener("scroll", changeNavbarColor);
  }, [colorChange, arvrPath, navState]);

  return (
    <div className="relative">
      <div
        className={`z-50 h-max pt-5 flex items-center fixed w-full
      ${
        colorChange
          ? "bg-white shadow shadow-gray-200"
          : arvrPath
          ? "backdrop-blur-sm bg-white/10"
          : "bg-transparent mt-5"
      }
      `}
      >
        <div className="box flex justify-between items-start w-full">
          <Link passHref href="/">
            <div className="relative h-10 w-16 xl:w-20 hover:cursor-pointer">
              <Image
                src={
                  arvrPath && !colorChange
                    ? "/images/logo_white.svg"
                    : "/images/logo.svg"
                }
                layout="fill"
                alt=""
              />
            </div>
          </Link>
          <div className="flex items-center">
            {navbars.map(({ id, title, link, dropdowns }) => {
              return (
                <div key={id} id="nav" className="inline-block">
                  <button
                    className={` ${
                      arvrPath && !colorChange ? "text-white" : "text-gray-500"
                    } text-sm lg:text-base font-normal py-2 px-4 xl:px-6 rounded inline-flex items-center`}
                  >
                    <span
                      className={`mr-1  ${
                        router.pathname === link &&
                        "text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-blue-700"
                      } ${!dropdowns && "pb-5"}`}
                    >
                      {dropdowns ? (
                        title
                      ) : (
                        <Link href={link} passHref>
                          {title}
                        </Link>
                      )}
                    </span>
                  </button>
                  {dropdowns && (
                    <div className="pt-5 bg-transparent">
                      <div
                        className={`shadow-lg shadow-[#7080B0]/10 py-12 xl:pb-[72px] absolute left-0 top-20 w-full bg-white rounded-b-lg navbar text-gray-700 `}
                      >
                        <p className="box font-bold text-2xl pb-8">
                          <TextGradient text={title} />
                        </p>
                        <div className="box grid grid-cols-3 xl:grid-cols-4 gap-6">
                          {dropdowns.map(({ id, title, subTitle, link }) => {
                            return (
                              <Link key={id} href={link}>
                                <div
                                  className={`hover:bg-[#E7F0F9] group shadow-[0px_0px_10px_1px_rgba(112,128,176,0.1)] p-4  ${
                                    router.pathname === link &&
                                    "text-white bg-gradient-to-r from-blue-900 to-blue-700"
                                  } rounded-lg cursor-pointer transition-all duration-500`}
                                >
                                  <div className="flex items-center justify-between mb-2">
                                    <p
                                      className={` transition-all duration-500 ${
                                        router.pathname !== link &&
                                        "text-gray-800"
                                      }`}
                                    >
                                      {title}
                                    </p>
                                    {/* <ImArrowRight2
                                      className={`${
                                        router.pathname === link
                                          ? "text-white"
                                          : "text-blue-900/80"
                                      }  group-hover:text-white transition-all duration-500`}
                                    /> */}
                                    <Image
                                      src={
                                        router.pathname === link
                                          ? "/images/navIconRightWhite.svg"
                                          : "/images/navIconRight.svg"
                                      }
                                      alt=""
                                      height={18}
                                      width={18}
                                    />
                                  </div>
                                  <p
                                    className={`lg:w-[90%] 2xl:w-4/5 font-normal text-xs transition-all duration-500 ${
                                      router.pathname === link
                                        ? "text-white/40"
                                        : "text-[#393e50]/40"
                                    }`}
                                  >
                                    {subTitle}
                                  </p>
                                </div>
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
          <Button title="Contact Us" link="contact-us" px={48} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
