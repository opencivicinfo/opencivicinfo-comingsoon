const countdown = () => {
  const countDate = new Date("May 15, 2025 00:00:00").getTime();
  const now = new Date().getTime();
  const gap = countDate - now;

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const textDay = Math.floor(gap / day);
  const textHour = Math.floor((gap % day) / hour);
  const textMinute = Math.floor((gap % hour) / minute);
  const textSecond = Math.floor((gap % minute) / second);

  document.getElementById("countdown").innerText = 
    `Launching in: ${textDay}d ${textHour}h ${textMinute}m ${textSecond}s`;
};

setInterval(countdown, 1000);
