:root {
  --ink: #493440;
  --muted: #907987;
  --pink: #df7e9f;
  --rose: #f3b5c9;
  --plum: #9c789e;
  --line: #f0dce5;
  --paper: #fffdfd;
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  min-height: 100vh;
  color: var(--ink);
  font-family: "DM Sans", sans-serif;

  background:
    radial-gradient(ellipse at 15% 10%, #fff 0, transparent 35%),
    radial-gradient(ellipse at 90% 18%, #f3e5f3 0, transparent 34%),
    linear-gradient(135deg, #fff6f8, #f7f2fb 55%, #fff8f1);

  overflow-x: hidden;
}

button {
  font: inherit;
}

#ambient {
  position: fixed;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
  z-index: 0;
}

.particle {
  position: absolute;
  bottom: -35px;
  opacity: 0;
  animation: rise var(--duration) linear forwards;
  filter: drop-shadow(0 3px 5px #c27d9b20);
}

@keyframes rise {
  10% {
    opacity: .8;
  }

  to {
    transform: translate3d(var(--drift), -110vh, 0) rotate(35deg);
    opacity: 0;
  }
}

.site {
  position: relative;
  z-index: 1;
  min-height: 100vh;
  padding: 24px 18px 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
}

.nav {
  width: min(100%, 980px);
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto 22px;
}

.brand {
  font: 600 21px "Playfair Display", serif;
  letter-spacing: -.3px;
  color: #76566a;
}

.brand span {
  color: var(--pink);
}

.nav-tag {
  font-size: 10px;
  letter-spacing: 2px;
  font-weight: 700;
  color: #a17e91;
  border: 1px solid #fff;
  background: #ffffff9c;
  padding: 9px 14px;
  border-radius: 30px;
}

main {
  width: min(100%, 850px);
  margin: auto;
}

.card {
  position: relative;
  overflow: hidden;
  text-align: center;

  padding: clamp(28px, 6vw, 58px) clamp(18px, 5vw, 55px);

  border: 1px solid #fff;
  border-radius: 34px;

  background: linear-gradient(145deg, #ffffffed, #fffafdde);

  box-shadow:
    0 28px 80px #77546b18,
    0 3px 12px #77546b08;

  backdrop-filter: blur(18px);

  animation: cardIn .75s cubic-bezier(.2, .8, .2, 1);
}

.card:before {
  content: "";
  position: absolute;
  inset: 11px;
  border: 1px solid #f1dce6;
  border-radius: 25px;
  pointer-events: none;
}

.card:after {
  content: "";
  position: absolute;
  width: 230px;
  height: 230px;
  right: -150px;
  top: -155px;
  border-radius: 50%;
  background: #f5d8e6;
  filter: blur(38px);
  opacity: .5;
  pointer-events: none;
}

@keyframes cardIn {
  from {
    opacity: 0;
    transform: translateY(15px) scale(.99);
  }

  to {
    opacity: 1;
    transform: none;
  }
}

.page {
  display: none;
}

.page.active {
  display: block;
}

.eyebrow {
  position: relative;
  z-index: 1;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 3px;
  color: #b17d96;
}

h1,
h2 {
  position: relative;
  z-index: 1;
  font-family: "Playfair Display", serif;
  font-weight: 600;
  letter-spacing: -1.2px;
}

h1 {
  font-size: clamp(42px, 8vw, 70px);
  line-height: 1.04;
  margin: 14px 0 16px;
}

h1 em {
  font-weight: 500;
  color: var(--pink);
}

h2 {
  font-size: clamp(31px, 5vw, 45px);
  margin: 12px 0;
  color: #805c73;
}

.lead {
  position: relative;
  z-index: 1;
  max-width: 560px;
  margin: 0 auto;
  color: var(--muted);
  font-size: 14px;
  line-height: 1.95;
}

.btn-row {
  position: relative;
  z-index: 2;

  display: flex;
  justify-content: center;
  gap: 12px;
  flex-wrap: wrap;

  margin-top: 27px;
}

.btn {
  min-height: 48px;
  padding: 0 24px;
  border-radius: 999px;
  border: 1px solid transparent;
  cursor: pointer;
  font-weight: 700;
  font-size: 13px;

  transition:
    transform .25s,
    box-shadow .25s,
    background .25s;
}

.btn:hover {
  transform: translateY(-3px);
}

.btn:focus-visible {
  outline: 3px solid #d995b4;
  outline-offset: 3px;
}

.btn-primary {
  color: white;
  background: linear-gradient(110deg, #df7e9f, #ad8ac2);
  box-shadow:
    0 10px 25px #d17d9c40,
    inset 0 1px #ffffff55;
}

.btn-primary:hover {
  box-shadow: 0 14px 30px #d17d9c55;
}

.btn-quiet {
  color: #986e85;
  background: #fff;
  border-color: #f0dce5;
}

.signature {
  margin-top: 29px;
  color: #b092a1;
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 2.6px;
}


/* TEDDY BEAR */

.teddy-wrap {
  height: 245px;
  display: grid;
  place-items: center;
  position: relative;
  margin: 10px auto 8px;
}

.teddy-aura {
  position: absolute;
  width: 220px;
  height: 190px;
  border-radius: 50%;

  background: radial-gradient(
    circle,
    #f9dce7 0,
    #f4e8f2 55%,
    transparent 72%
  );

  filter: blur(15px);
}

.teddy {
  position: relative;
  width: 154px;
  height: 205px;

  animation: teddyFloat 3.2s ease-in-out infinite;

  filter: drop-shadow(0 17px 13px #80576a25);
}

@keyframes teddyFloat {
  0%, 100% {
    transform: translateY(0) rotate(-2deg);
  }

  50% {
    transform: translateY(-11px) rotate(2deg);
  }
}

.teddy .ear {
  position: absolute;
  top: 15px;
  width: 48px;
  height: 48px;
  background: #b77c5e;
  border: 6px solid #a66d52;
  border-radius: 50%;
}

.teddy .ear.l {
  left: 13px;
}

.teddy .ear.r {
  right: 13px;
}

.teddy .head {
  position: absolute;
  top: 27px;
  left: 19px;
  width: 116px;
  height: 105px;
  background: #d7a17d;
  border-radius: 48% 48% 46% 46%;
  z-index: 2;
}

.teddy .muzzle {
  position: absolute;
  left: 39px;
  top: 59px;
  width: 40px;
  height: 29px;
  border-radius: 50%;
  background: #f2d7bd;
}

.teddy .eye {
  position: absolute;
  top: 46px;
  width: 7px;
  height: 9px;
  border-radius: 50%;
  background: #49343a;
  z-index: 3;
}

.teddy .eye.l {
  left: 34px;
}

.teddy .eye.r {
  right: 34px;
}

.teddy .nose {
  position: absolute;
  top: 65px;
  left: 52px;
  width: 12px;
  height: 9px;
  border-radius: 50%;
  background: #51383b;
  z-index: 4;
}

.teddy .smile {
  position: absolute;
  top: 75px;
  left: 53px;
  width: 12px;
  height: 7px;
  border-bottom: 2px solid #95616a;
  border-radius: 50%;
  z-index: 4;
}

.teddy .body {
  position: absolute;
  top: 122px;
  left: 27px;
  width: 100px;
  height: 75px;
  border-radius: 48px 48px 30px 30px;
  background: #bd835f;
}

.teddy .belly {
  position: absolute;
  left: 29px;
  top: 13px;
  width: 42px;
  height: 48px;
  border-radius: 50%;
  background: #f0d2b5;
}

.teddy .arm {
  position: absolute;
  top: 126px;
  width: 35px;
  height: 58px;
  border-radius: 30px;
  background: #c28a66;
  z-index: 3;
}

.teddy .arm.l {
  left: 2px;
  transform-origin: top center;
  animation: bearWave 2.2s ease-in-out infinite;
}

.teddy .arm.r {
  right: 2px;
  transform: rotate(-16deg);
}

@keyframes bearWave {
  0%, 100% {
    transform: rotate(12deg);
  }

  50% {
    transform: rotate(43deg);
  }
}

.teddy .foot {
  position: absolute;
  bottom: 0;
  width: 47px;
  height: 24px;
  border-radius: 50%;
  background: #a96f50;
}

.teddy .foot.l {
  left: 22px;
}

.teddy .foot.r {
  right: 22px;
}

.teddy-heart {
  position: absolute;
  z-index: 5;
  top: 128px;
  left: 65px;
  font-size: 22px;
  animation: heartBeat 1.4s ease-in-out infinite;
}

@keyframes heartBeat {
  50% {
    transform: scale(1.22);
  }
}


/* PESAN ROMANTIS */

.message-box {
  min-height: 118px;
  max-width: 610px;
  margin: 15px auto 4px;

  display: flex;
  align-items: center;
  justify-content: center;
}

#typed {
  color: #856c7b;
  font-size: 15px;
  line-height: 2;
  max-width: 590px;
}

#typed:after {
  content: "";
  display: inline-block;
  width: 1px;
  height: 16px;
  margin-left: 3px;
  background: #d77f9e;
  vertical-align: -3px;
  animation: blink .8s steps(2) infinite;
}

@keyframes blink {
  50% {
    opacity: 0;
  }
}

#hugAction {
  display: none;
}

#hugAction.show {
  display: inline-flex;
  animation: buttonIn .5s ease both;
}

@keyframes buttonIn {
  from {
    opacity: 0;
    transform: translateY(8px);
  }

  to {
    opacity: 1;
    transform: none;
  }
}


/* KARAKTER */

.scene-shell {
  position: relative;
  max-width: 690px;
  margin: 14px auto 0;
  padding: 8px 0 0;
}

.scene {
  width: 100%;
  display: block;
  overflow: visible;
}

.scene .back-glow {
  fill: #f8e1eb;
  opacity: .65;
  filter: blur(28px);
}

.scene .floor-shadow {
  fill: #b48ba0;
  opacity: .13;
  filter: blur(7px);
}

#girl,
#boy {
  transform-box: fill-box;
  transform-origin: center bottom;
  will-change: transform;
}

#girl {
  transform: translateX(-105px);
}

