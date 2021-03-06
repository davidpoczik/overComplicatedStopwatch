import { init } from './init.js'; 

const FactoryObserver = (fn) => ({
    update: fn
})

export const updateStopWatch = FactoryObserver((state) => {   

    const ms = state.milliseconds
    const s = state.seconds
    let updatedMs = ''
    let updatedS = ''

    if(ms < 10) {
        updatedMs += `0${ms}`
    } else updatedMs = ms

    if(s < 10) {
        updatedS += `0${s}`
    } else updatedS = s

    init(updatedS, updatedMs)
   
}) 