//creiamo l'array con le immagini e prendiamo la classe che ci serve
const imgArray = ["img/01.jpg", "img/02.jpg", "img/03.jpg","img/04.jpg" ,"img/05.jpg"]
const listItem = document.querySelector('.list-item')

//mettiamo le immagini nell'html 
for (let i = 0; i < imgArray.length; i++) {    
    const currentElem = imgArray[i]
    listItem.innerHTML +=` 
        <div class="item">
            <img src="${currentElem}" alt="">
        </div>`
}

// partenza
const itemArray = document.getElementsByClassName('item')
let itemArrayIndex = 0
itemArray[itemArrayIndex].classList.add('active')

// Al click dell'utente sulle frecce, il programma cambierà l’immagine attiva, che quindi verrà visualizzata al posto della precedente.
// implementiamo la freccia in alto 
const upbtn = document.querySelector('.up-slide')
upbtn.addEventListener('click', function() {
    // togliere active da quello corrente
    itemArray[itemArrayIndex].classList.remove('active')

    // incremento l'index
    itemArrayIndex++;

    // aggiungere active a quello successivo
    itemArray[itemArrayIndex].classList.add('active')

})

const dwnbtn = document.querySelector('.down-slide');
dwnbtn.addEventListener('click', function(){
       // togliere active da quello corrente
       itemArray[itemArrayIndex].classList.remove('active')

       // decremento l'index
       itemArrayIndex--;
   
       // aggiungere active a quello precedente
       itemArray[itemArrayIndex].classList.add('active')
})