import '../css/main.css'
import { FactoryWatch } from "./stopWatch.js";
import { updateStopWatch } from "./observers.js";
import { startButton, stopButton, resetButton } from './listeners.js';

function init() {
    const seconds = document.querySelector("[data-sec]")
    const milliseconds = document.querySelector("[data-msec]")
    milliseconds.textContent = '00'
    seconds.textContent = '00'
}
const watch = FactoryWatch([
    updateStopWatch
])

let watchInterval 
startButton.addEventListener('click', function() {
    console.log('start')
    watchInterval = setInterval(function() {
        watch.addToTimer()
        watch.notifyObservers()
    },10)
})

stopButton.addEventListener('click', function() {
    clearInterval(watchInterval)
})

resetButton.addEventListener('click', function() {
    clearInterval(watchInterval)
    watch.reset()
    init()
})

init()