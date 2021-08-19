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
    let itemsMatrix = [];
    let k = 0;
    for (let i = 0; i <itemCountHeight ; i++) {
        itemsMatrix[i] =[];
        for (let j = 0; j < itemCountWidth ; j++) {
           itemsMatrix[i][j] = items[k];
           k++;
        }
    }

    console.log(items);
    console.log(itemsMatrix);
   // itemsMatrix[0][5].style.cssText =`background-color: #f44444; border-color: #f44444;)`

    //rowLine();
    randomItem()

  function randomItem (){
      setInterval(function (){
          let item = items[Math.floor(Math.random()*counts)];
          let color = randomColor();
          item.style.cssText =`background-color: rgb(${color});  border-color: rgb(${color});)`
          setTimeout(function (){
              item.style.cssText =`background-color: #444444; border-color: #444444;)`
          },1000)
      },5);
  }
  function rowLine(){
      let i =0;
      setInterval(function (){
          let item = items[i];
          i++;
          if(i == items.length-1){
              i=0
          }
          let color = randomColor();
          item.style.cssText =`background-color: rgb(${color});  border-color: rgb(${color});)`
          setTimeout(function (){
              item.style.cssText =`background-color: #444444; border-color: #444444;)`
          },1000)
      },20);
  }

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
