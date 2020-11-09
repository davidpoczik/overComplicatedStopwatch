export const init = function(m, ms) {
    const seconds = document.querySelector("[data-sec]")
    const milliseconds = document.querySelector("[data-msec]")
    milliseconds.textContent = ms
    seconds.textContent = m
}
