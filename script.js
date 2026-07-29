document.addEventListener('DOMContentLoaded', () => {
    // Parallax effect for blobs following mouse
    window.addEventListener('mousemove', (e) => {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;

        const blobs = document.querySelectorAll('.blob');
        blobs.forEach((blob, index) => {
            const speed = (index + 1) * 30;
            const xOffset = (x - 0.5) * speed;
            const yOffset = (y - 0.5) * speed;
            blob.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
        });
    });

    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 1.2s cubic-bezier(0.22, 1, 0.36, 1), transform 1.2s cubic-bezier(0.22, 1, 0.36, 1)';
        observer.observe(el);
    });

    // Gallery Data - Full 13 Categories with all assets
    const galleryData = [
        {
            title: "Apps",
            folder: "assets/apps",
            files: [
                "video_2026-07-29_23-27-31.mp4",
                "video_2026-07-30_01-06-34.mp4",
                "video_2026-07-30_01-06-42.mp4"
            ]
        },
        {
            title: "Logos",
            folder: "assets/logos",
            files: [
                "ic_soundleaf.jpg", "1728516633074.jpg", "1728516633144.jpg", "1728516633179.jpg",
                "ic_papermusic.jpg", "ic_paperworld.jpg", "1000199705 (1).jpg", "ic_paperstudio.jpg",
                "Tak berjudul54.jpg", "Tak berjudul81.jpg", "Tak berjudul90.jpg", "Tak berjudul130.jpg",
                "Tak berjudul132.jpg", "Tak berjudul136.jpg", "Tak berjudul138.jpg", "Tak berjudul475.jpg",
                "Tak berjudul100bj.jpg", "IMG-20260423-WA0000.jpg", "Tak berjudul356 (2).jpg",
                "Logo Design Paman Es.jpeg", "download_1750645888668.jpeg", "download_1750779626562.jpeg",
                "download (3)_1750645887852.jpeg", "Tak berjudul62_20230226003519.png",
                "Tak berjudul62_20241011141949.jpg", "Tak berjudul82_20241015115023.jpg",
                "Tak berjudul93_20260729221927.jpg", "Tak berjudul95_20241101201556.jpg",
                "Tak berjudul95_20260729221824.jpg", "Tak berjudul95_20260729221830.jpg",
                "Tak berjudul95_20260729221837.jpg", "Tak berjudul95_20260729221844.jpg",
                "Hanging-Wall-Sign-MockUp-3 (2).jpg", "Tak berjudul135_20260729222924.jpg",
                "Tak berjudul140_20260729223027.jpg", "Tak berjudul143_20260710070800.jpg",
                "Tak berjudul143_20260710070849.jpg", "Tak berjudul330_20250606175523.jpg",
                "Tak berjudul330_20250606180022.jpg", "Tak berjudul330_20250606180119.jpg",
                "Tak berjudul330_20250606180217.jpg", "Tak berjudul330_20250606180309.jpg",
                "Tak berjudul330_20250606180404.jpg", "Tak berjudul382_20250624144807.png",
                "Tak berjudul385_20250625211048.png", "Tak berjudul441_20251108140954.png",
                "Logo Mock-up on Paper Free PSD (1).jpg", "Free Envelope With A4 Letterhead Mockup PSD (4).jpg"
            ]
        },
        {
            title: "Videos Opening",
            folder: "assets/videos_opening",
            files: [
                "lv_0_20250429162148.mp4", "lv_0_20250504183447.mp4", "lv_0_20251122120222.mp4",
                "lv_0_20251122120304.mp4", "lv_0_20251122120345.mp4", "lv_0_20251122120423.mp4"
            ]
        },
        {
            title: "Animation",
            folder: "assets/animation",
            files: [
                "lv_0_20250313215500.mp4", "lv_0_20251122120222.mp4", "lv_0_20251122120304.mp4",
                "lv_0_20251122120345.mp4", "lv_0_20251122120423.mp4", "2025-11-26-143636742.mp4"
            ]
        },
        {
            title: "Speed Paint",
            folder: "assets/speed_paint",
            files: [
                "HiPaint_1785341138676.mp4", "HiPaint_1785341287880.mp4", "HiPaint_1785341393859.mp4",
                "HiPaint_1785341438186.mp4", "SaveInta.com_AQMusq2igBy_oiHRXzegkpjrBWxp7GhhXokq0DGMNu_wsZtvHyLrRFLgplIzR-Zkf4rK5hpQqIzK7rzPE7foSA-s.mp4",
                "SaveInta.com_AQNHE6I__NqpWyp1M-ijubzLP_3nFVtz3qigNwhF56D_Gx957gqbRn8wVnE1esCSyklJACC0rub26lPHH1C4fI9n.mp4",
                "SaveInta.com_AQMfdOgNz21ygbuNIECazdk_qTBoTG8esUL_ovA1c1tYiqfyiY16h9MLbcregXpvJXhyPNSr7hsE8JaUjIGceS0ltv2-tZYRrpJxHu0.mp4",
                "SaveInta.com_AQMriMFxQ8DxVQm04-CMYCtT5Eyg05p9rNysAi7w5hf3D6L7DxHZFUs3NOfFWkWr0ceChZ3vJ6wD2-DHydkrZH3gh0l_GUlSxHgV9bc.mp4",
                "SaveInta.com_AQNbW9OtHG-AXq9804lnzNseYupRe5YcCrroBJqXAAYjkoR4kQZZ0EBQCg-Vg8imw0jv8PonSkMwdfA224NerZlbjioWiGSZSyJXpJ4.mp4",
                "SaveInta.com_AQNgZ78ZFrk63_qem8okVWSCryd29QPWx4LNaihS4ou6l3ZXR2rMyg3UnTeF2Vbur4H-1-Fiv795RcJvMtksLt4Dm_xidy6wxdRU7gI.mp4",
                "SaveInta.com_AQNkqyy9vUqCQXffYVLgqhibYBVNYxyzQQj4FzqB40Y-741RtTY2QX59Yww6qjNMi3FenljQpKwQAtu_Y_2rG09wuNRpJY31O9fGing.mp4",
                "SaveInta.com_AQOTwcDdHZRw4f2qAOCJ_Hg5nkeqsvkhcO-BI_RA2PL9NsRiS1RRXIGqHCrQoSHsKh73FPRLzLjhsn945P56NAqMKQ6n56fvhuKws8k.mp4",
                "SaveInta.com_AQPF2VLtmsVcYeS1jSXe6-IFFTxyy_3mFBbRICdg7-AfP4PC1xOJ0ZChT94b2IolOY5xuk03_xWOLTZON6xx4svcTm3yQgszS_V4Z6o.mp4"
            ]
        },
        {
            title: "Painting",
            folder: "assets/painting",
            files: [
                "IMG_1539.JPEG", "IMG_1542.JPEG", "IMG_1658.JPEG", "IMG_1917.JPEG", "IMG_1980.JPEG",
                "1745412680735.jpg", "1745414712513.jpg", "IMG_20210421_134156.jpg", "IMG_20210506_052518.jpg",
                "IMG_20210410_131434~2.jpg", "IMG_20210410_132032~2.jpg", "2C5F0546-CD48-4B2C-86A1-1B99FC04D315.JPEG",
                "35dc5793-3b7d-41bb-a07c-0b7e8bd23480.JPEG", "544F3975-BD85-49BF-BC8D-D64548405EB8.JPEG",
                "694CBACA-A68B-4484-9C39-A91131891E4D.JPEG", "a1bb1586-1e4f-4296-9056-fe164715f975.JPEG"
            ]
        },
        {
            title: "Wood Art",
            folder: "assets/wood_art",
            files: [
                "IMG_1706.PNG", "IMG_0984.JPEG", "1745414713383.webp", "IMG_20210421_133958~2.webp",
                "8EEE6090-E496-4B57-B3E9-64EC41857BD6.JPEG", "eac44316-c674-4b8f-9fca-a705aab2d7fa.JPEG"
            ]
        },
        {
            title: "Pencil Art",
            folder: "assets/pencil_art",
            files: [
                "IMG_0433.JPEG", "IMG_1661.JPEG", "1745412500348.jpg", "1745412534715.jpg",
                "1745412567212.jpg", "1745412584369.jpg", "1745414712614.jpg", "1745414712754.jpg",
                "1745414713585.jpg", "1745414713753.jpg", "1745414713836.jpg", "IMG_20211117_230009.jpg",
                "89c40da0-db52-4eab-ae38-f5b5073cde3e.JPEG"
            ]
        },
        {
            title: "Smudge Art",
            folder: "assets/smudge_art",
            files: [
                "IMG_0761.JPEG", "IMG_0803.JPEG", "IMG_0810.JPEG",
                "SaveInta.com_470177385_18478707730006942_7117870979721764255_n.jpg",
                "SaveInta.com_470196220_18478707721006942_3282586052700794035_n.jpg",
                "SaveInta.com_619269100_17970319865840400_3469075958695446374_n.jpg",
                "SaveInta.com_626283887_18065102171256237_4890261915400654899_n.jpg"
            ]
        },
        {
            title: "Vector Art",
            folder: "assets/vector_art",
            files: [
                "Tak berjudul61 (2).webp", "Tak berjudul12_20230119121331.webp",
                "Tak berjudul101_20230527232910.webp", "Tak berjudul101_20230527233739.webp",
                "Tak berjudul101_20230527233917.webp", "Tak berjudul413_20250723134535.webp",
                "Tak berjudul413_20250723134553.webp", "Tak berjudul413_20250723153127.webp",
                "Tak berjudul413_20250723153153.webp"
            ]
        },
        {
            title: "Glitter Art",
            folder: "assets/glitter_art",
            files: [
                "IMG-20210724-WA0011.jpg", "IMG-20210724-WA0013.jpg", "IMG-20210730-WA0038.jpg",
                "IMG_20230722_034107.jpg"
            ]
        },
        {
            title: "T-Shirt Design",
            folder: "assets/tshirt_design",
            files: [
                "Ade Husna.webp", "Tak berjudul91.webp", "Tak berjudul93.webp", "Tak berjudul95.webp",
                "Tak berjudul106.webp", "Tak berjudul110.webp", "Tak berjudul120.webp", "Tak berjudul145.webp",
                "Tak berjudul111 (1).webp"
            ]
        },
        {
            title: "Digital Illustrations",
            folder: "assets/digital_illustrations",
            files: [
                "1783103166358.png", "Illustration2.jpg", "Illustration4.jpg", "Tak berjudul8.jpg",
                "Avatar_20230112135418.png", "HiPaint_1785341057966.jpg", "HiPaint_1785341174295.jpg",
                "HiPaint_1785341329385.jpg", "HiPaint_1785341384185.jpg", "HiPaint_1785341423107.jpg",
                "Pandora_20230112135524.png", "Tak berjudul217_20250316224105.jpg",
                "The Lost Existence_20230206053239.png", "SaveInta.com_487512524_5043886069170134_7072842653446237484_n.jpg",
                "SaveInta.com_487875524_5042576035967804_5525533911990488769_n.jpg",
                "SaveInta.com_655360641_18178138594384699_635863505593315045_n.jpg",
                "SaveInta.com_662250601_18577699183058611_601414380782529649_n.jpg",
                "SaveInta.com_619844200_17930700564172192_9049990694197190690_n.jpg",
                "SaveInta.com_620449210_17993371442881798_7497322780392915111_n.jpg",
                "SaveInta.com_621378773_17972579078833460_5066466410782361358_n.jpg",
                "SaveInta.com_623277178_18069238154638114_3922794024731793375_n.jpg",
                "SaveInta.com_624839920_18085999034142941_9122721465553736064_n.jpg",
                "SaveInta.com_625368340_18117697219611862_6593144415736793388_n.jpg",
                "SaveInta.com_649232810_17954630322083773_8881909140643807188_n.jpg",
                "SaveInta.com_651254734_17967567074881263_6372363311592461941_n.jpg",
                "SaveInta.com_651877526_18088300262586577_7377416027554324163_n.jpg",
                "SaveInta.com_653544057_18069576935259729_5155016424923074217_n.jpg",
                "SaveInta.com_655216404_18083501933583258_6678616660328680021_n.jpg",
                "SaveInta.com_655244720_18130045036540943_5050181567033488177_n.jpg",
                "SaveInta.com_655465847_18001458524730956_4608330707982460686_n.jpg",
                "SaveInta.com_655706949_18009288161701161_5933327939390754662_n.jpg",
                "SaveInta.com_656456117_18038570603565362_6030828489087586384_n.jpg",
                "SaveInta.com_658362451_18113892322703266_6640889930217064634_n.jpg",
                "SaveInta.com_624839920_18085999034142941_9122721465553736064_n (1).jpg"
            ]
        }
    ];

    const caretSvg = `
        <svg viewBox="0 0 256 256">
            <path d="M213.66 101.66l-80 80a8 8 0 0 1-11.32 0l-80-80a8 8 0 0 1 11.32-11.32L128 164.69l74.34-74.35a8 8 0 0 1 11.32 11.32Z"></path>
        </svg>
    `;

    const galleryRoot = document.getElementById('gallery-root');
    const modal = document.getElementById('preview-modal');
    const modalMedia = document.getElementById('modal-media-container');
    const modalClose = document.querySelector('.modal-close');

    if (galleryRoot) {
        galleryData.forEach(category => {
            const section = document.createElement('section');
            section.className = 'category-section';

            section.innerHTML = `
                <div class="category-header">
                    <span class="category-toggle">${caretSvg}</span>
                    <h2 class="category-title">${category.title}</h2>
                </div>
                <div class="gallery-container">
                    ${category.files.map((file, index) => {
                        const isVideo = file.toLowerCase().endsWith('.mp4');
                        const filePath = `${category.folder}/${file}`;
                        return `
                            <div class="gallery-item" style="animation-delay: ${index * 0.05}s" data-src="${filePath}" data-type="${isVideo ? 'video' : 'image'}">
                                ${isVideo ?
                                    `<video src="${filePath}" loop muted playsinline></video>` :
                                    `<img src="${filePath}" loading="lazy" alt="${file}">`
                                }
                            </div>
                        `;
                    }).join('')}
                </div>
            `;

            galleryRoot.appendChild(section);

            // Toggle functionality
            const header = section.querySelector('.category-header');
            header.addEventListener('click', () => {
                const isExpanded = section.classList.toggle('expanded');
                const videos = section.querySelectorAll('video');
                videos.forEach(v => isExpanded ? v.play().catch(() => {}) : v.pause());
            });

            // Preview logic
            const items = section.querySelectorAll('.gallery-item');
            items.forEach(item => {
                const src = item.getAttribute('data-src');
                const type = item.getAttribute('data-type');

                item.addEventListener('click', (e) => {
                    e.stopPropagation();
                    modalMedia.innerHTML = type === 'video' ?
                        `<video src="${src}" controls autoplay loop></video>` :
                        `<img src="${src}" alt="Preview">`;
                    modal.style.display = 'flex';
                });

                // Hover preview
                if (type === 'video') {
                    const v = item.querySelector('video');
                    item.addEventListener('mouseenter', () => v.play().catch(() => {}));
                    item.addEventListener('mouseleave', () => {
                        if (!section.classList.contains('expanded')) v.pause();
                    });
                }
            });
        });

        // Close modal
        if (modal) {
            modalClose.addEventListener('click', () => {
                modal.style.display = 'none';
                modalMedia.innerHTML = '';
            });
            window.addEventListener('click', (e) => {
                if (e.target === modal) {
                    modal.style.display = 'none';
                    modalMedia.innerHTML = '';
                }
            });
        }
    }

    // View Transition Logic for Smooth Page Navigation
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Check if View Transitions are supported
            if (!document.startViewTransition) return;

            e.preventDefault();
            const href = this.getAttribute('href');

            // Perform transition
            document.startViewTransition(async () => {
                // Fetch the new page content (minimal SPA simulation for transition effect)
                window.location.href = href;
            });
        });
    });
});
