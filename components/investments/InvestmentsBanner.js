import Link from "next/link";

import { TextGradient } from "../shared/SharedTextgroups";

const InvestmentsBanner = () => {
  return (
    // <div className="flex items-center justify-center text-center text-white pt-14 lg:pt-0 h-[620px] md:h-screen bg-[url('/images/banners/investments_banner_sm.svg')] lg:bg-[url('/images/banners/investments_banner.svg')] bg-cover bg-center bg-no-repeat">
    //   <div>
    //     <p className="text-2xl sm:text-3xl lg:text-5xl xl:text-6xl 3xl:text-[64px] 3xl:leading-[80px] font-semibold w-4/5 lg:w-3/4 xl:w-4/5 2xl:w-[70%] mx-auto">
    //       We have International Standard Brands to be Proud of.
    //     </p>
    //     <p className="text-sm xl:text-base w-5/6 sm:w-4/6 md:w-1/2 xl:w-[40%] 2xl:w-1/3 mx-auto mt-6 xl:mt-10">
    //       Thing embarrassing hidden in the middle of text. All the Lorem Ipsum
    //       generators on the Internet tend to repeat predefined chunks as
    //       necessary.
    //     </p>
    //     <div className="w-full flex gap-6 flex-col lg:flex-row justify-center items-center mt-10 lg:mt-28">
    //       <Link passHref href="#it-platform">
    //         <div className="h-max text-center rounded-lg text-sm 3xl:text-base font-semibold py-2 xl:py-3 !w-[235px] hover:cursor-pointer bg-white">
    //           <TextGradient text="IT Platforms" />
    //         </div>
    //       </Link>
    //       <Link passHref href="#marketplace-platform">
    //         <div className="h-max text-center rounded-lg text-sm 3xl:text-base font-semibold py-2 xl:py-3 !w-[235px] hover:cursor-pointer text-white bg-gradient-to-r hover:from-blue-700 hover:to-blue-700  from-blue-900 to-blue-700">
    //           Marketplace Platforms
    //         </div>
    //       </Link>
    //     </div>
    //   </div>
    // </div>
    <div className="h-[620px] lg:h-screen w-full bg-gradient-to-br from-[#272B52] lg:from-[#222] to-[#402B50] lg:to-[#222] relative overflow-hidden">
      <img
        src="/images/bg-top.png"
        className="absolute -top-[10%] md:-top-[30%] xl:-top-[30%] -left-[50%] xl:-left-[30%] lg:h-[1080px] bg-1"
        alt=""
      />
      <img
        src="/images/bg-bottom.png"
        className="absolute bottom-0 xs:-bottom-[30%] 3xl:-bottom-[40%] -right-[50%] xl:-right-[30%] lg:h-[1080px] bg-2"
        alt=""
      />

      <div className="absolute blur h-full w-full bg-black/10"></div>
      <div className="flex items-center justify-center text-center text-white pt-14 lg:pt-0 h-full">
        <div>
          <p className="text-2xl sm:text-3xl lg:text-5xl xl:text-6xl 3xl:text-[64px] 3xl:leading-[80px] font-semibold w-4/5 lg:w-3/4 xl:w-4/5 2xl:w-[70%] mx-auto">
            We have International Standard Brands to be Proud of.
          </p>
          <p className="text-sm xl:text-base w-5/6 sm:w-4/6 md:w-1/2 xl:w-[40%] mx-auto mt-6 xl:mt-10">
            Thing embarrassing hidden in the middle of text. All the Lorem Ipsum
            generators on the Internet tend to repeat predefined chunks as
            necessary.
          </p>
          <div className="w-full flex gap-6 flex-col lg:flex-row justify-center items-center mt-10 lg:mt-28">
            <Link passHref href="#it-platform">
              <div className="h-max text-center rounded-lg text-sm 3xl:text-base font-semibold py-2 xl:py-3 !w-[235px] hover:cursor-pointer bg-white">
                <TextGradient text="IT Platforms" />
              </div>
            </Link>
            <Link passHref href="#marketplace-platform">
              <div className="h-max text-center rounded-lg text-sm 3xl:text-base font-semibold py-2 xl:py-3 !w-[235px] hover:cursor-pointer text-white bg-gradient-to-r hover:from-blue-700 hover:to-blue-700  from-blue-900 to-blue-700">
                Marketplace Platforms
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestmentsBanner;
