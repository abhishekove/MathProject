const canvas=document.querySelector("canvas");

var star=document.getElementById("1but")
var reset=document.getElementById("2but")

var k=true;


canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

let c=canvas.getContext("2d");

let bubleCord=[]
let balls=0

weight=[]

// weight.push([])

// weight[0].push(36)

for (let i = 0; i < balls; i++) {
  bubleCord.push({
    x:Math.random()*innerWidth,
    y:Math.random()*innerHeight
  });
}

star.addEventListener("click",function(e){
  console.log("Hello");
  k=false;

weight=new Array(bubleCord.length);
for (var i = 0; i < bubleCord.length; i++) {
  weight[i]=new Array(bubleCord.length);
}
for (var i = 0; i < bubleCord.length; i++) {
  for (var j = 0; j < weight[i].length; j++) {
    weight[i][j]=prompt("Check");
  }
}

console.log(weight);

})

reset.addEventListener("click",function(e){
  console.log("reset");
  k=true;


setTimeout(function(){c.clearRect(0,0,window.innerWidth,window.innerHeight);
bubleCord=[]},500)
})

window.addEventListener("mousedown",function(e){

setTimeout(function(){

  if (k) {
  bubleCord.push({
    x:e.x,
    y:e.y
  });
draw();
}},500)


// bubleCord.push(mouse);


})

// console.log(weight);

function draw(){



  for (let i = 0; i < bubleCord.length; i++) {
    let buble=bubleCord[i];
c.beginPath();
    c.arc(buble.x,buble.y,5,0,Math.PI*2,false);
    c.stroke();
    c.fill();
  }


c.beginPath();
  for (let i = 0; i < bubleCord.length; i++) {
    let l1= bubleCord[i];
    c.moveTo(l1.x,l1.y);
    for (let j = 0; j < bubleCord.length; j++) {
      let l2=bubleCord[j];
      c.lineTo(l2.x,l2.y);
      c.stroke();
    }

  }


}

// draw();
