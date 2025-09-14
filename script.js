// ======= CONFIGURATION =======
const title = "Nikkah";
const subtitle1 = "Muhammad Yusuf";
const subtitle2 = "Halima Saadiyah";
const backgroundImage = "1000324625.png"; // Put the image in the same folder

// Event time given in UTC+4 (e.g. 03:00 at UTC+4)
const eventYear = 2025;
const eventMonth = 12; // December (1-based)
const eventDay = 10;
const eventHourUTCplus4 = 20;
const eventMinute = 50;
const eventSecond = 0;

const offsetHours = 4;

// Create a UTC timestamp *without* applying offset yet
const baseUTCtimestamp = Date.UTC(eventYear, eventMonth - 1, eventDay, eventHourUTCplus4, eventMinute, eventSecond);

// Now subtract the offset (in ms) to get the true UTC time of the event
const trueUTCtimestamp = baseUTCtimestamp - offsetHours * 60 * 60 * 1000;

// Create a Date from true UTC timestamp (this will automatically convert to local time)
const endDate = new Date(trueUTCtimestamp);


// ======= SETUP TEXT =======
document.getElementById('headline1').textContent = title;
document.getElementById('headline2').textContent = subtitle1;
document.getElementById('headline3').textContent = subtitle2;

//document.body.style.backgroundImage = `url(${backgroundImage})`;

// ======= PLURALIZATION =======
function pluralize(value, singular, plural) {
  return value === 1 ? singular : plural;
}

// ======= COUNTDOWN FUNCTION =======
function updateCountdown() {
  const now = new Date();
  const diff = Math.max((endDate - now) / 1000, 0); // Avoid negatives

  const days = Math.floor(diff / 86400);
  const hours = Math.floor((diff % 86400) / 3600);
  const minutes = Math.floor((diff % 3600) / 60);
  const seconds = Math.floor(diff % 60);

  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;

  document.getElementById("label-days").textContent = pluralize(days, "Day", "Days");
  document.getElementById("label-hours").textContent = pluralize(hours, "Hour", "Hours");
  document.getElementById("label-minutes").textContent = pluralize(minutes, "Minute", "Minutes");
  document.getElementById("label-seconds").textContent = pluralize(seconds, "Second", "Seconds");
}

updateCountdown();
setInterval(updateCountdown, 1000);
