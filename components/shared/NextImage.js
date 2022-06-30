import Image from "next/image";

const NextImage = ({ src }) => {
  return <Image src={src} layout="fill" alt="" />;
};

export default NextImage;
