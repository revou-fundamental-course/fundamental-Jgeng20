//Algoritma warna kelap kelip
const changeColor1 = document.querySelector('.div-first');
const changeColor2 = document.querySelector('.alert-enter');
const changeColor3 = document.querySelector('.alert-submit');
let change = true;
let slideBorder = setInterval (() => {
    if (change) {
        changeColor1.style.backgroundColor = 'wheat'; 
        changeColor2.style.color = 'red';
        changeColor3.style.color = 'red';
    } else {
        changeColor1.style.backgroundColor = 'red';
        changeColor2.style.color = 'black';
        changeColor3.style.color = 'black';
    }
    change = !change;
}, 500);

//Algoritma validasi enter web
function validateEnter () {
    const getEnter= document.forms["input-form"]["first-name"].value;

    if (getEnter == "") {
        document.getElementById("alert-enter").innerHTML= "Fill Your Name To Get In!";
        return false;
    } else {
        document.getElementById("alert-enter").innerHTML= "";

        var header = document.getElementById('header');
        header.style.display = 'flex';

        var closePop = document.getElementById('welcome');
        closePop.style.display = 'none';
    }
    //menampilkan elemen 
    document.getElementById("sender-first-name").innerHTML = getEnter;
    return false;
}

//Algoritma validasi form
function validateForm () {
    const name= document.forms["message-form"]["full-name"].value;
    const birthdate= document.forms["message-form"]["birth-date"].value;
    const gender= document.forms["message-form"]["gender"].value;
    const messages= document.forms["message-form"]["messages"].value;

    if (name == "" || birthdate == "" || gender == "" || messages == "") {
        document.getElementById("alert").innerHTML= "Fill All Columns Please!";
        return false;
    } else {
        document.getElementById("alert").innerHTML= "";

        var messageElement = document.getElementById('thank');
        messageElement.style.display = 'flex';
        
        document.getElementById("thank").innerHTML= "Thanks! Happy To Knows You!";
    }

    setSenderUI(name, birthdate, gender, messages);
 
    return false;
}
//menampilkan elemen 
function setSenderUI(name, birthdate, gender, messages) {
    document.getElementById("sender-full-name").innerHTML= name;
    document.getElementById("sender-birth-date").innerHTML= birthdate;
    document.getElementById("sender-gender").innerHTML= gender;
    document.getElementById("sender-messages").innerHTML= messages;
}

//Algoritma slide image
let slideIndex = 1;
showSlide(1);

function nextslide(n) {
    showSlide (slideIndex += n)
    console.log(slideIndex)
}

function showSlide(n) {
    let imgList = document.getElementsByClassName('slide-img');
    if (n > imgList.length) slideIndex = 1;
    if (n < 1) slideIndex = imgList.length;

    let index = 0;
    while (index < imgList.length) {
        imgList[index].style.display = 'none';
        index++;
    }

    imgList[slideIndex - 1].style.display = 'block';
    console.log(slideIndex - 1 );  
}

// Algoritma delay slide apabila user mengclick button prev/next
let slideInterval = setInterval (() => {
    nextslide(1);
}, 1000);

let delaySlide = false;

const prevButton = document.getElementById('previous');
const nextButton = document.getElementById('next');

function buttonclick() {  
    delaySlide = true;
    clearInterval(slideInterval);
    slideInterval = setInterval(() => {
        nextslide(1);
        delaySlide = false;
        clearInterval(slideInterval);
        slideInterval = setInterval(() => {
            nextslide(1);
        }, 1000);
    }, 10000);
}

prevButton.addEventListener('click', () => {
    nextslide(-1);
    buttonclick();
});

nextButton.addEventListener('click', () => {
    nextslide(1);
    buttonclick();
});

//algoritma untuk header
const buttonNav = document.querySelector('.button-nav');
const divButton = document.querySelector('.div-button');
const navbarButton = document.querySelector('.navbar-button');

buttonNav.addEventListener('click', function() {
    navbarButton.style.display = 'flex';
});

divButton.addEventListener('click', function() {
    navbarButton.style.display = 'none';
});