//bucle que guarda en un array todos los stickers
const stickers = [null];
for(let i = 1; i <= 3558; i++){
    stickers.push('STK ('+i+").webp");
};
//comprueba que se hayan guardado los stickers en el array
console.log(stickers);

//funcion para agregarle ruta de archivo a los elementos IMG
// function tirarId(elId){
//     let sticker = document.getElementById(elId);
//     sticker.setAttribute("src",stickers[elId])
// };
//bucle que llama a la funcion anterior las veces q sea necesaria
// for(let i = 1; i <= 8; i++){
//     tirarId(i);
// };

//hace aparecer los primeros 10 stickers
for(let i= 1; i <= 10; i++){
    const lista = document.getElementById("lista")
    const img = document.createElement("img")
    lista.appendChild(img)
    img.setAttribute("src",stickers[i])
}
//setea las condiciones para el loop de agregar
let i = 11
let f = 21 

//funcion para ejecutar loop para agregar elementos
function showMore(){
for(i; i <= f; i++){
    const lista = document.getElementById("lista")
    const img = document.createElement("img")
    lista.appendChild(img)
    img.setAttribute("src",stickers[i])
}
if (f<stickers.length-1) {
    f = i+1
    }
};

let animado = document.querySelectorAll("img");
function mostrarScroll() {
    let scrollTop = document.documentElement.scrollTop;
    for (let i = 0; i < animado.length; i++) {
        let alturaAnimado = animado[i].offsetTop;
        if (alturaAnimado < scrollTop) {
            showMore()
        }
    }
}

window.addEventListener(`scroll`, mostrarScroll)


// let listaOrdenada= document.getElementById("listaOrdenada")

// sticker = document.getElementById(2);
// sticker.innerHTML = myImage;
// sticker.setAttribute("src",stickers[2])
// stickers.forEach(element => sticker.setAttribute("src",element));




