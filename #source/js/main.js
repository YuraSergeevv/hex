//@prepros-append script.js
window.onload = function (){

    let windowHeight = window.innerHeight;
    let windowWidth = window.innerWidth;
    let itemHeight = 79;
    let itemWidth = 100;
    let itemCountHeight = Math.ceil(windowHeight /itemHeight)+1;
    let itemCountWidth = Math.ceil(windowWidth /itemWidth) +1 ;

    let counts = itemCountWidth*itemCountHeight;

    let block = document.querySelector('.item_inner');

    for (let i = 1; i <= itemCountHeight; i++) {
        block.innerHTML+= `<div class="item_row row_${i}"></div>`;
        let row = document.querySelector(`.row_${i}`);
        for (let j = 1; j <= itemCountWidth; j++) {
            row.innerHTML+= `<div class="item"></div>`;
        }
    }

    let items = Array.from(document.querySelectorAll('.item'));

   // setInterval(function (){
   //     let item = items[Math.floor(Math.random()*counts)];
   //     let color = randomColor();
   //     item.classList.add('active');
   //     document.querySelector('.active').style.cssText =`background-color: rgb(${color}); border-color: rgb(${color};)`
   //     setTimeout(function (){
   //         item.classList.remove('active');
   //     },1000)
   // },1000);



};

function randomColor(){
    let r =Math.floor(Math.random()*256)
    let g =Math.floor(Math.random()*256)
    let b =Math.floor(Math.random()*256)
    return (`${r},${g},${b}`)
};


// const App = {
//     data(){
//         return{
//             counter: 0,
//         }
//     }
// }
//
// Vue.createApp(App).mount('#app');