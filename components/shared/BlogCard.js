import Image from "next/image";
import Link from "next/link";

import { TextGradient } from "./SharedTextgroups";

const BlogCard = ({ data }) => {
  const { img, type, title, subTitle, link } = data;

  return (
    <div className="bg-white rounded-md shadow-sm shadow-gray-200/50 max-w-sm lg:max-w-lg mx-auto">
      <div className="relative rounded-t-md w-full h-52 overflow-hidden">
        <Image src={img} layout="fill" objectFit="cover" alt="" />
      </div>
      <div className="px-5 pt-10 pb-6">
        <p className="text-xs font-medium">
          <TextGradient text={type} />
        </p>
        <p className="text-xl font-bold text-gray-800 pt-1 pb-4">{title}</p>
        <p className="text-sm text-gray-400 pb-6">{subTitle}</p>
      </div>
      <Link passHref href={link}>
        <div className="bg-gradient-from-white h-[50px] border-t-2 hover:border-transparent hover:cursor-pointer flex justify-center items-center group">
          <p className="text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r group-hover:from-white from-blue-900 group-hover:to-white to-blue-700 ">
            View Case Study
          </p>
        </div>
      </Link>
    </div>
  );
};

export default BlogCard;
