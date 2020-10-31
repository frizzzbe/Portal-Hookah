let modal = document.querySelector('.modal-cont');
let modalText = document.querySelector('.modal__text');
let addComment = document.querySelector('.order__comment-add');
let addCommentArea = document.querySelector('#comment');

let cardSubmit = document.querySelectorAll('.card__submit');
let count = document.querySelectorAll('.count');

let submit = document.querySelector('.card__submit--order');
let response = document.querySelector('.modal-cont--response');
let modalResponse = response.querySelector('.modal--response');
let responseClose = response.querySelector('.modal__close');

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
if(document.querySelector('.order__sauce-add')){
    let addSauce = document.querySelector('.order__sauce-add');
    let addSauceArea = document.querySelector('.order__sauce-cont');
    addSauce.addEventListener('click', ()=>{
        addSauce.classList.add('order__sauce-add--opened');
        addSauceArea.style.display = "block";
    });
}


submit.addEventListener('click', ()=>{
    let countItems = document.querySelector('#items');
    let responseText = modalResponse.querySelector('.modal__text');
    modal.style.display = "none";
    if(Number(countItems.textContent) > 0){
        modalResponse.classList.remove('modal--error');
        responseText.textContent = "Ваш заказ был успешно оформлен!";
    }else{
        modalResponse.classList.add('modal--error');
        responseText.textContent = "При заказе произошла ошибка, повторите попытку.";
    }

    response.style.display = "flex";
});
response.addEventListener('click', (e)=>{
    if(!e.target.closest('.modal')){
        response.style.display = "none";
    }
});
responseClose.addEventListener('click', ()=>{
    response.style.display = "none";
});