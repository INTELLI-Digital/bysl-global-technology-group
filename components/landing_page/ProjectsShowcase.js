import Image from "next/image";

const ProjectsShowcase = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 xl:gap-6 py-10 xl:py-16">
      {[...Array(4)].map((item, i) => (
        <div
          key={i}
          className="h-52 xs:h-60 lg:h-64 xl:h-72 3xl:h-[350px] w-full object-cover rounded-[10px] xl:rounded-[20px] overflow-hidden relative"
        >
          <Image
            src={`/images/projects/${i}${i === 1 ? ".gif" : ".svg"}`}
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
