const Y_AXIS = 1;
const X_AXIS = 2;
let c1, c2, c3;
let b1, b2, b3;
let t1, t2 , t3;

let cols, rows;
let scl = 25;
let w = 1600;
let h = 1600;

let flying = 0;

let terrain = [];



function setup() {
   createCanvas(400, 400, WEBGL);
   
   
   c1 = color(255, 251, 200);
   c2 = color(242, 218, 255);
   c3 = color(129, 8, 113);
   
   b1 = color(13,28, 33);
   b2 = color(0,0, 0);
   b3 = color(255, 28, 43);

   
   
   cols = w / scl;
   rows = h / scl;

   
   
}


function draw() {

  push();
  translate(0, 0, -1000);
  
  setGradient(-width*2, height * -2 , width * 4, height * 2, b1, b2, c3, Y_AXIS);
  setGradient(-width*2,0, width * 4, height *4, c3, b2, b1,Y_AXIS);

  translate(0, height/4, 1);
    rotateZ(PI / 2);
    setCircle(-width * 0.4, 0, width * 4, c3, b2, c3);
  pop();

  push();
  translate(0, height * -0.01, width * 0.2)
  rotateY(radians(35));
  rotateX(radians(45));
  setTriangle(0, 0, width* 0.3, width * 0.3, b1,b2,b1, c3);
  pop();  

  push(); 
  translate(width * -0.7, height *-0.1, -width *1)
  rotateX(radians(35));
  rotateY(radians(-120));
  rotateZ(radians(0));
  setTriangle(0, 0, width* 0.3, width * 0.3, b1,b2,b1,c3);
  pop();  

  push(); 
  translate( width * -0.1, height * -0.1, 0)
  rotateX(radians(55));
  rotateY(radians(-45));
  rotateZ(radians(0));
  setTriangle(0, 0, width* 0.3, width * 0.3, b1,b2,b1, c3);
  pop();  

  
 

  push();
   translate(width * 0.17,height * -0.28);
   for (let y = 0; y < 9 - 1; y++) {
    for (let x = 0; x < 1; x++) {
        fill(b1);
        stroke(c3);
        rect(x*scl, y*scl, scl, scl);
      }
  }  
  pop();


  

  push();
   translate(width * -0.03,height * -0.4);
   for (let y = 0; y < 9 - 1; y++) {
    for (let x = 0; x < 1; x++) {
        fill(b1);
        stroke(c3);
        rect(x*scl, y*scl, scl, scl);
      }
  }  
  pop();

  

  push();
   translate(width * -0.23,height * -0.3);
   for (let y = 0; y < 9 - 1; y++) {
    for (let x = 0; x < 1; x++) {
        fill(b1);
        stroke(c3);
        rect(x*scl, y*scl, scl, scl);
      }
  }  
  pop();

  
  

  translate(0, 0, -400);

  push();
   translate(width * 0.7,height * -0.24);
   for (let y = 0; y < 9 - 1; y++) {
    for (let x = 0; x < 1; x++) {
        fill(b1);
        stroke(c3);
        rect(x*scl, y*scl, scl, scl);
      }
  }  
  pop();

 

  push();
   translate(width * 0.2,height * -0.5);
   for (let y = 0; y < 9 - 1; y++) {
    for (let x = 0; x < 1; x++) {
        fill(b1);
        stroke(c3);
        rect(x*scl, y*scl, scl, scl);
      }
  }  
  pop();


  

  

  push();
   translate(width * -0.23,height * -0.3);
   for (let y = 0; y < 9 - 1; y++) {
    for (let x = 0; x < 1; x++) {
        fill(b1);
        stroke(c3);
        rect(x*scl, y*scl, scl, scl);
      }
  }  
  pop();

  push();
   translate(width * -0.6,height * -0.36);
   for (let y = 0; y < 9 - 1; y++) {
    for (let x = 0; x < 1; x++) {
        fill(b1);
        stroke(c3);
        rect(x*scl, y*scl, scl, scl);
      }
  }  
  pop();
  

  push();
  
 

  translate(0,height * -0.415, -600);
  rotateX(PI / 2);
  translate(-w / 2,  0 , width * - 0.2);
  
  
  for (let y = 0; y < rows - 1; y++) {
    for (let x = 0; x < cols; x++) {
      fill(b1);
      stroke(c3);
      rect(x*scl, y*scl, scl, scl);
    }
  }
  
  pop(); 
  
  
  save("20210224.png");
  noLoop();
  
  
}

function setGradient(x, y, w, h, c1, c2, c3, axis) {
  noFill();

  if (axis === Y_AXIS) {
    // Top to bottom gradient
    for (let i = y; i <= y + h; i++) {
      let inter = map(i, y, (y + h) - ((h/2)), 0, 1);
      let c = lerpColor(c1, c2, inter);
      
      let inter02 = map(i, (y + h) - ((h/2)) ,  y + h , 0, 1);
      let p = lerpColor(c2, c3, inter02);
      
      stroke(255);
      line(x, i, x + w, i);
      
      if ( i <= (y + h) - ((h/2))){
        stroke(c);
        line(x, i, x + w, i);
      }else{
        stroke(p);
        line(x, i, x + w, i);
      }
      
      
    }
  } else if (axis === X_AXIS) {
    // Left to right gradient
    for (let i = x; i <= x + w; i++) {
      let inter = map(i, x,(x + w) - (w/2), 0, 1);
      let c = lerpColor(c1, c2, inter);
      
      let inter02 = map(i, (x + w) - (w/2), x + w, 0, 1);
      let p = lerpColor(c2, c3, inter02);
      
      stroke(255);
      line(i, y, i, y + h);
      if ( i <= (x + w) - (w/2)){
        stroke(c);
        line(i, y, i, y + h);
      }else{
        stroke(p);
        line(i, y, i, y + h);
      }
      
    }
  }
}

function setTriangle(x, y, w, h, c1, c2, c3, c4 ){
  
  push();
  stroke(c4);
  noFill();
  triangle(x-1, y + h + 1, x+ w/2, y-1, x+w +1, y+h +1);
  pop();

  
  for (let i = y; i <= y + h; i++) {
    let inter = map(i, y, (y + h) - (h/2), 0, 1);
    let c = lerpColor(c1, c2, inter);
    
    let inter02 = map(i, (y + h) - (h/2) ,  y + h , 0, 1);
    let p = lerpColor(c2, c3, inter02);
    stroke(c);
    //line( x - (i * 0.5) , y + i, x + h, y + i);  
    let m = x + (w/2); 
    let inc = (w/2)/h;
    
    if ( i <= (y + h) - (h/2)){
      stroke(c);
      line( (m - (i-y) * inc), i, (m + (i-y) * inc), i);
    }else{
      stroke(p);
      line( (m - (i-y) * inc), i, (m + (i-y) * inc), i);
    }
  }
  
}

function setCircle(x, y, d, c1, c2, c3) {
 let c = 100;
 //circle(x,y,d);
 
 
 for (let i=0; i<c; i++) {
   let col = lerpColor(c1, c2, (i/c)*2 );
   let col02 = lerpColor(c2, c3, ((i - (c/2))/(c/2)));
   let a = lerp(PI, 0, i/c);
   
   if ( i <= c/2){
      fill(col);
      noStroke();
      arc(x, y, d, d, -a, a, CHORD);
    }else{
      fill(col02);
      noStroke();
      arc(x, y, d, d, -a, a, CHORD);
    }   

 }
}