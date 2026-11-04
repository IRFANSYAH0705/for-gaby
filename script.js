document.addEventListener("DOMContentLoaded", () => {

    const byId = id => document.getElementById(id);

    const pages = [
        "homePage",
        "surprisePage",
        "letterPage"
    ].map(byId);

    const openButton = byId("openButton");
    const hugButton = byId("hugButton");

    const typedMessage = byId("typedMessage");
    const scene = byId("coupleScene");

    const caption = byId("caption");
    const afterHug = byId("afterHug");

    const floatingLayer = byId("floatingLayer");


    const message =
    "Gaby, kalau hari ini terasa melelahkan, semoga kamu ingat kalau ada seseorang yang selalu ingin melihat kamu bahagia. Terima kasih sudah hadir di hidupku. Aku mungkin belum sempurna, tapi aku akan terus belajar menyayangimu dengan lebih baik. Sekarang, boleh aku kasih kamu satu pelukan? ♥";


    let typingTimer = null;
    let hugTimers = [];


    // PINDAH HALAMAN
    function showPage(pageId) {

        pages.forEach(page => {
            page.classList.toggle(
                "active",
                page.id === pageId
            );
        });

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }


    // MEMBERSIHKAN TIMER
    function clearHugTimers() {

        hugTimers.forEach(clearTimeout);

        hugTimers = [];

    }


    // MENAMPILKAN PESAN
    function startTyping() {

        clearInterval(typingTimer);
        clearHugTimers();

        typedMessage.textContent = "";

        hugButton.classList.add("hidden");
        afterHug.classList.add("hidden");

        hugButton.disabled = false;

        hugButton.textContent = "Klik untuk berpelukan ♥";

        scene.classList.remove(
            "walking",
            "hugging",
            "complete"
        );

        caption.textContent =
        "Dua orang yang saling menyayangi, sebentar lagi bertemu dalam pelukan.";

        let index = 0;

        typingTimer = setInterval(() => {

            typedMessage.textContent +=
            message.charAt(index);

            index += 1;

            if (index >= message.length) {

                clearInterval(typingTimer);

                hugButton.classList.remove("hidden");

            }

        }, 28);

    }


    // ANIMASI PELUKAN
    function doHug() {

        clearHugTimers();

        scene.classList.remove(
            "walking",
            "hugging",
            "complete"
        );

        void scene.getBoundingClientRect();

        hugButton.disabled = true;

        hugButton.textContent =
        "Mendekat satu sama lain...";

        afterHug.classList.add("hidden");

        caption.textContent =
        "Pelan-pelan, mereka saling mendekat.";

        scene.classList.add("walking");


        // Karakter mulai berjalan
        hugTimers.push(setTimeout(() => {

            scene.classList.remove("walking");

            scene.classList.add("hugging");

            hugButton.textContent =
            "Berpelukan... ♥";

            caption.textContent =
            "Akhirnya, satu pelukan hangat untuk Gaby.";

        }, 1400));


        // Animasi selesai
        hugTimers.push(setTimeout(() => {

            scene.classList.add("complete");

            hugButton.disabled = false;

            hugButton.textContent =
            "Peluk lagi ♥";

            afterHug.classList.remove("hidden");

        }, 2250));

    }


    // TOMBOL BUKA KEJUTAN
    openButton.addEventListener("click", () => {

        showPage("surprisePage");

        startTyping();

    });


    // TOMBOL PELUK
    hugButton.addEventListener("click", doHug);


    // TOMBOL PELUK LAGI
    byId("againButton").addEventListener("click", doHug);


    // BUKA SURAT
    byId("letterButton").addEventListener("click", () => {

        showPage("letterPage");

    });


    // KEMBALI KE KEJUTAN
    byId("backButton").addEventListener("click", () => {

        showPage("surprisePage");

        startTyping();

    });


    // ANIMASI HATI MELAYANG
    function addParticle() {

        const particle = document.createElement("span");

        particle.className = "particle";

        particle.textContent =
        Math.random() > 0.5 ? "♥" : "♡";

        particle.style.left =
        `${Math.random() * 100}%`;

        particle.style.fontSize =
        `${11 + Math.random() * 10}px`;

        particle.style.setProperty(
            "--duration",
            `${9 + Math.random() * 6}s`
        );

        particle.style.setProperty(
            "--drift",
            `${Math.random() * 90 - 45}px`
        );

        floatingLayer.appendChild(particle);

        setTimeout(() => {

            particle.remove();

        }, 16000);

    }


    // MENJALANKAN HATI MELAYANG
    if (
        !window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches
    ) {

        setInterval(addParticle, 1200);

    }

});
