const increasing = document.getElementById("inc");
const reset = document.getElementById("res");
const decresing = document.getElementById("dec");
const mylabel = document.getElementById("mylabel");

let count=0;
increasing.onclick = function(){
  count++;
  mylabel.textContent = count;

}
decresing.onclick = function(){
    count--;
    mylabel.textContent = count;
  
  }

reset.onclick = function(){
    count = 0;
    mylabel.textContent = count;
}

