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


// قم بتحديد العناصر التي تريد تنفيذ الكود عند ظهورها للمرة الأولى
const elementsToWatch = document.querySelectorAll('.title');

// انشئ IntersectionObserver
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        // تحقق مما إذا كان العنصر مرئياً
        if (entry.isIntersecting) {
            // قم بتنفيذ الكود هنا
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
            // أوقف مراقبة العنصر بمجرد ظهوره لأول مرة
            observer.unobserve(entry.target);
        }
    });
});

// قم بتسجيل المراقبة لكل عنصر
elementsToWatch.forEach(element => {
    observer.observe(element);
});


