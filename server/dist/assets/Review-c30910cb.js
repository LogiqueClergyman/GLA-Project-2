import{ag as r,ah as e,au as j,ak as w,aj as y}from"./index-b86e62c6.js";const d="/assets/star-69655432.png";function N({courseDetails:s,userId:n}){const m=t=>y.success(t),h=s&&s._id,[f,i]=r.useState(!1);r.useEffect(()=>{if(s&&s.review.length>0)for(let t=0;t<s.review.length;t++){const a=s.review[t];if(a.createBy===n){i(!0),console.log(a.star,a.comment),o(a.star),x(a.comment);break}}},[s,n]);const[l,o]=r.useState(0),[c,x]=r.useState(""),g=async()=>{try{const t=localStorage.getItem("token");await w.post(`/cource/setReview/${h}`,{star:l,comment:c},{headers:{Authorization:`Bearer ${t}`}}),m("Thanks for Review..."),i(!0)}catch(t){console.error("Error:",t)}};return e.jsxs("div",{className:"w-[100vw] mt-3",children:[e.jsxs("div",{className:"ring-2 w-fit p-5 flex flex-col mx-auto bg-white gap-y-8",children:[e.jsx("h1",{className:"underline justify-center flex w-full text-xl text-gray-300 font-bold mt-11",children:"Review"}),f?e.jsxs("div",{children:[e.jsx("div",{className:"flex items-center gap-x-2 w-full  justify-center",children:[...Array(l)].map((t,a)=>e.jsx("img",{src:d,className:"h-5",alt:"Star",srcset:""}))}),e.jsx("div",{children:e.jsx("p",{className:"text-gray-800 text-xl font-semibold p-2 text-justify",children:c})})]}):e.jsxs("div",{className:"w-full flex flex-col gap-y-5",children:[e.jsx("div",{className:"w-full flex justify-center",children:e.jsx("div",{className:"flex gap-x-1 flex-row-reverse justify-end items-center",children:[1,2,3,4,5].map(t=>e.jsxs(j.Fragment,{children:[e.jsx("input",{id:`hs-ratings-readonly-${t}`,type:"radio",className:"peer h-[2rem] -ms-5 size-5 bg-transparent border-0 text-transparent cursor-pointer appearance-none checked:bg-none focus:bg-none focus:ring-0 focus:ring-offset-0",name:"hs-ratings-readonly",value:t,checked:l===t,onChange:()=>o(t)}),e.jsx("label",{htmlFor:`hs-ratings-readonly-${t}`,className:"peer-checked:text-yellow-400 text-gray-300 pointer-events-none dark:peer-checked:text-yellow-600 dark:text-gray-600",children:e.jsx("svg",{className:"flex-shrink-0 size-5",xmlns:"http://www.w3.org/2000/svg",width:"36",height:"36",fill:"currentColor",viewBox:"0 0 16 16",children:e.jsx("path",{d:"M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"})})})]},t)).reverse()})}),e.jsx("div",{children:e.jsx("textarea",{rows:3,cols:40,placeholder:"Type Your Review Here...",value:c,onChange:t=>x(t.target.value)})}),e.jsx("button",{className:"bg-indigo-700 rounded hover:bg-indigo-600 text-white font-medium px-6 py-3",onClick:g,children:"Submit Review"})]})]}),e.jsx("div",{className:"w-full mt-3",children:e.jsxs("div",{className:"  p-5  bg-white gap-y-8",children:[e.jsx("h1",{className:"underline m-auto justify-center flex w-full text-xl text-gray-300 font-bold mt-11",children:"Some Reviews"}),e.jsx("div",{className:"flex flex-wrap gap-7 mt-12",children:s&&s.review&&s.review.map((t,a)=>t.createBy&&t.createBy._id!==n?e.jsxs("div",{className:"ring-2 p-4 sm:w-[20%] flex flex-col gap-y-3 ",children:[e.jsxs("div",{className:"flex gap-x-5 items-center",children:[e.jsx("img",{src:t.createBy.profileImage||"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlPViCqVyGRxdQtmHT-5rBlQoa1XJsMwkOdQ3A-hEWfkYMRLG-S-LRYCLcGteHqbSF4Kk&usqp=CAU",className:"h-12 w-12 rounded-full",alt:"Profile"}),e.jsx("span",{className:"text-xl font-semibold text-gray-800",children:t.createBy.name})]}),e.jsx("div",{className:"flex items-center gap-x-2",children:[...Array(t.star)].map((u,p)=>e.jsx("img",{src:d,className:"h-5",alt:"Start",srcSet:""},p))}),e.jsx("p",{className:"text-gray-800 text-lg font-semibold",children:t.comment})]},a):null)})]})})]})}export{N as R,d as S};
