import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white border-t mt-16">
      {/* 桌機版 */}
      <div className="hidden lg:flex justify-center items-center py-20 text-black ">
        <a
          href="mailto:alysewang@hexschool.com"
          className="font-medium text-[32px] text-start w-4xl hover:text-primary"
        >
          alysewang@hexschool.com
        </a>
        <ul className="flex gap-1">
          <li>
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://github.com/hexschool/2022-web-layout-training/blob/main/2025-web-camp/desktop/index/onlyIcon.png?raw=true"
                alt="youtube"
                className="h-fit inline-block object-contain"
              />
            </a>
          </li>
          <li>
            <a
              href="https://podcasts.apple.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://github.com/hexschool/2022-web-layout-training/blob/main/2025-web-camp/desktop/index/onlyIcon-1.png?raw=true"
                alt="podcast"
                className="h-fit inline-block object-contain"
              />
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://github.com/hexschool/2022-web-layout-training/blob/main/2025-web-camp/desktop/index/onlyIcon-2.png?raw=true"
                alt="facebook"
                className="h-fit inline-block object-contain"
              />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://github.com/hexschool/2022-web-layout-training/blob/main/2025-web-camp/desktop/index/icons8-linkedin.png?raw=true"
                alt="linkedin"
                className="h-fit inline-block object-contain"
              />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://github.com/hexschool/2022-web-layout-training/blob/main/2025-web-camp/desktop/index/onlyIcon-3.png?raw=true"
                alt="instagram"
                className="h-fit inline-block object-contain"
              />
            </a>
          </li>
        </ul>
      </div>
      {/* 手機版 */}
      <div className="px-10 py-6 text-center text-black text-sm">
        © 2025 Alyse Wang. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
