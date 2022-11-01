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

function drawCircleBresenham(xc, yc, r) {
  let x, y, P;
  x = 0;
  y = r;
  P = 3 - 2 * r;

  document.write(`<p>titik awal= (${xc},${yc})  r=${r}`);
  console.log("Circle Bresenham");
  console.log(`(xc,yc)=(${xc},${yc})  r=${r}`);
  console.log(`P  (x,y)`);

  canvas.fillStyle = "BLUE";
  drawCircle(xc, yc, x, y);
  while (x < y) {
    if (P < 0) {
      P = P + 4 * x + 6;
    } else {
      P = P + 4 * (x - y) + 10;
      y--;
    }
    x++;
    drawCircle(xc, yc, x, y);
    console.log(`${P}  (${x},${y})`);
  }
}

function randomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

drawCircleBresenham(0, 10, 10);
drawCircleBresenham(
  randomInt(-125, 125),
  randomInt(-125, 125),
  randomInt(1, 125)
);
