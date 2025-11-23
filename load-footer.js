document.addEventListener("DOMContentLoaded", function() {
    const footerContent = `
    <!-- 主 Footer 区域 -->
    <footer id="main-footer" class="text-white py-12 border-t border-gray-800 transition-colors duration-300 relative z-10 dark:bg-black" style="background-color: #1F2937;">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
                
                <!-- 左侧：Logo与简介 -->
                <div class="text-center md:text-left">
                    <div class="flex items-center justify-center md:justify-start gap-2 mb-4">
                        <span class="font-bold text-xl tracking-wider">武汉纺织大学 P.O.B 动漫社</span>
                    </div>
                    <p class="text-gray-400 text-sm leading-relaxed max-w-xs mx-auto md:mx-0">
                        P.O.B (Post Office Box) <br>
                        无论名字的含义如何，这里始终是我们热爱的聚集地。
                    </p>
                </div>

                <!-- 中间：友情链接 -->
                <div class="text-center">
                    <h4 class="text-lg font-bold mb-4">友情链接</h4>
                    <ul class="space-y-2 text-gray-400 text-sm">
                        <li><a href="https://www.wtu.edu.cn/" target="_blank" class="hover:text-white transition">武汉纺织大学官网</a></li>
                    </ul>
                </div>

                <!-- 右侧：关注我们 -->
                <div class="text-center">
                    <h4 class="text-lg font-bold mb-4">关注我们</h4>
                    <div class="flex justify-center gap-4">
                        <a href="https://space.bilibili.com/286416050" target="_blank" class="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center hover:bg-purple-500 transition group" title="访问我们的B站主页">
                            <i class="fa-brands fa-bilibili text-2xl group-hover:animate-bounce"></i>
                        </a>
                        <a href="https://tieba.baidu.com/f?kw=pob%E5%8A%A8%E6%BC%AB%E7%A4%BE" target="_blank" class="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center hover:bg-blue-600 transition group" title="访问我们的百度贴吧">
                            <i class="fa-solid fa-paw text-2xl group-hover:rotate-12 transition-transform"></i>
                        </a>
                    </div>
                </div>
            </div>

            <div class="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-xs flex flex-col items-center gap-2">
                <p>&copy; <span id="year">2025</span> 武汉纺织大学 P.O.B 动漫社. 操场别封烟了.</p>
                
                <!-- 提示小箭头 -->
                <div id="scroll-hint" class="mt-4 animate-bounce cursor-pointer opacity-60 hover:opacity-100 transition-opacity p-2" onclick="window.toggleDeveloperSection()">
                    <span class="text-[10px] block mb-1">下滑或点击探索</span>
                    <i class="fa-solid fa-chevron-down text-gray-300 text-lg"></i>
                </div>
            </div>
        </div>
    </footer>

    <!-- 隐藏的开发者区域 (二次滑动展开) -->
    <!-- 同样使用 style 内联背景色，确保显示 -->
    <div id="developer-section" class="text-white overflow-hidden transition-all duration-700 ease-in-out max-h-0 border-t border-gray-800/50 dark:bg-black" style="background-color: #1F2937;">
        <div class="max-w-7xl mx-auto px-4 py-10 flex justify-center items-center min-h-[300px]">
            
            <!-- 开发者名片 -->
            <div class="relative w-full max-w-md p-6 rounded-2xl shadow-xl border border-white/20 
                        text-gray-900 dark:text-white
                        transform transition hover:scale-[1.02] duration-300"
                 style="background: rgba(255, 255, 255, 0.9); backdrop-filter: blur(10px);">
                 <!-- 注意：上面这一行 style 是为了确保 Glassmorphism 在暗色模式下也能通过 JS 调整，或者直接依赖 CSS -->
                 <!-- 为了适配暗色模式，我们在 JS 里会动态处理这个卡片的背景，或者直接用 Tailwind 的 dark 类 -->
                 <!-- 修正：给它加上 dark 类的支持 -->
                 <div class="absolute inset-0 rounded-2xl bg-white/80 dark:bg-gray-900/90 backdrop-blur-md -z-10"></div>
                
                <div class="flex items-center gap-6 relative z-10">
                    <!-- 头像 -->
                    <div class="relative shrink-0">
                        <div class="w-20 h-20 rounded-full overflow-hidden ring-4 ring-blue-400/30 shadow-lg">
                            <img src="https://q.qlogo.cn/g?b=qq&nk=3553352265&s=640" alt="䑟譱" class="w-full h-full object-cover">
                        </div>
                        <div class="absolute -bottom-1 -right-1 bg-blue-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-sm">
                            DEV
                        </div>
                    </div>
                    
                    <!-- 信息 -->
                    <div class="flex-1 min-w-0">
                        <h3 class="text-xl font-bold truncate">䑟譱</h3>
                        <p class="text-sm text-blue-500 font-medium mb-2">网页开发人员</p>
                        <p class="text-xs text-gray-500 dark:text-gray-400 line-clamp-2">
                            "能不能让我转专业。"
                        </p>
                    </div>
                </div>

                <!-- 装饰元素 -->
                <div class="absolute top-4 right-4 opacity-10 dark:opacity-20 pointer-events-none">
                    <i class="fa-solid fa-code text-6xl"></i>
                </div>
                
                <!-- 收起按钮 -->
                <div class="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700 text-center relative z-10">
                    <button onclick="window.toggleDeveloperSection()" class="text-xs text-gray-400 hover:text-blue-500 transition flex items-center justify-center gap-1 mx-auto w-full py-2">
                        <i class="fa-solid fa-chevron-up"></i> 收起
                    </button>
                </div>
            </div>

        </div>
    </div>
    `;

    const placeholder = document.getElementById('footer-placeholder');
    if (placeholder) {
        placeholder.innerHTML = footerContent;
        
        const yearSpan = document.getElementById('year');
        if(yearSpan) {
            yearSpan.textContent = new Date().getFullYear();
        }
        
        const devSection = document.getElementById('developer-section');
        const hintContainer = document.getElementById('scroll-hint');
        const hintIcon = hintContainer ? hintContainer.querySelector('i') : null;
        
        let isExpanded = false;
        let touchStartY = 0;

        window.toggleDeveloperSection = function() {
            isExpanded = !isExpanded;
            if (isExpanded) {
                devSection.style.maxHeight = "600px";
                devSection.style.opacity = "1";
                if(hintIcon) hintIcon.classList.replace('fa-chevron-down', 'fa-chevron-up');

                setTimeout(() => {
                    devSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                }, 100);
            } else {
                devSection.style.maxHeight = "0";
                devSection.style.opacity = "0";
                if(hintIcon) hintIcon.classList.replace('fa-chevron-up', 'fa-chevron-down');
                document.getElementById('main-footer').scrollIntoView({ behavior: 'smooth', block: 'end' });
            }
        };
        window.addEventListener('wheel', (e) => {
            const scrollHeight = document.documentElement.scrollHeight;
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            const clientHeight = document.documentElement.clientHeight;
            const isAtBottom = (scrollTop + clientHeight) >= (scrollHeight - 10);
            if (isAtBottom && e.deltaY > 0 && !isExpanded) {
                window.toggleDeveloperSection();
            } 
        }, { passive: true });

        window.addEventListener('touchstart', (e) => {
            touchStartY = e.touches[0].clientY;
        }, { passive: true });

        window.addEventListener('touchmove', (e) => {
            const touchEndY = e.touches[0].clientY;
            const diff = touchStartY - touchEndY; 

            const scrollHeight = document.documentElement.scrollHeight;
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            const clientHeight = document.documentElement.clientHeight;
            
            const isAtBottom = (scrollTop + clientHeight) >= (scrollHeight - 50); 
            if (isAtBottom && diff > 60 && !isExpanded) {
                window.toggleDeveloperSection();
                touchStartY = touchEndY; 
            }
        }, { passive: true });

    } else {
        console.error("错误：找不到 footer-placeholder，请检查 HTML 文件中是否包含该 ID 的 div。");
    }
});
    }
});

