// ======================
// PASSWORD
// ======================

function checkPassword() {

    const pass =
    document.getElementById("password").value;

    // GANTI PASSWORD DI SINI
   if (pass === "190426") {

    document.getElementById("lock-screen")
    .style.display = "none";

    document.getElementById("content")
    .style.display = "block";

    const music =
    document.getElementById("bgMusic");

    music.play();

}

    } else {

        alert("Wrong Password");

    }

}

// ======================
// COUNTDOWN
// ======================

// GANTI TANGGAL JADIAN DI SINI
const startDate =
new Date("2026-04-19T00:00:00");

function updateCountdown() {

    const now = new Date();

    let years =
    now.getFullYear() -
    startDate.getFullYear();

    let months =
    now.getMonth() -
    startDate.getMonth();

    let days =
    now.getDate() -
    startDate.getDate();

    if (days < 0) {

        months--;

        const previousMonth =
        new Date(
            now.getFullYear(),
            now.getMonth(),
            0
        );

        days += previousMonth.getDate();
    }

    if (months < 0) {

        years--;
        months += 12;
    }

    const totalDiff =
    now - startDate;

    const hours =
    Math.floor(
        (totalDiff /
        (1000 * 60 * 60))
        % 24
    );

    const minutes =
    Math.floor(
        (totalDiff /
        (1000 * 60))
        % 60
    );

    document.getElementById("countdown")
    .innerHTML = `

    <div class="time-card">
        <h2>${years}</h2>
        <p>Years</p>
    </div>

    <div class="time-card">
        <h2>${months}</h2>
        <p>Months</p>
    </div>

    <div class="time-card">
        <h2>${days}</h2>
        <p>Days</p>
    </div>

    <div class="time-card">
        <h2>${hours}</h2>
        <p>Hours</p>
    </div>

    <div class="time-card">
        <h2>${minutes}</h2>
        <p>Minutes</p>
    </div>

    `;
}

updateCountdown();

setInterval(
updateCountdown,
1000
);

// ======================
// RANDOM NOTES
// ======================

const notes = [

"thank u for being part of my story.",

"u make ordinary days feel special.",

"some people become memories. and u become home.",

"i hope life is kind to u today.",

"u're one of my favorite thoughts.",

"the little moments are still my favorite.",

"im glad our paths crossed.",

"u matter more than u know.",

"Thank you for existing."

];

function showNote() {

    const randomNote =
    notes[
        Math.floor(
            Math.random() * notes.length
        )
    ];

    document.getElementById("noteBox")
    .innerHTML = randomNote;

}

// ======================
// FLOATING STARS
// ======================

const starsContainer =
document.getElementById("stars");

for (let i = 0; i < 70; i++) {

    const star =
    document.createElement("div");

    star.classList.add("star");

    star.style.left =
    Math.random() * 100 + "vw";

    star.style.top =
    Math.random() * 100 + "vh";

    star.style.animationDuration =
    (12 + Math.random() * 25) + "s";

    star.style.animationDelay =
    Math.random() * 10 + "s";

    starsContainer.appendChild(star);

}

// ======================
// SCROLL FADE
// ======================

const observer =
new IntersectionObserver(

(entries) => {

entries.forEach(entry => {

if (entry.isIntersecting) {

entry.target.classList.add("show");

}

});

},

{
threshold: 0.15
}

);

document
.querySelectorAll(".fade")
.forEach(section => {

observer.observe(section);

});

// ======================
// PHOTO MODAL
// ======================

const photo =
document.getElementById("mainPhoto");

const modal =
document.getElementById("modal");

const modalImg =
document.getElementById("modalImg");

photo.addEventListener(

"click",

() => {

modal.style.display = "flex";

modalImg.src = photo.src;

}

);

modal.addEventListener(

"click",

() => {

modal.style.display = "none";

function toggleMusic(){

    const music =
    document.getElementById("bgMusic");

    if(music.paused){
        music.play();
    }else{
        music.pause();
    }

}

}

);

// ======================
// PRELOAD
// ======================

window.addEventListener(

"load",

() => {

updateCountdown();

}

);