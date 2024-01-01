import React from "react";

export default function AdminSidebar() {
  return (
    <div className="text-white text-[20px] ">
      <div className="px-4 py-8 flex items-center justify-center border-b border-solid border-gray-50/[0.3] ">
        <span className=" font-extrabold cursor-pointer leading-[24px] text-white ">
          sidebar
        </span>
      </div>
      <div className="flex items-center gap-4 py-5 border-solid border-b">
        <svg xmlns="http://www.w3.org/2000/svg"
          fill="none" 
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-10 h-10"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605"
          />
        </svg>

        <span>Dashboard</span>
      </div>
    </div>
  );
}