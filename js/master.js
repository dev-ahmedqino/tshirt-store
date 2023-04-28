// check if there is main color in local storage 
let mainColors = localStorage.getItem("color_option");
// console.log(mainColors);

// create if that get the last color from local storage to be displayed
if (mainColors !== null) {
    document.documentElement.style.setProperty("--main-color", mainColors);

    // remove active class from all Colors list item 
    document.querySelectorAll(".colors-list li").forEach(element => { 
        element.classList.remove("active")

    // add active class on element with data color  === local storage item
    if (element.dataset.color=== mainColors) {

        // add active class
        element.classList.add("active")
    }
            
    })


}

//Toggle Spin Class on Icon 

document.querySelector(".toggle-settings .fa-gear").onclick = function () {

// toggle class fa-spin for rotation on self
    this.classList.toggle("fa-spin")

// toggle class open on main settings box 
    document.querySelector(".settings-box").classList.toggle("open")
}

// switch colors 
const colorsLi = document.querySelectorAll(".colors-list li"); 
// loop on all list items 
colorsLi.forEach(li => {
    // click on every list items 
    li.addEventListener("click" , (e) => {
    // set color on root 
    document.documentElement.style.setProperty("--main-color", e.target.dataset.color)

    // set color on Local storage
    localStorage.setItem("color_option", e.target.dataset.color);

    // remove active class from all children
    e.target.parentElement.querySelectorAll(".active").forEach(element => { 
        element.classList.remove("active")
    })
    // add active class on target 
    e.target.classList.add("active")
    })
})

// switch random background option 
const randomBackEl = document.querySelectorAll(".random-backgrounds span"); 
// loop on all spans 
randomBackEl.forEach(span => {
    // click on every list items 
    span.addEventListener("click" , (e) => {
    // remove active class from all spans
    e.target.parentElement.querySelectorAll(".active").forEach(element => { 
        element.classList.remove("active")
    })
    // add active class on target 
    e.target.classList.add("active")
    })
})

// Select Landing Page Element

let landingPage = document.querySelector(".landing-page");

// Get array of images 

let imagesArray = ["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg"];

// change background image url // 

landingPage.style.backgroundImage = 'url("images/3.jpg")' ;

// get random Number 
// let randomNumber = Math.floor(Math.random() * imagesArray.length);

// set time to let images change every periodic time 
// setInterval(() => {
// console.log(randomNumber)
// }, 1000); 

// because i am getting number 3 every second i need to put the random number inside the function 
// then apply the background change 
setInterval(() => {
    let randomNumber = Math.floor(Math.random() * imagesArray.length);
    landingPage.style.backgroundImage = 'url("images/' + imagesArray[randomNumber]+'")' ;
}, 10000); 
    
// -------------------------------------------------------------------------------------------------
// below function used when click subscribe button it should appear message that your email add successfully (Help)
const addEmailButton = document.getElementById('collection-sub');
addEmailButton.addEventListener('click', function() {
    const emailInput = document.getElementById('email-field');
    const emailValue = emailInput.value;
    
    // Check if the email input is valid
    if (!emailValue || !/\S+@\S+\.\S+/.test(emailValue)) {
        const errorMessage = document.createElement('p');
        errorMessage.innerText = 'Please enter a valid email address.';
        const container = emailInput.parentNode;
        container.appendChild(errorMessage, addEmailButton);

        // Remove the error message after 5 seconds
        setTimeout(function() {
            errorMessage.parentNode.removeChild(errorMessage);
        }, 2000);
        
        return;
    }
    
    // If the email input is valid, add it to the database
    const successMessage = document.createElement('p');
    successMessage.innerText = 'Your email has been added to the database successfully!';
    const container = emailInput.parentNode;
    container.insertBefore(successMessage, addEmailButton);
    emailInput.parentNode.removeChild(emailInput);
    addEmailButton.parentNode.removeChild(addEmailButton);
});
// --------------------------------------------------------------------------------------------------
// this below function used to change the image when mouse came on it (Summer section and sales)
// shirt no.1 :
const myImage1 = document.getElementById("img-1");

myImage1.addEventListener('mouseover', function() {
  this.setAttribute('src', './images/summer1new.jpg');
});

myImage1.addEventListener('mouseout', function() {
  this.setAttribute('src', './images/summer1.jpg');
});
// shirt no 2 : 
const myImage2 = document.getElementById("img-2");

myImage2.addEventListener('mouseover', function() {
  this.setAttribute('src', './images/summer2new.jpg');
});

myImage2.addEventListener('mouseout', function() {
  this.setAttribute('src', './images/summer2.jpg');
});
// shirt no 3 : 
const myImage3 = document.getElementById("img-3");

myImage3.addEventListener('mouseover', function() {
  this.setAttribute('src', './images/summer3new.jpg');
});

myImage3.addEventListener('mouseout', function() {
  this.setAttribute('src', './images/summer3.jpg');
});
// shirt no 4 : 
const myImage4 = document.getElementById("img-4");

myImage4.addEventListener('mouseover', function() {
  this.setAttribute('src', './images/summer4new.jpg');
});

myImage4.addEventListener('mouseout', function() {
  this.setAttribute('src', './images/summer4.jpg');
});
// shirt no 5 : 
const myImage5 = document.getElementById("img-5");

myImage5.addEventListener('mouseover', function() {
  this.setAttribute('src', './images/sale1new.jpg');
});

myImage5.addEventListener('mouseout', function() {
  this.setAttribute('src', './images/sale1.jpg');
});
// shirt no 6 : 
const myImage6 = document.getElementById("img-6");

myImage6.addEventListener('mouseover', function() {
  this.setAttribute('src', './images/sale2new.jpg');
});

myImage6.addEventListener('mouseout', function() {
  this.setAttribute('src', './images/sale2.jpg');
});
// shirt no 7 : 
const myImage7 = document.getElementById("img-7");

myImage7.addEventListener('mouseover', function() {
  this.setAttribute('src', './images/summer3new.jpg');
});

myImage7.addEventListener('mouseout', function() {
  this.setAttribute('src', './images/summer3.jpg');
});
// shirt no 8 : 
const myImage8 = document.getElementById("img-8");

myImage8.addEventListener('mouseover', function() {
  this.setAttribute('src', './images/summer4new.jpg');
});

myImage8.addEventListener('mouseout', function() {
  this.setAttribute('src', './images/summer4.jpg');
});
