import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { navbars } from "../../public/data/navbarData";
import { getPath } from "../../utils/paths";
import { getState, setState } from "../../utils/sessionStorage";
import Button from "../shared/buttons/Button";
import { ImArrowRight2 } from "react-icons/im";

const Navbar = () => {
  const [colorChange, setColorchange] = useState(false);
  const navState = getState();
  const arvrPath = getPath("/ar-vr-technologies");
  const router = useRouter();

  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setState(true);
      setColorchange(true);
    } else {
      setState(false);
      setColorchange(false);
    }
  };

  useEffect(() => {
    setColorchange(
      typeof window !== "undefined" && window.scrollY >= 80 ? true : false
    );
    window.addEventListener("scroll", changeNavbarColor);
  }, [colorChange, arvrPath, navState]);

  return (
    <div className="relative">
      <div
        className={`z-50 h-max pt-5 flex items-center fixed w-full
      ${
        colorChange
          ? "bg-white shadow shadow-gray-200"
          : arvrPath
          ? "backdrop-blur-sm bg-white/10"
          : "bg-transparent mt-5"
      }
      `}
      >
        <div className="box flex justify-between items-start w-full">
          <Link passHref href="/">
            <div className="relative h-10 w-16 xl:w-20 hover:cursor-pointer">
              <Image
                src={
                  arvrPath && !colorChange
                    ? "/images/logo_white.svg"
                    : "/images/logo.svg"
                }
                layout="fill"
                alt=""
              />
            </div>
          </Link>
          <div className="flex items-center">
            {navbars.map(({ id, title, link, dropdowns }) => {
              return (
                <div key={id} className="group inline-block">
                  <button
                    className={`${
                      arvrPath && !colorChange ? "text-white" : "text-gray-500"
                    } text-sm lg:text-base font-normal py-2 px-4 xl:px-6 rounded inline-flex items-center`}
                  >
                    <span
                      className={`mr-1 ${
                        router.pathname === link &&
                        "text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-blue-700"
                      } ${!dropdowns && "pb-5"}`}
                    >
                      {dropdowns ? (
                        title
                      ) : (
                        <Link href={link} passHref>
                          {title}
                        </Link>
                      )}
                    </span>
                  </button>
                  {dropdowns && (
                    <div className="pt-5 bg-transparent">
                      <div
                        className={`mx-1 border-t-2 border-gray-200/75 shadow-lg shadow-[#7080B0]/10 py-12 xl:pt-[72px] xl:pb-[120px] absolute left-0 top-20 w-full bg-white rounded-lg hidden group-hover:block text-gray-700 `}
                      >
                        <div className="box grid grid-cols-4 gap-6">
                          {dropdowns.map(({ id, title, link }) => {
                            return (
                              <Link href={link}>
                                <div
                                  key={id}
                                  class={`border border-gray-200/75 p-4 ${
                                    router.pathname === link && "bg-[#E7F0F9]"
                                  } hover:bg-[#E7F0F9] rounded-lg cursor-pointer transition-all duration-300`}
                                >
                                  <div class="flex items-center justify-between mb-2">
                                    <h2 class="text-gray-800">{title}</h2>
                                    <ImArrowRight2 />
                                  </div>
                                  <p class="font-normal text-xs leading-[14px] text-[#393e50]/40">
                                    Powerful web solutions to scale
                                    exponentially
                                  </p>
                                </div>
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
          <Button title="Contact Us" link="contact-us" px={48} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

// import Image from "next/image";
// import Link from "next/link";
// import { useEffect, useState } from "react";

// import { navbars } from "../../public/data/navbarData";
// import { getPath } from "../../utils/paths";
// import { getState, setState } from "../../utils/sessionStorage";
// import Button from "../shared/buttons/Button";

// const Navbar = () => {
//   const [colorChange, setColorchange] = useState(false);
//   const navState = getState();
//   const arvrPath = getPath("/ar-vr-technologies");

//   const changeNavbarColor = () => {
//     if (window.scrollY >= 80) {
//       setState(true);
//       setColorchange(true);
//     } else {
//       setState(false);
//       setColorchange(false);
//     }
//   };

//   useEffect(() => {
//     setColorchange(
//       typeof window !== "undefined" && window.scrollY >= 80 ? true : false
//     );
//     window.addEventListener("scroll", changeNavbarColor);
//   }, [colorChange, arvrPath, navState]);

//   return (
//     <div
//       className={`z-50 h-max py-5 flex items-center fixed w-full
//       ${
//         colorChange
//           ? "bg-white shadow shadow-gray-200"
//           : arvrPath
//           ? "backdrop-blur-sm bg-white/10"
//           : "bg-transparent pt-10"
//       }
//       `}
//     >
//       <div className="box flex justify-between items-center w-full">
//         <Link passHref href="/">
//           <div className="relative h-10 w-16 xl:w-20 hover:cursor-pointer">
//             <Image
//               src={
//                 arvrPath && !colorChange
//                   ? "/images/logo_white.svg"
//                   : "/images/logo.svg"
//               }
//               layout="fill"
//               alt=""
//             />
//           </div>
//         </Link>
//         <div className="flex items-center">
//           {navbars.map(({ id, title, link, dropdowns }) => {
//             return (
//               <div key={id} className="group inline-block relative">
//                 <button
//                   className={`${
//                     arvrPath && !colorChange ? "text-white" : "text-gray-500"
//                   } text-sm lg:text-base font-normal py-2 px-4 xl:px-6 rounded inline-flex items-center`}
//                 >
//                   <span className="mr-1">
//                     {dropdowns ? (
//                       title
//                     ) : (
//                       <Link href={link} passHref>
//                         {title}
//                       </Link>
//                     )}
//                   </span>
//                 </button>
//                 {dropdowns && (
//                   <ul
//                     className={`absolute p-2 bg-white rounded-lg overflow-hidden invisible opacity-0 mt-4 text-gray-700 group-hover:visible group-hover:opacity-100 group-hover:mt-0 transition-all duration-300 ease-in grid grid-cols-1 w-40 min-w-max border
//                     ${
//                       dropdowns.length > 4 &&
//                       dropdowns.length <= 8 &&
//                       "grid grid-rows-4 grid-flow-col"
//                     }
//                     ${dropdowns.length > 8 && "grid grid-rows-5 grid-flow-col"}
//                     `}
//                   >
//                     {dropdowns.map(({ id, title, link }) => {
//                       return (
//                         <li key={id}>
//                           <Link href={link}>
//                             <a className=" bg-white hover:bg-gray-100 py-2.5 px-4 block whitespace-no-wrap hover:text-blue-700 transition-all duration-150">
//                               {title}
//                             </a>
//                           </Link>
//                         </li>
//                       );
//                     })}
//                   </ul>
//                 )}
//               </div>
//             );
//           })}
//         </div>
//         <Button title="Contact Us" link="contact-us" px={48} />
//       </div>
//     </div>
//   );
// };

// export default Navbar;