#boy {
  transform: translateX(105px);
}

#girl .body-main {
  fill: #df8eaa;
}

#boy .body-main {
  fill: #7886bb;
}

.skin {
  fill: #eab895;
}

.girl-hair {
  fill: #684653;
}

.boy-hair {
  fill: #44353d;
}

.eye-svg {
  fill: #49353b;
}

.cheek {
  fill: #e98e9c;
  opacity: .5;
}

.shoe {
  fill: #805c71;
}


/* POSISI ANGGOTA TUBUH */

#girl .arm-front,
#girl .arm-back,
#boy .arm-front,
#boy .arm-back {
  transform-box: fill-box;
  transform-origin: 12% 18%;
  will-change: transform;
}

#girl .head-girl,
#boy .head-boy {
  transform-box: fill-box;
  transform-origin: 50% 88%;
}

#girl .leg-left,
#girl .leg-right,
#boy .leg-left,
#boy .leg-right {
  transform-box: fill-box;
  transform-origin: 50% 8%;
  will-change: transform;
}

#girl .legs,
#boy .legs {
  transform-box: fill-box;
  transform-origin: center top;
}


/* ANIMASI BERJALAN */

#scene.walking #girl {
  animation: girlWalkIn 1.65s cubic-bezier(.2, .78, .18, 1) forwards;
}

