document.addEventListener('DOMContentLoaded', () => {
    // --- GLOBAL DATA (RESTORATION) ---
    const galleryData = [
        { title: "Apps", folder: "assets/apps", files: ["video_2026-07-29_23-27-31.mp4", "video_2026-07-30_01-06-34.mp4", "video_2026-07-30_01-06-42.mp4"] },
        { title: "Logos", folder: "assets/logos", files: ["ic_soundleaf.jpg", "1728516633074.jpg", "1728516633144.jpg", "1728516633179.jpg", "ic_papermusic.jpg", "ic_paperworld.jpg", "1000199705 (1).jpg", "ic_paperstudio.jpg", "Tak berjudul54.jpg", "Tak berjudul81.jpg", "Tak berjudul90.jpg", "Tak berjudul130.jpg", "Tak berjudul132.jpg", "Tak berjudul136.jpg", "Tak berjudul138.jpg", "Tak berjudul475.jpg", "Tak berjudul100bj.jpg", "IMG-20260423-WA0000.jpg", "Tak berjudul356 (2).jpg", "Logo Design Paman Es.jpeg", "download_1750645888668.jpeg", "download_1750779626562.jpeg", "download (3)_1750645887852.jpeg", "Tak berjudul62_20230226003519.png", "Tak berjudul62_20241011141949.jpg", "Tak berjudul82_20241015115023.jpg", "Tak berjudul93_20260729221927.jpg", "Tak berjudul95_20241101201556.jpg", "Tak berjudul95_20260729221824.jpg", "Tak berjudul95_20260729221830.jpg", "Tak berjudul95_20260729221837.jpg", "Tak berjudul95_20260729221844.jpg", "Hanging-Wall-Sign-MockUp-3 (2).jpg", "Tak berjudul135_20260729222924.jpg", "Tak berjudul140_20260729223027.jpg", "Tak berjudul143_20260710070800.jpg", "Tak berjudul143_20260710070849.jpg", "Tak berjudul330_20250606175523.jpg", "Tak berjudul330_20250606180022.jpg", "Tak berjudul330_20250606180119.jpg", "Tak berjudul330_20250606180217.jpg", "Tak berjudul330_20250606180309.jpg", "Tak berjudul330_20250606180404.jpg", "Tak berjudul382_20250624144807.png", "Tak berjudul385_20250625211048.png", "Tak berjudul441_20251108140954.png", "Logo Mock-up on Paper Free PSD (1).jpg", "Free Envelope With A4 Letterhead Mockup PSD (4).jpg"] },
        { title: "Videos Opening", folder: "assets/videos_opening", files: ["lv_0_20250429162148.mp4", "lv_0_20250504183447.mp4", "lv_0_20251122120222.mp4", "lv_0_20251122120304.mp4", "lv_0_20251122120345.mp4", "lv_0_20251122120423.mp4"] },
        { title: "Animation", folder: "assets/animation", files: ["lv_0_20250313215500.mp4", "lv_0_20251122120222.mp4", "lv_0_20251122120304.mp4", "lv_0_20251122120345.mp4", "lv_0_20251122120423.mp4", "2025-11-26-143636742.mp4"] },
        { title: "Speed Paint", folder: "assets/speed_paint", files: ["HiPaint_1785341138676.mp4", "HiPaint_1785341287880.mp4", "HiPaint_1785341393859.mp4", "HiPaint_1785341438186.mp4", "SaveInta.com_AQMusq2igBy_oiHRXzegkpjrBWxp7GhhXokq0DGMNu_wsZtvHyLrRFLgplIzR-Zkf4rK5hpQqIzK7rzPE7foSA-s.mp4", "SaveInta.com_AQNHE6I__NqpWyp1M-ijubzLP_3nFVtz3qigNwhF56D_Gx957gqbRn8wVnE1esCSyklJACC0rub26lPHH1C4fI9n.mp4", "SaveInta.com_AQMfdOgNz21ygbuNIECazdk_qTBoTG8esUL_ovA1c1tYiqfyiY16h9MLbcregXpvJXhyPNSr7hsE8JaUjIGceS0ltv2-tZYRrpJxHu0.mp4", "SaveInta.com_AQMriMFxQ8DxVQm04-CMYCtT5Eyg05p9rNysAi7w5hf3D6L7DxHZFUs3NOfFWkWr0ceChZ3vJ6wD2-DHydkrZH3gh0l_GUlSxHgV9bc.mp4", "SaveInta.com_AQNbW9OtHG-AXq9804lnzNseYupRe5YcCrroBJqXAAYjkoR4kQZZ0EBQCg-Vg8imw0jv8PonSkMwdfA224NerZlbjioWiGSZSyJXpJ4.mp4", "SaveInta.com_AQNgZ78ZFrk63_qem8okVWSCryd29QPWx4LNaihS4ou6l3ZXR2rMyg3UnTeF2Vbur4H-1-Fiv795RcJvMtksLt4Dm_xidy6wxdRU7gI.mp4", "SaveInta.com_AQNkqyy9vUqCQXffYVLgqhibYBVNYxyzQQj4FzqB40Y-741RtTY2QX59Yww6qjNMi3FenljQpKwQAtu_Y_2rG09wuNRpJY31O9fGing.mp4", "SaveInta.com_AQOTwcDdHZRw4f2qAOCJ_Hg5nkeqsvkhcO-BI_RA2PL9NsRiS1RRXIGqHCrQoSHsKh73FPRLzLjhsn945P56NAqMKQ6n56fvhuKws8k.mp4", "SaveInta.com_AQPF2VLtmsVcYeS1jSXe6-IFFTxyy_3mFBbRICdg7-AfP4PC1xOJ0ZChT94b2IolOY5xuk03_xWOLTZON6xx4svcTm3yQgszS_V4Z6o.mp4"] },
        { title: "Painting", folder: "assets/painting", files: ["IMG_1539.JPEG", "IMG_1542.JPEG", "IMG_1658.JPEG", "IMG_1917.JPEG", "IMG_1980.JPEG", "1745412680735.jpg", "1745414712513.jpg", "IMG_20210421_134156.jpg", "IMG_20210506_052518.jpg", "IMG_20210410_131434~2.jpg", "IMG_20210410_132032~2.jpg", "2C5F0546-CD48-4B2C-86A1-1B99FC04D315.JPEG", "35dc5793-3b7d-41bb-a07c-0b7e8bd23480.JPEG", "544F3975-BD85-49BF-BC8D-D64548405EB8.JPEG", "694CBACA-A68B-4484-9C39-A91131891E4D.JPEG", "a1bb1586-1e4f-4296-9056-fe164715f975.JPEG"] },
        { title: "Wood Art", folder: "assets/wood_art", files: ["IMG_1706.PNG", "IMG_0984.JPEG", "1745414713383.webp", "IMG_20210421_133958~2.webp", "8EEE6090-E496-4B57-B3E9-64EC41857BD6.JPEG", "eac44316-c674-4b8f-9fca-a705aab2d7fa.JPEG"] },
        { title: "Pencil Art", folder: "assets/pencil_art", files: ["IMG_0433.JPEG", "IMG_1661.JPEG", "1745412500348.jpg", "1745412534715.jpg", "1745412567212.jpg", "1745412584369.jpg", "1745414712614.jpg", "1745414712754.jpg", "1745414713585.jpg", "1745414713753.jpg", "1745414713836.jpg", "IMG_20211117_230009.jpg", "89c40da0-db52-4eab-ae38-f5b5073cde3e.JPEG"] },
        { title: "Smudge Art", folder: "assets/smudge_art", files: ["IMG_0761.JPEG", "IMG_0803.JPEG", "IMG_0810.JPEG", "SaveInta.com_470177385_18478707730006942_7117870979721764255_n.jpg", "SaveInta.com_470196220_18478707721006942_3282586052700794035_n.jpg", "SaveInta.com_619269100_17970319865840400_3469075958695446374_n.jpg", "SaveInta.com_626283887_18065102171256237_4890261915400654899_n.jpg"] },
        { title: "Vector Art", folder: "assets/vector_art", files: ["Ade Husna.webp", "Tak berjudul91.webp", "Tak berjudul93.webp", "Tak berjudul95.webp", "Tak berjudul106.webp", "Tak berjudul110.webp", "Tak berjudul120.webp", "Tak berjudul145.webp", "Tak berjudul111 (1).webp"] },
        { title: "Glitter Art", folder: "assets/glitter_art", files: ["IMG-20210724-WA0011.jpg", "IMG-20210724-WA0013.jpg", "IMG-20210730-WA0038.jpg", "IMG_20230722_034107.jpg"] },
        { title: "T-Shirt Design", folder: "assets/tshirt_design", files: ["Tak berjudul101_20230527232910.webp", "Tak berjudul101_20230527233739.webp", "Tak berjudul101_20230527233917.webp", "Tak berjudul12_20230119121331.webp", "Tak berjudul413_20250723134535.webp", "Tak berjudul413_20250723134553.webp", "Tak berjudul413_20250723153127.webp", "Tak berjudul413_20250723153153.webp", "Tak berjudul61 (2).webp"] },
        { title: "Digital Illustrations", folder: "assets/digital_illustrations", files: ["1783103166358.png", "Illustration2.jpg", "Illustration4.jpg", "Tak berjudul8.jpg", "Avatar_20230112135418.png", "HiPaint_1785341057966.jpg", "HiPaint_1785341174295.jpg", "HiPaint_1785341329385.jpg", "HiPaint_1785341384185.jpg", "HiPaint_1785341423107.jpg", "Pandora_20230112135524.png", "Tak berjudul217_20250316224105.jpg", "The Lost Existence_20230206053239.png", "SaveInta.com_487512524_5043886069170134_7072842653446237484_n.jpg", "SaveInta.com_487875524_5042576035967804_5525533911990488769_n.jpg", "SaveInta.com_655360641_18178138594384699_635863505593315045_n.jpg", "SaveInta.com_662250601_18577699183058611_601414380782529649_n.jpg", "SaveInta.com_619844200_17930700564172192_9049990694197190690_n.jpg", "SaveInta.com_620449210_17993371442881798_7497322780392915111_n.jpg", "SaveInta.com_621378773_17972579078833460_5066466410782361358_n.jpg", "SaveInta.com_623277178_18069238154638114_3922794024731793375_n.jpg", "SaveInta.com_624839920_18085999034142941_9122721465553736064_n.jpg", "SaveInta.com_625368340_18117697219611862_6593144415736793388_n.jpg", "SaveInta.com_649232810_17954630322083773_8881909140643807188_n.jpg", "SaveInta.com_651254734_17967567074881263_6372363311592461941_n.jpg", "SaveInta.com_651877526_18088300262586577_7377416027554324163_n.jpg", "SaveInta.com_653544057_18069576935259729_5155016424923074217_n.jpg", "SaveInta.com_655216404_18083501933583258_6678616660328680021_n.jpg", "SaveInta.com_655244720_18130045036540943_5050181567033488177_n.jpg", "SaveInta.com_655465847_18001458524730956_4608330707982460686_n.jpg", "SaveInta.com_655706949_18009288161701161_5933327939390754662_n.jpg", "SaveInta.com_656456117_18038570603565362_6030828489087586384_n.jpg", "SaveInta.com_658362451_18113892322703266_6640889930217064634_n.jpg", "SaveInta.com_624839920_18085999034142941_9122721465553736064_n (1).jpg"] }
    ];

    const bestWorksData = [
        { category: "Logos", image: "assets/best/best_logo.jpg" },
        { category: "Wood Art", image: "assets/best/best_wood.png" },
        { category: "T-Shirt Design", image: "assets/best/best-tshirt.jpg" },
        { category: "Smudge Art", image: "assets/best/best_smudge.png" },
        { category: "Vector Art", image: "assets/best/best_vector.jpg" },
        { category: "Glitter Art", image: "assets/best/best_glitter.jpg" },
        { category: "Painting", image: "assets/best/best_painting.png" },
        { category: "Digital Illustrations", image: "assets/best/best_illustration.png" }
    ];

    // --- UTILITIES ---
    function parseFrontmatter(text) {
        const lines = text.split(/\r?\n/);
        const metadata = {};
        let content = text;
        if (lines[0] && lines[0].trim() === '---') {
            let closingIndex = -1;
            for (let i = 1; i < lines.length; i++) {
                if (lines[i].trim() === '---') { closingIndex = i; break; }
            }
            if (closingIndex !== -1) {
                lines.slice(1, closingIndex).forEach(line => {
                    const parts = line.split(':');
                    if (parts.length >= 2) {
                        const key = parts[0].trim();
                        let val = parts.slice(1).join(':').trim();
                        if (val.startsWith('[') && val.endsWith(']')) val = val.slice(1, -1).split(',').map(s => s.trim());
                        metadata[key] = val;
                    }
                });
                content = lines.slice(closingIndex + 1).join('\n');
            }
        }
        return { content, metadata };
    }

    async function openJournalEntry(entry) {
        const modal = document.getElementById('jurnal-modal');
        const body = document.getElementById('journal-article-body');
        if (!modal || !body) return;
        try {
            let md = entry.fullContent;
            if (!md) {
                const res = await fetch(`content/jurnal/${entry.file}`);
                if (!res.ok) throw new Error("Gagal mengambil file");
                const text = await res.text();
                const parsed = parseFrontmatter(text);
                md = parsed.content;
            }
            if (typeof marked !== 'undefined') {
                body.innerHTML = marked.parse(md);
            } else {
                body.innerHTML = `<pre style="white-space: pre-wrap; color: white;">${md}</pre>`;
            }
            modal.style.display = 'flex';
            document.body.style.overflow = 'hidden';
            modal.querySelector('.modal-content').scrollTop = 0;
        } catch (e) { console.error("Error opening journal:", e); }
    }

    // --- SHARED UI LOGIC ---
    const caretDownPath = "M213.66 101.66l-80 80a8 8 0 0 1-11.32 0l-80-80a8 8 0 0 1 11.32-11.32L128 164.69l74.34-74.35a8 8 0 0 1 11.32 11.32Z";
    const caretUpPath = "M213.66 165.66a8 8 0 0 1-11.32 0L128 91.31l-74.34 74.35a8 8 0 0 1-11.32-11.32l80-80a8 8 0 0 1 11.32 0l80 80a8 8 0 0 1 0 11.32Z";
    const caretLeftPath = "M165.66,202.34a8,8,0,0,1-11.32,11.32l-80-80a8,8,0,0,1,0-11.32l80-80a8,8,0,0,1,11.32,11.32L91.31,128Z";
    const caretRightPath = "M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z";

    // --- HOME PAGE ---
    const homeSlides = document.getElementById('home-carousel-slides');
    if (homeSlides) {
        bestWorksData.forEach(item => {
            const slide = document.createElement('a');
            slide.href = `karya.html?category=${encodeURIComponent(item.category)}`;
            slide.className = 'home-slide';
            slide.innerHTML = `<img src="${item.image}" alt="${item.category}"><div class="home-category-name">${item.category}</div>`;
            homeSlides.appendChild(slide);
        });
        // Auto-carousel would go here
    }

    const latestCont = document.getElementById('latest-journal-container');
    if (latestCont) {
        (async () => {
            try {
                const res = await fetch('content/jurnal/jurnal-manifest.json');
                const list = await res.json();
                if (list.length > 0) {
                    const postRes = await fetch(`content/jurnal/${list[0]}`);
                    const text = await postRes.text();
                    const { metadata } = parseFrontmatter(text);
                    latestCont.innerHTML = `
                        <h2 style="margin-bottom: 2rem; font-size: 1.2rem; text-transform: uppercase; letter-spacing: 0.2em; opacity: 0.6; color:white;">Tulisan Terbaru</h2>
                        <div class="latest-post-card glass-card" style="cursor:pointer;">
                            <div class="latest-post-img"><img src="${metadata.thumbnail || 'assets/best/best_logo.jpg'}" alt=""></div>
                            <div class="latest-post-content">
                                <div class="jurnal-card-meta">${metadata.category || 'Umum'} • ${metadata.date || ''}</div>
                                <h3 class="latest-post-title">${metadata.title || list[0]}</h3>
                                <p class="latest-post-excerpt">${metadata.excerpt || ''}</p>
                                <div class="btn-primary">Baca Selengkapnya</div>
                            </div>
                        </div>
                    `;
                    latestCont.querySelector('.latest-post-card').onclick = () => openJournalEntry({ file: list[0] });
                }
            } catch (e) {}
        })();
    }

    // --- GALLERY PAGE ---
    const galleryRoot = document.getElementById('gallery-root');
    if (galleryRoot) {
        galleryData.forEach((category, catIdx) => {
            const section = document.createElement('section');
            section.className = 'category-section';
            section.innerHTML = `
                <div class="category-header">
                    <span class="category-toggle"><svg viewBox="0 0 256 256"><path d="${caretDownPath}"></path></svg></span>
                    <h2 class="category-title">${category.title}</h2>
                </div>
                <div class="gallery-wrapper">
                    <div class="carousel-btn prev"><svg viewBox="0 0 256 256"><path d="${caretLeftPath}"></path></svg></div>
                    <div class="gallery-container">
                        ${category.files.map((file, idx) => {
                            const isVideo = file.toLowerCase().endsWith('.mp4');
                            const path = `${category.folder}/${encodeURIComponent(file)}`;
                            return `<div class="gallery-item" data-cat="${catIdx}" data-idx="${idx}">${isVideo ? `<video src="${path}" loop muted playsinline></video>` : `<img src="${path}" loading="lazy">`}</div>`;
                        }).join('')}
                    </div>
                    <div class="carousel-btn next"><svg viewBox="0 0 256 256"><path d="${caretRightPath}"></path></svg></div>
                </div>
                <div class="carousel-dots"></div>
            `;
            galleryRoot.appendChild(section);

            // Interaction logic for expanded gallery...
            const header = section.querySelector('.category-header');
            header.onclick = () => {
                const isExpanded = section.classList.toggle('expanded');
                section.querySelector('.category-toggle path').setAttribute('d', isExpanded ? caretUpPath : caretDownPath);
            };
        });
    }

    // --- JURNAL PAGE ---
    const jurnalRoot = document.getElementById('jurnal-root');
    const filterContainer = document.getElementById('jurnal-filters');
    let allEntries = [];

    if (jurnalRoot) {
        (async () => {
            try {
                const res = await fetch('content/jurnal/jurnal-manifest.json');
                const list = await res.json();
                const promises = list.map(async file => {
                    const r = await fetch(`content/jurnal/${file}`);
                    const t = await r.text();
                    const { content, metadata } = parseFrontmatter(t);
                    return { ...metadata, file, fullContent: content };
                });
                allEntries = (await Promise.all(promises)).filter(e => e);
                renderJurnal(allEntries);
                renderFilters(allEntries);
            } catch (e) { jurnalRoot.innerHTML = '<p style="color:white; text-align:center;">Gagal memuat jurnal.</p>'; }
        })();
    }

    function renderJurnal(entries) {
        if (!jurnalRoot) return;
        jurnalRoot.innerHTML = entries.map(entry => `
            <div class="jurnal-card glass-card fade-in" style="margin-bottom:20px;">
                <div class="jurnal-card-meta">${entry.category || 'Umum'} • ${entry.date || ''}</div>
                <h2 class="jurnal-card-title">${entry.title || entry.file}</h2>
                <p class="jurnal-card-excerpt">${entry.excerpt || ''}</p>
                <div class="btn-primary" style="display:inline-block; margin-top:1rem; cursor:pointer;">Baca Selengkapnya</div>
            </div>
        `).join('');
        jurnalRoot.querySelectorAll('.jurnal-card').forEach((card, idx) => {
            card.onclick = () => openJournalEntry(entries[idx]);
        });
    }

    function renderFilters(entries) {
        if (!filterContainer) return;
        const cats = ['Semua', ...new Set(entries.map(e => e.category).filter(Boolean))];
        filterContainer.innerHTML = cats.map(c => `<button class="filter-btn ${c === 'Semua' ? 'active' : ''}">${c}</button>`).join('');
        filterContainer.querySelectorAll('.filter-btn').forEach(btn => {
            btn.onclick = () => {
                filterContainer.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                const cat = btn.innerText;
                renderJurnal(cat === 'Semua' ? allEntries : allEntries.filter(e => e.category === cat));
            };
        });
    }

    // --- SEARCH ---
    const searchToggle = document.getElementById('search-toggle');
    const searchCapsule = document.getElementById('search-capsule');
    const searchInput = document.getElementById('search-input');
    const searchOverlay = document.getElementById('search-overlay');
    const searchExecute = document.getElementById('search-execute');
    let searchIndex = [];

    async function buildIndex() {
        galleryData.forEach(g => searchIndex.push({ type: 'Karya', title: g.title, link: `karya.html?category=${encodeURIComponent(g.title)}` }));
        try {
            const r = await fetch('content/jurnal/jurnal-manifest.json');
            const list = await r.json();
            for (const f of list) {
                const rs = await fetch(`content/jurnal/${f}`);
                const t = await rs.text();
                const { content, metadata } = parseFrontmatter(t);
                searchIndex.push({ type: 'Jurnal', title: metadata.title || f, content, entry: { ...metadata, file: f, fullContent: content } });
            }
        } catch (e) {}
    }

    function performSearch() {
        const q = searchInput.value.toLowerCase().trim();
        if (q.length < 1) { searchOverlay.style.display = 'none'; return; }
        const results = searchIndex.filter(i => (i.title||"").toLowerCase().includes(q) || (i.content||"").toLowerCase().includes(q));
        const grid = document.getElementById('search-results');
        if (!grid) return;
        grid.innerHTML = results.map(r => `
            <div class="search-result-item" style="cursor:pointer; padding:1.2rem; background:rgba(255,255,255,0.03); border-radius:18px; margin-bottom:12px; border:1px solid rgba(255,255,255,0.05);">
                <div style="font-size:0.65rem; color:#0A84FF; text-transform:uppercase; margin-bottom:0.3rem;">${r.type}</div>
                <div style="font-weight:600; color:white; font-size:1.1rem;">${r.title}</div>
            </div>
        `).join('') || '<p style="text-align:center; color:white;">Tidak ada hasil ditemukan.</p>';
        searchOverlay.style.display = 'flex';
        grid.querySelectorAll('.search-result-item').forEach((item, idx) => {
            item.onclick = () => {
                const r = results[idx];
                if (r.type === 'Jurnal') openJournalEntry(r.entry);
                else window.location.href = r.link;
                searchCapsule.classList.remove('active');
                searchCapsule.style.display = 'none';
                searchOverlay.style.display = 'none';
            };
        });
    }

    if (searchToggle) {
        searchToggle.onclick = (e) => {
            e.stopPropagation();
            const isActive = searchCapsule.classList.contains('active');
            if (isActive) {
                searchCapsule.classList.remove('active');
                searchCapsule.classList.add('hiding');
                setTimeout(() => { searchCapsule.style.display = 'none'; }, 300);
                searchOverlay.style.display = 'none';
            } else {
                searchCapsule.style.display = 'block';
                searchCapsule.classList.remove('hiding');
                searchCapsule.classList.add('active');
                searchInput.focus();
                if (searchIndex.length === 0) buildIndex();
            }
        };
        searchInput.onkeypress = (e) => { if (e.key === 'Enter') performSearch(); };
        if (searchExecute) searchExecute.onclick = performSearch;
    }

    // --- GLOBAL EVENTS ---
    document.addEventListener('click', (e) => {
        // Safe Close Search
        if (searchCapsule && !searchCapsule.contains(e.target) && !searchToggle.contains(e.target)) {
            if (searchCapsule.classList.contains('active')) {
                searchCapsule.classList.remove('active');
                searchCapsule.classList.add('hiding');
                setTimeout(() => { searchCapsule.style.display = 'none'; }, 300);
                searchOverlay.style.display = 'none';
            }
        }

        // Modal logic
        if (e.target.classList.contains('modal') || e.target.classList.contains('modal-close')) {
            document.querySelectorAll('.modal').forEach(m => m.style.display = 'none');
            document.body.style.overflow = '';
        }
    });

    // --- BLOBS Parallax ---
    window.addEventListener('mousemove', (e) => {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        document.querySelectorAll('.blob').forEach((blob, index) => {
            const speed = (index + 1) * 30;
            blob.style.transform = `translate(${(x - 0.5) * speed}px, ${(y - 0.5) * speed}px)`;
        });
    });
});
