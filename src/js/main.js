import '../css/main.css'
import { FactoryWatch } from "./stopWatch.js";
import { updateStopWatch } from "./observers.js";
import { startButton, stopButton, resetButton } from './listeners.js';
import { init } from './init.js';

(function() {

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
    init('00', '00')
})

init('00', '00')

})()