const WebBanner = ({ img }) => {
  const Tech = ({ img, title }) => {
    return (
      <>
        <img className="w-full h-full" src={img} alt="" />
        <p>{title}</p>
      </>
    );
  };

  return (
    <div className="img_animate1 border mx-auto relative w-[253px] xl:w-[400px] 2xl:w-[500px] h-[253px] xl:h-[400px] 2xl:h-[500px]">
      <div className="angular absolute top-[-6%] left-[-6%] lg:left-[-10%] w-[30px] lg:w-12 2xl:w-[60px] h-[30px] lg:h-12 2xl:h-[60px] shadow-[0px_0px_40px_rgba(0,0,0,0.1)] rounded-full">
        <Tech img={img.angular} title="Angular" />
      </div>
      <div className="tailwind absolute top-[50%] translate-y-[-50%] left-[-6%] lg:left-[-10%] w-[35px] lg:w-12 2xl:w-[70px] h-[35px] lg:h-12 2xl:h-[70px] shadow-[0px_0px_40px_rgba(0,0,0,0.1)] rounded-full">
        <Tech img={img.tailwind} title="Tailwindcss" />
      </div>
      <div className="mui absolute top-[100%] translate-y-[-70%] left-[-6%] lg:left-[-10%] w-[40px] lg:w-12 2xl:w-[80px] h-[40px] lg:h-12 2xl:h-[80px] shadow-[0px_0px_40px_rgba(0,0,0,0.1)] rounded-full">
        <Tech img={img.mui} title="Material UI" />
      </div>
      <div className="node absolute top-[100%] translate-y-[-70%] right-[-6%] w-[35px] 2xl:w-[70px] h-[35px] 2xl:h-[70px] shadow-[0px_0px_40px_rgba(0,0,0,0.1)] rounded-full">
        <Tech img={img.node} title="Node Js" />
      </div>
      <div className="vue absolute top-[-6%] right-[-6%] w-[40px] 2xl:w-[80px] h-[40px] 2xl:h-[80px] shadow-[0px_0px_40px_rgba(0,0,0,0.1)] rounded-full">
        <Tech img={img.vue} title="Vue Js" />
      </div>

      <div className="img_animate2 border w-[177px] xl:w-[280px] 2xl:w-[350px] h-[177px] xl:h-[280px] 2xl:h-[350px] relative top-2/4 left-2/4 translate-x-[-50%] translate-y-[-50%]">
        <div className="next absolute top-[-6%] left-[-6%] w-[40px] 2xl:w-[80px] h-[40px] 2xl:h-[80px] shadow-[0px_0px_40px_rgba(0,0,0,0.1)] rounded-full">
          <Tech img={img.next} title="Next Js" />
        </div>
        <div className="laravel absolute top-[100%] translate-y-[-57%] left-[10%] w-[30px] 2xl:w-[60px] h-[30px] 2xl:h-[60px] shadow-[0px_0px_40px_rgba(0,0,0,0.1)] rounded-full">
          <Tech img={img.laravel} title="Laravel" />
        </div>
        <div className="firebase absolute top-[-6%] right-[-6%] w-[30px] 2xl:w-[60px] h-[30px] 2xl:h-[60px] shadow-[0px_0px_40px_rgba(0,0,0,0.1)] rounded-full">
          <Tech img={img.firebase} title="Firebase" />
        </div>
        <div className="python absolute top-[85%] translate-y-[-70%] right-[-11%] w-[40px] 2xl:w-[80px] h-[40px] 2xl:h-[80px] shadow-[0px_0px_40px_rgba(0,0,0,0.1)] rounded-full">
          <Tech img={img.python} title="Python" />
        </div>

        <div className="img_animate3 border w-[96px] xl:w-[150px] 2xl:w-[189px] h-[96px] xl:h-[150px] 2xl:h-[189px] relative top-2/4 left-2/4 translate-x-[-50%] translate-y-[-50%]">
          <div className="ts absolute top-[10%] left-[-13%] w-[25px] 2xl:w-[50px] h-[25px] 2xl:h-[50px] shadow-[0px_0px_40px_rgba(0,0,0,0.1)] rounded-full">
            <Tech img={img.ts} title="TypeScript" />
          </div>
          <div className="react absolute top-[80%] translate-y-[-70%] right-[-18%] w-[32px] 2xl:w-[64px] h-[32px] 2xl:h-[64px] shadow-[0px_0px_40px_rgba(0,0,0,0.1)] rounded-full">
            <Tech img={img.react} title="React Js" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebBanner;
