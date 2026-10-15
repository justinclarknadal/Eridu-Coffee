const framesData = [
    {
        id: 1,
        cctv: "CCTV_S6_CAM_01",
        footer: "// NEW ERIDU ARCHIVAL LOG //",
        type: "entry",
        title: "ERIDU COFFEE",
        subtitle: "THE SIXTH STREET HUB",
        quote: "\"Surviving the hollows, one cup at a time.\" A high-concentration sanctuary delivering clean liquid fuel under high-pressure parameters.",
        specs: { layers: "14 ACTIVE", decibel: "84 dB (ACTIVE)", bangboo: "ONLINE" },
        heroImage: "images/New_Eridu.png"
    },
    {
        id: "1B",
        cctv: "CCTV_S6_CAM_INDEX",
        footer: "MENU INDEX // SELECT A SECTOR",
        type: "categories",
        sectionTitle: "MENU INDEX // SELECT A SECTOR"
    },
    {
        id: 2,
        cctv: "CCTV_S6_CAM_02",
        footer: "DARK WALL // ESPRESSO & BLACK",
        type: "menu",
        sectionTitle: "DARK WALL // ESPRESSO & BLACK",
        items: [
            { code: "ESP-01", price: "150 Pesos", name: "SIXTH STREET ESPRESSO", desc: "A bold, highly concentrated shot brewed under heavy pressure, serving as the daily fuel for active Proxies.", img: "images/SSE.png" },
            { code: "ESP-02", price: "120 Pesos", name: "OUTER RING AMERICANO", desc: "Rich espresso pulled long with hot water, delivering a clean, unyielding profile straight from the wasteland borders.", img: "images/ORA.png" },
            { code: "ESP-03", price: "120 Pesos", name: "HOLLOW DIVE COLD BREW", desc: "Steeped slowly for twelve hours in chilled filtration chambers to maintain peak clarity during long operations.", img: "images/HDCB.png" }
        ]
    },
    {
        id: 3,
        cctv: "CCTV_S6_CAM_03",
        footer: "SUNBRINGER // MILK-BASED",
        type: "menu",
        sectionTitle: "SUNBRINGER // MILK-BASED",
        items: [
            { code: "MLC-01", price: "180 Pesos", name: "BANGBOO CAPPUCCINO", desc: "Equal parts espresso, steamed milk, and heavy velvety foam, topped with a precise dusting of dark cocoa.", img: "images/BBCP.png" },
            { code: "MLC-02", price: "200 Pesos", name: "CUNNING HARE LATTE", desc: "Smooth espresso balanced with micro-foamed milk for a reliable, comforting daily cup.", img: "images/CHL.png" },
            { code: "MLC-03", price: "150 Pesos", name: "DECIBEL MOCHA", desc: "A rich fusion of dark chocolate syrup, bold espresso, and steamed milk with a high-energy finish.", img: "images/DM.png" }
        ]
    },
    {
        id: 4,
        cctv: "CCTV_S6_CAM_04",
        footer: "REMIELLE // MILK-BASED CONT.",
        type: "menu",
        sectionTitle: "REMIELLE // MILK-BASED CONT.",
        items: [
            { code: "MLC-04", price: "120 Pesos", name: "STANDARD FLAT WHITE", desc: "Velvety microfoam folded over a double ristretto shot for a strong, silky texture.", img: "images/SDFW.png" },
            { code: "MLC-05", price: "180 Pesos", name: "PROXY MACCHIATO", desc: "Marked with a dollop of textured foam right over a robust double shot of espresso.", img: "images/PM.png" },
            { code: "MLC-06", price: "200 Pesos", name: "ICED CARAMEL MACCHIATO", desc: "Layered iced milk, vanilla syrup, espresso, and a rich caramel drizzle.", img: "images/ICM.png" }
        ]
    },
    {
        id: 5,
        cctv: "CCTV_S6_CAM_05",
        footer: "ETHEREAL // TEA & MATCHA",
        type: "menu",
        sectionTitle: "ETHEREAL // TEA & MATCHA",
        items: [
            { code: "TEA-01", price: "180 Pesos", name: "NEW ERIDU MATCHA LATTE", desc: "Ceremonial-grade green tea stone-ground into a fine powder, whisked smooth with steamed milk.", img: "images/NEMT.png" },
            { code: "TEA-02", price: "150 Pesos", name: "SPICED CHAI TEA LATTE", desc: "Black tea infused with warm aromatic spices, honey, and creamy steamed milk.", img: "images/SCTL.png" },
            { code: "TEA-03", price: "150 Pesos", name: "CLASSIC EARL GREY TEA", desc: "Black tea scented with distinct bergamot orange notes for a crisp, timeless brew.", img: "images/CERT.png" }
        ]
    },
    {
        id: 6,
        cctv: "CCTV_S6_CAM_06",
        footer: "VICTORIA HOUSEKEEPING // NON-CAFF & SPECIALTY",
        type: "specialty",
        sectionTitle: "VICTORIA HOUSEKEEPING // NON-CAFF & SPECIALTY",
        items: [
            { code: "SPC-01", price: "180 Pesos", name: "HOLLOW-CORE HOT CHOCOLATE", desc: "Melted dark couverture chocolate blended with steamed whole milk and a pinch of sea salt for a rich, heavy-density operating temperature.", img: "images/HCHC.png" },
            { code: "SPC-02", price: "210 Pesos", name: "STARLIGHT KNIGHT BEAN FRAPPE", desc: "Blended ice, whole milk, and intense Madagascar vanilla bean extract, finished with whipped cream. Cold filtration parameter active.", img: "images/SKBP.png" }
        ]
    },
    {
        id: 7,
        cctv: "CCTV_S6_CAM_07",
        footer: "MATERIAL ANATOMY // SYSTEM SPEC",
        type: "anatomy",
        title: "VESSEL MATRIX",
        subtitle: "CERAMIC COMPOSITE #4 VESSEL PROFILE",
        params: [
            { title: "[PARAM_01] BASE BEAN ORIGIN", grade: "GRADE A-1", desc: "Outer Ring Wasteland imported arabica beans tested for purity and structural resilience." },
            { title: "[PARAM_02] ETHER DENSITY THRESHOLD", grade: "0.02 PPM MAX", desc: "Maintained safely below 0.02 ppm contamination risk through pressurized shielding parameters." },
            { title: "[PARAM_03] EXTRACTION PRESSURE", grade: "9.2 BARS", desc: "Calibrated dual-boiler thermal stability operating at precise atmospheric pressure constraints." }
        ],
        notice: "NOTICE: CONSUMPTION DURING ACTIVE HOLLOW OPERATIONS IS NOT ADVISED BY NEW ERIDU HOLLOW INVESTIGATION ASSOCIATION.",
        img: "images/coff.png"
    },
    {
        id: 8,
        cctv: "CCTV_S6_CAM_COMPLETE",
        footer: "// END OF ARCHIVE REPLAY //",
        type: "complete",
        title: "END OF ARCHIVAL LOGS",
        desc: "All {count} archive frames have been successfully compiled and verified against New Eridu Sector 4 standards.",
        fieldNotes: "Despite recurring hollow incidents nearby, the espresso machine at Babu's shop continues to operate flawlessly under standard urban grid pressure. This digital registry is maintained continuously by local proxy operators and shopkeepers committed to preserving the culinary heritage of New Eridu.",
        signOff: "// DIGITAL SIGN-OFF STAMP: VERIFIED PROXY #04",
        gif: "images/Signal_Lost.gif"
    }
];

