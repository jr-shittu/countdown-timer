const dday = document.querySelector("#days");
const dhour = document.getElementById("hours");
const dminute = document.getElementById("minutes")
const dsecond = document.getElementById("seconds")

const newLoveDate = '05 Dec 2020';

function countdown(){
    const newDate = new Date(newLoveDate);
    const currentDate = new Date();

    const allYearSeconds = (newDate - currentDate)/1000;

    const days = Math.floor(allYearSeconds / 3600 / 24);
    const hours = Math.floor(allYearSeconds / 3600) % 24;
    const minutes = Math.floor(allYearSeconds/60) % 60;
    const seconds = Math.floor(allYearSeconds) % 60;

    dday.innerHTML = days;
    dhour.innerHTML = formatTime(hours);
    dminute.innerHTML = formatTime(minutes);
    dsecond.innerHTML = formatTime(seconds);

} 

const formatTime = (x)=>{
    return x < 10 ? `0${x}`: x;
}

countdown();
setInterval(countdown, 1000)

