import { useEffect, useState } from "react";

import Navbar from "./Navbar";
import NavbarSmall from "./NavbarSmall";
import { getPath } from "../../utils/paths";
import { getState, setState } from "../../utils/sessionStorage";

const ResponsiveNavbar = () => {
  const [colorChange, setColorchange] = useState(false);
  const navState = getState();

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
  }, [colorChange, navState]);

  const arVrPath = getPath("/technologies/ar-vr");
  const investmentPath = getPath("/investments");
  const resourcesPath = getPath("/resources");
  const supplyChainSolutionsPath = getPath(
    "/solutions/supply-chain-and-logistics"
  );
  const healthcarePath = getPath("/solutions/healthcare");
  const foodAndBeveragePath = getPath("/solutions/food-and-beverage");

  return (
    <div
      className={`pb-14 lg:pb-[100px] 
      ${
        (arVrPath && "!pb-0") ||
        (investmentPath && "!pb-0") ||
        (supplyChainSolutionsPath && "!pb-0") ||
        (healthcarePath && "!pb-0") ||
        (foodAndBeveragePath && "!pb-0") ||
        (resourcesPath && "!pb-0")
      }`}
    >
      <div className="hidden lg:block">
        <Navbar colorChange={colorChange} />
      </div>
      <div className="block lg:hidden">
        <NavbarSmall colorChange={colorChange} />
      </div>
    </div>
  );
};

export default ResponsiveNavbar;
