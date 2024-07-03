gsap.set(".a1",{
    x: -window.innerWidth
});
gsap.to(".a1", {
    x: 0,
    duration: 1,
    ease: "power1.inout",
});


gsap.set(".a2",{
    y: -window.innerHeight
});
gsap.to(".a2", {
    y: 0,
    duration: 1,
    ease: "power1.inout",
});


gsap.set(".a3",{
    x: +window.innerWidth
});
gsap.to(".a3", {
    x: 0,
    duration: 1,
    ease: "power1.inout",
});


gsap.set("#special",{
    y: +25,
    opacity: 0
});
gsap.to("#special", {
    y: 0,
    opacity: 1,
    duration: 1.3,
    ease: "expo.in",
});


const elementsToWatch = document.querySelectorAll('.title');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            gsap.set('.title',{
                y: +25,
                opacity: 0
            });
            gsap.to('.title', {
                y: 0,
                opacity:1,
                duration: 2,
                ease: "power4.out",
            });
            observer.unobserve(entry.target);
        }
    });
},{
    threshold: 0.5
});

elementsToWatch.forEach(element => {
    observer.observe(element);
});