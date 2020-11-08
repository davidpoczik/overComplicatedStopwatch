// stopwatch
export const FactoryWatch = ( observerArguments = [] ) => {
    const state = {
        seconds: 0,
        milliseconds: 0,
        observers: [...observerArguments]
    }    
    return Object.freeze({
        addObserver: (observer) => state.observers.push(observer),
        removeObserver: (observer) => {
            state.observers = state.observers.filter(o => o !== observer)
        },        
        notifyObservers: () => state.observers.forEach(o => o.update(state)),
        // handle seconds    
        addToTimer: () => {
            state.milliseconds += 1
            if(state.milliseconds >= 100) { 
                state.milliseconds = 0
                state.seconds += 1
            }
        },
        reset: () => {
            state.seconds = 0
            state.milliseconds = 0
        }
    })
}
