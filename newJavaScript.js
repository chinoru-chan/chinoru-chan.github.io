(function(d) {

var config = {

kitId: 'xbi8xnr',

scriptTimeout: 3000,

async: true

},

h=d.documentElement,

t=setTimeout(function(){

h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";

},config.scriptTimeout),

tk=d.createElement("script"),

f=false,

s=d.getElementsByTagName("script")[0],

a;

h.className+=" wf-loading";

tk.src='https://use.typekit.net/'+config.kitId+'.js';

tk.async=true;

tk.onload=tk.onreadystatechange=function(){

a=this.readyState;

if(f||a&&a!="complete"&&a!="loaded") return;

f=true;

clearTimeout(t);

try{Typekit.load(config)}catch(e){}

};

s.parentNode.insertBefore(tk,s)

})(document);

document.addEventListener('DOMContentLoaded', function() {

// Set up a timer to call the clock function every 500 milliseconds

var timerID = setInterval(clock, 500);

// Function to update the view with the current time

function clock() {

document.getElementById("view_clock").innerHTML = getNow();

}

// Function to get the current date and time in a formatted string

function getNow() {

var now = new Date();

var year = now.getFullYear();

var mon = now.getMonth() + 1;

var day = now.getDate();

var hour = now.getHours();

var min = now.getMinutes();

var sec = now.getSeconds();

var s = year + "/" + mon + "/" + day + " " + hour + ":" + min + ":" + sec;

return s;

}

function calculateDaysUntil(dateString) {

const today = new Date();

const targetDate = new Date(dateString);

const timeDiff = targetDate - today;

const daysUntil = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

return daysUntil;

}

const tasks = [

{ name: '(ma)1.ご予定編', date: '1970-01-01' },

{ name: '(sc1)塾', date: '2024-07-18' },

{ name: '(sc2)塾振替', date: '2024-07-19' },

{ name: '(sc3)産業工学研究1/2(夏休み中授業),バイト代16000円入金,塾', date: '2024-07-25' },

{ name: '(sc4)産業工学研究2/2(夏休み授業)', date: '2024-07-26' },

{ name: '(sc5)GLCイングリッシュキャンプ(CEBU(フィリピンに2024-08-16まで行きます))', date: '2024-08-05' },

{ name: '*', date: '1970-01-01' },

{ name: '(sc7)帰国', date: '2024-08-16' },

{ name: '(sc8)塾', date: '2024-08-22' },

{ name: '(sc9)産業工学研究(夏休み授業)1/2', date: '2024-08-25' },

{ name: '(sc10)産業工学研究(夏休み授業)2/2', date: '2024-09-28' },

{ name: '(sc11)塾', date: '2024-08-29' },

{ name: '(sc12)塾', date: '2024-09-05' },

{ name: '(sc13)塾', date: '2024-09-19' },

{ name: '(sc14)塾', date: '2024-09-26' },

{ name: '(sc15)塾', date: '2024-10-03' },

{ name: '(sc16)塾', date: '2024-10-10' },

{ name: '(sc17)塾', date: '2024-10-17' },

{ name: '(sc18)塾', date: '2024-10-24' },

{ name: '(sc19)塾', date: '2024-10-31' },

{ name: '(bi20)ユラちゃん誕生日', date: '2025-01-12' },

{ name: '(bi21)フユちゃん誕生日', date: '2025-01-24' },

{ name: '(bi22)リゼちゃん誕生日', date: '2025-02-14' },

{ name: '(bi23)ぼっちちゃん誕生日', date: '2025-02-21' },

{ name: '(bi24)まひろちゃん(おにまい)誕生日', date: '2025-03-06' },

{ name: '(bi25)モカちゃん誕生日', date: '2025-03-13' },

{ name: '(bi26)きりえちゃん(うまる)誕生日', date: '2025-03-15' },

{ name: '(bi27)アリスちゃん(きんモザ)誕生日', date: '2025-04-05' },

{ name: '(bi28)ダクネス(このすば)誕生日', date: '2025-04-06' },

{ name: '(bi29)ココアちゃん誕生日', date: '2025-04-10' },

{ name: '(bi30)ニャル子ちゃん誕生日', date: '2025-04-15' },

{ name: '(bi31)喜多ちゃん誕生日', date: '2025-04-21' },

{ name: '(bi32)みはりちゃん(おにまい)誕生日', date: '2025-04-22' },

{ name: '(bi33)凛ちゃん誕生日', date: '2025-05-04' },

{ name: '(bi34)あさひちゃん(おにまい)誕生日', date: '2025-05-05' },

{ name: '(bi35)虹夏ちゃん(ぼざろ)誕生日', date: '2025-05-29' },

{ name: '(bi36)しのぶちゃん(きんモザ)誕生日', date: '2025-06-06' },

{ name: '(bi37)カズマ(このすば)誕生日', date: '2025-06-07' },

{ name: '(bi38)ナツメちゃん誕生日', date: '2025-06-15' },

{ name: '(bi39)エルちゃん誕生日', date: '2025-06-15' },

{ name: '(bi40)みよちゃん(おにまい)誕生日', date: '2025-06-18' },

{ name: '1.キャラクター誕生日編', date: '1970-01-01' },

{ name: '(bi1)シャロちゃん誕生日', date: '2024-07-15' },

{ name: '(bi2)アクア(このすば)誕生日', date: '2024-08-01' },

{ name: '(bi3)マヤちゃん誕生日', date: '2024-08-08' },

{ name: '(bi4)陽子(きんモザ)誕生日', date: '2024-08-20' },

{ name: '(bi5)かえで(おにまい)誕生日', date: '2024-09-12' },

{ name: '(bi6)アヤ(きんモザ)誕生日', date: '2024-09-15' },

{ name: '(bi7)リョウ(ぼざろ)誕生日', date: '2024-09-18' },

{ name: '(bi8)千夜ちゃん誕生日', date: '2024-09-19' },

{ name: '(bi9)うまるちゃん誕生日', date: '2024-09-26' },

{ name: '(bi10)きくり(ぼざろ)誕生日', date: '2024-09-28' },

{ name: '(bi11)えびなちゃん(うまる)誕生日', date: '2024-10-19' },

{ name: '(bi12)もみじちゃん(おにまい)誕生日', date: '2024-10-20' },

{ name: '(bi13)青山ブルーマウンテン誕生日', date: '2024-10-27' },

{ name: '(bi14)メグちゃん誕生日', date: '2024-11-02' },

{ name: '(bi15)なゆたちゃん(おにまい)誕生日', date: '2024-11-23' },

{ name: '(bi16)カレンちゃん(きんモザ)誕生日', date: '2024-12-01' },

{ name: '(bi17)チノちゃん誕生日', date: '2024-12-04' },

{ name: '(bi18)めぐみん誕生日', date: '2024-12-04' },

{ name: '(bi19)シルフィン誕生日', date: '2024-12-24' },

{ name: '(bi20)ユラちゃん誕生日', date: '2025-01-12' },

{ name: '(bi21)フユちゃん誕生日', date: '2025-01-24' },

{ name: '(bi22)リゼちゃん誕生日', date: '2025-02-14' },

{ name: '(bi23)ぼっちちゃん誕生日', date: '2025-02-21' },

{ name: '(bi24)まひろちゃん(おにまい)誕生日', date: '2025-03-06' },

{ name: '(bi25)モカちゃん誕生日', date: '2025-03-13' },

{ name: '(bi26)きりえちゃん(うまる)誕生日', date: '2025-03-15' },

{ name: '(bi27)アリスちゃん(きんモザ)誕生日', date: '2025-04-05' },

{ name: '(bi28)ダクネス(このすば)誕生日', date: '2025-04-06' },

{ name: '(bi29)ココアちゃん誕生日', date: '2025-04-10' },

{ name: '(bi30)ニャル子ちゃん誕生日', date: '2025-04-15' },

{ name: '(bi31)喜多ちゃん誕生日', date: '2025-04-21' },

{ name: '(bi32)みはりちゃん(おにまい)誕生日', date: '2025-04-22' },

{ name: '(bi33)凛ちゃん誕生日', date: '2025-05-04' },

{ name: '(bi34)あさひちゃん(おにまい)誕生日', date: '2025-05-05' },

{ name: '(bi35)虹夏ちゃん(ぼざろ)誕生日', date: '2025-05-29' },

{ name: '(bi36)しのぶちゃん(きんモザ)誕生日', date: '2025-06-06' },

{ name: '(bi37)カズマ(このすば)誕生日', date: '2025-06-07' },

{ name: '(bi38)ナツメちゃん誕生日', date: '2025-06-15' },

{ name: '(bi39)エルちゃん誕生日', date: '2025-06-15' },

{ name: '(bi40)みよちゃん(おにまい)誕生日', date: '2025-06-18' }

];

const numberList = document.getElementById('number-list');

const taskList = document.getElementById('task-list');

tasks.forEach(task => {

const daysUntil = calculateDaysUntil(task.date);

const numberListItem = document.createElement('li');

numberListItem.textContent = daysUntil;

numberList.appendChild(numberListItem);

const taskListItem = document.createElement('li');

taskListItem.textContent = task.name;

taskList.appendChild(taskListItem);

});

// Task list scaling

const taskListItems = taskList.querySelectorAll('li');

taskListItems.forEach(item => {

const scale = taskList.clientWidth / item.scrollWidth;

item.style.transform = `scale(${Math.min(1, scale)},1)`;

});

// Initialize nowunixtime

let nowunixtime = Math.floor(Date.now() / 1000);

// Update nowunixtime and display it every second

setInterval(function() {

nowunixtime = Math.floor(Date.now() / 1000);

// Calculate lastupdate and display it

var lastupdate = nowunixtime - 1710692589 - 6990000;

document.getElementById('nowunixtime2').innerHTML = lastupdate;

}, 1000);

var now = new Date();

var year = now.getFullYear();

var mon = now.getMonth() + 1;

var day = now.getDate();

var hour = now.getHours();

var min = now.getMinutes();

var sec = now.getSeconds();

document.getElementById('todaywikipedia').innerHTML = mon + "月" + day + "日";

});

// Wait for the DOM to be fully loaded before accessing elements

document.addEventListener("DOMContentLoaded", function () {

let myBirthTime = 1196262000;

// Retrieve the element by its id

let myAgeSpan = document.getElementById("myAgeSpan");

// Set the content of the span element

setInterval(function() {

let nowUnixTimeAge = Date.now() / 1000;

let myAge = ((nowUnixTimeAge - myBirthTime) / (60 * 60 * 24 * 365.25)).toFixed(8);

if (myAgeSpan) {

myAgeSpan.innerHTML = myAge;

}

}, 1000);

});

