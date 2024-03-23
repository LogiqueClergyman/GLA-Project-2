import{e as B,r as o,u as E,j as e,b as T,Q as f}from"./index-40c438c0.js";import{u as z}from"./upload-9843ebe2.js";const J="/assets/loading-d631a6bd.gif",O=()=>{const U=B(s=>s.userData.email),b=s=>f.success(s),S=s=>f.info(s),g=s=>f.error(s),[y,j]=o.useState(!1),k=E(),V={title:"",createBy:U,courseUrl:[],description:"",syllabus:[],extraDescription:""},[a,d]=o.useState(V),[r,m]=o.useState([]),[u,D]=o.useState(0),[w,x]=o.useState(!1),[I,i]=o.useState(!1);o.useEffect(()=>{console.log(JSON.stringify(a))},[a]);const h=s=>{const{name:l,value:t}=s.target;d(c=>({...c,[l]:t}))},v=(s,l)=>{const{name:t,value:c}=s.target;d(t==="syllabusZero"?n=>({...n,syllabus:[c,...n.syllabus.slice(1)]}):n=>{const C=[...n.syllabus];return C[l]=c,{...n,syllabus:C}})},A=()=>{d(s=>({...s,syllabus:[...s.syllabus,""]}))},R=s=>{d(l=>{const t=[...l.syllabus];return t.splice(s,1),{...l,syllabus:t}})},F=s=>{const l=s.target.files;m([...r,...l])},L=async()=>{S("Uploading...");try{x(!0);for(const s of r){const{url:l}=await z(s);d(t=>({...t,courseUrl:[...t.courseUrl,l]}))}m([]),D(0),b("Videos uploaded successfully!"),x(!1),j(!0),console.log("Video URLs:",a.courseUrl)}catch(s){x(!1),g(s),console.error("Video upload failed:",s)}},[M,p]=o.useState(!1),P=async s=>{s.preventDefault();try{p(!0);const l=localStorage.getItem("token"),t=await T.post("http://localhost:8080/cource/uploadVideo",a,{headers:{Authorization:`Bearer ${l}`}});console.log("Data sent successfully:",t.data),p(!1),j(!1),b(t.data.message),k("/yourVideo")}catch(l){p(!1),console.error("Failed to send data:",l),g(l)}},N=r.length>0&&u===100,$=s=>{m(l=>{const t=[...l];return t.splice(s,1),t})};return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"flex sm:px-24  flex-wrap md:flex-nowrap min-h-screen bg-gradient-to-r from-white to-white via-blue-100",children:[e.jsxs("div",{className:"my-5 mx-2 border-2 border-gray-300 w-full rounded-l-3xl ",children:[e.jsx("input",{type:"text",name:"title",placeholder:"Course Title",value:a.title,onChange:h,className:"custom-scrollbar m-2 mt-5 mb-5 px-4  py-8 border-2 focus:border placeholder:font-thin  rounded-md w-[95%] text-2xl md:w-[75%] h-[50px] md:text-4xl font-semibold"}),e.jsx("textarea",{name:"description",placeholder:"Description",value:a.description,onChange:h,className:"custom-scrollbar mx-2 my-2 p-4 border w-[97%] border-gray-700 rounded-md md:text-2xl"}),e.jsx("textarea",{name:"extraDescription",placeholder:"Additional Information",value:a.extraDescription,onChange:h,className:"custom-scrollbar mx-2 my-2 p-4 border placeholder:italic  w-[97%] border-gray-700 rounded-md font-thin md:text-xl"}),e.jsxs("div",{children:[e.jsx("span",{className:"m-3 text-xl md:text-3xl",children:"Video titles here:"}),e.jsxs("div",{className:"flex",children:[e.jsx("input",{name:"syllabusZero",placeholder:"Video 1 Title",value:a.syllabus[0]||"",onChange:s=>v(s,0),className:"m-2 p-2 w-full md:w-[75%] border border-gray-300 rounded-md"}),e.jsx("button",{onClick:A,className:"m-2 bg-blue-500 hover:bg-blue-800 text-white py-1 px-2 rounded-md",children:"Add More"})]}),e.jsx("div",{className:"max-h-[200px] overflow-auto",children:a.syllabus.slice(1).map((s,l)=>e.jsxs("div",{className:"flex items-center",children:[e.jsx("input",{name:"syllabus",placeholder:`Video ${l+2} title`,value:s,onChange:t=>v(t,l+1),className:"m-2 w-full md:w-[75%] p-2 border border-gray-300 rounded-md"}),e.jsx("button",{onClick:()=>R(l),className:"m-2 bg-red-500 text-2xl hover:bg-red-800 text-white py-1 px-4 rounded-md",children:"X"})]},l))})]})]}),e.jsxs("div",{className:"my-5 mx-2 border-2 border-gray-300 pt-5 w-full flex flex-wrap rounded-r-3xl justify-center",children:[e.jsx("div",{className:"m-5 w-full",children:e.jsx("div",{className:"w-full flex",children:r.length==0&&e.jsx("div",{className:" p-4 bg-white m-auto rounded-lg w-full",children:e.jsxs("div",{className:" p-5 relative border-4 border-dotted border-gray-300 rounded-lg w-full",children:[e.jsx("svg",{className:"text-indigo-500 w-24 mx-auto mb-4",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e.jsx("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"})}),e.jsxs("div",{className:"input_field flex flex-col w-max mx-auto text-center",children:[e.jsxs("label",{children:[e.jsx("input",{className:"text-sm cursor-pointer w-36 hidden",type:"file",accept:"video/*",multiple:!0,onChange:F}),e.jsx("div",{className:"text bg-indigo-600 text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-indigo-500",children:"Select"})]}),e.jsx("div",{className:"title text-indigo-500 uppercase",children:"or drop files here"})]})]})})})}),e.jsx("div",{className:"w-full md:mx-5",children:r.length>0?e.jsxs("div",{children:[e.jsx("p",{className:"w-full  text-lg font-semibold",children:"Videos Selected:"}),e.jsx("div",{className:"h-[500px] flex flex-wrap justify-center overflow-auto border-2 rounded-3xl border-black",children:r.map((s,l)=>e.jsx("div",{className:" rounded-md border-2 m-2 px-3 py-2",children:e.jsxs("div",{className:"mb-4 flex flex-col items-center",children:[e.jsxs("div",{className:"border-gray-800 border-2 py-1 px-1 flex mb-1 rounded-t-lg justify-between",children:[e.jsx("p",{className:" text-blue-600 font-semibold",children:s.name}),e.jsx("button",{onClick:()=>{$(l),console.log(r)},className:"ml-2 bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-3 rounded-sm",children:"X"})]}),e.jsx("video",{src:URL.createObjectURL(s),width:"400",controls:!0})]})},l))})]}):e.jsx("div",{className:"w-full flex flex-wrap justify-center",children:e.jsx("p",{className:"border-2 p-5 text-xl font-thin rounded-md border-red-500",children:"Please select a video before uploading."})})}),e.jsxs("div",{className:"m-5 w-full flex flex-col items-center",children:[!y&&!w&&e.jsx("button",{onClick:()=>L(),disabled:N,className:`py-2 px-4 w-[150px] rounded-md mb-2 h-[50px] ${N?"bg-gray-400 cursor-not-allowed":"bg-blue-500 hover:bg-blue-800 text-white"}`,children:"Upload Videos"}),u>0&&e.jsxs("p",{className:"mb-4 md:text-2xl text-lg animate-pulse",children:["Upload Progress: ",u,"%"]}),w&&e.jsxs("div",{className:"flex flex-col items-center my-1",children:[e.jsx("p",{className:"animate-pulse md:text-2xl",children:"Uploading... Slow network connection!!!"}),e.jsx("img",{src:J,className:"h-28"})]}),M&&e.jsx("div",{className:"animate:pulse",children:e.jsx("p",{className:"md:text-2xl",children:"Just a moment..."})}),y&&e.jsx("button",{onClick:()=>i(!0),className:"text-white w-[150px] h-[50px] bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br  focus:ring-4 hover:outline hover:outline-offset-2 hover:outline-white transition-all duration-500 focus:ring-cyan-300 font-medium rounded-lg text-sm px-5 py-2 text-center mb-2",children:"Upload Course"})]})]}),I===!0&&e.jsx(e.Fragment,{children:e.jsxs("div",{className:"fixed inset-0 z-10 overflow-y-auto",children:[e.jsx("div",{className:"fixed inset-0 w-full h-full bg-black opacity-40",onClick:()=>i(!1)}),e.jsx("div",{className:"flex items-center min-h-screen px-4 py-8",children:e.jsx("div",{className:"relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg",children:e.jsx("div",{className:"py-3 sm:flex",children:e.jsxs("div",{className:"mt-2 text-center sm:ml-4 sm:text-left",children:[e.jsx("h4",{className:"text-lg font-medium text-gray-800",children:"Are you sure to upload this course?"}),e.jsx("p",{className:"mt-2 text-[15px] leading-relaxed text-gray-500",children:"You may want to review all the changes as this is the final edit for this course."}),e.jsxs("div",{className:"items-center gap-2 mt-3 sm:flex",children:[e.jsx("button",{className:"w-full mt-2 p-2.5 flex-1 md:text-xl hover:bg-green-700 text-white bg-green-500 rounded-md outline-none ring-offset-2 ring-indigo-600 focus:ring-2",onClick:s=>{i(!1),P(s)},children:"Upload"}),e.jsx("button",{className:"w-full mt-2 p-2.5 flex-1 md:text-indigo-600 text-xl rounded-md outline-none border-2  border-indigo-600 focus:ring-2",onClick:()=>i(!1),children:"Cancel"})]})]})})})})]})})]})})},G=O;export{G as default};