const ARVRBanner = () => {
  return (
    <div className="pt-14 lg:pt-0 mb-10 lg:mb-0 relative h-[480px] lg:h-screen">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute object-cover h-[480px] lg:h-screen min-w-full"
      >
        <source
          src="/images/technologies/ar_vr/ar_vr_banner.mp4"
          type="video/mp4"
        />
        Your browser does not support HTML5 video.
      </video>
      <div className="absolute flex items-center justify-center h-full w-full text-center">
        <div className="text-white">
          <p className="text-sm md:text-base xl:text-lg font-bold">
            AR/VR Technologies
          </p>
          <p className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl 3xl:text-[64px] 3xl:leading-[80px] font-semibold w-4/5 lg:w-3/4 xl:w-3/5 3xl:w-[70%] mx-auto">
            We Craft Virtual & Augmented Reality Experience
          </p>
          <p className="text-sm xl:text-base w-5/6 sm:w-4/6 md:w-1/2 xl:w-1/3 2xl:w-[30%] mx-auto mt-5 xl:mt-6">
            Committing to things bigger than life, aspiring to recreate
            connections choosing paths less travelled by.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ARVRBanner;
