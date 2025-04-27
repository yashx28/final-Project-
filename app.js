let clockInterval;

function updateClock() {
const now = new Date();
document.getElementById('hours').innerText = now.getHours().toString().padStart(2, '0');
document.getElementById('minutes').innerText = now.getMinutes().toString().padStart(2,'0');
document.getElementById('seconds').innerText = now.getSeconds().toString().padStart(2,'0');
}

function startClock() {
if (!clockInterval) {
clockInterval = setInterval(updateClock, 1000);
}
}

function stopClock() {
clearInterval(clockInterval);
clockInterval = null;
}

function restartClock() {
stopClock();
updateClock();
startClock();
}
updateClock();
