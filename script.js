document.addEventListener('DOMContentLoaded', () => {
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

    // --- SEARCH LOGIC ---
    const searchToggle = document.getElementById('search-toggle');
    const searchCapsule = document.getElementById('search-capsule');
    const searchInput = document.getElementById('search-input');
    const searchOverlay = document.getElementById('search-overlay');
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
            <div class="search-result-item" style="cursor:pointer; padding:1rem; background:rgba(255,255,255,0.05); border-radius:15px; margin-bottom:10px;">
                <div style="font-size:0.7rem; color:#0A84FF; text-transform:uppercase;">${r.type}</div>
                <div style="font-weight:600; color:white;">${r.title}</div>
            </div>
        `).join('') || '<p style="text-align:center; color:white;">Tidak ada hasil.</p>';
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
                searchCapsule.style.display = 'none';
                searchOverlay.style.display = 'none';
            } else {
                searchCapsule.style.display = 'block';
                searchCapsule.classList.add('active');
                searchInput.focus();
                if (searchIndex.length === 0) buildIndex();
            }
        };
        searchInput.onkeypress = (e) => { if (e.key === 'Enter') performSearch(); };
        document.getElementById('search-execute').onclick = performSearch;
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
            <div class="jurnal-card glass-card fade-in" style="margin-bottom:20px; opacity:1; transform:translateY(0);">
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
        filterContainer.innerHTML = cats.map(c => `
            <button class="filter-btn ${c === 'Semua' ? 'active' : ''}" style="margin: 5px;">${c}</button>
        `).join('');
        filterContainer.querySelectorAll('.filter-btn').forEach(btn => {
            btn.onclick = () => {
                filterContainer.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                const cat = btn.innerText;
                renderJurnal(cat === 'Semua' ? allEntries : allEntries.filter(e => e.category === cat));
            };
        });
    }

    // --- LATEST POST ---
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

    // --- GLOBAL EVENTS ---
    document.addEventListener('click', (e) => {
        // Close search if clicking outside
        if (searchCapsule && !searchCapsule.contains(e.target) && !searchToggle.contains(e.target)) {
            searchCapsule.classList.remove('active');
            searchCapsule.style.display = 'none';
            searchOverlay.style.display = 'none';
        }
        // Modal close buttons
        if (e.target.classList.contains('modal-close')) {
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
            const xOffset = (x - 0.5) * speed;
            const yOffset = (y - 0.5) * speed;
            blob.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
        });
    });

    // Gallery Data needed for search
    const galleryData = [
        { title: "Apps" }, { title: "Logos" }, { title: "Videos Opening" }
    ];
});
