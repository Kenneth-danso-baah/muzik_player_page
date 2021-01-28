let fillbar=document.querySelector('.fill');
let audios = ["bigsean.mp3","nas.mp3"];
let covers = ["sean.jpg", "esco.jpg"];
let currentTime = document.querySelector('.time');

// // Create An Object of Audio

let audio = new Audio();
let currentSong = 0;

// // whenever the window load. song should play automatically
window.onload=playSong;

// // let's play the song by this function whenever window loads

function playSong(){
    audio.src=audios[currentSong];
    // audio.play();
}

function togglePlayPause(){
    if(audio.paused){
        audio.play();
        let playBtn = document.querySelector(".play-pause");
        playBtn.innerHTML = '<i class="fa fa-pause"></i>';
        playBtn.style.paddingLeft = "30px";
    }else{
        audio.pause();
        playBtn = document.querySelector(".play-pause");
        playBtn.innerHTML='<i class="fa fa-play"></i>';
        playBtn.style.paddingLeft="33px";
    }
}

// Now let make dynamic the fillbar
audio.addEventListener("timeupdate", function(){
    let position = audio.currentTime/audio.duration;
    fillbar.style.width = position * 100 + "%";
});