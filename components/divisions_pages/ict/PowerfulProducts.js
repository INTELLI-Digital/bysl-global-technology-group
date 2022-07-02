import Image from "next/image";

import Button from "../../shared/buttons/Button";
import { TechnologiesSectionTitle } from "../../shared/SharedTextgroups";

const PowerfulProducts = () => {
  return (
    <div className="py-10 xl:py-16">
      <TechnologiesSectionTitle>
        Powerful product We Proud For
      </TechnologiesSectionTitle>
      <div className="my-10 grid grid-cols-12 auto-rows-max gap-6 lg:gap-10 2xl:gap-16">
        {[
          "Product marketing motion video",
          "Shoe branding motion video",
          "Food video animation for resturant",
          "Perfume branding motion video",
          "Website prototype animation",
        ].map((item, i) => {
          return (
            <div
              key={i}
              className={`${
                (i === 0 && "col-span-12 xs:col-span-6") ||
                (i === 1 && "col-span-12 xs:col-span-6") ||
                (i === 2 && "col-span-12 xs:col-span-6 sm:col-span-4") ||
                (i === 3 && "col-span-12 xs:col-span-6 sm:col-span-4") ||
                (i === 4 && "col-span-12 xs:col-span-6 sm:col-span-4")
              }`}
            >
              <div className="rounded-xl lg:rounded-[20px] overflow-hidden">
                <div
                  className={`w-full relative ${
                    i === 0 || i === 1
                      ? "h-32 xxs:h-52 xs:h-32 sm:h-52 lg:h-64 2xl:h-[300px]"
                      : "h-32 xxs:h-52 xs:h-32 lg:h-40 xl:h-44 2xl:h-52"
                  }`}
                >
                  <Image
                    src={`/images/divisions/ict/products/${i}.gif`}
                    layout="fill"
                    objectFit="cover"
                    alt=""
                  />
                </div>
              </div>
              <p className="mt-2.5 text-gray-800 text-sm lg:text-base 2xl:text-lg">
                {item}
              </p>
            </div>
          );
        })}
      </div>
      <div className="flex justify-center">
        <Button title="Explore all" px={64} />
      </div>
    </div>
  );
};

export default PowerfulProducts;
