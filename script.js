const canvas=document.querySelector("svg");

var star=document.getElementById("1but")
var reset=document.getElementById("2but")

var k=true;


canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

// let c=canvas.getContext("2d");

let bubleCord=[]
let balls=0

dj=[]
djp=[]
weight=[]

// weight.push([])

// weight[0].push(36)

function minin(arr) {
mi=0
for (var i = 0; i < arr.length; i++) {
  if (arr[mi].weigh>arr[i].weigh) {
    mi=i;
  }
}
return mi;
}

function dijkstra() {
  for (var i = 0; i < bubleCord.length; i++) {
    dj.push({
      vertex:i,
      weigh:20000000,
      prev:'',
    })
  }
  // console.log(dj);
  for (var i = 0; i < weight[0].length; i++) {
    if (i==0) {
      dj[i].weigh=weight[0][i]
      dj[i].prev=0
    }
    if (weight[0][i]!=0) {
      dj[i].weigh=weight[0][i]
      dj[i].prev=0
    }
  }

// console.log(dj);
djp.push(dj[0])
delete dj[0]
dj.sort()
dj.pop()
console.log(dj);
console.log(djp);
  while (dj.length!=0) {
  let tem=dj[minin(dj)]
  for (var i = 0; i < dj.length; i++) {
    if (weight[tem.vertex][dj[i].vertex]) {
      if (dj[i].weigh>(tem.weigh+weight[tem.vertex][dj[i].vertex])) {
        dj[i].weigh=tem.weigh+weight[tem.vertex][dj[i].vertex]
        dj[i].prev=tem.vertex
      }
    }
  }
  djp.push(tem)
  delete dj[dj.indexOf(tem)]
  dj.sort()
  dj.pop()
  // console.log(tem);
  }
  // console.log(djp);
  for (var i = 0; i < djp.length; i++) {

    let sv=document.createElementNS("http://www.w3.org/2000/svg", 'line')
    let l1=bubleCord[djp[i].vertex]
    let l2=bubleCord[djp[i].prev]
    sv.setAttribute('x1',l1.x)
    sv.setAttribute('y1',l1.y)
    sv.setAttribute('x2',l2.x)
    sv.setAttribute('y2',l2.y)
    sv.setAttribute('style','stroke:rgb(255,0,0);stroke-width:2')
    canvas.appendChild(sv)
    // let te=document.createElementNS("http://www.w3.org/2000/svg", 'text')
    // te.setAttribute('x',(l1.x+l2.x)/2)
    // te.setAttribute('y',(l1.y+l2.y)/2)
    // te.setAttribute('text-anchor','middle')
    // te.setAttribute('stroke','#000066')
    // te.setAttribute('stroke-width','1px')
    // te.innerHTML=weight[djp[i].vertex][djp[i].prev];
    // canvas.appendChild(te)

  }

  for (let i = 0; i < bubleCord.length; i++) {
    let buble=bubleCord[i];
    let te=document.createElementNS("http://www.w3.org/2000/svg", 'text')
    te.setAttribute('x',buble.x)
    te.setAttribute('y',buble.y)
    te.setAttribute('text-anchor','middle')
    te.setAttribute('stroke','white')
    te.setAttribute('stroke-width','1px')
    te.innerHTML=i;
    canvas.appendChild(te)
  }
}

for (let i = 0; i < balls; i++) {
  bubleCord.push({
    x:Math.random()*innerWidth,
    y:Math.random()*innerHeight
  });
}

star.addEventListener("click",function(e){
  // console.log("Hello");
  k=false;

weight=new Array(bubleCord.length);
for (var i = 0; i < bubleCord.length; i++) {
  weight[i]=new Array(bubleCord.length);
}
for (var i = 0; i < bubleCord.length; i++) {
  for (var j = i; j < weight[i].length; j++) {
    if (i!=j) {
      weight[i][j]=parseInt(prompt("Value for "+i+','+j));
      weight[j][i]=weight[i][j]
    }
    else {
      weight[i][j]=0
      weight[j][i]=0
    }
  }
}

// console.log(weight);




  for (let i = 0; i < bubleCord.length; i++) {
    let l1= bubleCord[i];
    // c.beginPath();
    // c.moveTo(l1.x,l1.y);
    for (let j = i; j < bubleCord.length; j++) {
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

        let te=document.createElementNS("http://www.w3.org/2000/svg", 'text')
        te.setAttribute('x',(l1.x+l2.x)/2)
        te.setAttribute('y',(l1.y+l2.y)/2)
        te.setAttribute('text-anchor','middle')
        te.setAttribute('stroke','#000066')
        te.setAttribute('stroke-width','2px')
        te.innerHTML=weight[i][j];
        canvas.appendChild(te)
      }
    }

  }

dijkstra()
})

reset.addEventListener("click",function(e){
  // console.log("reset");
  k=true;

setTimeout(function(){
  bubleCord=[]
  dj=[]
  djp=[]
  weight=[]
},500)

while (canvas.lastChild) {
  canvas.removeChild(canvas.lastChild)
}

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
    sv.setAttribute('r','13')
    sv.setAttribute('stroke-width','3')
    sv.setAttribute('stroke','black')
    sv.setAttribute('fill','black')
    canvas.appendChild(sv)
    let te=document.createElementNS("http://www.w3.org/2000/svg", 'text')
    te.setAttribute('x',buble.x)
    te.setAttribute('y',buble.y)
    te.setAttribute('text-anchor','middle')
    te.setAttribute('stroke','white')
    te.setAttribute('stroke-width','1px')
    te.innerHTML=i;
    canvas.appendChild(te)
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
