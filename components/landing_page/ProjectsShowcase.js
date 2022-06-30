const ProjectsShowcase = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 3xl:gap-6 py-3 lg:py-8 3xl:py-16">
      {[...Array(4)].map((item, i) => (
        <img
          key={i}
          src={`/images/projects/${i}${i === 1 ? ".gif" : ".svg"}`}
          alt=""
          className="h-52 xs:h-60 lg:h-64 xl:h-72 3xl:h-[350px] w-full object-cover rounded-[20px]"
        />
      ))}
    </div>
  );
};

export default ProjectsShowcase;
