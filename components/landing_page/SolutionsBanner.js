const SolutionsBanner = () => {
  return (
    <div className="relative my-8 2xl:my-16 bg-gradient-to-r from-blue-900 to-blue-700 min-h-max 2xl:h-96 3xl:h-[531px] p-5 md:p-7 xl:p-10 3xl:p-16 lg:pl-16 xl:pl-32 text-center text-white rounded-xl lg:rounded-3xl 2xl:rounded-[40px]">
      <div className="flex flex-col sm:flex-row justify-between sm:gap-4 sm:items-center xl:items-start">
        <div className="sm:w-1/2 text-center sm:text-start xl:mt-8 3xl:mt-16 mb-11 sm:mb-0">
          <p className="text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-[64px] font-bold mb-5 3xl:mb-6">
            ​​Solutions
          </p>
          <p className="text-white/75 leading-4 text-sm lg:text-base 2xl:text-lg 3xl:text-xl">
            Whether it's subtle interactions that improve the UX, or complex
            "WOW" animations. I can build them all.
          </p>
        </div>
        <div className="sm:w-1/2 flex justify-center sm:justify-end">
          <img
            src="/images/banners/landing_solution_banner.svg"
            alt=""
            className="h-56 xl:h-60 2xl:h-72 3xl:h-[400px]"
          />
        </div>
      </div>
    </div>
  );
};

export default SolutionsBanner;
