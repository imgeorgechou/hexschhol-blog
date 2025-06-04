import React from "react";

const Hero = () => {
  return (
    <section className="border-t-1 border-b-1 border-secondary sm:flex">
      {/* Hero Image */}
      <div className="w-full sm:w-1/2">
        <img
          src="https://github.com/hexschool/2022-web-layout-training/blob/main/2025-web-camp/desktop/blog-content/About%20Section.png?raw=true"
          alt="Hero"
          className="w-full h-[375px] md:h-[640px] object-cover"
        />
      </div>

      {/* Meta Info: 日期、標題、分類標籤 */}
      <div className="my-12 px-4 sm:w-1/2 sm:flex sm:flex-col sm:justify-center">
        <time
          className="text-black text-[16px] font-medium"
          dateTime="2025-10-21"
        >
          2025/10/21
        </time>
        <div className="flex items-center gap-2">
          <h2 className="text-2xl font-medium text-primary">
            前端開發 x 職涯成長
          </h2>
          <span className="text-xl font-bold text-white bg-primary px-3 py-1.5 rounded-[40px]">
            最新文章
          </span>
        </div>
        <h1 className="text-[28px] font-bold text-black mt-2">
          自學前端不用怕：從零開始的三大關鍵
        </h1>
      </div>
    </section>
  );
};

export default Hero;
