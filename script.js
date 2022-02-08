const products = {
   plainBurger: {
       name: 'GAMBURGER',
       price: 10000, 
       kcall: 250,
       amount: 0,
       get summ(){
           return this.price * this.amount
       },
       get Allkcall(){
           return this.kcall * this.amount
       },
   },
   freshBurger: {
       name: 'GAMBURGER FRESH',
       price: 20500, 
       kcall: 350,
       amount: 0,
       get summ(){
           return this.price * this.amount
       },
       get Allkcall(){
           return this.kcall * this.amount
       },
   },
   freshCombo: {
       name: 'FRESH COMBO',
       price: 31900, 
       kcall: 650,
       amount: 0,
       get summ(){
           return this.price * this.amount
       },
       get Allkcall(){
           return this.kcall * this.amount
       },
   }
}


let btnPlusOrMinus = document.querySelectorAll('.main__product-btn'),
addCart = document.querySelector('.addCart'),
receipt = document.querySelector('.receipt'),
receiptWindow = document.querySelector('.receipt__window'),
receiptWindowOut = document.querySelector('.receipt__window-out'),
receiptWindowBtn = document.querySelector('.receipt__window-btn'),
level = document.querySelector('.header__timer-extra'),
lvlStr = document.querySelector('.header__timer-lvl');

btnPlusOrMinus.forEach(function (el) {
   el.addEventListener('click', function(){
       PlusOrMinus(this)
   })
})
   


function PlusOrMinus(element) {
   const parent = element.closest('.main__product'),
    parentId = parent.getAttribute('id');
    out = parent.querySelector('.main__product-num'),
    price = parent.querySelector('.main__product-price span'),
    kcall = parent.querySelector('.main__product-kcall span'),
    elemData = element.getAttribute('data-symbol');
    if (elemData == '+' && products[parentId].amount < 10) {
        products[parentId].amount++
    }else if (elemData == '-' && products[parentId].amount > 0) {
        products[parentId].amount--
    }
    out.innerHTML = products[parentId].amount
    price.innerHTML = products[parentId].summ
    kcall.innerHTML = products[parentId].Allkcall
}

let arrayProduct = [],
totalName = '',
totalPrice = 0,
totalKcall = 0



 
 addCart.addEventListener('click',function(e){
   e.preventDefault()
   for (const key in products) { /* product objectini qarab chiqamiz */
       const po = products[key] /*  po - (product objecti) qulaylik uchun o'zgaruvchini ichiga solingan*/
       if (po.amount > 0) { /*  faqatgina amount kaliti 0 dan katta bo'lgan miqdorli objectlarni o'tkazamiz*/
           arrayProduct.push(po) /* massivga  kaliti 0 dan katta bo'lgan objectlarni qo'shamiz */
       }
       po.price = po.summ  /* narxni o'zgartiramiz */
       po.kcall = po.Allkcall  /* kilakoriyani o'zgartiramiz */
   }
   console.log(arrayProduct);
   arrayProduct.forEach(el => {
       totalPrice += el.price /* narxni summirovat qilamiz */
       totalKcall += el.kcall/* kaloriyani summirovat qilamiz */
       totalName += `${el.name} \n` /* barcha nomlarini birlashtiramiz */
        console.log( el.price );
   });
  
   receiptWindowOut.innerHTML = `Buyurtmangiz: \n${totalName}\nUmumiy kaloriyasi: ${totalKcall}\nUmumiy Narxi: ${totalPrice}`
   receipt.style.display = 'flex'
   setTimeout(() => {
       receipt.style.opacity = '1'
   }, 100);
   setTimeout(() => {
       receiptWindow.style.top = '30%'
   }, 100);
   body.style.overflow = 'hidden'
   const outNum = document.querySelectorAll('.main__product-num')
   outNum.forEach(element => {
       element.innerHTML = 0
   });
   const outPrice = document.querySelectorAll('.main__product-price span')
   outPrice.forEach(element => {
       element.innerHTML = 0
   });
   
})

receiptWindowBtn.addEventListener('click',()=>{
   location.reload()
})

function lvl() {
   level.style.color = `rgb(${getRandomInt()},${getRandomInt()},${getRandomInt()})`;
   lvlStr.style.color = `rgb(${getRandomInt()},${getRandomInt()},${getRandomInt()})`;
   if(level.innerHTML <= 50) {
      level.innerHTML++
      setTimeout(lvl, 30)
      // 
   }else if(level.innerHTML <= 25) {
      level.innerHTML++
      setTimeout(lvl, 50)
      // level.style.color = 'orange';
   }else if(level.innerHTML <= 75) {
      level.innerHTML++
      setTimeout(lvl, 70)
      // level.style.color = 'yellow';
      // level.style.transition = '2s';
   }else if(level.innerHTML < 100) {
      level.innerHTML++
      setTimeout(lvl, 90)
      // level.style.color = 'white';
      // level.style.transition = '2s';
   }
   else if(level.innerHTML = 99) {
      level.innerHTML++
      setTimeout(lvl, 30)
      level.style.color = 'white';
      level.style.transition = '2s';
      lvlStr.style.color = 'white';
   }
}
lvl();

function getRandomInt() {
   return Math.floor(Math.random() * 256);
 }

let wrapper = document.querySelector('main__product-info');
let inner = document.querySelectorAll('.main__product-img');
   
    for (const iterator of inner) {
      iterator.addEventListener('click', function (e) {
          let attr = this.getAttribute('src')
          wrapper.style.background = `url(${attr})`   
          console.log(inner);    
      }) 
    }






