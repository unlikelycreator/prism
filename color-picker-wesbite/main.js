document.body.onkeyup = function(e){
    if(e.keyCode == 32){
        setBg();
        setBg1();
        setBg2();
        setBg3();
        setBg4();
        }
}
const setBg = () => {
  const randomColor = Math.floor(Math.random()*16777215).toString(16);
  document.getElementById("divcolor").style.backgroundColor = "#" + randomColor;
  color.innerHTML = "#" + randomColor;
}

const setBg1 = () => {
  const randomColor = Math.floor(Math.random()*16777215).toString(16);
  document.getElementById("divcolor1").style.backgroundColor = "#" + randomColor;
  color1.innerHTML = "#" + randomColor;
}

const setBg2 = () => {
  const randomColor = Math.floor(Math.random()*16777215).toString(16);
  document.getElementById("divcolor2").style.backgroundColor = "#" + randomColor;
  color2.innerHTML = "#" + randomColor;
}

const setBg3 = () => {
  const randomColor = Math.floor(Math.random()*16777215).toString(16);
  document.getElementById("divcolor3").style.backgroundColor = "#" + randomColor;
  color3.innerHTML = "#" + randomColor;
}

const setBg4 = () => {
  const randomColor = Math.floor(Math.random()*16777215).toString(16);
  document.getElementById("divcolor4").style.backgroundColor = "#" + randomColor;
  color4.innerHTML = "#" + randomColor;
}
var btn = document.getElementById("genNew")

btn.addEventListener("click", setBg);
btn.addEventListener("click", setBg1);
btn.addEventListener("click", setBg2);
btn.addEventListener("click", setBg3);
btn.addEventListener("click", setBg4);

setBg();
setBg1();
