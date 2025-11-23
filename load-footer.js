document.addEventListener("DOMContentLoaded", function() {
    const footerContent = `
    <!-- 主 Footer 区域 -->
    <footer id="main-footer" class="bg-[#1F2937] dark:bg-black text-white py-12 border-t border-gray-800 transition-colors duration-300 relative z-10">
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
                        <a href="https://space.bilibili.com/286416050" target="_blank" class="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center hover:bg-secondary transition group" title="访问我们的B站主页">
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
                <!-- 提示小箭头，暗示下方有内容 -->
                <div id="scroll-hint" class="mt-2 animate-bounce cursor-pointer opacity-50 hover:opacity-100 transition-opacity" onclick="toggleDeveloperSection()">
                    <i class="fa-solid fa-chevron-down text-gray-400"></i>
                </div>
            </div>
        </div>
    </footer>

    <!-- 开发者介绍 -->
    <div id="developer-section" class="bg-[#1F2937] dark:bg-black text-white overflow-hidden transition-all duration-700 ease-in-out max-h-0 border-t border-gray-800/50">
        <div class="max-w-7xl mx-auto px-4 py-10 flex justify-center items-center">
            
            <!-- 开发者名片 -->
            <!-- 风格与 Navbar 保持一致 (Glassmorphism) -->
            <div class="relative w-full max-w-md p-6 rounded-2xl backdrop-blur-md shadow-xl border border-white/20 
                        bg-white/90 dark:bg-gray-900/90 text-gray-900 dark:text-white
                        transform transition hover:scale-[1.02] duration-300">
                
                <div class="flex items-center gap-6">
                    <!-- 头像 -->
                    <div class="relative shrink-0">
                        <div class="w-20 h-20 rounded-full overflow-hidden ring-4 ring-primary/30 shadow-lg">
                            <img src="https://q.qlogo.cn/g?b=qq&nk=3553352265&s=640" alt="䑟譱" class="w-full h-full object-cover">
                        </div>
                        <div class="absolute -bottom-1 -right-1 bg-blue-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-sm">
                            DEV
                        </div>
                    </div>
                    
                    <!-- 信息 -->
                    <div class="flex-1 min-w-0">
                        <h3 class="text-xl font-bold truncate">䑟譱</h3>
                        <p class="text-sm text-primary font-medium mb-2">网页开发人员</p>
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
                <div class="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700 text-center">
                    <button onclick="toggleDeveloperSection()" class="text-xs text-gray-400 hover:text-primary transition flex items-center justify-center gap-1 mx-auto w-full">
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
        const hintIcon = document.getElementById('scroll-hint').querySelector('i');
        let isExpanded = false;
        let touchStartY = 0;

        window.toggleDeveloperSection = function() {
            isExpanded = !isExpanded;
            if (isExpanded) {
                devSection.style.maxHeight = "500px"; 
                devSection.style.opacity = "1";
                hintIcon.classList.replace('fa-chevron-down', 'fa-chevron-up');
                setTimeout(() => {
                    devSection.scrollIntoView({ behavior: 'smooth', block: 'end' });
                }, 100);
            } else {
                devSection.style.maxHeight = "0";
                devSection.style.opacity = "0";
                hintIcon.classList.replace('fa-chevron-up', 'fa-chevron-down');
            }
        };

        window.addEventListener('wheel', (e) => {
            const scrollHeight = document.documentElement.scrollHeight;
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            const clientHeight = document.documentElement.clientHeight;
            const isAtBottom = (scrollTop + clientHeight) >= (scrollHeight - 5);

            if (isAtBottom && e.deltaY > 0 && !isExpanded) {
                toggleDeveloperSection();
            } else if (isExpanded && e.deltaY < 0) {
            }
        });
        window.addEventListener('touchstart', (e) => {
            touchStartY = e.touches[0].clientY;
        }, { passive: true });

        window.addEventListener('touchmove', (e) => {
            const touchEndY = e.touches[0].clientY;
            const diff = touchStartY - touchEndY; 

            const scrollHeight = document.documentElement.scrollHeight;
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            const clientHeight = document.documentElement.clientHeight;
            const isAtBottom = (scrollTop + clientHeight) >= (scrollHeight - 10); 

            if (isAtBottom && diff > 50 && !isExpanded) {
                toggleDeveloperSection();
            }
        }, { passive: true });

    } else {
        console.error("错误：找不到 footer-placeholder");
    }
});
