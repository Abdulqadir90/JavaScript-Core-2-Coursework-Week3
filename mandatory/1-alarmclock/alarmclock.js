var audio = new Audio("alarmsound.mp3");

// DO NOT EDIT BELOW HERE

let countdown;

function setup() {
  document.getElementById("set").addEventListener("click", () => {
    countdown = setInterval(setAlarm, 1000);
    setAlarm();
  });
  console.log("countdown", countdown);
  document.getElementById("stop").addEventListener("click", () => {
    console.log("countdown two", countdown);
    clearInterval(countdown);
    pauseAlarm();
  });
}

function setAlarm() {
  if (document.getElementById("alarmSet").value > 0) {
    document.getElementById("alarmSet").value--;
    let time = document.getElementById("alarmSet").value;
    let min = Math.floor(time / 60);
    let sec = time % 60;

    min = min < "10" ? "0" + min : min;
    sec = sec < "10" ? "0" + sec : sec;
    document.getElementById(
      "timeRemaining"
    ).innerText = `Time Remaining: ${min}:${sec}`;
  } else {
    document.getElementById(
      "timeRemaining"
    ).innerText = `Time Remaining: 00:00`;
    playAlarm();
  }
}

function playAlarm() {
  audio.play();
}

function pauseAlarm() {
  audio.pause();
}

window.onload = setup;
