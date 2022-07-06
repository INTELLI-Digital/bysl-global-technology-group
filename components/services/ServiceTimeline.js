import Image from "next/image";
import { serviceTimelineData } from "../../public/data/servicesData";

const ServiceTimeline = () => {
  return (
    <div className="py-10 xl:py-16 grid grid-cols-2 lg:grid-cols-4 2xl:grid-cols-4 gap-4 2xl:gap-6">
      {serviceTimelineData.map(({ id, img, title, subTitle }) => {
        return (
          <div key={id} className="flex flex-col justify-center text-center">
            <Image src={img} height={85} width={80} alt="" />
            <p className="py-2.5 text-xs sm:text-sm 2xl:text-base 3xl:text-xl font-bold  text-gray-800">
              {title}{" "}
            </p>
            <p className="text-[10px] sm:text-sm text-gray-300">{subTitle} </p>
          </div>
        );
      })}
    </div>
  );
};

export default ServiceTimeline;
