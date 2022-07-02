import Image from "next/image";

import Button from "../shared/buttons/Button";
import {
  SectionTitleType,
  TechnologiesSectionTitle,
  TextGradient,
} from "../shared/SharedTextgroups";

const ServiceResources = () => {
  return (
    <div className="py-10 xl:py-16">
      <SectionTitleType title="Resources" />
      <TechnologiesSectionTitle>
        Proud projects that <TextGradient text="make us stand out" />
      </TechnologiesSectionTitle>
      <div
        className={`grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 mt-10 xl:mt-16 gap-6`}
      >
        {[...Array(6)].map((item, i) => {
          return (
            <div key={i} className="relative group">
              <div className="relative rounded-md w-full h-44 sm:h-52 3xl:h-64 overflow-hidden">
                <Image
                  src={`/images/services/home/resources/services_resource_${i}.svg`}
                  layout="fill"
                  objectFit="cover"
                  alt=""
                />
              </div>
              <div className="centered opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500">
                <Button title="View Project" link="" px={48} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ServiceResources;
