import React from "react";

const Header = () => {
  return (
    <div className="bg-white">
      <nav className="max-w-screen flex justify-center items-center gap-10 my-6">
        <a href="#" className="text-[28px] font-bold hover:text-primary">
          首頁
        </a>
        <a href="#" className="text-[28px] font-bold hover:text-primary">
          部落格
        </a>
      </nav>
    </div>
  );
};

export default Header;
