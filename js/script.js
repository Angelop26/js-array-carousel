//creiamo l'array con le immagini e prendiamo la classe che ci serve
const imgArray = ["img/01.jpg", "img/02.jpg", "img/03.jpg","img/04.jpg" ,"img/05.jpg"]
const listItem = document.querySelector('.list-item')

//mettiamo le immagini nell'html 
for (let i = 0; i < imgArray.length; i++) {    
    const currentElem = imgArray[i]
    listItem.innerHTML +=` 
        <div class="item active">
            <img src="${currentElem}" alt="">
        </div>`
}