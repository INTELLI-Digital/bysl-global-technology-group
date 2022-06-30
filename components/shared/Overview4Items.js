import OverviewCard from "./OverviewCard";
import { SectionTitleType, TechnologiesSectionTitle } from "./SharedTextgroups";

const Overview4Items = (props) => {
  const { data, children, large, type } = props;

  return (
    <div className="py-10 xl:py-16">
      {type && <SectionTitleType title={type} />}
      {children && (
        <TechnologiesSectionTitle>{children}</TechnologiesSectionTitle>
      )}
      <div
        className={`grid grid-cols-2 sm:grid-cols-4 md:grid-cols-2 lg:grid-cols-4 gap-6 ${
          children && "mt-10 md:mt-16 xl:mt-20 "
        }`}
      >
        <OverviewCard data={data} large={large} />
      </div>
    </div>
  );
};

export default Overview4Items;
