const canvas=document.querySelector("canvas");

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

let c=canvas.getContext("2d");

let bubleCord=[]
let balls=0

weight=[]

weight.push([])

weight[0].push(36)

for (let i = 0; i < balls; i++) {
  bubleCord.push({
    x:Math.random()*innerWidth,
    y:Math.random()*innerHeight
  });
}



window.addEventListener("mousedown",function(e){
bubleCord.push({
  x:e.x,
  y:e.y
});
// bubleCord.push(mouse);
draw();

})

console.log(weight);

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
