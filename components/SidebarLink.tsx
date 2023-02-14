// import { useRouter } from "next/router";

// function SidebarLink({ Icon, text, active }:{Icon?: any,text?:string,active?:boolean}) {
//   const router = useRouter();
//   return (
//     <div
//       className={`text-[#d9d9d9] flex items-center justify-center xl:justify-start text-xl space-x-3 hoverAnimation ${
//         active && "font-bold"
//       }`}
//       onClick={() => active && router.push("/")}
//     >
//       <Icon className="h-7" />
//       <span className="hidden xl:inline">{text}</span>
//     </div>
//   );
// }

// export default SidebarLink;

import React from 'react'

function SidebarLink({Icon,text,active}: {Icon?:any,text?:string,active?:boolean}) {
  return (
    <div className={`text-[#d9d9d9] flex items-center justify-center 
    xl:justify-start text-xl space-x-3 hoverAnimation ${
      active && "font-bold"}`}>
      <Icon className="h-7 "/>
      <span className="hidden xl:inline">{text}</span>
    </div>
  )
}

export default SidebarLink
