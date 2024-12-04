
// After page load call the form initialization function
document.addEventListener("DOMContentLoaded", function() {
  validationSetup("visitorForm");
});


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
  let arr1 = ["Home", "About", "Completed", "Upcoming", "Favorite", "Visitor"];
  let arr2 = ["drop-items-home", "drop-items-about", "drop-items-completed", "drop-items-upcoming", "drop-items-favorite", "drop-items-visitor"];
  pauseVideo()
  let themeButton1 = document.querySelector(".theme-button1")
  if(themeButton1.checked){
    document.getElementById(id1).style.display = "grid";
  }
  else{
    document.getElementById(id1).style.display = "block";
  }
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


window.addEventListener("load", () => {
  // adding event for button click to switch theme
  let themeButton1 = document.querySelector(".theme-button1")
  let themeButton2 = document.querySelector(".theme-button2")
  let themeButton3 = document.querySelector(".theme-button3")
  let themeButton4 = document.querySelector(".theme-button4")
  let themeButton5 = document.querySelector(".theme-button5")
  let themeButton6 = document.querySelector(".theme-button6")
  
  themeButton1.addEventListener("change", () =>{
    if(themeButton1.checked){
      changeCss(themeButton1)
      initializeSlide()
      showSlides()
      goTo('Home')
    }
    else{
      stopSlide()
      removeCss(themeButton1)
    }
  })
  themeButton2.addEventListener("change", () =>{
    if(themeButton2.checked){
      changeCss(themeButton2)
      initializeSlide()
      showSlides()
      goTo('Favorite')
    }
    else{
      stopSlide()
      removeCss(themeButton2)
    }
  })
  themeButton3.addEventListener("change", () =>{
    if(themeButton3.checked){
      changeCss(themeButton3)
      initializeSlide()
      showSlides()
      goTo('About')
    }
    else{
      stopSlide()
      removeCss(themeButton3)
    }
  })
  themeButton4.addEventListener("change", () =>{
    if(themeButton4.checked){
      changeCss(themeButton4)
      initializeSlide()
      showSlides()
      goTo('Upcoming')
    }
    else{
      stopSlide()
      removeCss(themeButton4)
    }
  })
  themeButton5.addEventListener("change", () =>{
    if(themeButton5.checked){
      changeCss(themeButton5)
      initializeSlide()
      showSlides()
      goTo('Completed')
    }
    else{
      stopSlide()
      removeCss(themeButton5)
    }
  })
  themeButton6.addEventListener("change", () =>{
    if(themeButton6.checked){
      changeCss(themeButton6)
      initializeSlide()
      showSlides()
      goTo('Visitor')
    }
    else{
      stopSlide()
      removeCss(themeButton5)
    }
  })

  const mediaQuery = window.matchMedia('(max-width: 450px)');

  // Check if the media query matches on page load
  if (mediaQuery.matches) {
    let h = document.querySelectorAll("h1")
    h[0].textContent = "SGL"
    h[1].textContent = ""
    h[3].textContent = "SGL"
    h[4].textContent = ""
    h[6].textContent = "SGL"
    h[7].textContent = ""
    h[9].textContent = "SGL"
    h[10].textContent = ""
    h[12].textContent = "SGL"
    h[13].textContent = ""

    let c1 = document.querySelector("#card1 p")
    c1.textContent = "1"
    let c2 = document.querySelector("#card2 p")
    c2.textContent = "2"
    let c3 = document.querySelector("#card3 p")
    c3.textContent = "3"
  }

});

function changeH1(x){
  if(x.matchMedia){
    
  }
}

function changeCss(calledItem){
  const head = document.querySelector("head");
  const newLink = document.createElement("link");
  newLink.setAttribute("rel", "stylesheet");
  newLink.setAttribute("href", "css/brightTheme.css");
  newLink.setAttribute("id", "newLink")
  head.appendChild(newLink)
  let on = true
  changeOthers(calledItem, on)
}

function removeCss(calledItem){
  const head = document.querySelector("head");
  head.removeChild(document.getElementById("newLink"));
  let off = false
  changeOthers(calledItem, off)
}

function changeOthers(calledItem, state){
  let themeButton1 = document.querySelector(".theme-button1")
  let themeButton2 = document.querySelector(".theme-button2")
  let themeButton3 = document.querySelector(".theme-button3")
  let themeButton4 = document.querySelector(".theme-button4")
  let themeButton5 = document.querySelector(".theme-button5")
  let themeButton6 = document.querySelector(".theme-button6")
  let arr = Array(themeButton1, themeButton2, themeButton3, themeButton4, themeButton5, themeButton6)
  
  for(item of arr){
    if(item != calledItem){
      if(state == true)
        item.checked = true
      if(state == false)
        item.checked = false
    }
  }
}

let slideIndex = 0;
function initializeSlide(){
  let j = document.querySelector(".johnny");
  let m = document.querySelector(".malenia");
  let e = document.querySelector(".enderman");

  j.classList.add('slide')
  m.classList.add('slide')
  e.classList.add('slide')
}

function showSlides() {
  let slides = document.querySelectorAll('.slide')

  slides.forEach(slide => slide.style.display = "none");

  if(slides.length == 0){
    return
  }

  slideIndex++;
  if (slideIndex > slides.length) {
      slideIndex = 1;
  }

  slides[slideIndex - 1].style.display = "block";

  setTimeout(showSlides, 3000);
}

function stopSlide(){
  let slides = document.querySelectorAll(".slide");

  slides.forEach(slide => slide.style.display = "block");

  let j = document.querySelector(".johnny");
  let m = document.querySelector(".malenia");
  let e = document.querySelector(".enderman");

  j.classList.remove('slide')
  m.classList.remove('slide')
  e.classList.remove('slide')

  slideIndex = 0;
}


