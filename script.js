const canvas = document.getElementById("canvas").getContext("2d");

// mindahin 0,0 ke tengah
canvas.translate(250, 250);
canvas.scale(1, -1);

// buat garis sumbu x,y
canvas.moveTo(-250, 0);
canvas.lineTo(250, 0);
canvas.moveTo(0, -250);
canvas.lineTo(0, 250);
canvas.stroke();

function setPixel(x, y) {
  canvas.fillRect(x, y, 1, 1);
}

function drawCircle(xc, yc, x, y) {
  canvas.fillRect(xc + y, yc + x, 1, 1);
  canvas.fillRect(xc + x, yc + y, 1, 1);
  canvas.fillRect(xc + x, yc - y, 1, 1);
  canvas.fillRect(xc + y, yc - x, 1, 1);
  canvas.fillRect(xc - y, yc - x, 1, 1);
  canvas.fillRect(xc - x, yc - y, 1, 1);
  canvas.fillRect(xc - x, yc + y, 1, 1);
  canvas.fillRect(xc - y, yc + x, 1, 1);
}

// Bresenham Garis
function drawLineBresenham(x1, y1, x2, y2) {
  let dx, dy, x, y;
  dx = Math.abs(x2 - x1);
  dy = Math.abs(y2 - y1);
  x = x1;
  y = y1;

  canvas.fillStyle = "RED"
  setPixel(x, y);
  console.log("Line Bresenham");
  console.log(`endpoints : (${x1},${y1}) (${x2},${y2})`);

  // m<1
  if (dx > dy) {
    console.log("m<1");
    console.log("k  (x,y)");
    P = 2 * dy - dx;

    for (k = 0; k < dx; k++) {
      x = x2 - x1 < 0 ? x - 1 : x + 1;
      if (P < 0) {
        P = P + 2 * dy;
      } else {
        y = y2 - y1 < 0 ? y - 1 : y + 1;
        P = P + 2 * dy - 2 * dx;
      }
      setPixel(x, y);
      console.log(`${k}  (${x},${y})`);
    }
  } else {
    // m>=1
    console.log("m>1");
    console.log("k  (x,y)");
    P = 2 * dx - dy;

    for (k = 0; k < dy; k++) {
      y = y2 - y1 < 0 ? y - 1 : y + 1;
      if (P < 0) {
        P = P + 2 * dx;
      } else {
        x = x2 - x1 < 0 ? x - 1 : x + 1;
        P = P + 2 * dx - 2 * dy;
      }
      setPixel(x, y);
      console.log(`${k}  (${x},${y})`);
    }
  }
}

function drawCircleBresenham(xc, yc, r) {
  let x,y,P
  x=0
  y=r
  P = 3-2 * r;
  canvas.fillStyle = "BLUE"
  drawCircle(xc, yc, x, y);
  console.log("Circle Bresenham");
  console.log(`(xc,yc)=(${xc},${yc})  r=${r}`)
  console.log(`P  (x,y)`);
  while (x < y) {
    if (P < 0) {
      P = P + ( 4 * x ) + 6;
    } else { P = P + 4 * (x-y) + 10 ; y--;
    }
    x++;
    drawCircle(xc, yc, x, y);
  console.log(`${P}  (${x},${y})`);
  }
}

function drawCircleMidPoint(xc, yc, r) {
  let x, y, P;
  x = 0;
  y = r;
  P = 1 - r;
  canvas.fillStyle = "GREEN"
  drawCircle(xc, yc, x, y);
  console.log("Circle MidPoint");
  console.log(`(xc,yc)=(${xc},${yc})  r=${r}`)
  console.log(`P  (x,y)`);
  console.log(`${P}  (${x},${y})`);
  while (x < y) {
    if (P < 0) P = P + 2 * x + 1;
    // P >= 0
    else {
      P = P + 2 * x + 1 - 2 * y;
      y--;
    }
    x++;
    drawCircle(xc, yc, x, y);
    console.log(`${P}  (${x},${y})`);
  }
}

drawLineBresenham(20, 20, 120, 110);
drawCircleBresenham(30, 50, 10);
drawCircleMidPoint(50, 10, 100);
