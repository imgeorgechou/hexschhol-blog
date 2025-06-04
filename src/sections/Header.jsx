import React from "react";

const Header = () => {
  return (
    <div className="bg-white">
      <nav className="flex justify-center items-center gap-10 my-6">
        <ul className="flex gap-10">
          <li>
            <a href="#" className="text-[28px] font-bold hover:text-primary">
              首頁
            </a>
          </li>
          <li>
            <a href="#" className="text-[28px] font-bold hover:text-primary">
              部落格
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
