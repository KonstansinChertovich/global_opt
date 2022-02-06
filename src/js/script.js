const btnPrev = document.querySelector('.slider__prev'),
      btnNext = document.querySelector('.slider__next'),
      slaidItems = document.querySelectorAll('.slider__items');

btnNext.addEventListener('click', (e) => {
    e.preventDefault();
    slaidItems.forEach(item => {
        if(item.classList.contains('slider_prev')) {
            item.classList.remove('slider_prev');
            item.classList.add('slider_hiden');
        }
        if(item.classList.contains('slider_active')) {
            item.classList.remove('slider_active');
            item.classList.add('slider_prev');
        }
        if(item.classList.contains('slider_next')) {
            item.classList.remove('slider_next');
            item.classList.add('slider_active');
        }
        if(item.classList.contains('slider_hiden')) {
            item.classList.remove('slider_hiden');
            item.classList.add('slider_next');
        }
    });
});

btnPrev.addEventListener('click', (e) => {
    e.preventDefault();
    slaidItems.forEach(item => {
        if(item.classList.contains('slider_next')) {
            item.classList.remove('slider_next');
            item.classList.add('slider_hiden');
        }
        if(item.classList.contains('slider_active')) {
            item.classList.remove('slider_active');
            item.classList.add('slider_next');
        }
        if(item.classList.contains('slider_prev')) {
            item.classList.remove('slider_prev');
            item.classList.add('slider_active');
        }
        if(item.classList.contains('slider_hiden')) {
            item.classList.remove('slider_hiden');
            item.classList.add('slider_prev');
        }
    });
});


// classes sample section price
class DeliveruCart {
    constructor(name, src, alt, rate, price, text ,btntext, parent, ...classes) {
        this.name = name,
        this.src = src, 
        this.alt = alt, 
        this.rate = rate, 
        this.price = price,
        this.text = text,
        this.btntext = btntext,
        this.parent = parent = document.querySelector(parent),
        this.classes = classes
    }

    render() {
        const element = document.createElement('div');
        if(this.classes.length === 0) {
            this.classes = 'delivery__block';
            element.classList.add(this.classes);
        }else {
            this.classes.forEach(item => element.classList.add(item));
        }
    
        element.innerHTML = `
            <div class="delivery__name">${this.name}</div>
            <div class="delivery__icon"><img src=${this.src} alt=${this.alt}></div>
            <div class="delivery__rate">
                ${this.rate}
                <span>${this.price}</span>
            </div>
            <div class="delivery__text">
                ${this.text} 
            </div>
            <div class="delivery__btn"><button class="btns">${this.btntext}</button></div>
        `;
        
        this.parent.append(element);
    }
}

new DeliveruCart(
    'Доставка морем',
    '"icons/delivery/ship.png"',
    '"ship"',
    'Доставка 35-50 дней',
    'от 0,3$ за 1 кг',
    'Морские перевозки грузов из Китая в Россию за 35 дней с прохождением таможни',
    'Подробнее',
    '.delivery__wrapper',
    'delivery__block'
).render();
new DeliveruCart(
    'Ж/Д доставка',
    '"icons/delivery/train.png"',
    '"train"',
    'Доставка 15-28 дней',
    'от 1$ за 1 кг',
    'ЖД перевозки грузов из Китая в Россию от 2 недель с прохождением таможни',
    'Подробнее',
    '.delivery__wrapper',
    'delivery__block'
).render();
new DeliveruCart(
    'Автодоставка',
    '"icons/delivery/truck.png"',
    '"truck"',
    'Доставка 12-20 дня',
    'от 1$ за 1 кг',
    'Автоперевозки грузов из Китая в Россию от 2 недель с прохождением таможни',
    'Подробнее',
    '.delivery__wrapper',
    'delivery__block'
).render();
new DeliveruCart(
    'Авиа доставка',
    '"icons/delivery/ship.png"',
    '"ship"',
    'Доставка 1-12 дней',
    'от 6$ за 1 кг',
    'Авиаперевозки грузов из Китая в Россию до 2 недель с прохождением таможни',
    'Подробнее',
    '.delivery__wrapper',
    'delivery__block'
).render();



// const slider = document.querySelector('.slid'),
//     slidTrack =document.querySelector('.slid__track'),
//     item = document.querySelectorAll('.slid__item'),
//     btnNext = document.querySelector('.slid__next'),
//     btnPrev  = document.querySelector('.slid__prev');

// let positionTrack = 0;   
// const countItems = 3; //сколько показывать слайдов в окне
// const scrollItems = 1;//сколько прокручивать за раз
// const slidWidth = slider.clientWidth;
// const colItem = item.length;
// const generalWidthItem =  colItem * (slidWidth / countItems);
// const mathAbs = Math.abs(positionTrack);
// const widthItme = slidWidth / countItems;

// console.log(slider.clientHeight);
// item.forEach(item => {
//     item.style.width = `${slidWidth / countItems}px`;
//     item.style.height = `${slider.clientHeight}px`;
// });
// btnNext.addEventListener('click', (e) => {
//     e.preventDefault();
//     e.stopPropagation();
//     scrollCheck();
// });
// btnPrev.addEventListener('click', (e) => {
//     e.preventDefault();
//     e.stopPropagation();
//     scrollCheckPrev();
// });

// examinationBtn(btnPrev);

// // item.forEach((item, i) => item.dataset.order = i);

// function scrollCheckPrev() {
//     if(Math.abs(positionTrack) / widthItme == 1) {
//         slidTrack.style.left = `${positionTrack += widthItme}px`;
//         examinationBtn(btnPrev);
//         examinationBtnNext();
//     }else {
//         slidTrack.style.left = `${positionTrack += (slidWidth / countItems) * scrollItems}px`;
//         examinationBtn(btnPrev);
//         examinationBtnNext();
//     }
// }
// function scrollCheck() {
//     if(((generalWidthItem - slidWidth) - Math.abs(positionTrack)) / widthItme == 1) {
//         slidTrack.style.left = `${positionTrack -= (generalWidthItem - slidWidth) - Math.abs(positionTrack)}px`;
//         examinationBtn(btnPrev);
//         examinationBtnNext();
//     }else {
//         slidTrack.style.left = `${positionTrack -= (slidWidth / countItems) * scrollItems}px`;
//         examinationBtn(btnPrev);
//         examinationBtnNext();
//     }
// }
// function examinationBtnNext() {
//     if(((generalWidthItem - slidWidth) - Math.abs(positionTrack)) / widthItme == 0) {
//         btnNext.disabled = true;
//     }else {
//         btnNext.disabled = false;
//     }
// }
// function examinationBtn(b, s) { 
//     if(positionTrack == 0) {
//         b.disabled = true;
//     }else {
//         b.disabled = false;
//     }
// }
