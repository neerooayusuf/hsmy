(function () {
  
  var _end_year = 2023;
  var _end_month = 2;
  var _end_date = 24;
  var _end_hour = 2;
  var _end_minute = 10;
  var _end_seconds = 0;

  var end = new Date(Date.UTC(_end_year, _end_month - 1, _end_date, _end_hour, _end_minute, _end_seconds));

  var _second = 1000;
  var _minute = _second * 60;
  var _hour = _minute * 60;
  var _day = _hour * 24;
  //var _month = _day * 30;
  var timer;

  function showRemaining() {
    var now = new Date();
    var distance = end - now;
    if (distance < 0) {
      document.getElementById("headline").innerText = "I have landed in Kuala Lumpur!!!";
      document.getElementById("countdown").style.display = "none";
      document.getElementById("content").style.display = "block";
      clearInterval(x);
    }
    //var months = Math.floor(distance / _month);
    var days = Math.floor(distance / _day);
    var hours = Math.floor((distance % _day) / _hour);
    var minutes = Math.floor((distance % _hour) / _minute);
    var seconds = Math.floor((distance % _minute) / _second);

          document.getElementById("days").innerText = days,
          document.getElementById("hours").innerText = hours,
          document.getElementById("minutes").innerText = minutes,
          document.getElementById("seconds").innerText = seconds;

  }
  timer = setInterval(showRemaining, 1000);
}());
