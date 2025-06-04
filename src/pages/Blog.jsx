import React from "react";
import Header from "../sections/Header";
import Hero from "../sections/Hero";
import Summary from "../components/Summary";
import Navigation from "../sections/Navigation";
import Footer from "../sections/Footer";

const Blog = () => {
  return (
    <div className="flex flex-col min-h-screen ">
      <Header />
      <Hero />

      {/* ---------- 內文區域 ---------- */}
      <main className="sm:flex sm:flex-col sm:items-center">
        <div className="flex flex-col gap-6 mt-16 mb-12 sm:max-w-[636px] px-4">
          {/* 前言 */}
          <div>
            <h3>前言</h3>
            <p className="content">
              嗨，我是
              Alyse，一名前端工程師兼職涯諮詢師。一直以來，我都很喜歡在部落格分享學習與工作心得，也常有讀者問：「我想轉職/自學前端，該從哪裡開始？」
              其實自學的過程既自由又具挑戰性。我整理了三大關鍵，幫助你在短期內建立紮實基礎，並快速累積實戰經驗。希望能替你的前端之路帶來一些啟發與動力！
            </p>
          </div>
          <img
            src="https://github.com/hexschool/2022-web-layout-training/blob/main/2025-web-camp/desktop/blog-content/content1.png?raw=true"
            alt="computer"
            className="w-full h-auto object-cover mt-6"
          />

          <div>
            <h3>打好基礎：HTML、CSS、JavaScript</h3>
            <h4 className="content-title">HTML 與語意化</h4>
            <p className="content">
              為何重要：HTML 是網頁結構的根基，語意化寫法（如 header, main,
              footer 等）能讓網頁更具可維護性與 SEO 效益。
            </p>
            <p className="content">
              建議做法：
              <ol className="list-decimal list-inside">
                <li>
                  學習常見標籤的用途與屬性，如
                  &lt;section&gt;、&lt;article&gt;、&lt;nav&gt;。
                </li>
                <li>善用 MDN、W3Schools 等官方文件，找尋範例程式碼並練習。</li>
              </ol>
            </p>
          </div>

          <div>
            <h4 className="content-title">CSS 佈局與預處理器</h4>
            <p className="content">
              為何重要：好看的網站來自穩定的排版與佈局，掌握 Flexbox、Grid
              能讓你隨心所欲打造響應式頁面。
            </p>
            <p className="content">
              建議做法：
              <ol className="list-decimal list-inside">
                <li>
                  先掌握基礎 CSS 後，再學習 SASS 或 LESS
                  這類預處理器，提升樣式開發效率。
                </li>
                <li>
                  善用<span className="text-primary"> CSS-Tricks </span>
                  等資源，了解常見版型技巧。
                </li>
              </ol>
            </p>
          </div>

          <div>
            <p className="content-title">JavaScript 核心觀念</p>
            <p className="content">
              為何重要：互動效果、資料處理、前端邏輯都仰賴 JavaScript。
            </p>
            <p className="content">
              建議做法：
              <ol className="list-decimal list-inside">
                <li>
                  先打穩 ES5 與 ES6 語法基礎，理解閉包 (Closure)、原型鍊
                  (Prototype) 等核心機制。
                </li>
                <li>學會事件監聽、API 資料串接等常見應用，增添網站互動性。</li>
              </ol>
            </p>
          </div>

          <Summary
            content={
              "小結：在學習基礎語法時，同步進行小專案實作（如 Todo List、計算機、切版作品集）會讓你進步更快，也能累積展示用作品。"
            }
          />
          <img
            src="https://github.com/hexschool/2022-web-layout-training/blob/main/2025-web-camp/desktop/blog-content/content2.png?raw=true"
            alt="computer"
            className="w-full h-auto object-cover mt-6"
          />
          <div>
            <h3>擅用主流框架與工具</h3>
            <h4 className="content-title">React、Vue 先挑一個</h4>

            <p className="content">
              <ul className="list-disc list-inside">
                <li>React：生態系豐富、社群支援強，適合喜歡客製化的工程師。</li>
                <li>
                  Vue：上手容易、檔案結構直覺，適合對「漸進式開發」有興趣的開發者。
                </li>
              </ul>
            </p>
          </div>
          <Summary
            content={
              "TIP：可以先看官方文件或跟著基礎教學做出小專案，感受哪個框架更順手。"
            }
          />
          <div>
            <p className="content-title">版本控制、協作與建置</p>

            <p className="content">
              <ul className="list-disc list-inside">
                <li>
                  Git 與 GitHub：一定要掌握分支、Pull Request、Code Review
                  等流程，並熟悉 Git Flow 或 Trunk Based Development。
                </li>
                <li>
                  打包工具：了解 Webpack、Vite、Parcel
                  等常見工具的基本原理與設定，對於優化與部署大有幫助。
                </li>
              </ul>
            </p>
          </div>
          <div>
            <p className="content-title">自動化測試與最佳實踐</p>

            <p className="content">
              <ul className="list-disc list-inside">
                <li>
                  測試框架：Jest、Mocha、Cypress 等，建立單元測試與 E2E
                  測試思維。
                </li>
                <li>
                  程式結構與品質：遵循程式風格
                  (Lint)、維持命名規範、模組化思考，確保專案可維護。
                </li>
              </ul>
            </p>
          </div>
          <img
            src="https://github.com/hexschool/2022-web-layout-training/blob/main/2025-web-camp/desktop/blog-content/content3.png?raw=true"
            alt="meeting"
            className="w-full h-auto object-cover mt-6"
          />
          <div>
            <h3>持續練習與參與社群</h3>
            <h4 className="content-title">多參加前端挑戰 / Hackathon</h4>

            <p className="content">
              <ul className="list-disc list-inside">
                <li>在實作中快速累積經驗，也能認識更多同好。</li>
                <li>
                  像是<span className="text-primary"> Frontend Mentor </span>
                  提供多種真實設計稿，可練習切版與互動。
                </li>
              </ul>
            </p>
          </div>
          <div>
            <p className="content-title">打造個人作品集網站</p>

            <p className="content">
              <ul className="list-disc list-inside">
                <li>部署在 GitHub Pages 或其他免費/付費主機。</li>
                <li>整合自己做過的小專案，並用文字介紹技術棧與實作細節。</li>
              </ul>
            </p>
          </div>
          <div>
            <p className="content-title">社群互動、分享心得</p>

            <p className="content">
              <ul className="list-disc list-inside">
                <li>
                  參與線上或線下的技術交流、讀書會、Meetup，與同行discussion，能啟發更多想法。
                </li>
                <li>
                  有餘力可將學習過程寫成部落格文章或筆記，進一步強化自己的理解。
                </li>
              </ul>
            </p>
          </div>
          <img
            src="https://github.com/hexschool/2022-web-layout-training/blob/main/2025-web-camp/desktop/blog-content/content4.png?raw=true"
            alt="give-up"
            className="w-full h-auto object-cover mt-6"
          />
          <div>
            <h3>結語</h3>

            <p className="content">
              自學前端可能遇到卡關、挫折，但同時也具備很高的自主性。只要把
              基礎、框架、實踐
              三大面向做好，就能在前端這條路上穩步前進。若你在學習過程中需要更多建議或想要職涯諮詢，歡迎透過
              <span className="text-primary underline cursor-pointer hover:no-underline ">
                聯絡方式
              </span>
              與我聯繫！
            </p>
          </div>
          <Summary
            content={"「程式替你開路，諮詢替你指路，一起走向更寬廣的未來。」"}
          />
          <p className="content">
            感謝你的閱讀，如果這篇文章對你有幫助，別忘了幫忙分享，或在下方留言告訴我你的想法，也讓更多人一起受益吧！
          </p>
          <div>
            <h3>延伸閱讀</h3>

            <p className="content">
              <ul className="list-disc list-inside">
                <li>
                  <a href="#" className="hover:underline hover:text-primary">
                    前端面試不再慌：破解常見提問的三大策略
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline hover:text-primary">
                    掌握前端測試：從單元測試到端對端測試的完整攻略
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline hover:text-primary">
                    SEO與前端最佳實踐：讓搜尋引擎看見你的網站
                  </a>
                </li>
              </ul>
            </p>
          </div>
          {/* ---------- 頁碼導航 ---------- */}
          <Navigation />
        </div>
      </main>

      {/* ---------- Footer ---------- */}
      <Footer />
    </div>
  );
};

export default Blog;
