document.addEventListener('DOMContentLoaded', () => {
    // === DATA: POSTS DATABASE ===
    const postsResult = [
        // 2026 POSTS
        {
            title: "The Future of Custom ROMs in 2026",
            summary: "With new Android security measures, the custom ROM scene is evolving. Here's what KernelSU and APatch mean for the future of modding.",
            content: `
                <p>The landscape of Android modding has shifted dramatically in 2026. Google's tightening grip on SafetyNet and Play Integrity API has made traditional rooting methods like Magisk harder to hide. Enter <strong>KernelSU</strong> and <strong>APatch</strong>.</p>
                
                <h3>Kernel Layout & Security</h3>
                <p>Unlike userspace rooting solutions, KernelSU operates directly in the kernel space. This means it has 'god mode' privileges before the Android OS even boots completely. The advantage? It's virtually invisible to userspace applications, including banking apps and games that trigger anti-cheat protections.</p>
                
                <h3>The Rise of GKI</h3>
                <p>Google's Generic Kernel Image (GKI) project, which started years ago, has now reached maturity. This standardisation allows developers to create 'Generic Kernel' mods that work across multiple devices without needing device-specific source trees. This has exploded the availability of custom kernels for midrange devices.</p>
                
                <h3>Is unlocking dead?</h3>
                <p>Not yet. While manufacturers like Samsung and Xiaomi have implemented stricter unlocking policies (requiring community reputation or waiting periods), the open-source community always finds a way. The new exploit vectors in 2026 focus on finding vulnerabilities in the bootrom level of MediaTek chips.</p>
            `,
            year: "2026",
            category: "Android",
            badgeClass: "android-badge",
            icon: "fa-android"
        },
        {
            title: "Linux Distros: Top Picks for 2026",
            summary: "Arch is still king, but immutable distros like Fedora Silverblue are taking over the mainstream. My top 5 breakdown.",
            content: `
                <p>Linux in 2026 is cleaner, faster, and more immutable. The era of breaking your system with a bad update is ending thanks to the rise of immutable file systems.</p>
                
                <h3>1. Fedora Silverblue (Atomic)</h3>
                <p>The gold standard for stability. The OS is read-only. Applications live in Flatpaks or containers (Toolbox/Distrobox). If an update breaks something, you simply rollback to the previous deployment. It's bulletproof.</p>
                
                <h3>2. Arch Linux</h3>
                <p>For those who still want total control. The Wiki is timeless, and the AUR (Arch User Repository) remains the single largest library of software in the Linux world. With the new <code>archinstall</code> scripts, getting it running is easier than ever.</p>
                
                <h3>3. NixOS</h3>
                <p>From niche to mainstream. NixOS allows you to declare your entire system configuration in a single file. Want to move to a new PC? Copy your <code>configuration.nix</code>, run one command, and your exact environment is replicated perfectly.</p>
            `,
            year: "2026",
            category: "Linux",
            badgeClass: "linux-badge",
            icon: "fa-linux"
        },
        {
            title: "Optimizing Android Kernel for Gaming",
            summary: "Schedulers, governors, and thermal throttling. How to squeeze every FPS out of your Snapdragon.",
            content: `
                <p>Gaming on Android isn't just about raw GPU power; it's about how that power is managed. The default kernel settings prioritize battery life and heat management, often throttling performance too aggressively.</p>
                
                <h3>CPU Governors</h3>
                <p>Switching from 'schedutil' to 'performance' or 'blu_schedutil' can drastically improve frame pacing. We analyze how the scheduler decides when to ramp up clock speeds and how to tune it to react insantly to touch inputs.</p>
                
                <h3>Thermal Modding</h3>
                <p>Most OEMs set thermal trip points very low (around 45°C). By patching the thermal config (DTBO), we can safely raise these limits to 50-55°C, allowing the CPU to sustain max frequencies for longer gaming sessions. Caution: Device will get hot!</p>
            `,
            year: "2026",
            category: "Android",
            badgeClass: "android-badge",
            icon: "fa-android"
        },
        {
            title: "Wayland vs X11: It's Finally Over",
            summary: "In 2026, X11 is officially legacy. Why Wayland is now the default for NVIDIA and everyone else.",
            content: `
                <p>For years, 'Wayland isn't ready' was the meme. In 2026, that's no longer true. With the release of heavy desktop environments exclusively supporting Wayland, X11 has moved to 'maintenance only' mode.</p>
                <p>Variable Refresh Rate (VRR), HDR support, and fractional scaling simply work better on Wayland. The security architecture, which isolates windows from each other, prevents apps from spying on your keystrokes—a fundamental flaw in X11.</p>
            `,
            year: "2026",
            category: "Linux",
            badgeClass: "linux-badge",
            icon: "fa-linux"
        },

        // 2025 POSTS
        {
            title: "KernelSU: The New Root Standard",
            summary: "Why Magisk is being replaced by KernelSU for better stealth and cleaner modules.",
            content: `
                <p>KernelSU (Kernel-based SuperUser) has revolutionized rooting. Unlike Magisk, which uses a patch in the boot image ramdisk, KernelSU is embedded in the kernel source itself.</p>
                <h3>Why does it matter?</h3>
                <p>Because the SU binary/daemon isn't running in userspace, apps looking for 'su' or 'magisk' files can't find them. You grant permission via a manager app, but the mechanism is deeper. It enables 'Root Profile' per app, giving granular control that Magisk Manager only dreamed of.</p>
            `,
            year: "2025",
            category: "Android",
            badgeClass: "android-badge",
            icon: "fa-android"
        },
        {
            title: "Building LineageOS from Source",
            summary: "A guide to setting up your build environment, syncing the repo, and compiling your own Android OS.",
            content: `
                <p>Building your own ROM is the ultimate flex. You need a powerful machine (16GB+ RAM, 200GB+ SSD) and Linux (Ubuntu/Debian).</p>
                <p>The process involves:</p>
                <ol>
                    <li><strong>Repo Init</strong>: Downloading the manifest.</li>
                    <li><strong>Repo Sync</strong>: Downloading the 100GB+ source code.</li>
                    <li><strong>Device Tree & Vendor Blobs</strong>: The specific files for your phone. Extracting proprietary blobs from stock firmware is usually the hardest part.</li>
                    <li><strong>Brunch</strong>: The compilation command. <code>brunch device_codename</code>.</li>
                </ol>
            `,
            year: "2025",
            category: "Android",
            badgeClass: "android-badge",
            icon: "fa-android"
        },
        {
            title: "Ethical Hacking on Android (NetHunter)",
            summary: "Turning your phone into a penetration testing tool with Kali NetHunter.",
            content: `
                <p>Kali NetHunter allows you to run a full Kali Linux overlay on your Android device. It supports wireless injection, HID attacks (BadUSB), and more.</p>
                <p>With a custom kernel supporting standard WiFi drivers, you can use an external OTG WiFi adapter to put the card in <strong>Monitor Mode</strong> and capture handshakes for WPA cracking. Always use this responsibly and legally!</p>
            `,
            year: "2025",
            category: "Security",
            badgeClass: "android-badge",
            icon: "fa-user-secret"
        },
        {
            title: "ZSH vs BASH: Why Switch?",
            summary: "Oh-My-Zsh, plugins, and autocomplete. Why your terminal needs an upgrade.",
            content: `
                <p>Bash is the default, but ZSH (Z Shell) is the power user's choice. When combined with <strong>Oh My Zsh</strong>, it gains superpowers.</p>
                <ul>
                    <li><strong>Context aware</strong>: Shows git branch and status right in the prompt.</li>
                    <li><strong>Auto-suggestions</strong>: Remembers commands you typed yesterday and suggests them in grey as you type.</li>
                    <li><strong>Syntax Highlighting</strong>: Colors commands green (valid) or red (invalid) before you even hit enter.</li>
                </ul>
            `,
            year: "2025",
            category: "Linux",
            badgeClass: "linux-badge",
            icon: "fa-terminal"
        },

        // 2024 POSTS
        {
            title: "Android Bootloader Explained",
            summary: "The first step to freedom. Understanding the chain of trust and how unlocking breaks it.",
            content: `
                <p>The bootloader is the gatekeeper. It initiates the hardware sequence and verifies the digital signature of the <code>boot.img</code> and <code>recovery.img</code>.</p>
                <p>When you 'Unlock' the bootloader, you are effectively telling the device: "Ignore the signature check." preventing the chain of trust. This trips eFuses (like Samsung Knox) which are physical hardware switches that cannot be reset, permanently voiding warranties on secure features like Samsung Pay.</p>
            `,
            year: "2024",
            category: "Android",
            badgeClass: "android-badge",
            icon: "fa-android"
        },
        {
            title: "Custom Recovery (TWRP)",
            summary: "The essential tool for flashing zips, taking backups, and saving your device from bootloops.",
            content: `
                <p>TWRP (Team Win Recovery Project) provides a touch interface to manage the device when the Android OS isn't running.</p>
                <p><strong>Nandroid Backup</strong>: Creating an exact clone of your system partition. If a bad module bricks your phone, you restore the backup in TWRP and you're back in 5 minutes.</p>
            `,
            year: "2024",
            category: "Android",
            badgeClass: "android-badge",
            icon: "fa-android"
        },
        {
            title: "Root & Magisk",
            summary: "Systemless root, modules, and passing SafetyNet.",
            content: `
                <p>Root gives you UID 0. Magisk achieves this 'systemlessly' by mounting a mask over the system partition. This allows you to hide root from banking apps using Zygisk (Zygote injection).</p>
            `,
            year: "2024",
            category: "Android",
            badgeClass: "android-badge",
            icon: "fa-android"
        },
        {
            title: "Android Partitions Deep Dive",
            summary: "System, Data, Vendor, Boot. What lives where?",
            content: `
                <p><strong>/system</strong>: The Android OS framework and system apps.</p>
                <p><strong>/data</strong>: Your photos, apps, and settings. This is encrypted by default.</p>
                <p><strong>/vendor</strong>: Drivers for camera, sensors, and screen. Highly specific to the device.</p>
            `,
            year: "2024",
            category: "Android",
            badgeClass: "android-badge",
            icon: "fa-hdd"
        },
        {
            title: "Advanced Linux Networking",
            summary: "IP commands, NMCLI, and troubleshooting connections.",
            content: `
                <p>Forget ifconfig. <code>ip link show</code> and <code>ip addr add</code> are the modern tools. We explore how to set up static IPs directly via terminal using NetworkManager (nmcli) text user interface (nmtui).</p>
            `,
            year: "2024",
            category: "Linux",
            badgeClass: "linux-badge",
            icon: "fa-network-wired"
        }
    ];

    // === DOM ELEMENTS ===
    const themeBtn = document.getElementById('theme-toggle');
    const icon = themeBtn.querySelector('i');

    // Links
    const linkHome = document.getElementById('nav-posts');
    const linkAbout = document.getElementById('nav-about');

    // Views
    const homeView = document.getElementById('home-view');
    const aboutView = document.getElementById('about-view');

    // Modal
    const modal = document.getElementById('post-modal');
    const closeModal = document.querySelector('.close-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalBody = document.getElementById('modal-body');
    const modalBadge = document.getElementById('modal-badge');
    const modalDate = document.getElementById('modal-date');

    // === THEME TOGGLE (WITH PERSISTENCE) ===
    // 1. Check LocalStorage on Load
    const savedTheme = localStorage.getItem('medina-theme');
    if (savedTheme === 'light') {
        document.body.classList.add('light-mode');
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }

    // 2. Toggle & Save
    themeBtn.addEventListener('click', () => {
        document.body.classList.toggle('light-mode');

        if (document.body.classList.contains('light-mode')) {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
            localStorage.setItem('medina-theme', 'light');
        } else {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
            localStorage.setItem('medina-theme', 'dark');
        }
    });

    // === NAVIGATION LOGIC (SPA) ===
    function switchView(viewName) {
        // Simple toggle with display:none logic
        if (viewName === 'home') {
            if (aboutView) aboutView.classList.add('hidden');
            if (homeView) homeView.classList.remove('hidden');
            if (linkHome) linkHome.classList.add('active');
            if (linkAbout) linkAbout.classList.remove('active');
        } else {
            if (homeView) homeView.classList.add('hidden');
            if (aboutView) aboutView.classList.remove('hidden');
            if (linkAbout) linkAbout.classList.add('active');
            if (linkHome) linkHome.classList.remove('active');
        }

        // Scroll to content start (optional, good for mobile)
        // window.scrollTo({ top: 300, behavior: 'smooth' });
    }

    linkHome.addEventListener('click', (e) => {
        e.preventDefault();
        switchView('home');
    });

    linkAbout.addEventListener('click', (e) => {
        e.preventDefault();
        switchView('about');
    });

    // === POST RENDERING ===
    const postsContainer = document.getElementById('posts-container');
    const viewMoreBtn = document.getElementById('view-more-btn');
    const viewMoreContainer = document.querySelector('.view-more-container');

    function renderPostItem(post, container) {
        const article = document.createElement('article');
        article.className = 'post-card clickable';
        article.innerHTML = `
            <div class="post-header">
                <span class="badg ${post.badgeClass}"><i class="fa-brands ${post.icon}"></i> ${post.category}</span>
                <span class="post-date">${post.year}</span>
            </div>
            <h3>${post.title}</h3>
            <p>${post.summary}</p>
        `;
        article.addEventListener('click', () => openModal(post));
        container.appendChild(article);
    }

    function renderPosts() {
        postsContainer.innerHTML = '';

        const initialLimit = 2;

        // Render First 2 Posts
        postsResult.slice(0, initialLimit).forEach(post => {
            renderPostItem(post, postsContainer);
        });

        // Hide button if no more posts, otherwise wait for click
        if (postsResult.length <= initialLimit) {
            viewMoreContainer.style.display = 'none';
        } else {
            viewMoreContainer.style.display = 'block';
        }

        viewMoreBtn.onclick = () => {
            // Render the rest
            const remainingPosts = postsResult.slice(initialLimit);

            remainingPosts.forEach(post => {
                renderPostItem(post, postsContainer);
            });

            viewMoreContainer.style.display = 'none'; // Hide button after expanding
        };
    }

    // === MODAL LOGIC ===
    function openModal(post) {
        modalTitle.textContent = post.title;
        modalBody.innerHTML = post.content;
        modalBadge.className = `badg ${post.badgeClass}`;
        modalBadge.textContent = post.category;
        modalDate.textContent = post.year;

        modal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Stop scrolling
    }

    closeModal.addEventListener('click', () => {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto'; // Resume scrolling
    });

    // Close on click outside
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });

    // === INIT ===
    // Set Year
    const yearSpan = document.getElementById('year');
    if (yearSpan) yearSpan.textContent = new Date().getFullYear();

    // Default View: Home
    switchView('home');

    // Render Content
    renderPosts();
});
