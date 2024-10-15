
// takes the id of the current section to display the drop menu
function doDrop(id){
  let item = document.getElementById(id);
  if(item.style.display == "block"){
    item.style.display = "none";
  }
  else{
    item.style.display = "block";
  }
}

// goes to the id of the page passed in and closses all others
function goTo(id1){
  let arr1 = ["Home", "About", "Completed", "Upcoming", "Favorite"];
  let arr2 = ["drop-items-home", "drop-items-about", "drop-items-completed", "drop-items-upcoming", "drop-items-favorite"];
  pauseVideo()
  document.getElementById(id1).style.display = "block";
  for (const item of arr1) {
    if(item != id1){
      console.log(item);
      document.getElementById(item).style.display = "none"
    }
  }
  for(const item of arr2){
    document.getElementById(item).style.display = "none";
  }
}

// pauses the video for when you go to another page
function pauseVideo(){
  let iframe = document.getElementById('vid');
  var iframeSrc = iframe.src;
		iframe.src = iframeSrc;
}

// when media is smaller it allows to select a card to pop up the description
function doPop(id1, id2){
  let arr = ["card1", "card2", "card3"];
  let selectedBox = document.getElementById(id1);
  let selectedText = document.getElementById(id2);

  if(selectedText.style.display == "block"){
    for(const item of arr){
      if(item != id1){
        document.getElementById(item).style.display = "block"
      }
    }
    selectedBox.style.maxWidth = "20%";
    selectedText.style.display = "none";
  }
  else{
    for(const item of arr){
      if(item != id1){
        document.getElementById(item).style.display = "none"
      }
    }
    selectedBox.style.maxWidth = "100%";
    selectedText.style.display = "block";
  }
}

