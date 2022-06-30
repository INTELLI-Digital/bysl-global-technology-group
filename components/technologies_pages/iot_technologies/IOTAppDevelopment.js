import {
  TechnologiesSectionTitle,
  TextGradient,
} from "../../shared/SharedTextgroups";

const IOTAppDevelopment = () => {
  return (
    <div className="bg-blue-300">
      <div className="py-10 xl:py-16 lg:flex items-center gap-6 box">
        <div>
          <TechnologiesSectionTitle start={true}>
            App <TextGradient text="Development" /> for Connected
            <br />
            <TextGradient text="Devices" />
          </TechnologiesSectionTitle>
          <p className="mt-6 text-gray-300 text-justify lg:w-11/12 hidden md:block">
            A smart house or office with advance features that you can control a
            mobile application. And save the power consumption at your placeA
            smart house or office with advance atures that you can control a
            mobile application.And save the power consumption at your place
          </p>
        </div>
        <img
          src="/images/technologies/iot/iot_app_development_banner.svg"
          alt=""
          className="lg:w-1/2 mx-auto"
        />
      </div>
    </div>
  );
};

export default IOTAppDevelopment;
