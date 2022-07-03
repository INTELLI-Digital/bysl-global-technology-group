import Image from "next/image";
import Link from "next/link";

const NavbarSmall = () => {
  return (
    <div className="h-14 bg-white shadow px-4 sm:px-8 flex items-center fixed w-full z-50">
      <div className="h-3 sm:h-5 w-4 sm:w-6 absolute ">
        <Image src="/images/menuBar.svg" layout="fill" alt="" />
      </div>
      <Link passHref href="/">
        <div className="w-full flex justify-center items-center">
          <Image src="/images/logo.svg" alt="" height={28} width={57} />
        </div>
      </Link>
    </div>
  );
};

export default NavbarSmall;
