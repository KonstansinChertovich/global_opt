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
