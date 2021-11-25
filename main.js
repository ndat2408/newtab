// Enter key
var input = document.getElementById("gg");
input.addEventListener("keyup", function(event) {
  if (event.key == "Enter"){
    google();
  }
})

var input = document.getElementById("ytb");
input.addEventListener("keyup", function(event) {
  if (event.key == "Enter"){
    youtube();
  }
})

var input = document.getElementById("w3");
input.addEventListener("keyup", function(event) {
  if (event.key == "Enter"){
    w3();
  }
})

var input = document.querySelector(".translatebox textarea:first-child");
input.addEventListener("keyup", function(event) {
  if (event.key == "Enter"){
    translatevi();
  }
})

var input = document.querySelector(".translatebox textarea:last-child");
input.addEventListener("keyup", function(event) {
  if (event.key == "Enter"){
    translateeng();
  }
})


// Button sreach
function google() {
  var val = document.getElementById('gg').value;
  if (val != "")
    location.replace('http://google.com/search?q='+val);
}

function youtube(){
var val = document.getElementById('ytb').value;
  if (val != "")
    location.replace('https://www.youtube.com/results?search_query='+val);
}


function w3(){
  var val = document.getElementById('w3').value;
  if (val != "")
    location.replace('http://google.com/search?q='+val+' site:w3schools.com');
}

// Rev
var input = document.getElementById("rev");
input.addEventListener("keyup", function(event) {
  if (event.key == "Enter"){
    googlerev();
  }
})

function googlerev(){
  var val = document.getElementById('rev').value;
  if (val != "")
    location.replace('http://google.com/search?q='+val);
}

function duckgorev(){
  var val = document.getElementById('rev').value;
  if (val != "")
    location.replace('https://duckduckgo.com/?q='+val);
}

function youtuberev(){
  var val = document.getElementById('rev').value;
  if (val != "")
    location.replace('https://www.youtube.com/results?search_query='+val);
}

function w3rev(){
  var val = document.getElementById('rev').value;
  if (val != "")
    location.replace('http://google.com/search?q='+val+' site:w3schools.com');
}

function translatevi(){
  var val = document.querySelector(".translatebox textarea:first-child").value
  if (val != "")
    location.replace('https://translate.google.com.vn/?hl=en&sl=vi&tl=en&text=' + val + '&op=translate')  
}

function translateeng(){
  var val = document.querySelector(".translatebox textarea:last-child").value
  if (val != "")
    location.replace('https://translate.google.com.vn/?hl=en&sl=en&tl=vi&text=' + val + '&op=translate')
}


setInterval(demngay(),1000)

// Dem ngay thi
function demngay(){
var countDownDate = new Date("July 7, 2022 00:00:00").getTime();
var now = new Date().getTime();
var distance = countDownDate - now;
var days = Math.floor(distance / (1000 * 60 * 60 * 24));

document.getElementById('timejs').innerHTML = days
}
