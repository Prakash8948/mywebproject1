const btnCart=document.querySelector('#cart-icon');
const Cart=document.querySelector('.cart');
const btnclose=document.querySelector('#cart-close');

btnCart.addEventListener('click',()=>{
    Cart.classList.add('cart-active');
});

btnclose.addEventListener('click',()=>{
    Cart.classList.remove('cart-active');
});

document.addEventListener('DOMcontentloaded',loadfood);

function loadfood(){
    loadcontent();
}
function loadcontent(){
    let btnRemove=document.querySelectorAll('.cart-remove');
    btnRemove.forEach((btn)=>{
        btn.addEventListener('click',removeItem);
    });
}

function removeItem(){
    this.ParentElement.remove();
}