const menuItems = {};
framesData.forEach(frame => {
    (frame.items || []).forEach(item => { menuItems[item.code] = item; });
});

let currentFrameIndex = 0;
let cart = [];
document.addEventListener("DOMContentLoaded", () => {
    renderIndicators();
    loadFrame(currentFrameIndex);
});

function renderIndicators() {
    const container = document.getElementById("frame-indicators");
    container.innerHTML = "";
    framesData.forEach((_, idx) => {
        const dot = document.createElement("div");
        dot.className = `dot ${idx === currentFrameIndex ? "active" : ""}`;
        dot.onclick = () => goToFrame(idx);
        container.appendChild(dot);
    });
}

function changeFrame(direction) {
    currentFrameIndex += direction;
    if (currentFrameIndex < 0) currentFrameIndex = framesData.length - 1;
    if (currentFrameIndex >= framesData.length) currentFrameIndex = 0;
    loadFrame(currentFrameIndex);
}

function goToFrame(index) {
    currentFrameIndex = index;
    loadFrame(currentFrameIndex);
}

function loadFrame(index) {
    const frame = framesData[index];
    const viewport = document.getElementById("frame-viewport");
    
    document.getElementById("cctv-tag").innerText = frame.cctv;
    document.getElementById("footer-note").innerText = frame.footer;
    
    document.querySelectorAll(".dot").forEach((dot, idx) => {
        dot.classList.toggle("active", idx === index);
    });

    if (frame.type === "entry") {
        viewport.innerHTML = `
            <div class="hero-frame">
                <div class="hero-left">
                    <div class="badge-restricted">🔒 CLASS_RESTRICTED</div>
                    <h1 class="hero-title">${frame.title}</h1>
                    <div class="hero-subtitle">${frame.subtitle}</div>
                    <p class="hero-desc">${frame.quote}</p>
                    <div class="hero-stats">
                        <div class="stat-item"><span class="label">CANVAS SPEC</span><span class="value">1440 × 900 PX</span></div>
                        <div class="stat-item"><span class="label">TOTAL LAYERS</span><span class="value">${frame.specs.layers}</span></div>
                        <div class="stat-item"><span class="label">DECIBEL LEVEL</span><span class="value orange">${frame.specs.decibel}</span></div>
                        <div class="stat-item"><span class="label">BANGBOO SHIFT</span><span class="value cyan">${frame.specs.bangboo}</span></div>
                    </div>
                    <div>
                        <button class="portal-btn" onclick="changeFrame(1)">INITIALIZE HOLLOW PORTAL</button>
                        <span class="portal-hint">// PRESS ENTER OR USE ARROW KEYS</span>
                    </div>
                </div>
                <div class="hero-image-wrapper">
                    <img src="${frame.heroImage}" class="hero-single-img" alt="Eridu Hub Collage">
                </div>
            </div>
        `;
    } else if (frame.type === "categories") {
        const rowsHtml = framesData
            .map((f, idx) => ({ f, idx }))
            .filter(({ f }) => f.type === "menu" || f.type === "specialty")
            .map(({ f, idx }, n) => {
                const parts = f.sectionTitle.split(" // ");
                const tag = parts.length > 1 ? parts[0] : `CAT-0${n + 1}`;
                const label = parts.length > 1 ? parts.slice(1).join(" // ") : f.sectionTitle;
                const prices = f.items.map(i => parseInt(i.price, 10));
                const count = f.items.length;
                return `
                    <div class="category-row" onclick="goToFrame(${idx})">
                        <div class="category-thumb">
                            <img src="${f.items[0].img}" alt="${label}">
                        </div>
                        <div class="category-info">
                            <span class="item-code">${tag}</span>
                            <h3 class="category-name">${label}</h3>
                            <div class="category-meta">${count} ${count === 1 ? "ITEM" : "ITEMS"} // ${Math.min(...prices)} – ${Math.max(...prices)} Pesos</div>
                        </div>
                        <span class="category-arrow">►</span>
                    </div>
                `;
            }).join("");

        viewport.innerHTML = `
            <div class="category-frame">
                <div class="menu-header-area">
                    <h2 class="menu-section-title">${frame.sectionTitle}</h2>
                </div>
                <div class="category-grid">${rowsHtml}</div>
            </div>
        `;
    } else if (frame.type === "menu") {
        const cardsHtml = frame.items.map(item => `
            <div class="menu-card" onclick="openOrderModal('${item.code}')">
                <div class="card-img-container">
                    <img src="${item.img}" class="card-img" alt="${item.name}">
                </div>
                <div class="card-content">
                    <div class="card-meta-top">
                        <span class="item-code">${item.code}</span>
                        <span class="item-price">${item.price}</span>
                    </div>
                    <h3 class="item-title">${item.name}</h3>
                    <p class="item-desc">${item.desc}</p>
                </div>
                <div class="card-footer">
                    <span>SURVEILLANCE TAG // PASS</span>
                    <span>⌖</span>
                </div>
            </div>
        `).join("");

        viewport.innerHTML = `
            <div class="menu-header-area">
                <h2 class="menu-section-title">${frame.sectionTitle}</h2>
            </div>
            <div class="menu-grid">${cardsHtml}</div>
        `;
    } else if (frame.type === "specialty") {
        const itemsHtml = frame.items.map(item => `
            <div class="horizontal-card" onclick="openOrderModal('${item.code}')">
                <img src="${item.img}" alt="${item.name}">
                <div class="horizontal-content">
                    <div>
                        <div class="card-meta-top">
                            <span class="item-code">${item.code}</span>
                            <span class="item-price">${item.price}</span>
                        </div>
                        <h3 class="item-title">${item.name}</h3>
                        <p class="item-desc">${item.desc}</p>
                    </div>
                    <div class="card-footer" style="border:none; padding:0; margin-top:10px;">
                        <span>SURVEILLANCE TAG // PASS</span>
                        <span>⌖</span>
                    </div>
                </div>
            </div>
        `).join("");

        viewport.innerHTML = `
            <div class="menu-header-area">
                <h2 class="menu-section-title">${frame.sectionTitle}</h2>
            </div>
            <div class="specialty-layout">
                <div class="specialty-left">${itemsHtml}</div>
                <div class="specialty-right">
                    <div class="archive-summary-box">
                        <h3>// ARCHIVE_SUMMARY</h3>
                        <div id="cart-content">${renderCart()}</div>
                        <div class="proxy-log-txt">PROXY LOG ENTRY 4818</div>
                        <p class="summary-desc">All menu entities are subjected to particulate extraction before deployment to counter the hollow corruption.</p>
                    </div>
                    <div class="critical-notice-box">
                        <div class="critical-title">⚠ CRITICAL NOTICE</div>
                        <div class="critical-body">CONSUMPTION DURING ACTIVE HOLLOW OPERATIONS IS NOT ADVISED BY NEW ERIDU HOLLOW INVESTIGATION ASSOCIATION</div>
                    </div>
                </div>
            </div>
        `;
    } else if (frame.type === "anatomy") {
        const paramsHtml = frame.params.map(p => `
            <div class="param-box">
                <div class="param-title-row">
                    <span>${p.title}</span>
                    <span>${p.grade}</span>
                </div>
                <p class="param-desc">${p.desc}</p>
            </div>
        `).join("");

        viewport.innerHTML = `
            <div class="menu-header-area">
                <h2 class="menu-section-title">MATERIAL ANATOMY // SYSTEM SPEC</h2>
            </div>
            <div class="anatomy-layout">
                <div class="anatomy-specs">
                    <div class="badge-restricted" style="width: fit-content;">🔒 ANATOMICAL_SPEC</div>
                    <h2 style="font-family: var(--font-ui); font-size: 36px; color: rgba(255, 255, 255, 1);">${frame.title}</h2>
                    <p style="color: var(--accent-cyan); font-size: 14px; margin-bottom: 10px;">${frame.subtitle}</p>
                    ${paramsHtml}
                    <div class="critical-notice-box" style="margin-top: 10px;">
                        <div class="critical-body">⚠ ${frame.notice}</div>
                    </div>
                </div>
                <div class="barista-preview-box">
                    <img src="${frame.img}" class="barista-img" alt="Barista Station">
                </div>
            </div>
        `;
    } else if (frame.type === "complete") {
        viewport.innerHTML = `
            <div class="archive-complete-layout">
                <div class="complete-left">
                    <div class="badge-restricted">🔒 TRANSMISSION_STAMP</div>
                    <h1>${frame.title}</h1>
                    <p>${frame.desc.replace("{count}", framesData.length)}</p>
                    <div class="field-notes-box">
                        <div class="field-notes-title">// FIELD NOTES</div>
                        <p class="field-notes-text">${frame.fieldNotes}</p>
                        <div class="sign-off">${frame.signOff}</div>
                    </div>
                </div>
                <div class="static-box">
                    <img src="${frame.gif}" alt="Archive GIF">
                </div>
            </div>
        `;
    }
}

