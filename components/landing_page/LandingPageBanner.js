import Image from "next/image";

const LandingPageBanner = () => {
  return (
    <>
      {/* <div className="2xl:h-[480px] 3xl:h-[676px] w-full">
        <img
          src="/images/banners/landing_banner.svg"
          alt=""
          className="h-full w-full"
        />
      </div> */}
      <div className="h-56 sm:h-72 md:h-80 lg:h-96 2xl:h-[480px] 3xl:h-[676px] w-full relative">
        <Image src="/images/banners/landing_banner.svg" layout="fill" priority alt="" />
      </div>
    </>
  );
};

export default LandingPageBanner;
