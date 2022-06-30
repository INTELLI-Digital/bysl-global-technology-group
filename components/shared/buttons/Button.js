import Link from "next/link";

const Button = (props) => {
  const { title, link, px } = props;

  return (
    <Link passHref href={`/${link}`}>
      <div
        className={`w-max h-max text-center rounded-lg text-white text-sm 3xl:text-base font-semibold py-1 md:py-2 2xl:py-[10px] ${
          (px === 48 && "px-4 2xl:px-6 3xl:px-12") ||
          (px === 64 && "px-8 2xl:px-8 3xl:px-16")
        } hover:cursor-pointer bg-gradient-to-r hover:from-blue-700 hover:to-blue-700  from-blue-900 to-blue-700`}
      >
        {title}
      </div>
    </Link>
  );
};

export default Button;
