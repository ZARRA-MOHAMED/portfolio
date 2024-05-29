const send =document.getElementById('send');
const icon =document.querySelector('.fa-paper-plane:hover');
send.addEventListener("mouseover",()=>{
    icon.style.color='#00ff00';
});
send.addEventListener("mouseup",()=>{
    icon.style.color='#000016';
});


let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelector('.slides');
    const totalSlides = document.querySelectorAll('.slide').length;

    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }

    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function nextSlide() {
    showSlide(currentIndex + 1);
    clearInterval(my_interval);
    my_trvl();
}

function prevSlide() {
    showSlide(currentIndex - 1);
    clearInterval(my_interval);
    my_trvl();
}
var my_interval;
function my_trvl(){
    my_interval = setInterval(() => {
    nextSlide();
}, 5000);
}
my_trvl();
