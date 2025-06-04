import React from "react";

const Navigation = () => {
  return (
    <nav className="container mt-12 flex justify-between items-center">
      <button className="flex justify-center items-center px-4 py-2 bg-white border-1 border-black rounded-[40px] cursor-pointer hover:bg-gray-100">
        <img
          src="/Vector.svg"
          alt="上一頁"
          className="h-fit inline-block mr-[10.75px]"
        />
        上一頁
      </button>
      <button className="flex justify-center items-center px-4 py-2 bg-white border-1 border-black rounded-[40px] cursor-pointer hover:bg-gray-100">
        下一頁
        <img
          src="/Vector.svg"
          alt="下一頁"
          className="h-fit inline-block ml-[10.75px] scale-x-[-1]"
        />
      </button>
    </nav>
  );
};

export default Navigation;
