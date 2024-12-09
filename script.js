let right = document.querySelector(".right");
let left = document.querySelector(".left");
let images = document.querySelectorAll("img");
let slider = document.querySelector(".slider");


let slideNumber = 1;
let length = images.length;

//dots

let dots = document.querySelectorAll(".dot");

let i = 0;
dots[0].style.backgroundColor = "white"

const resetBg = () => {
    dots.forEach((dot) => {
        dot.style.backgroundColor = "transparent";
        dot.addEventListener("mouseover", stopSlideShow);
        dot.addEventListener("mouseout", startSlideShow);
    });
};

dots.forEach((dot, i) =>{
  dot.addEventListener("click", () => {
    slider.style.transform = `translateX(-${i*100}%)`;
    resetBg();
    slideNumber = i+1;
    dot.style.backgroundColor = "white"
  });
});

const changeColor = () => {
    resetBg();
    dots[slideNumber-1].style.backgroundColor = "white"
}
//slide buttons

const btnRight = () => {
    slider.style.transform = `translateX(-${slideNumber*100}%)`;
    slideNumber++;
};

const btnLeft = () => {
    slider.style.transform = `translateX(-${(slideNumber-2)*100}%)`;
    slideNumber--;
};

const getFirstSlide = () => {
    slider.style.transform = `translateX(0px)`;
    slideNumber = 1;
};

const getLastSlide = () => {
    slider.style.transform = `translateX(-${(length-1)*100}%)`;
    slideNumber = 3;
};

right.addEventListener("click", () => {
    slideNumber < length ? btnRight(): getFirstSlide();
    changeColor();
});

left.addEventListener("click", () => {
    slideNumber > 1 ? btnLeft(): getLastSlide();
    changeColor();
});

// start automation
let stopButton = document.querySelector(".pause"); 
let slideInterval; 
let isPlaying = true; 


function toggleSlideShow() {
    if (isPlaying) {
        stopSlideShow();
        stopButton.innerHTML = '<i class="fas fa-play"></i>'; 
    } else {
        startSlideShow();
        stopButton.innerHTML = '<i class="fas fa-pause"></i>'; 
    }
    isPlaying = !isPlaying; 
}

stopButton.addEventListener("click", toggleSlideShow);


const startSlideShow = () => {
    slideInterval = setInterval(() => {
        slideNumber < length ? btnRight(): getFirstSlide();
        changeColor();
    },2000)
};

const stopSlideShow = () => {
  clearInterval(slideInterval);
}

startSlideShow();

slider.addEventListener("mouseover", stopSlideShow);
slider.addEventListener("mouseout", startSlideShow);
right.addEventListener("mouseover", stopSlideShow);
right.addEventListener("mouseout", startSlideShow);
left.addEventListener("mouseover", stopSlideShow);
left.addEventListener("mouseout", startSlideShow);





