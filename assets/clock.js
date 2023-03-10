/**ON SCREEN CLOCK COURTESY OF CodeCreative ON YOUTUBE 
 * Link: https://www.youtube.com/watch?v=lsoCv8Agg6E
 * Date Retrieved: Dec 12, 2022
 * Author: CodeCreative
 * Publish date: Sep 5, 2021
 */

function Clock() {
    var nd = new Date();

    var hours = nd.getHours();
    var minutes = nd.getMinutes();
    var seconds = nd.getSeconds();

    var amPm = ( hours < 12 ) ? "AM" : "PM";
    hours = (hours > 12) ? hours - 12 : hours;

    hours = ("0" + hours).slice(-2);
    minutes = ("0" + minutes).slice(-2);
    seconds = ("0" + seconds).slice(-2);

    clockk = document.getElementById('clock').innerHTML = hours + " : " + minutes + " " + seconds + " " + amPm;

    var t = setTimeout(Clock, 500)
}
