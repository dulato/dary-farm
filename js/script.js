
const btn = document.getElementById('button');
function display () {
    document.querySelector('#lang_list').classList.toggle('active');
}
btn.addEventListener("click", display);


const burger = document.querySelector('.menu_burger');
function actives () {
    document.querySelector('.menu_burger').classList.toggle('active');
    document.querySelector('.logo').classList.toggle('active');
    document.querySelector('.menu_list').classList.toggle('active');
    document.querySelector('.lang').classList.toggle('active');
    document.body.classList.toggle('lock');
}
burger.addEventListener('click', actives);


let links = document.querySelectorAll('.menu_link');
for (let i = 0; i < links.length; i++) {
    links[i].onclick = function () {
        document.querySelector('.menu_burger').classList.remove('active');
        document.querySelector('.logo').classList.remove('active');
        document.querySelector('.menu_list').classList.remove('active');
        document.querySelector('.lang').classList.remove('active');
        document.body.classList.remove('lock');
    }
}


let langs = document.querySelectorAll('.lang_link');
for (let j = 0; j < langs.length; j++) {
    langs[j].onclick = function () {
        document.querySelector('.menu_burger').classList.remove('active');
        document.querySelector('.logo').classList.remove('active');
        document.querySelector('.menu_list').classList.remove('active');
        document.querySelector('.lang').classList.remove('active');
        document.body.classList.remove('lock');
        document.querySelector('#lang_list').classList.remove('active');
    }   
}


let accosBtn = document.querySelectorAll('.accoss_title');
for (let n = 0; n < accosBtn.length; n++) {
    accosBtn[n].onclick = function () {
        accosBtn[n].classList.toggle('active');
    }
}


document.querySelectorAll('.menu_link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        let href = this.getAttribute('href').substring(1);

        const scrollTarget = document.getElementById(href);
        const topOffset = document.querySelector('.header').offsetHeight;
        const elementPosition = scrollTarget.getBoundingClientRect().top;
        const offsetPosition = elementPosition - topOffset;

        window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});

document.querySelectorAll('.ins_btn').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        let href = this.getAttribute('href').substring(1);

        const scrollTarget = document.getElementById(href);
        const topOffset = document.querySelector('.header').offsetHeight;
        const elementPosition = scrollTarget.getBoundingClientRect().top;
        const offsetPosition = elementPosition - topOffset;

        window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});

