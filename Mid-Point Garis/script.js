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

function drawLineMidPoint(x1, y1, x2, y2) {
  let dx, dy, x, y, P;

  dx = Math.abs(x2 - x1);
  dy = Math.abs(y2 - y1);
  x = x1;
  y = y1;

  document.write(`<p>titik awal= (${x1},${y1}) ( ${x2},${y2} )`);
  console.log("Line MidPoint");
  console.log(`titik awal= (${x1},${y1}) (${x2},${y2})`);

  canvas.fillStyle = "PURPLE";
  setPixel(x, y);
  if (dx > dy) {
    P = dy - dx / 2;

    for (k = 0; k < dx; k++) {
      x = x2 - x1 < 0 ? x - 1 : x + 1;
      if (P < 0) {
        P += dy;
      } else {
        y = y2 - y1 < 0 ? y - 1 : y + 1;
        P += dy - dx;
      }
      setPixel(x, y);
      console.log(`${k}  (${x},${y})`);
    }
  } else {
    console.log("k  (x,y)");
    P = dx - dy / 2;

    for (k = 0; k < dy; k++) {
      y = y2 - y1 < 0 ? y - 1 : y + 1;
      if (P < 0) {
        P += dx;
      } else {
        x = x2 - x1 < 0 ? x - 1 : x + 1;
        P += dx - dy;
      }
      setPixel(x, y);
      console.log(`${k}  (${x},${y})`);
    }
  }
}

function randomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

drawLineMidPoint(2.5, 2.5, 12, 11);
drawLineMidPoint(
  randomInt(-250, 250),
  randomInt(-250, 250),
  randomInt(-250, 250),
  randomInt(-250, 250)
);
