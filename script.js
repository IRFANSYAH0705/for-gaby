const $ = id => document.getElementById(id);

const home = $("home");
const hugPage = $("hugPage");
const letterPage = $("letterPage");

const scene = $("scene");
const typed = $("typed");
const hugAction = $("hugAction");
const hugBtn = $("hugBtn");

const caption = $("caption");
const letterAction = $("letterAction");
const ambient = $("ambient");

const message = "Gaby, kalau hari ini terasa melelahkan, semoga kamu ingat kalau ada seseorang yang selalu ingin melihat kamu bahagia. Terima kasih sudah hadir di hidupku. Aku mungkin belum sempurna, tapi aku akan terus belajar menyayangimu dengan lebih baik. Sekarang, boleh aku kasih kamu satu pelukan? ♥";

let typingTimer = null;
let hugTimers = [];

function showPage(page) {
    [home, hugPage, letterPage].forEach(p => {
        p.classList.remove("active");
    });

    page.classList.add("active");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


// Tombol mulai
$("startBtn").addEventListener("click", () => {
    showPage(hugPage);
    beginTyping();
});


// Menampilkan pesan satu per satu
function beginTyping() {

    clearInterval(typingTimer);

    hugTimers.forEach(clearTimeout);
    hugTimers = [];

    typed.textContent = "";

    hugAction.classList.remove("show");
    hugAction.style.display = "none";

    letterAction.style.display = "none";

    scene.classList.remove("walking", "hugging", "complete");

    hugBtn.disabled = false;
    hugBtn.textContent = "Klik untuk berpelukan ♡";

    caption.textContent = "Dua orang yang saling merindukan, sebentar lagi bertemu dalam pelukan.";

    let i = 0;

    typingTimer = setInterval(() => {

        typed.textContent += message.charAt(i);

        i++;

        if (i >= message.length) {

            clearInterval(typingTimer);

            hugAction.style.display = "flex";

            requestAnimationFrame(() => {
                hugAction.classList.add("show");
            });
        }

    }, 32);
}


// Animasi berjalan dan berpelukan
function doHug() {

    hugTimers.forEach(clearTimeout);
    hugTimers = [];

    scene.classList.remove("walking", "hugging", "complete");

    void scene.getBoundingClientRect();

    hugBtn.disabled = true;
    hugBtn.textContent = "Mendekat satu sama lain…";

    caption.textContent = "Pelan-pelan, mereka saling mendekat.";

    letterAction.style.display = "none";

    scene.classList.add("walking");

    hugTimers.push(setTimeout(() => {

        scene.classList.remove("walking");
        scene.classList.add("hugging");

        hugBtn.textContent = "Berpelukan… ♥";

        caption.textContent = "Akhirnya, satu pelukan hangat untuk Gaby.";

    }, 1650));


    hugTimers.push(setTimeout(() => {

        scene.classList.add("complete");

        hugBtn.disabled = false;
        hugBtn.textContent = "Peluk lagi ♥";

        letterAction.style.display = "flex";

    }, 2850));
}


// Tombol peluk
hugBtn.addEventListener("click", doHug);

$("againBtn").addEventListener("click", doHug);


// Membuka surat
$("letterBtn").addEventListener("click", () => {
    showPage(letterPage);
});


// Kembali ke halaman kejutan
$("backBtn").addEventListener("click", () => {
    showPage(hugPage);
    beginTyping();
});


// Animasi hati yang melayang
function addParticle() {

    const el = document.createElement("span");

    el.className = "particle";

    el.textContent = ["♥", "✦", "♡"][Math.floor(Math.random() * 3)];

    el.style.left = Math.random() * 100 + "%";

    el.style.fontSize = 11 + Math.random() * 12 + "px";

    el.style.setProperty("--dur", 9 + Math.random() * 7 + "s");

    el.style.setProperty("--drift", Math.random() * 100 - 50 + "px");

    ambient.appendChild(el);

    setTimeout(() => {
        el.remove();
    }, 17000);
}


// Menjalankan animasi hati
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    setInterval(addParticle, 1100);
}
```
