import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { Accordion, AccordionBody } from "@material-tailwind/react";

import { navbars } from "../../public/data/navbarData";
import Button from "../shared/buttons/Button";

const NavbarSmall = () => {
  const router = useRouter();
  const [open, setOpen] = useState(0);
  const [showDrawer, setShowDrawer] = useState(false);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <div>
      <div className="h-14 bg-white shadow px-4 sm:px-8 flex items-center fixed w-full z-40">
        <div
          className="h-3 w-4 xxs:h-4 xxs:w-5 xs:h-5 xs:w-7 absolute "
          onClick={() => setShowDrawer(!showDrawer)}
        >
          <Image src="/images/menuBar.svg" layout="fill" alt="" />
        </div>
        <Link passHref href="/">
          <div className="w-full flex justify-center items-center">
            <Image src="/images/logo.svg" alt="" height={28} width={57} />
          </div>
        </Link>
      </div>

      {showDrawer && (
        <div className="w-screen bg-[#000]/10 h-screen overflow-hidden fixed top-14 left-0 z-50">
          <div className="w-[280px] h-screen">
            <div className="flex flex-col justify-end bg-[url('/images/drawer-bg.svg')] bg-no-repeat bg-center bg-cover h-[120px] px-4 py-5">
              <h2 className="text-white">Hello, Good Morning</h2>
            </div>
            <div className="bg-white h-screen overflow-y-auto px-4 py-6 flex flex-col gap-6">
              {navbars.map(({ id, title, link, dropdowns }) => {
                return (
                  <div>
                    <Accordion
                      open={open === id}
                      onClick={() => handleOpen(id)}
                    >
                      <div key={id} className="flex justify-between">
                        <p
                          className={`text-gray-800 text-sm font-medium ${
                            router.pathname === link &&
                            "text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-blue-700"
                          }`}
                        >
                          {dropdowns ? (
                            title
                          ) : (
                            <Link href={link} passHref>
                              {title}
                            </Link>
                          )}
                        </p>
                        {dropdowns &&
                          (open !== id ? (
                            <IoIosArrowDown className="text-gray-800 text-sm font-medium" />
                          ) : (
                            <IoIosArrowUp className="text-gray-800 text-sm font-medium" />
                          ))}
                      </div>
                      <AccordionBody>
                        <div className="flex flex-col gap-4 mt-4 border-l border-gray-300">
                          {dropdowns?.map(({ id, title, link }) => {
                            return (
                              <div key={id} className="ml-3">
                                <Link href={link} passHref>
                                  <p
                                    className={`text-sm font-medium ${
                                      router.pathname === link
                                        ? "text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-blue-700"
                                        : "text-gray-300"
                                    }`}
                                  >
                                    {title}
                                  </p>
                                </Link>
                              </div>
                            );
                          })}
                        </div>
                      </AccordionBody>
                    </Accordion>
                  </div>
                );
              })}
              <div className="flex justify-center">
                <Button title="Contact Us" px={48} />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavbarSmall;
