import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { getPath } from "../../utils/paths";
import SideDrawer from "./SideDrawer";

const NavbarSmall = ({ colorChange }) => {
  const [showDrawer, setShowDrawer] = useState(false);

  const arvrPath = getPath("/technologies/ar-vr");
  const investmentPath = getPath("/investments");
  const resourcesPath = getPath("/resources");
  const foodAndBeveragePath = getPath("/solutions/food-and-beverage");
  const healthcarePath = getPath("/solutions/healthcare");
  const supplyChainSolutionsPath = getPath(
    "/solutions/supply-chain-and-logistics"
  );

  return (
    <div>
      <div
        className={`h-14 bg-white shadow ${
          colorChange
            ? ""
            : arvrPath ||
              investmentPath ||
              resourcesPath ||
              healthcarePath ||
              foodAndBeveragePath ||
              supplyChainSolutionsPath
            ? "backdrop-blur-sm bg-white/10 "
            : "bg-white"
        } px-4 sm:px-8 flex items-center fixed w-full z-[100]`}
      >
        <div
          className="h-4 w-5 sm:h-5 sm:w-7 absolute"
          onClick={() => setShowDrawer(!showDrawer)}
          // onBlur={() => setShowDrawer(false)}
        >
          <Image
            src={
              (arvrPath && !colorChange) ||
              (investmentPath && !colorChange) ||
              (supplyChainSolutionsPath && !colorChange) ||
              (healthcarePath && !colorChange) ||
              (foodAndBeveragePath && !colorChange) ||
              (resourcesPath && !colorChange)
                ? "/images/menuBar_white.svg"
                : "/images/menuBar.svg"
            }
            layout="fill"
            alt=""
          />
        </div>
        <Link passHref href="/">
          <div className="w-max mx-auto flex justify-center items-center">
            <Image
              src={
                (arvrPath && !colorChange) ||
                (investmentPath && !colorChange) ||
                (supplyChainSolutionsPath && !colorChange) ||
                (healthcarePath && !colorChange) ||
                (foodAndBeveragePath && !colorChange) ||
                (resourcesPath && !colorChange)
                  ? "/images/logo_white.svg"
                  : "/images/logo.svg"
              }
              alt=""
              height={28}
              width={57}
            />
          </div>
        </Link>
      </div>
      <SideDrawer showDrawer={showDrawer} />
    </div>
  );
};

export default NavbarSmall;
