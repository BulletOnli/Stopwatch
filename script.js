const time = document.getElementById("time")
const startBtn = document.getElementById("startBtn")
const resetBtn = document.getElementById("resetBtn")
const stopBtn = document.getElementById("stopBtn")

let seconds = 0;
let minutes = 0;
let hours = 0;
let startTime = 0;
let currentTime = 0;
let paused = true;

startBtn.addEventListener('click', () => {
    if (paused) {
        paused = false;
        startTime = Date.now() - currentTime
        interval = setInterval(startNow, 1000)
    }
})

resetBtn.addEventListener('click', () => {
    paused = true;
    seconds = 0;
    minutes = 0;
    hours = 0;
    currentTime = 0;

    clearInterval(interval)
    time.textContent = `00:00:00`
})

stopBtn.addEventListener('click', () => {
    if (!paused) {
        paused = true;
        clearInterval(interval)
    }
})



function startNow() {
    currentTime = Date.now() - startTime

    seconds = Math.floor( (currentTime / 1000) % 60 )
    minutes = Math.floor( (currentTime / (1000 * 60)) % 60 )
    hours = Math.floor((currentTime / (1000 * 60 * 60)) % 60)

    seconds = addZero(seconds)
    minutes = addZero(minutes)
    hours = addZero(hours)

    time.textContent = `${hours}:${minutes}:${seconds}`

    function addZero(time) {
        time = time.toString();

        return time.length < 2 ? "0" + time : time
    }
}