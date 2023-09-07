const sampah = document.querySelectorAll('.sampah');
const mantan = document.querySelectorAll('.mantan');
const papanSkor = document.querySelector('.papan-skor');
const pop = document.querySelector('#pop');

let sampahSebelumnya;
let selesai;
let skor;

function randomSampah(sampah) {
    const t = Math.floor(Math.random() * sampah.length);
    const tRandom = sampah[t];
    if( tRandom == sampahSebelumnya ) {
        randomSampah(sampah);
    }
    sampahSebelumnya = tRandom;
    return tRandom;
}

function randomWaktu(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

function munculkanMantan() {
    const tRandom = randomSampah(sampah);
    const wRandom = randomWaktu(300, 1000);
    tRandom.classList.add('muncul');

    setTimeout(() => {
    tRandom.classList.remove('muncul');
    if (!selesai) {
        munculkanMantan();
    }
    }, wRandom);
}

function mulai() {
    selesai = false;
    skor = 0;
    papanSkor.textContent = 0;
    munculkanMantan();
    setTimeout(() => {
        selesai = true;
    }, 20000);
}

function pukul() {
    skor++;
    this.parentNode.classList.remove('muncul');
    pop.play();
    papanSkor.textContent = skor;
}

mantan.forEach(t => {
t.addEventListener('click', pukul); 
});