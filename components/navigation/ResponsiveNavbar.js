import Navbar from "./Navbar";
import NavbarSmall from "./NavbarSmall";
import { getPath } from "../../utils/paths";

const ResponsiveNavbar = () => {
  const arVrPath = getPath("/ar-vr-technologies");

  return (
    <div className={`${!arVrPath && "pb-14 lg:pb-[100px]"}`}>
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
