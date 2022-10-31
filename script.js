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

function drawLineBresenham(x1, y1, x2, y2) {
  let dx, dy, x, y;
  dx = Math.abs(x2 - x1);
  dy = Math.abs(y2 - y1);
  x = x1;
  y = y1;

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

function drawCircleMidPoint(xc, yc, r) {
  let x, y, P;
  x = 0;
  y = r;
  P = 1 - r;
  console.log("Circle MidPoint");
  while (x < y) {
    if (P < 0) P = P + 2 * x + 1;
    // P >= 0
    else {
      P = P + 2 * x + 1 - 2 * y;
      y--;
    }
    x++;
    drawCircle(xc, yc, x, y);
    console.log(x, y);
  }
}

drawLineBresenham(20, 20, 120, 110);
drawCircleMidPoint(50, 10, 100);
