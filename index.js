//https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png

let bulbImgE1 =document.getElementById("bulbImg");


let catImgE1 =document.getElementById("catImg");
let msgE1 =document.getElementById("msg");
let offBtnE1 = document.getElementById('offBtn');
let onBtnE1 = document.getElementById("onBtn");

//  console.log(bulbImgE1, catImgE1 )

function onHideCat(){

bulbImgE1.src ="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png";

catImgE1.src ="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png";


msgE1.textContent = 'Switch Off';

offBtnE1.style.backgroundColor ="green";

onBtnE1.style.backgroundColor ="red";


}


function onShowCat(){

  bulbImgE1.src ="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png";


  catImgE1.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png";


  msgE1.textContent = 'Switch On';

  
offBtnE1.style.backgroundColor ="red";

onBtnE1.style.backgroundColor ="green";

}