import{ag as a,ae as g,ao as m,ak as p,ah as e,ar as f,aq as v}from"./index-b86e62c6.js";/* empty css              */const j="/assets/bg3-80ab0455.svg";function C(){const[o,c]=a.useState([]),i=g(),d=m(t=>t.userData.isLogin),[u,r]=a.useState([]);a.useEffect(()=>{h()},[]);const h=async()=>{try{const t=await p.get("/cource/getAllCourses");c(t.data.courses),r(t.data.courses)}catch(t){console.error("Error fetching courses:",t)}},x=t=>{d?i("/course_description",{state:{course:t}}):i("/signin")},n=t=>{if(t.length==0){r(o);return}const s=[];t=t.trim().toLowerCase(),o.map(l=>{l.title.toLowerCase().includes(t)&&s.push(l)}),r(s)};return e.jsxs("div",{className:"mx-auto pb-16 h-full w-full min-h-screen",style:{backgroundImage:`url(${j})`},children:[e.jsxs(f,{children:[e.jsx("title",{children:"LearnUp | Courses Page"}),e.jsx("meta",{name:"description",content:"LearnUp Courses Page"}),e.jsx("meta",{name:"keywords",content:"LearnUp, intership, LearnUp, Home, Study, Contest, Education, Learning platform, course, buy courses, courses"})]}),e.jsx("div",{className:" text-white text-center flex justify-center",children:e.jsxs("div",{children:[e.jsxs("div",{className:"py-2 flex",children:[e.jsx("div",{className:"w-full mx-auto",children:e.jsxs("div",{className:"relative px-1",children:[e.jsx("svg",{className:"absolute z-20 cursor-pointer top-[18px] left-4",width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M14.2716 13.1684L11.3313 10.2281C12.0391 9.28574 12.4213 8.13865 12.42 6.96C12.42 3.94938 9.97063 1.5 6.96 1.5C3.94938 1.5 1.5 3.94938 1.5 6.96C1.5 9.97063 3.94938 12.42 6.96 12.42C8.13865 12.4213 9.28574 12.0391 10.2281 11.3313L13.1684 14.2716C13.3173 14.4046 13.5114 14.4756 13.711 14.47C13.9105 14.4645 14.1004 14.3827 14.2415 14.2415C14.3827 14.1004 14.4645 13.9105 14.47 13.711C14.4756 13.5114 14.4046 13.3173 14.2716 13.1684ZM3.06 6.96C3.06 6.18865 3.28873 5.43463 3.71727 4.79328C4.14581 4.15192 4.7549 3.65205 5.46754 3.35687C6.18017 3.06169 6.96433 2.98446 7.72085 3.13494C8.47738 3.28542 9.17229 3.65686 9.71772 4.20228C10.2631 4.74771 10.6346 5.44262 10.7851 6.19915C10.9355 6.95567 10.8583 7.73983 10.5631 8.45247C10.268 9.1651 9.76808 9.77419 9.12673 10.2027C8.48537 10.6313 7.73135 10.86 6.96 10.86C5.92604 10.8588 4.93478 10.4475 4.20365 9.71635C3.47253 8.98522 3.06124 7.99396 3.06 6.96Z",fill:"#4B5563"})}),e.jsx("input",{className:"relative text-sm leading-none text-gray-600 bg-white rounded w-full px-10 py-4 outline-none",type:"text",name:"searchKeyword",id:"searchKeyword",placeholder:"Search",onKeyDown:t=>{t.key==="Enter"&&n(t.target.value)}})]})}),e.jsx("div",{className:"mr-1",children:e.jsx("button",{className:"bg-indigo-700 rounded hover:bg-indigo-600 transform duration-300 ease-in-out text-sm font-medium px-6 py-4 text-white",onClick:()=>{n(document.getElementById("searchKeyword").value)},children:"Search"})})]}),e.jsx("style",{children:`
     body{
       background:rgb(243 244 246);
     }
     `})]})}),e.jsx("div",{className:"md:w-[95%] md:mx-auto rounded-md grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 ",children:e.jsx(v,{cascade:!0,damping:.5,triggerOnce:!0,children:u.map((t,s)=>e.jsx("div",{className:"m-2 group",children:e.jsxs("div",{className:"w-sm group-hover:translate-y-0.5 group-hover:rounded-lg transition-all duration-300 ease-in-out bg-white border border-gray-200 rounded-t-lg relative group-hover:shadow-md group-hover:shadow-green-200",children:[e.jsx("a",{href:"#",children:e.jsx("img",{className:"rounded-xl group-hover:rounded-t-xl w-full",src:"https://placehold.co/100x60",alt:""})}),e.jsxs("div",{className:"py-2 px-2",children:[e.jsx("a",{href:"#",children:e.jsx("h1",{className:"mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white ",children:t.title})}),e.jsx("div",{className:"absolute overflow-auto top-0 left-0 w-full h-full bg-white bg-opacity-90 p-5 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100 group-hover:rounded-xl outline -outline-offset-4 outline-1",children:e.jsxs("div",{className:"flex flex-col h-full justify-between text-gray-800 dark:text-gray-300 duration-700 transition transform ease-in-out group-hover:-translate-y-0 translate-y-4",children:[e.jsxs("div",{children:[e.jsx("h1",{className:"mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white ",children:t.title}),e.jsx("p",{className:" text-black",children:t.description.substring(0,100)+"..."})]}),e.jsx("div",{className:"flex justify-end duration-700 transition transform ease-in-out",children:e.jsx("button",{onClick:()=>x(t),className:"border-2 border-blue-500 text-sm font-medium text-center text-gray-500 rounded-lg hover:bg-blue-400 hover:text-white p-2 focus:ring-1  focus:ring-blue-300",children:"More Details"})})]})})]})]})},s))})})]})}export{C as default};
