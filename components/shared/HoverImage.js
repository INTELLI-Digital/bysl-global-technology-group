const HoverImage = ({ img1, img2 }) => {
  return (
    <div className="relative">
      <img
        src={img1}
        alt=""
        className="w-full h-full group-hover:opacity-0 transition-all duration-500"
      />
      <img
        src={img2}
        alt=""
        className="w-full h-full absolute top-0 opacity-0 group-hover:opacity-100 transition-all duration-500"
      />
    </div>
  );
};

export default HoverImage;
