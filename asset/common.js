// 创建科技网格
function createGrid() {
    const grid = document.getElementById("grid");
    const size = 50;

    for (let x = 0; x < window.innerWidth; x += size) {
        const verticalLine = document.createElement("div");
        verticalLine.className = "grid-line grid-vertical";
        verticalLine.style.left = `${x}px`;
        grid.appendChild(verticalLine);
    }

    for (let y = 0; y < window.innerHeight; y += size) {
        const horizontalLine = document.createElement("div");
        horizontalLine.className = "grid-line grid-horizontal";
        horizontalLine.style.top = `${y}px`;
        grid.appendChild(horizontalLine);
    }
}

// 创建六边形网格
function createHexGrid() {
    const hexGrid = document.getElementById("hex-grid");
    const hexSize = 120;
    const rows = Math.ceil(window.innerHeight / (hexSize * 0.866)) + 2;
    const cols = Math.ceil(window.innerWidth / hexSize) + 2;

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            const hex = document.createElement("div");
            hex.className = "hex";
            hex.style.width = `${hexSize}px`;
            hex.style.height = `${hexSize * 0.866}px`;

            // 奇偶行偏移
            const offset = row % 2 === 0 ? hexSize / 2 : 0;

            hex.style.left = `${col * hexSize - offset}px`;
            hex.style.top = `${row * hexSize * 0.75}px`;

            // 随机动画延迟
            hex.style.animationDelay = `${Math.random() * 60}s`;

            hexGrid.appendChild(hex);
        }
    }
}

// 创建浮动粒子
function createParticles() {
    const particlesContainer = document.getElementById("particles");
    const particleCount = 40;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement("div");
        particle.className = "particle";

        // 随机大小和位置
        const size = Math.random() * 10 + 3;
        const left = Math.random() * 100;
        const top = Math.random() * 100 + 100;
        const delay = Math.random() * 15;

        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${left}vw`;
        particle.style.top = `${top}vh`;
        particle.style.animationDelay = `${delay}s`;

        // 随机颜色
        const colors = [
            "rgba(92, 70, 156, 0.6)",
            "rgba(67, 198, 172, 0.6)",
            "rgba(142, 84, 233, 0.6)",
            "rgba(0, 219, 222, 0.6)",
        ];
        particle.style.background =
            colors[Math.floor(Math.random() * colors.length)];

        particlesContainer.appendChild(particle);
    }
}

// 插入footer
function insertFooter() {
    const footer = document.createElement("footer");
    footer.className = "footer-links";
    footer.innerHTML = `
        <p>© 2025 简创AIGC 人工智能服务平台 | 提供稳定可靠的插件服务</p>
        <p>
          技术支持V: gogoshine-com | 商务合作: gogoshine168@gmail.com
        </p>
        <p>
            <span style="margin-right: 0.5rem">
                <img src="./asset/img/ICP.jpg" alt="工商网监" width="16" />
                <a className="text-link" href="https://beian.miit.gov.cn/" target="_blank">
                    粤ICP备2025431894号
                </a>
            </span>|<span  style="margin-left: 0.5rem">
                <img src="./asset/img/GWA.jpg" alt="粤公网安" width="16" />
                <a
                    className="text-link"
                    href="https://beian.mps.gov.cn/#/query/webSearch?code=44030002007400"
                    target="_blank"
                >
                    粤公网安备44030002007400号
                </a>
            </span>
        </p>

    `;
    document.getElementById("mainContainer").appendChild(footer);
}

// 初始化
window.addEventListener("load", () => {
    insertFooter();

    createGrid();
    createHexGrid();
    createParticles();
});