function openOrderModal(code) {
    const item = menuItems[code];
    if (!item) return;

    const modal = document.getElementById("order-modal");
    const body = document.getElementById("modal-body");
    body.innerHTML = `
        <div class="modal-item-title">${item.name}</div>
        <div class="modal-item-price">${item.price}</div>
        <p class="modal-item-desc">${item.desc}</p>
        <button class="order-confirm-btn" onclick="confirmOrder('${item.code}')">CONFIRM PROXY TRANSMISSION</button>
    `;
    modal.classList.remove("hidden");
}

function closeOrderModal() {
    document.getElementById("order-modal").classList.add("hidden");
}

function isModalOpen() {
    return !document.getElementById("order-modal").classList.contains("hidden");
}

function formatPesos(amount) {
    return `${amount.toLocaleString("en-US")} Pesos`;
}

function renderCart() {
    const totalQty = cart.reduce((sum, c) => sum + c.qty, 0);
    const totalBill = cart.reduce((sum, c) => sum + c.price * c.qty, 0);

    const linesHtml = cart.length === 0
        ? `<div class="cart-empty">// NO ITEMS LOGGED. SELECT FROM MENU.</div>`
        : cart.map((c, idx) => `
            <div class="cart-line">
                <span class="cart-line-name">${c.name}</span>
                <div class="cart-line-controls">
                    <button class="qty-btn" onclick="changeQty(${idx}, -1)" ${c.qty <= 1 ? "disabled" : ""}>-</button>
                    <span class="qty-value">${c.qty}</span>
                    <button class="qty-btn" onclick="changeQty(${idx}, 1)">+</button>
                    <span class="cart-line-price">${formatPesos(c.price * c.qty)}</span>
                    <button class="remove-btn" onclick="removeFromCart(${idx})">[X]</button>
                </div>
            </div>
        `).join("");

    return `
        <div class="summary-row"><span>Items Ordered:</span><span>${totalQty}</span></div>
        <div class="cart-items">${linesHtml}</div>
        <div class="summary-row cart-total"><span>Total Bill:</span><span>${formatPesos(totalBill)}</span></div>
    `;
}

