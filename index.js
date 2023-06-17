const mainBtn = document.getElementById("mainBtn");
const secondaryBtn = document.getElementById("secondaryBtn");
const mainGallery = document.getElementById("mainGallery");
const secondaryGallery = document.getElementById("secondaryGallery");
const prevButtons = document.querySelectorAll(".arrow#prev1, .arrow#prev2");
const nextButtons = document.querySelectorAll(".arrow#next1, .arrow#next2");
let currentIndexes = [0, 0];
let activeBtn = null;

function showGallery(gallery) {
  gallery.classList.add("active");
}

function hideGallery(gallery) {
  gallery.classList.remove("active");
}

function showCard(galleryIndex, cardIndex) {
  const galleries = [mainGallery, secondaryGallery];
  const cards = galleries[galleryIndex].querySelectorAll(".card");
  cards.forEach((card, i) => {
    if (i === cardIndex) {
      card.classList.add("active");
    } else {
      card.classList.remove("active");
    }
  });
}

function nextCard(galleryIndex) {
  const galleries = [mainGallery, secondaryGallery];
  const cards = galleries[galleryIndex].querySelectorAll(".card");
  currentIndexes[galleryIndex] =
    (currentIndexes[galleryIndex] + 1) % cards.length;
  showCard(galleryIndex, currentIndexes[galleryIndex]);
}

function prevCard(galleryIndex) {
  const galleries = [mainGallery, secondaryGallery];
  const cards = galleries[galleryIndex].querySelectorAll(".card");
  currentIndexes[galleryIndex] =
    (currentIndexes[galleryIndex] - 1 + cards.length) % cards.length;
  showCard(galleryIndex, currentIndexes[galleryIndex]);
}

nextButtons.forEach((button, index) => {
  button.addEventListener("click", () => nextCard(index));
});

prevButtons.forEach((button, index) => {
  button.addEventListener("click", () => prevCard(index));
});

mainBtn.addEventListener("click", () => {
  showGallery(mainGallery);
  hideGallery(secondaryGallery);
  if (activeBtn) {
    activeBtn.classList.remove("active-btn");
  }
  mainBtn.style.backgroundColor = "#006038";
  mainBtn.style.color = "#fff";
  mainBtn.style.transition = "300ms";
  secondaryBtn.style.backgroundColor = "transparent";
  secondaryBtn.style.color = "#006038";
  secondaryBtn.style.transition = "300ms";
});

secondaryBtn.addEventListener("click", () => {
  showGallery(secondaryGallery);
  hideGallery(mainGallery);
  secondaryBtn.style.backgroundColor = "#006038";
  secondaryBtn.style.color = "#fff";
  secondaryBtn.style.transition = "300ms";
  mainBtn.style.backgroundColor = "transparent";
  mainBtn.style.color = "#006038";
  mainBtn.style.transition = "300ms";
});

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight") {
    nextCard(0);
    nextCard(1);
  } else if (event.key === "ArrowLeft") {
    prevCard(0);
    prevCard(1);
  }
});
/*music*/
let audio = document.querySelector(".music_audio");
let playBtn = document.querySelector(".play");
let player = document.querySelector(".music_card");
let imgSrc = document.querySelector(".imgSrc");
let progress = document.querySelector(".music_progress");
let progressContainer = document.querySelector(".music_progress_container");

let cover = document.querySelector(".music_card_image");
let songName = document.querySelector(".music_card_subtitle");
let coverImg = document.querySelector(".card_image");
let nextBtn = document.querySelector(".next");
let prevBtn = document.querySelector(".prev");

let songs = [
  "Dave Porter - Main Title Theme",
  "Dave Porter - Smoking Jessy Pot",
  "Dave Porter - Baby's Coming",
];

let songIndex = 0;

function loadSong(song) {
  songName.innerHTML = song;
  audio.src = "./audio/" + song + ".mp3";
  coverImg.src = "./images/Breaking_bad_" + (songIndex + 1) + ".jpg";
}

loadSong(songs[songIndex]);

function playSong() {
  player.classList.add("playJs");
  coverImg.classList.add("active");
  imgSrc.src = "./images/pause.png";
  audio.play();
}

function pauseSong() {
  player.classList.remove("playJs");
  coverImg.classList.remove("active");
  imgSrc.src = "./images/play-button.png";
  audio.pause();
}

playBtn.addEventListener("click", () => {
  let isPlaying = player.classList.contains("playJs");

  if (isPlaying) {
    pauseSong();
  } else {
    playSong();
  }
});

function updateProgress() {
  let duration = audio.duration;
  let currentTime = audio.currentTime;

  let progressPercent = (currentTime / duration) * 100;
  progress.style.width = progressPercent + "%";
}

audio.addEventListener("timeupdate", updateProgress);

function setProgress(e) {
  let width = this.clientWidth;
  let clickX = e.offsetX;
  let duration = audio.duration;

  audio.currentTime = (clickX / width) * duration;
}

progressContainer.addEventListener("click", setProgress);

function nextSong() {
  songIndex++;

  if (songIndex > songs.length - 1) {
    songIndex = 0;
  }

  loadSong(songs[songIndex]);
  playSong();
}
nextBtn.addEventListener("click", nextSong);

function prevSong() {
  songIndex--;

  if (songIndex < 0) {
    songIndex = songs.length - 1;
  }

  loadSong(songs[songIndex]);
  playSong();
}
prevBtn.addEventListener("click", prevSong);
/*pop up*/
function openPopup(popupId) {
  var popup = document.getElementById(popupId);
  var overlay = document.getElementById("overlay");
  popup.style.display = "block";
  overlay.style.display = "block";
}

function closePopup(popupId) {
  var popup = document.getElementById(popupId);
  var overlay = document.getElementById("overlay");
  popup.style.display = "none";
  overlay.style.display = "none";
}
/*ура, победа 200 строк*/
