import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white border-t mt-16">
      {/* 桌機版 */}
      <div className="hidden lg:flex justify-center items-center py-20 text-black ">
        <p className="font-medium text-[32px] text-start w-4xl">
          alysewang@hexschool.com
        </p>
        <div className="flex gap-1 ">
          <img
            src="https://github.com/hexschool/2022-web-layout-training/blob/main/2025-web-camp/desktop/index/onlyIcon.png?raw=true"
            alt="youtube"
            className="h-fit inline-block"
          />
          <img
            src="https://github.com/hexschool/2022-web-layout-training/blob/main/2025-web-camp/desktop/index/onlyIcon-1.png?raw=true"
            alt="podcast"
            className="h-fit inline-block"
          />
          <img
            src="https://github.com/hexschool/2022-web-layout-training/blob/main/2025-web-camp/desktop/index/onlyIcon-2.png?raw=true"
            alt="facebook"
            className="h-fit inline-block"
          />
          <img
            src="https://github.com/hexschool/2022-web-layout-training/blob/main/2025-web-camp/desktop/index/icons8-linkedin.png?raw=true"
            alt="linkedin"
            className="h-fit inline-block"
          />
          <img
            src="https://github.com/hexschool/2022-web-layout-training/blob/main/2025-web-camp/desktop/index/onlyIcon-3.png?raw=true"
            alt="instagram"
            className="h-fit inline-block"
          />
        </div>
      </div>
      {/* 手機版 */}
      <div className="container min-w-screen px-10 py-6 text-center text-black text-sm  ">
        © 2025 Alyse Wang. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
