const btns = document.querySelector('.btns')
const categories = document.querySelector('.categories');
const section = categories.querySelectorAll('section');
const btnUp = document.querySelector('.up');
const header = document.querySelector('.header');
const themes = document.querySelector('.themes');
const body = document.querySelector('body');
const cardDay = document.querySelectorAll('.card__date');
const modal = document.querySelector('.modal');
const butBtns = document.querySelectorAll('.card__buy');
const buyBtn = document.querySelector('.btn__buy');
const btnClose = document.querySelector('.btn__close');
const formTitle = document.querySelector('.form__title');

themes.addEventListener('click', () => {
    body.classList.toggle('active');
    if(themes.textContent === 'On') {
        themes.classList.add('on');
        themes.textContent = 'Off';
    } else {
        themes.classList.remove('on');
        themes.textContent = 'On';
    }   
});

btnUp.addEventListener('click', (e) => {
    window.scroll({
        top: 0,
        behavior: "smooth"
    })
});

window.addEventListener('scroll', () => {
    if (window.scrollY >= 300) {
        btnUp.style.display = 'flex';
    } else {
        btnUp.style.display = 'none';
    }
});

btns.addEventListener('click', (e) => {
    let className = e.target.getAttribute('class');
    let currentCategories = categories.querySelector(`#${className}`);
    window.scrollTo({
        top: currentCategories.offsetTop,
        behavior: "smooth"
    })
});

butBtns.forEach(buy => {
    
    buy.addEventListener('click', (e) => {
        e.preventDefault();
        const currentCardDesc = buy.closest('.card__bottom').querySelector('.card__description').textContent;
        formTitle.textContent = currentCardDesc;
        modal.classList.add('open');
        body.style.overflow = 'hidden'
    })
});

buyBtn.addEventListener('click', (e) => {
    e.preventDefault();
    alert("Поздравляю Вас с покупкой! =)");
    modal.classList.remove('open');
    body.style.overflow = 'visible';
});

btnClose.addEventListener('click', (e) => {
    e.preventDefault();
    modal.classList.remove('open');
    body.style.overflow = 'visible';
})


function showDate() {
    const date = new Date();
    const day = date.getDate();

    const currentWeek = Math.ceil(day / 7);
    const currentDayOfWeek = date.toLocaleDateString('ru-Ru', { weekday: 'long' });
    const currentMonth = date.toLocaleDateString('ru-Ru', { month: 'long' });
    const currentYear = date.toLocaleDateString('ru-Ru', { year: 'numeric' });
    const convertDayOfWeek = currentDayOfWeek[0].toUpperCase() + currentDayOfWeek.slice(1);

    const innerDate = `${convertDayOfWeek}, 
    <br> ${currentWeek} неделя ${newCurrentMonth(currentMonth)} ${currentYear} года`;
    const arrayOfDays = [...cardDay];
    arrayOfDays.forEach(day => {
        day.innerHTML = innerDate;
    });
};

function newCurrentMonth (month) {
    let convertMonth;
    if (month === "август" || month === "март") {
        convertMonth = month[0].toUpperCase() + month.slice(1, month.length) + "а"
        return convertMonth;
    } else {
        convertMonth = month[0].toUpperCase() + month.slice(1, month.length - 1) + "я"
        return convertMonth;
    }
};

showDate();
