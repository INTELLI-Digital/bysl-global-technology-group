import { getPath } from "../../utils/paths";
import IconCard from "./IconCard";
import { SectionTitleType, TechnologiesSectionTitle } from "./SharedTextgroups";

const IconCardGroup3 = (props) => {
  const { children, data, type } = props;
  const databasePath = getPath("/database-technologies");

  return (
    <div className="py-10 xl:py-16">
      {type && <SectionTitleType title={type} />}
      {children && (
        <TechnologiesSectionTitle>{children}</TechnologiesSectionTitle>
      )}
      <div
        className={`grid grid-cols-2 ${databasePath && "sm:grid-cols-3"} ${
          data[0].subTitle ? "xl:grid-cols-3" : "sm:grid-cols-3"
        } mt-10 xl:mt-10 gap-4 xl:gap-6`}
      >
        <IconCard data={data} />
      </div>
    </div>
  );
};

export default IconCardGroup3;
