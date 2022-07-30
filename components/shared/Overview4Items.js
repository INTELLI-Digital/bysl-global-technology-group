import { getPath } from "../../utils/paths";
import OverviewCard from "./OverviewCard";
import { SectionTitleType, TechnologiesSectionTitle } from "./SharedTextgroups";

const Overview4Items = (props) => {
  const { data, children, large, type } = props;
  const webPath = getPath("/web-technologies");
  const itesPath = getPath("/ites");
  const aiMlPath = getPath("/ai-ml-technologies");
  const cyberPath = getPath("/cyber-security-technologies");

  return (
    <div
      className={`${webPath ? "pt-10 xl:pt-16" : "py-10 xl:py-16"} ${
        (aiMlPath && "!pt-0") || (cyberPath && "!pt-0") || (itesPath && "!pt-0")
      }`}
    >
      {type && <SectionTitleType title={type} />}
      {children && (
        <TechnologiesSectionTitle>{children}</TechnologiesSectionTitle>
      )}
      <div
        className={`grid grid-cols-2 sm:grid-cols-4 md:grid-cols-2 lg:grid-cols-4 gap-6 ${
          webPath && "!mt-6"
        } ${children && "mt-10"}`}
      >
        <OverviewCard data={data} large={large} />
      </div>
    </div>
  );
};

export default Overview4Items;
