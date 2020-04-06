const canvas=document.querySelector("svg");

var star=document.getElementById("1but")
var reset=document.getElementById("2but")

var k=true;


canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

// let c=canvas.getContext("2d");

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
    weight[i][j]=prompt("Value for "+i+','+j);
  }
}

console.log(weight);




  for (let i = 0; i < bubleCord.length; i++) {
    let l1= bubleCord[i];
    // c.beginPath();
    // c.moveTo(l1.x,l1.y);
    for (let j = 0; j < bubleCord.length; j++) {
      let l2=bubleCord[j];
      if (weight[i][j])
      {
        let sv=document.createElementNS("http://www.w3.org/2000/svg", 'line')
        sv.setAttribute('x1',l1.x)
        sv.setAttribute('y1',l1.y)
        sv.setAttribute('x2',l2.x)
        sv.setAttribute('y2',l2.y)
        sv.setAttribute('style','stroke:rgb(0,0,0);stroke-width:2')
        canvas.appendChild(sv)
        // c.lineTo(l2.x,l2.y);
        // console.log(c.stroke());
      }
    }

  }


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
    let sv=document.createElementNS("http://www.w3.org/2000/svg", 'circle')
    sv.setAttribute('cx',buble.x)
    sv.setAttribute('cy',buble.y)
    sv.setAttribute('r','6')
    sv.setAttribute('stroke-width','3')
    sv.setAttribute('stroke','black')
    sv.setAttribute('fill','black')
    canvas.appendChild(sv)
  }

//
// c.beginPath();
//   for (let i = 0; i < bubleCord.length; i++) {
//     let l1= bubleCord[i];
//     c.moveTo(l1.x,l1.y);
//     for (let j = 0; j < bubleCord.length; j++) {
//       let l2=bubleCord[j];
//       c.lineTo(l2.x,l2.y);
//       c.stroke();
//     }
//
//   }


}

// draw();
