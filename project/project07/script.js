
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add('show')
        } else {
            entry.target.classList.remove('show')
        }
    });

});

const observerbioLeft = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add('showbioLeft')
        } else {
            entry.target.classList.remove('showbioLeft')
        }
    });

});

const observerbioRight = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add('showbioRight')
        } else {
            entry.target.classList.remove('showbioRight')
        }
    });

});

const hiddenElements = document.querySelectorAll('.hidden');
const hiddenElementsbioLeft = document.querySelectorAll('.hiddenbioLeft');
const hiddenElementsbioRight = document.querySelectorAll('.hiddenbioRight');


hiddenElements.forEach((el) => observer.observe(el));
hiddenElementsbioLeft.forEach((el) => observerbioLeft.observe(el));
hiddenElementsbioRight.forEach((el) => observerbioRight.observe(el));