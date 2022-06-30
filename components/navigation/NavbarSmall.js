import Link from "next/link";

const NavbarSmall = () => {
  return (
    <div className="h-14 bg-white shadow px-4 sm:px-8 flex items-center fixed w-full z-50">
      <img
        src="/images/menuBar.svg"
        alt=""
        className="h-3 sm:h-5 w-4 sm:w-6 absolute "
      />
      <div className="w-full flex justify-center items-center">
        <Link passHref href="/">
          <img src="/images/logo.svg" alt="" className="h-7 w-auto" />
        </Link>
      </div>
    </div>
  );
};

export default NavbarSmall;
