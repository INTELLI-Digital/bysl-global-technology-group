import Image from "next/image";

const LandingPageBanner = () => {
  return (
    <div className="pt-10">
      <div className="h-52 sm:h-72 md:h-[40vh] lg:h-[60vh] xl:h-[75vh] 2xl:h-[80vh] w-full relative">
        <Image
          src="/images/banners/landing_banner.svg"
          layout="fill"
          priority
          alt=""
        />
      </div>
    </div>
  );
};

export default LandingPageBanner;
