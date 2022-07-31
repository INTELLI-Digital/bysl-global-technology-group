import Image from "next/image";

const ProjectsShowcase = ({ data }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 xl:gap-6 py-10 xl:py-16">
      {data.map(({ id, img }) => (
        <div
          key={id}
          className="h-52 xs:h-60 lg:h-64 xl:h-72 3xl:h-[350px] w-full object-cover rounded-[10px] xl:rounded-[20px] overflow-hidden relative"
        >
          <Image
            src={img}
            placeholder="blur"
            blurDataURL={img}
            layout="fill"
            objectFit="cover"
            alt=""
          />
        </div>
      ))}
    </div>
  );
};

export default ProjectsShowcase;
