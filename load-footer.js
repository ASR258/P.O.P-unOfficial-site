document.addEventListener("DOMContentLoaded", function() {
    // 直接定义 HTML 字符串
    // 这样做的原因：避免本地直接打开 html 文件时出现的跨域(CORS)错误。
    // 无需 fetch 外部文件，直接运行即可显示。
    
    const footerContent = `
    <footer class="bg-[#1F2937] dark:bg-black text-white py-12 border-t border-gray-800 transition-colors duration-300">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
                
                <!-- 左侧：Logo与简介 -->
                <div class="text-center md:text-left">
                    <div class="flex items-center justify-center md:justify-start gap-2 mb-4">
                        <!-- 注意：此处使用绝对网络路径，确保在任何子目录下都能显示图片 -->
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

            <div class="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-xs">
                &copy; <span id="year">2025</span> 武汉纺织大学 P.O.B 动漫社. 操场别封烟了.
            </div>
        </div>
    </footer>
    `;

    // 找到页面中的占位符并插入内容
    const placeholder = document.getElementById('footer-placeholder');
    if (placeholder) {
        placeholder.innerHTML = footerContent;
        
        // 自动更新年份为当前年份
        const yearSpan = document.getElementById('year');
        if(yearSpan) {
            yearSpan.textContent = new Date().getFullYear();
        }
    } else {
        console.error("错误：页面中找不到 id='footer-placeholder' 的元素，请确保在 body 中添加了该 div。");
    }
});