import Image from "next/image";

const LandingPageBanner = () => {
  return (
    <div className="py-10 xl:py-16">
      <div className="h-52 sm:h-72 md:h-[40vh] lg:h-[60vh] xl:h-[70vh] 2xl:h-[75vh] w-full relative">
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