#scene.walking #boy {
  animation: boyWalkIn 1.65s cubic-bezier(.2, .78, .18, 1) forwards;
}

@keyframes girlWalkIn {
  0% {
    transform: translateX(-105px) translateY(0);
  }

  18% {
    transform: translateX(-82px) translateY(-5px);
  }

  36% {
    transform: translateX(-58px) translateY(0);
  }

  54% {
    transform: translateX(-34px) translateY(-4px);
  }

  72% {
    transform: translateX(-14px) translateY(0);
  }

  88% {
    transform: translateX(-7px) translateY(-2px);
  }

  100% {
    transform: translateX(-7px) translateY(0);
  }
}

@keyframes boyWalkIn {
  0% {
    transform: translateX(105px) translateY(0);
  }

  18% {
    transform: translateX(82px) translateY(-5px);
  }

  36% {
    transform: translateX(58px) translateY(0);
  }

  54% {
    transform: translateX(34px) translateY(-4px);
  }

  72% {
    transform: translateX(14px) translateY(0);
  }

  88% {
    transform: translateX(7px) translateY(-2px);
  }

  100% {
    transform: translateX(7px) translateY(0);
  }
}

@keyframes legSwingForward {
  0%, 100% {
    transform: rotate(0deg) translateY(0);
  }

  50% {
    transform: rotate(10deg) translateY(-2px);
  }
}

