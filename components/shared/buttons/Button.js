import Link from "next/link";

const Button = (props) => {
  const { title, link, px } = props;

  return (
    <Link passHref href={`/${link}`}>
      <div
        className={`w-max h-max text-center rounded-lg text-white text-sm font-semibold py-2 md:py-3 hover:cursor-pointer bg-gradient-to-r hover:from-blue-700 hover:to-blue-700  from-blue-900 to-blue-700 ${
          (px === 42 && "px-8 xl:px-[42px]") ||
          (px === 48 && "px-8 xl:px-12") ||
          (px === 64 && "px-8 xl:px-12 2xl:px-16")
        }`}
      >
        {title}
      </div>
    </Link>
  );
};

export default Button;
