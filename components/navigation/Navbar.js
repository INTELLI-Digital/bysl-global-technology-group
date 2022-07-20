import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import { navbars } from "../../public/data/navbarData";
import { getPath } from "../../utils/paths";
import { getState, setState } from "../../utils/sessionStorage";
import Button from "../shared/buttons/Button";

const Navbar = () => {
  const [colorChange, setColorchange] = useState(false);
  const navState = getState();
  const arvrPath = getPath("/ar-vr-technologies");

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
    <div
      className={`z-50 h-max py-5 flex items-center fixed w-full 
      ${
        colorChange
          ? "bg-white shadow shadow-gray-200"
          : arvrPath
          ? "backdrop-blur-sm bg-white/10"
          : "bg-transparent pt-10"
      }
      `}
    >
      <div className="box flex justify-between items-center w-full">
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
              <div key={id} className="group inline-block relative">
                <button
                  className={`${
                    arvrPath && !colorChange ? "text-white" : "text-gray-500"
                  } text-sm lg:text-base font-normal py-2 px-4 xl:px-6 rounded inline-flex items-center`}
                >
                  <span className="mr-1">
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
                  <ul
                    className={`absolute p-2 bg-white rounded-lg overflow-hidden invisible opacity-0 mt-4 text-gray-700 group-hover:visible group-hover:opacity-100 group-hover:mt-0 transition-all duration-300 ease-in grid grid-cols-1 w-40 min-w-max border
                    ${
                      dropdowns.length > 4 &&
                      dropdowns.length <= 8 &&
                      "grid grid-rows-4 grid-flow-col"
                    }
                    ${dropdowns.length > 8 && "grid grid-rows-5 grid-flow-col"}
                    `}
                  >
                    {dropdowns.map(({ id, title, link }) => {
                      return (
                        <li key={id}>
                          <Link href={link}>
                            <a className=" bg-white hover:bg-gray-100 py-2.5 px-4 block whitespace-no-wrap hover:text-blue-700 transition-all duration-150">
                              {title}
                            </a>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </div>
            );
          })}
        </div>
        <Button title="Contact Us" link="contact-us" px={48} />
      </div>
    </div>
  );
};

export default Navbar;