function refreshCart() {
    const cartContent = document.getElementById("cart-content");
    if (!cartContent) return;
    const oldList = cartContent.querySelector(".cart-items");
    const scrollTop = oldList ? oldList.scrollTop : 0;
    cartContent.innerHTML = renderCart();
    const newList = cartContent.querySelector(".cart-items");
    if (newList) newList.scrollTop = scrollTop;
}

function changeQty(index, delta) {
    const item = cart[index];
    if (!item) return;
    item.qty = Math.max(1, item.qty + delta);
    refreshCart();
}

function removeFromCart(index) {
    cart.splice(index, 1);
    refreshCart();
}

function confirmOrder(code) {
    const item = menuItems[code];
    if (!item) return;

    const existing = cart.find(c => c.code === code);
    if (existing) {
        existing.qty += 1;
    } else {
        cart.push({ code: code, name: item.name, price: parseInt(item.price, 10), qty: 1 });
    }

    refreshCart();
    closeOrderModal();
    alert(`Transmission successful! Order for "${item.name}" logged to New Eridu Sector 4.`);
}

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        closeOrderModal();
        return;
    }
    if (isModalOpen()) return;

    if (e.key === "ArrowRight") changeFrame(1);
    if (e.key === "ArrowLeft") changeFrame(-1);
    if (e.key === "Enter"
        && framesData[currentFrameIndex].type === "entry"
        && document.activeElement.tagName !== "BUTTON") {
        changeFrame(1);
    }
});