import IconCard from "./IconCard";
import { SectionTitleType, TechnologiesSectionTitle } from "./SharedTextgroups";

const IconCardGroup4 = (props) => {
  const { children, data, type } = props;
  return (
    <div className="py-10 xl:py-16">
      {type && <SectionTitleType title={type} />}
      {children && (
        <TechnologiesSectionTitle>{children}</TechnologiesSectionTitle>
      )}
      <div className="grid grid-cols-2 md:grid-cols-4 mt-10 xl:mt-20 gap-5">
        <IconCard data={data} />
      </div>
    </div>
  );
};

export default IconCardGroup4;
