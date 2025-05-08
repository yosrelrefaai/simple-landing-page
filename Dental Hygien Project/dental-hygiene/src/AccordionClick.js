import { useState } from "react";

const AccordionClick = ({ title, answer }) =>{
    const [AccordionOpen, SetaccordionOpen]=useState(false);
    return(
        <div className="py-2">
           <button 
           onClick={()=> SetaccordionOpen(!AccordionOpen)}
           className="flex justify-between w-full"
           >
           <span className="text-white font-semibold text-xl">{title}</span>
           <svg
          className="fill-white shrink-0 ml-8"
          width="16"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center transition duration-200 ease-out ${
                AccordionOpen && "!rotate-180"
            }`}
          />
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center rotate-90 transition duration-200 ease-out ${
                AccordionOpen && "!rotate-180"
            }`}
          />
        </svg>
           </button>
           <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm ${
          AccordionOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        
        <div className="text-gray-100 text-lg overflow-hidden">
          {answer}
        </div>
      </div>
        </div>
    );
}
export default AccordionClick;