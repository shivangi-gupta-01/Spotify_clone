console.log("Welcome To Spotify!")
let index = 1
let audioElement = new Audio('1.mp3')
let mainplay = document.getElementById('mainplay')
let bar = document.getElementById('bar')
let gif = document.getElementById('gif')
let songitem = Array.from(document.getElementsByClassName('songitem'))
let mainsong=document.getElementById('mainsong')
let songs = [
    { songName: "Perfect", filePath: "1.mp3", coverPath: "cover1.jpg" },
    { songName: "Halka Halka Suroor", filePath: "2.mp3", coverPath: "cover2.jpg" },
    { songName: "Barsaat", filePath: "3.mp3", coverPath: "cover3.jpg" },
    { songName: "Kangna Tera Ni", filePath: "4.mp3", coverPath: "cover4.jpg" },
    { songName: "Zara Zara", filePath: "5.mp3", coverPath: "cover5.jpg" },
]
songitem.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath
    element.getElementsByClassName("songname")[0].innerHTML = songs[i].songName
})
mainplay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play()
        mainplay.classList.remove('fa-circle-play')
        mainplay.classList.add('fa-circle-pause')
        gif.style.opacity = 1
    }
    else {
        audioElement.pause()
        mainplay.classList.remove('fa-circle-pause')
        mainplay.classList.add('fa-circle-play')
        gif.style.opacity = 0
    }
})
audioElement.addEventListener('timeupdate', () => {
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100)
    bar.value = progress
})
bar.addEventListener('change', () => {
    audioElement.currentTime = bar.value * audioElement.duration / 100;
})
const makeallplay = () => {
    Array.from(document.getElementsByClassName('songplay')).forEach((element) => {
        element.classList.remove('fa-circle-pause')
        element.classList.add('fa-circle-play')
    })
}
Array.from(document.getElementsByClassName('songplay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeallplay()
        index = parseInt(e.target.id)
        e.target.classList.remove('fa-circle-play')
        e.target.classList.add('fa-circle-pause')
        audioElement.src = `${index}.mp3`
        mainsong.innerText=songs[index-1].songName
        audioElement.currentTime = 0
        audioElement.play()
        gif.style.opacity = 1
        mainplay.classList.remove('fa-circle-play')
        mainplay.classList.add('fa-circle-pause')
    })
});
document.getElementById('next').addEventListener('click', () => {
    if (index >= 5) {
        index = 1
    }
    else {
        index = index + 1
    }
    audioElement.src = `${index}.mp3`
    mainsong.innerText=songs[index-1].songName
    audioElement.currentTime = 0
    audioElement.play()
    gif.style.opacity = 1
    mainplay.classList.remove('fa-circle-play')
    mainplay.classList.add('fa-circle-pause')
})
document.getElementById('previous').addEventListener('click', () => {
    if (index <= 1) {
        index = 5
    }
    else {
        index = index - 1
    }
    audioElement.src = `${index}.mp3`
    mainsong.innerText=songs[index-1].songName
    audioElement.currentTime = 0
    audioElement.play()
    gif.style.opacity = 1
    mainplay.classList.remove('fa-circle-play')
    mainplay.classList.add('fa-circle-pause')
})


