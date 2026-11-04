// =====================================
// FOR GABY - ROMANTIC WEBSITE
// Created with love by Irfan
// =====================================


// Mengambil elemen HTML

const $ = (id) => document.getElementById(id);

const home = $("home");
const hugPage = $("hugPage");
const letterPage = $("letterPage");

const scene = $("scene");
const typed = $("typed");

const hugAction = $("hugAction");
const hugBtn = $("hugBtn");

const caption = $("caption");
const letterAction = $("letterAction");


// Variabel animasi

let typingTimer = null;
let hasHugged = false;


// =====================================
// PINDAH HALAMAN
// =====================================

function showPage(page) {

    [home, hugPage, letterPage].forEach(item => {
        item.classList.remove("active");
    });

    page.classList.add("active");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


// =====================================
// TOMBOL KEJUTAN
// =====================================

$("startBtn").addEventListener("click", () => {

    showPage(hugPage);

    beginTyping();

});


// =====================================
// ANIMASI TEKS ROMANTIS
// =====================================

const message =
"Gaby, kalau hari ini terasa melelahkan, semoga kamu ingat kalau ada seseorang yang selalu ingin melihat kamu bahagia. Terima kasih sudah hadir di hidupku. Aku mungkin belum sempurna, tapi aku akan terus belajar menyayangimu dengan lebih baik. Sekarang, boleh aku kasih kamu satu pelukan? ♥";


function beginTyping() {

    clearInterval(typingTimer);

    typed.textContent = "";

    hugAction.classList.remove("show");
    hugAction.style.display = "none";

    letterAction.style.display = "none";

    scene.classList.remove(
        "walking",
        "hugging",
        "complete"
    );

    hasHugged = false;

    hugBtn.disabled = false;

    hugBtn.textContent = "Klik untuk berpelukan ♡";

    caption.textContent =
        "Dua orang yang saling merindukan, sebentar lagi bertemu dalam pelukan.";

    let i = 0;

    typingTimer = setInterval(() => {

        typed.textContent += message.charAt(i);

        i++;

        // Jika teks sudah selesai

        if (i >= message.length) {

            clearInterval(typingTimer);

            hugAction.style.display = "flex";

            requestAnimationFrame(() => {
                hugAction.classList.add("show");
            });

        }

    }, 34);

}


// =====================================
// ANIMASI BERPELUKAN
// =====================================

function doHug() {

    // Mengulang animasi jika sudah pernah dipeluk

    if (hasHugged) {

        scene.classList.remove(
            "walking",
            "hugging",
            "complete"
        );

        void scene.getBoundingClientRect();

    }

    hasHugged = true;

    hugBtn.disabled = true;

    hugBtn.textContent = "Mendekat satu sama lain…";

    caption.textContent =
        "Pelan-pelan, mereka saling mendekat.";

    scene.classList.remove(
        "hugging",
        "complete"
    );

    scene.classList.add("walking");

    letterAction.style.display = "none";


    // Karakter mulai berjalan

    setTimeout(() => {

        scene.classList.remove("walking");

        scene.classList.add("hugging");

        hugBtn.textContent = "Berpelukan… ♥";

        caption.textContent =
            "Akhirnya, satu pelukan hangat untuk Gaby.";

    }, 1600);


    // Animasi pelukan selesai

    setTimeout(() => {

        scene.classList.add("complete");

        hugBtn.disabled = false;

        hugBtn.textContent = "Peluk lagi ♥";

        letterAction.style.display = "flex";

    }, 3000);

}


// Tombol pelukan

hugBtn.addEventListener("click", doHug);


// =====================================
// TOMBOL ULANG PELUKAN
// =====================================

$("againBtn").addEventListener("click", doHug);


// =====================================
// HALAMAN SURAT CINTA
// =====================================

$("letterBtn").addEventListener("click", () => {

    showPage(letterPage);

});


$("backBtn").addEventListener("click", () => {

    showPage(hugPage);

    beginTyping();

});


// =====================================
// ANIMASI HATI MELAYANG
// =====================================

const ambient = $("ambient");


function addParticle() {

    const element = document.createElement("span");

    element.className = "particle";

    // Simbol yang muncul

    const symbols = ["♥", "✦", "♡"];

    element.textContent =
        symbols[Math.floor(Math.random() * symbols.length)];

    // Posisi hati

    element.style.left = Math.random() * 100 + "%";

    // Ukuran hati

    element.style.fontSize =
        (11 + Math.random() * 12) + "px";

    // Warna hati

    const colors = [
        "#e79ab5",
        "#c3a2cf",
        "#e8b8a9"
    ];

    element.style.color =
        colors[Math.floor(Math.random() * colors.length)];

    // Kecepatan animasi

    element.style.setProperty(
        "--duration",
        (9 + Math.random() * 7) + "s"
    );

    element.style.setProperty(
        "--drift",
        (Math.random() * 100 - 50) + "px"
    );

    ambient.appendChild(element);

    // Menghapus elemen setelah animasi selesai

    setTimeout(() => {

        element.remove();

    }, 17000);

}


// Menjalankan animasi hati

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {

    setInterval(addParticle, 1100);

}
