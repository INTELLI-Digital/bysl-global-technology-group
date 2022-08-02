import CommonLayout from "../layouts/CommonLayout";
import Button from "../components/shared/buttons/Button";

const Careers = () => {
  return (
    <CommonLayout title="Careers">
      <div className="max-w-[856px] mx-auto py-10 xl:py-16">
        <div className="lg:flex justify-between items-center">
          <div>
            <p className="text-gray-800 text-2xl font-semibold text-center lg:text-start">
              Application Software Engineer
            </p>
            <p className="mt-4 mb-10 lg:mb-0 text-gray-600 text-lg font-medium text-center lg:text-start">
              BYSL Global Technology Group
            </p>
          </div>
          <div className="flex justify-center lg:justify-start">
            <Button title="Apply Now" px={42} />
          </div>
        </div>
        <p className="my-6 lg:my-10 text-center lg:text-start text-gray-800/80">
          BYSL Global Technology Group stands on four core values regarded as
          the fundamental ideological constants to govern the organization. The
          chronology of these values is arranged on a priority basis. The values
          we belives are Principles & Beliefs, Exceptionalism & High Standards,
          Customer Experience & Satisfaction, Employee Wellbeing & Team Spirit.
        </p>
      </div>
    </CommonLayout>
  );
};

export default Careers;
