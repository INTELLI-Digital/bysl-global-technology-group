import { useEffect } from "react";
import { useMediaQuery } from "react-responsive";

import Navbar from "./Navbar";
import NavbarSmall from "./NavbarSmall";
import { getPath } from "../../utils/paths";

const ResponsiveNavbar = () => {
  const isLarge = useMediaQuery({ minWidth: 1024 });
  useEffect(() => {}, [isLarge]);

  // return <div>{isLarge ? <Navbar /> : <NavbarSmall />}</div>;
  return (
    <div className={`${!getPath("/ar-vr-technologies") && "pb-14 lg:pb-20"}`}>
      <div className="hidden lg:block">
        <Navbar />
      </div>
      <div className="block lg:hidden">
        <NavbarSmall />
      </div>
    </div>
  );
};

export default ResponsiveNavbar;
