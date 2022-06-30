import Link from "next/link";
import { TextGradient } from "../SharedTextgroups";

const ButtonWhite = (props) => {
  const { title, link, px } = props;

  return (
    <Link passHref href={`/${link}`}>
      <div
        className={`w-max h-max text-center rounded-lg text-sm 3xl:text-base font-semibold py-1 md:py-2 2xl:py-[10px] ${
          (px === 48 && "px-4 2xl:px-6 3xl:px-12") ||
          (px === 64 && "px-8 2xl:px-8 3xl:px-16")
        } hover:cursor-pointer bg-white`}
      >
        <TextGradient text={title} />
      </div>
    </Link>
  );
};

export default ButtonWhite;
