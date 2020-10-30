let modal = document.querySelector('.modal-cont');
let modalText = document.querySelector('.modal__text');
let addComment = document.querySelector('.order__comment-add');
let addCommentArea = document.querySelector('#comment');

let cardSubmit = document.querySelectorAll('.card__submit');
let count = document.querySelectorAll('.count');

cardSubmit.forEach(item =>{
    item.addEventListener('click', ()=>{
        let currentOrder = item.closest('.card'),
            cardTitle = currentOrder.querySelector('.card__title'),
            cardImg = currentOrder.querySelector('.card__image'),
            cardPrice = currentOrder.querySelector('.card__price span'),
            orderTitle = document.querySelector('.order__title'),
            orderImg = document.querySelector('.order__image'),
            orderPrice = document.querySelector('.order__price');

        orderTitle.textContent = cardTitle.textContent;
        orderImg.src = cardImg.src;
        orderPrice.textContent = "Цена: " + cardPrice.textContent;
        
        modal.style.display = "flex";

    });
});

modal.addEventListener('click', (e)=>{
    if(!e.target.closest('.modal')){
        modal.style.display = "none";
    }
});

count.forEach(item => {
    let countDecrement = item.querySelector('.count__decrement');
    let countCurrent = item.querySelector('.count__current');
    let countIncrement = item.querySelector('.count__increment');

    countDecrement.addEventListener('click', ()=> {
        countCurrent.textContent = (Number(countCurrent.textContent) - 1) > 0 ? Number(countCurrent.textContent) - 1 : 0;
    });
    countIncrement.addEventListener('click', ()=> {
        countCurrent.textContent = Number(countCurrent.textContent)+ 1;
    });
});

addComment.addEventListener('click', ()=>{
    addComment.style.display = "none";
    addCommentArea.style.display = "block";
    addCommentArea.focus();
});
addCommentArea.addEventListener('blur', (e)=>{
    if(e.target.value == ""){
        addComment.style.display = "block";
        addCommentArea.style.display = "none";
    }else{
        addComment.style.display = "none";
        addCommentArea.style.display = "block";
    }
});