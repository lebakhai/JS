const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
var date

function loadTime(hoursElement, minutesElement, secondsElement, milliSecondsElement) {
    date = new Date()
    const clockHours = $(hoursElement);
    const clockMinutes = $(minutesElement);
    const clockSeconds = $(secondsElement);
    if (milliSecondsElement) {
        var clockMilliSeconds = $(milliSecondsElement);
        clockMilliSeconds.textContent = String(date.getMilliseconds()).padStart(3, '0');
    }
    clockHours.textContent = String(date.getHours()).padStart(2, '0');
    clockMinutes.textContent =  String(date.getMinutes()).padStart(2, '0');
    clockSeconds.textContent =  String(date.getSeconds()).padStart(2, '0')
}

function start(clockHours, clockMinutes, clockSeconds, clockMilliSeconds) {
    setInterval(() => {
        loadTime(clockHours, clockMinutes, clockSeconds, clockMilliSeconds)
    }, 1)
}