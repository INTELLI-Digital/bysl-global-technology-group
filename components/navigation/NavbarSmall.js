import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import SideDrawer from "./SideDrawer";

const NavbarSmall = () => {
  const [showDrawer, setShowDrawer] = useState(false);
  const transition = () => {
    return showDrawer;
  };

  return (
    <div>
      <div className="h-14 bg-white shadow px-4 sm:px-8 flex items-center fixed w-full z-[100]">
        <div
          className="h-4 w-5 sm:h-5 sm:w-7 absolute"
          onClick={() => setShowDrawer(!showDrawer)}
          // onBlur={() => setShowDrawer(false)}
        >
          <Image src="/images/menuBar.svg" layout="fill" alt="" />
        </div>
        <Link passHref href="/">
          <div className="w-max mx-auto flex justify-center items-center">
            <Image src="/images/logo.svg" alt="" height={28} width={57} />
          </div>
        </Link>
      </div>

      {setTimeout(() => transition(showDrawer, 1000)) && (
        <SideDrawer showDrawer={showDrawer} />
      )}
    </div>
  );
};

export default NavbarSmall;
