(function () {

    var _end_year = 2025;
    var _end_month = 7;
    var _end_date = 18;
    var _end_hour = 20;
    var _end_minute = 30;
    var _end_seconds = 0;

    var _flightDuration_day = 0;
    var _flightDuration_hour = 0;
    var _flightDuration_minute = 0;
    var _flightDuration_seconds = 0;

    var end = new Date(Date.UTC(_end_year, _end_month - 1, _end_date, _end_hour, _end_minute, _end_seconds));

    var _second = 1000;
    var _minute = _second * 60;
    var _hour = _minute * 60;
    var _day = _hour * 24;
    //var _month = _day * 30;
    var timer;

    function showRemaining() {
        var now = new Date();
        var flightDuration = (_flightDuration_day * 60 * 60 * 24 + _flightDuration_hour * 60 * 60 + _flightDuration_minute * 60 + _flightDuration_seconds) * 1000;
        var inflight = (end - flightDuration - now) ;
        var distance = end - now;
        console.log("flightDuration: " + flightDuration)
        console.log("inflight: " + inflight);
        console.log("distance: " + distance);
        if (inflight < 0) {
            var days = Math.floor(distance / _day);
            var hours = Math.floor((distance % _day) / _hour);
            var minutes = Math.floor((distance % _hour) / _minute);
            var seconds = Math.floor((distance % _minute) / _second);
            //document.getElementById("headline").innerHTML = "insha\'Allah<br><div style=\"font-size: 2.5rem;\">Halima Saadiyah</div>will land in Kuala Lumpur in<br>";
            document.getElementById("days").innerText = days,
                document.getElementById("hours").innerText = hours,
                document.getElementById("minutes").innerText = minutes,
                document.getElementById("seconds").innerText = seconds;

            if (distance < 0) {
                //document.getElementById("headline").innerText = "Halima Saadiyah\nhas landed in\nKuala Lumpur!!!";
                document.getElementById("countdown").style.display = "none";
                document.getElementById("content").style.display = "block";
                clearInterval(x);
            }
        }
        else {
            var days = Math.floor(inflight / _day);
            var hours = Math.floor((inflight % _day) / _hour);
            var minutes = Math.floor((inflight % _hour) / _minute);
            var seconds = Math.floor((inflight % _minute) / _second);

            document.getElementById("days").innerText = days,
                document.getElementById("hours").innerText = hours,
                document.getElementById("minutes").innerText = minutes,
                document.getElementById("seconds").innerText = seconds;
        }
        //var months = Math.floor(distance / _month);
        
    }
    timer = setInterval(showRemaining, 1000);
}());
