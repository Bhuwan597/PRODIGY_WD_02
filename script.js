const hour = document.getElementById("hour");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const milliseconds = document.getElementById("milliseconds");
const orderedList = document.getElementById("ordered-list");


let timer = false;
let record = false;
let hr = 0;
let min = 0;
let sec = 0;
let milli = 0;


const start = (e) => {
  timer = true;
  timerFunction();
}
const stop = (e) => {
  timer = false;
  timerFunction();
}
const reset = (e) => {
    timer = false;
    hr = 0;
    min = 0;
    sec = 0;
    milli = 0;
    timerFunction();
    putValue();
    orderedList.innerHTML='';
}
const lapse = ()=>{
  record=true;
}

const putValue = ()=>{
    milliseconds.innerText = milli< 10 ? `0${milli}`: milli;
    seconds.innerText = sec< 10 ? `0${sec}`: sec;
    minutes.innerText = min< 10 ? `0${min}`: min;
    hour.innerText = hr< 10 ? `0${hr}`: hr;
}

const timerFunction = () => {
  if (!timer) return;
  milli++;
  if (milli > 100) {
    sec++;
    milli = 0;
  }
  if (sec > 60) {
    min++;
    sec = 0;
  }
  if (min > 60) {
    hr++;
    min = 0;
  }
  putValue();
  if(record){
    orderedList.innerHTML += `<li>${hr< 10 ? `0${hr}`: hr}:${min< 10 ? `0${min}`: min}:${sec< 10 ? `0${sec}`: sec}:${milli< 10 ? `0${milli}`: milli}</li>`;
    record = false;
  }
  setTimeout(() => timerFunction(), 10);
};
