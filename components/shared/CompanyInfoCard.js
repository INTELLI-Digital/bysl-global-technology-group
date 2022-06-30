import { getPath } from "../../utils/paths";

const CompanyInfoCard = (props) => {
  const { id, title, description, img } = props;
  const culturePath = getPath("/culture");

  return (
    <div
      className={`w-full ${
        culturePath
          ? (id === 0 && "lg:col-span-6") ||
            (id === 1 && "lg:col-span-6") ||
            (id === 2 && "lg:col-span-12") ||
            (id === 3 && "lg:col-span-7") ||
            (id === 4 && "lg:col-span-5") ||
            (id === 5 && "lg:col-span-8") ||
            (id === 6 && "lg:col-span-4")
          : (id === 1 && "lg:mt-[180px]") ||
            (id === 2 && "lg:-mt-[180px]") ||
            (id === 4 && "lg:-mt-[180px]")
      }`}
    >
      <div
        className={`${
          culturePath && "h-full"
        } bg-blue-50 rounded-[20px] p-5 xl:p-6`}
      >
        <img
          src={`/images/info_card/${img}.svg`}
          alt=""
          className="h-10 2xl:h-14"
        />
        <p className="text-lg 2xl:text-xl my-3 2xl:my-5 font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-blue-700">
          {title}
        </p>
        <p className="text-gray-600 leading-5 text-sm 2xl:text-base">
          {description}
        </p>
      </div>
    </div>
  );
};

export default CompanyInfoCard;
