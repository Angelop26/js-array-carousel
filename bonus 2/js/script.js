//creiamo l'array con le immagini e prendiamo la classe che ci serve
const imgArray = ["img/01.jpg", "img/02.jpg", "img/03.jpg","img/04.jpg" ,"img/05.jpg"];
const listItem = document.getElementsByClassName('list-item');
// console.log(listItem);

//mettiamo le immagini nell'html 
for (let i = 0; i < imgArray.length; i++) {    
    const currentElem = imgArray[i]
    for (j = 0; j < listItem.length; j++){
        listItem[j].innerHTML +=` 
            <div class="item">
                <img src="${currentElem}" alt="">
            </div>`
    }
}
// console.log(listItem.innerHTML);

const leftItemArray = document.querySelectorAll('.left-slide .item');
const rightItemArray = document.querySelectorAll('.slider .item')
const rightImgArray = document.querySelectorAll('.slider .item img')
// console.log(leftItemArray);
let itemArrayIndex = 0
leftItemArray[itemArrayIndex].classList.add('active')
rightItemArray[itemArrayIndex].classList.add('border-opacity')
rightImgArray[itemArrayIndex].classList.add('filter')

const upbtn = document.querySelector('.up-slide')
upbtn.addEventListener('click', function() {

    if (itemArrayIndex < imgArray.length - 1){
        // togliere active da quello corrente
        leftItemArray[itemArrayIndex].classList.remove('active')
        rightItemArray[itemArrayIndex].classList.remove('border-opacity')
        rightImgArray[itemArrayIndex].classList.remove('filter')
    
        // incremento l'index
        itemArrayIndex++;
    
        // aggiungere active a quello successivo
        leftItemArray[itemArrayIndex].classList.add('active')
        rightItemArray[itemArrayIndex].classList.add('border-opacity')
        rightImgArray[itemArrayIndex].classList.add('filter')

    } else {
        leftItemArray[(itemArrayIndex)].classList.remove('active')
        rightItemArray[itemArrayIndex].classList.remove('border-opacity')
        rightImgArray[itemArrayIndex].classList.remove('filter')
        itemArrayIndex = 0
        // aggiungere active a quello successivo
        leftItemArray[itemArrayIndex].classList.add('active') 
        rightItemArray[itemArrayIndex].classList.add('border-opacity')
        rightImgArray[itemArrayIndex].classList.add('filter')
    }

})

// implementiamo la freccia in basso
const dwnbtn = document.querySelector('.down-slide');
dwnbtn.addEventListener('click', function(){

    if(itemArrayIndex > 0 ){
        // togliere active da quello corrente
        leftItemArray[itemArrayIndex].classList.remove('active')
        rightItemArray[itemArrayIndex].classList.remove('border-opacity')
        rightImgArray[itemArrayIndex].classList.remove('filter')

 
        // decremento l'index
        itemArrayIndex--;
    
        // aggiungere active a quello precedente
        leftItemArray[itemArrayIndex].classList.add('active')
        rightItemArray[itemArrayIndex].classList.add('border-opacity')
        rightImgArray[itemArrayIndex].classList.add('filter')
    } else {
        leftItemArray[(itemArrayIndex)].classList.remove('active')
        rightItemArray[itemArrayIndex].classList.remove('border-opacity')
        rightImgArray[itemArrayIndex].classList.remove('filter')

        itemArrayIndex = imgArray.length - 1
        // aggiungere active a quello successivo
        leftItemArray[itemArrayIndex].classList.add('active')  
        rightItemArray[itemArrayIndex].classList.add('border-opacity')
        rightImgArray[itemArrayIndex].classList.add('filter')
    }
})