@keyframes legSwingBack {
  0%, 100% {
    transform: rotate(0deg) translateY(0);
  }

  50% {
    transform: rotate(-10deg) translateY(-2px);
  }
}

@keyframes armSwingA {
  0%, 100% {
    transform: rotate(0);
  }

  50% {
    transform: rotate(-9deg);
  }
}

@keyframes armSwingB {
  0%, 100% {
    transform: rotate(0);
  }

  50% {
    transform: rotate(9deg);
  }
}

#scene.walking #girl .leg-left,
#scene.walking #boy .leg-right {
  animation: legSwingForward .34s ease-in-out 4;
}

#scene.walking #girl .leg-right,
#scene.walking #boy .leg-left {
  animation: legSwingBack .34s ease-in-out 4;
}

#scene.walking #girl .arm-front,
#scene.walking #boy .arm-front {
  animation: armSwingA .34s ease-in-out 4;
}

#scene.walking #girl .arm-back,
#scene.walking #boy .arm-back {
  animation: armSwingB .34s ease-in-out 4;
}


/* ANIMASI BERPELUKAN */

#scene.hugging #girl {
  animation: girlEmbrace .95s cubic-bezier(.18, .82, .22, 1) forwards;
}

#scene.hugging #boy {
  animation: boyEmbrace .95s cubic-bezier(.18, .82, .22, 1) forwards;
}

@keyframes girlEmbrace {
  0% {
    transform: translateX(-7px) translateY(0) rotate(0);
  }

  55% {
    transform: translateX(39px) translateY(-3px) rotate(-4deg);
  }

  78% {
    transform: translateX(47px) translateY(0) rotate(-7deg);
  }

  100% {
    transform: translateX(43px) translateY(0) rotate(-6deg);
  }
}

@keyframes boyEmbrace {
  0% {
    transform: translateX(7px) translateY(0) rotate(0);
  }

  55% {
    transform: translateX(-39px) translateY(-3px) rotate(4deg);
  }

  78% {
    transform: translateX(-47px) translateY(0) rotate(7deg);
  }

  100% {
    transform: translateX(-43px) translateY(0) rotate(6deg);
  }
}


/* GERAKAN TANGAN MERANGKUL */

#scene.hugging #girl .arm-front {
  animation: girlHugArm .8s .12s cubic-bezier(.2, .8, .2, 1) forwards;
}

#scene.hugging #boy .arm-front {
  animation: boyHugArm .8s .12s cubic-bezier(.2, .8, .2, 1) forwards;
}

@keyframes girlHugArm {
  to {
    transform: rotate(-92deg) translate(1px, 2px);
  }
}

@keyframes boyHugArm {
  to {
    transform: rotate(92deg) translate(-1px, 2px);
  }
}

#scene.hugging #girl .arm-back {
  animation: girlBackArm .75s .18s ease-out forwards;
}

#scene.hugging #boy .arm-back {
  animation: boyBackArm .75s .18s ease-out forwards;
}

@keyframes girlBackArm {
  to {
    transform: rotate(30deg);
  }
}

@keyframes boyBackArm {
  to {
    transform: rotate(-30deg);
  }
}


/* KEPALA BERSANDAR */

#scene.hugging #girl .head-girl {
  animation: girlHeadRest .8s .2s ease-out forwards;
}

#scene.hugging #boy .head-boy {
  animation: boyHeadRest .8s .2s ease-out forwards;
}

@keyframes girlHeadRest {
  to {
    transform: rotate(7deg) translate(4px, 3px);
  }
}

