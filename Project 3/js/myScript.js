/* Get the modal
var modal = document.getElementById("modalDiv");

var img = document.getElementById("myImg");
var modalImg = document.getElementById("modalImg");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}
  */
function doDropHome(){
  let items = document.getElementById("drop-items-home");
  if(items.style.display == "block"){
    items.style.display = "none";
  }
  else{
    items.style.display = "block";
  }
}
function doDropFavorite(){
  let items = document.getElementById("drop-items-favorite");
  if(items.style.display == "block"){
    items.style.display = "none";
  }
  else{
    items.style.display = "block";
  }
}
function doDropAbout(){
  let items = document.getElementById("drop-items-about");
  if(items.style.display == "block"){
    items.style.display = "none";
  }
  else{
    items.style.display = "block";
  }
}
function doDropUpcoming(){
  let items = document.getElementById("drop-items-upcoming");
  if(items.style.display == "block"){
    items.style.display = "none";
  }
  else{
    items.style.display = "block";
  }
}
function doDropCompleted(){
  let items = document.getElementById("drop-items-completed");
  if(items.style.display == "block"){
    items.style.display = "none";
  }
  else{
    items.style.display = "block";
  }
}

function goHome(){
  document.getElementById("Home").style.display = "block";
  document.getElementById("drop-items-home").style.display = "none";
  document.getElementById("Favorite").style.display = "none";
  document.getElementById("drop-items-favorite").style.display = "none";
  pauseVideo();
  document.getElementById("About").style.display = "none";
  document.getElementById("drop-items-about").style.display = "none";
  document.getElementById("Completed").style.display = "none";
  document.getElementById("drop-items-completed").style.display = "none";
  document.getElementById("Upcoming").style.display = "none";
  document.getElementById("drop-items-upcoming").style.display = "none";
}

function goFavorite(){
  document.getElementById("Favorite").style.display = "block";
  document.getElementById("drop-items-favorite").style.display = "none";
  document.getElementById("Home").style.display = "none";
  document.getElementById("drop-items-home").style.display = "none";
  document.getElementById("About").style.display = "none";
  document.getElementById("drop-items-about").style.display = "none";
  pauseVideo();
  document.getElementById("Completed").style.display = "none";
  document.getElementById("drop-items-completed").style.display = "none";
  document.getElementById("Upcoming").style.display = "none";
  document.getElementById("drop-items-upcoming").style.display = "none";
}
function goAbout(){
  document.getElementById("About").style.display = "block";
  document.getElementById("drop-items-about").style.display = "none";
  document.getElementById("Home").style.display = "none";
  document.getElementById("drop-items-home").style.display = "none";
  document.getElementById("Favorite").style.display = "none";
  document.getElementById("drop-items-favorite").style.display = "none";
  pauseVideo();
  document.getElementById("Completed").style.display = "none";
  document.getElementById("drop-items-completed").style.display = "none";
  document.getElementById("Upcoming").style.display = "none";
  document.getElementById("drop-items-upcoming").style.display = "none";
}
function goUpcoming(){
  document.getElementById("Upcoming").style.display = "block";
  document.getElementById("drop-items-upcoming").style.display = "none";
  document.getElementById("Home").style.display = "none";
  document.getElementById("drop-items-home").style.display = "none";
  document.getElementById("Favorite").style.display = "none";
  document.getElementById("drop-items-favorite").style.display = "none";
  pauseVideo();
  document.getElementById("About").style.display = "none";
  document.getElementById("drop-items-about").style.display = "none";
  document.getElementById("Completed").style.display = "none";
  document.getElementById("drop-items-completed").style.display = "none";
}
function goCompleted(){
  document.getElementById("Completed").style.display = "block";
  document.getElementById("drop-items-completed").style.display = "none";
  document.getElementById("Home").style.display = "none";
  document.getElementById("drop-items-home").style.display = "none";
  document.getElementById("Favorite").style.display = "none";
  document.getElementById("drop-items-favorite").style.display = "none";
  pauseVideo();
  document.getElementById("About").style.display = "none";
  document.getElementById("drop-items-about").style.display = "none";
  document.getElementById("Upcoming").style.display = "none";
  document.getElementById("drop-items-upcoming").style.display = "none";
}

function pauseVideo(){
  let iframe = document.getElementById('vid');
  var iframeSrc = iframe.src;
		iframe.src = iframeSrc;
}

function doPop1(){
  let box1 = document.getElementById("card1");
  let box2 = document.getElementById("card2");
  let box3 = document.getElementById("card3");
  let text = document.getElementById("text1");
  if(text.style.display == "block"){
    box2.style.display = "block";
    box3.style.display = "block";
    box1.style.maxWidth = "20%";
    text.style.display = "none";
  }
  else{
    box2.style.display = "none";
    box3.style.display = "none";
    box1.style.maxWidth = "100%";
    text.style.display = "block";
  }
}
function doPop2(){
  let box1 = document.getElementById("card1");
  let box2 = document.getElementById("card2");
  let box3 = document.getElementById("card3");
  let text = document.getElementById("text2");
  if(text.style.display == "block"){
    box1.style.display = "block";
    box3.style.display = "block";
    box2.style.maxWidth = "20%";
    text.style.display = "none";
  }
  else{
    box1.style.display = "none";
    box3.style.display = "none";
    box2.style.maxWidth = "100%";
    text.style.display = "block";
  }
}
function doPop3(){
  let box1 = document.getElementById("card1");
  let box2 = document.getElementById("card2");
  let box3 = document.getElementById("card3");
  let text = document.getElementById("text3");
  if(text.style.display == "block"){
    box2.style.display = "block";
    box1.style.display = "block";
    box3.style.maxWidth = "20%";
    text.style.display = "none";
  }
  else{
    box2.style.display = "none";
    box1.style.display = "none";
    box3.style.maxWidth = "100%";
    text.style.display = "block";
  }
}


/*
window.onclick = function(e) {
  let items = document.getElementById("drop-items");
  if (!e.target.matches('.drop-items')) {
    if(e.target.matches('.drop-menu')){
      items.style.display = "block";
    }
    else{
      //items.style.display = "none";
      console.log("closed");
    }
  }
}
  */