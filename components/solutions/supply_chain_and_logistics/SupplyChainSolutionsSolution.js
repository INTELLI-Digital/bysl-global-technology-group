import React from "react";
import {
  SectionTitleType,
  TechnologiesSectionTitle,
} from "../../shared/SharedTextgroups";

const SupplyChainSolutionsSolution = ({ type, children }) => {
  return (
    <div id="solutions" className="py-10 xl:py-16">
      <SectionTitleType title={type} />
      <TechnologiesSectionTitle>{children}</TechnologiesSectionTitle>
    </div>
  );
};

export default SupplyChainSolutionsSolution;