@keyframes boyHeadRest {
  to {
    transform: rotate(-7deg) translate(-4px, 3px);
  }
}


/* EFEK PELUKAN */

#scene.hugging .floor-shadow {
  animation: shadowSqueeze 1s ease-out forwards;
}

@keyframes shadowSqueeze {
  to {
    transform: scaleX(.72);
    opacity: .2;
  }
}

#scene.hugging .hug-halo {
  animation: haloPulse 2.4s ease-in-out infinite;
}

@keyframes haloPulse {
  50% {
    opacity: .95;
    transform: scale(1.09);
  }
}

.hug-halo {
  opacity: 0;
  transform-origin: center;
}

#scene.hugging .hug-halo {
  opacity: .8;
}

.speech {
  opacity: 0;
  transform: translateY(8px);
  transition: .5s ease;
  pointer-events: none;
}

#scene.hugging .speech {
  opacity: 1;
  transform: translateY(0);
  transition-delay: .45s;
}

.heart-pop {
  transform-box: fill-box;
  transform-origin: center;
  opacity: 0;
}

#scene.hugging .heart-pop {
  animation: popHeart 1.8s ease-out forwards;
}

#scene.hugging .heart-pop:nth-of-type(2) {
  animation-delay: .12s;
}

#scene.hugging .heart-pop:nth-of-type(3) {
  animation-delay: .24s;
}

#scene.hugging .heart-pop:nth-of-type(4) {
  animation-delay: .36s;
}

@keyframes popHeart {
  0% {
    opacity: 0;
    transform: scale(.2) translateY(15px);
  }

  25% {
    opacity: 1;
    transform: scale(1.2) translateY(-5px);
  }

  100% {
    opacity: 0;
    transform: scale(.8) translateY(-65px);
  }
}


/* POSISI AKHIR */

#scene.complete #girl {
  transform: translateX(43px) rotate(-6deg);
}

#scene.complete #boy {
  transform: translateX(-43px) rotate(6deg);
}

#scene.complete #girl,
#scene.complete #boy {
  animation: coupleBreath 3.2s ease-in-out infinite;
}

@keyframes coupleBreath {
  0%, 100% {
    translate: 0 0;
  }

  50% {
    translate: 0 -2px;
  }
}

#scene.complete .speech {
  opacity: 1;
  transform: translateY(0);
}

#scene.complete .hug-halo {
  opacity: .8;
}

.caption {
  min-height: 25px;
  color: #a17d90;
  font-size: 13px;
  letter-spacing: .2px;
  margin-top: 2px;
}


/* SURAT */

.letter {
  max-width: 550px;
  margin: 22px auto 0;
  padding: 28px 30px;

  background: #fff9fc;
  border: 1px solid var(--line);
  border-radius: 22px;

  color: #806879;
  font-size: 14px;
  line-height: 2;
  text-align: left;
}

.letter .salute {
  font: 600 25px "Playfair Display", serif;
  color: var(--pink);
  text-align: center;
  margin-bottom: 12px;
}


/* TAMPILAN HP */

@media(max-width: 600px) {

  .site {
    padding: 15px 12px;
  }

  .nav {
    margin-bottom: 14px;
  }

  .brand {
    font-size: 19px;
  }

  .nav-tag {
    font-size: 9px;
    padding: 8px 10px;
  }

  .card {
    border-radius: 25px;
    padding: 32px 18px;
  }

  .card:before {
    inset: 8px;
    border-radius: 18px;
  }

  .teddy-wrap {
    height: 220px;
  }

  .message-box {
    min-height: 135px;
  }

  #typed {
    font-size: 14px;
    line-height: 1.9;
  }

  .scene-shell {
    margin: 8px -12px 0;
  }

  .scene {
    width: 100%;
    min-height: 190px;
  }

  .letter {
    padding: 22px 19px;
  }

}


/* AKSESIBILITAS */

@media(prefers-reduced-motion: reduce) {

  *,
  *:before,
  *:after {
    animation-duration: .01ms !important;
    animation-iteration-count: 1 !important;
    scroll-behavior: auto !important;
    transition-duration: .01ms !important;
  }

}
