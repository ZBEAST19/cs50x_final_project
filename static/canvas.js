let canvas = document.getElementById("canvas");
let color = document.getElementsByClassName("clr");
let p_size = document.getElementById("size");
let ctx = canvas.getContext("2d");
let pen = document.getElementById("pen");
let eraser = document.getElementById("eraser");
let save = document.getElementById("download");


canvas.width = 1280;
canvas.height = 768;
ctx.fillStyle = "white";
ctx.fillRect(0,0,canvas.width,canvas.height);
let p_color = "black";
p_size = 5;
let drawing = false;


canvas.addEventListener("mousedown", startDraw);
canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mouseup", stopDraw);
canvas.addEventListener("mouseout", stopDraw);
canvas.addEventListener("touchstart", startDrawTouch,false);
canvas.addEventListener("touchmove", drawTouch, false);
canvas.addEventListener("touchend", stopDrawTouch, false);
canvas.addEventListener("touchcancel", stopDraw);
eraser.addEventListener("click", Eraser);
save.addEventListener("click", download);


function startDraw(e) {
   
   if(e.button == 0){
      drawing = true;
     }
   else
      drawing = false;

  ctx.beginPath();
  ctx.moveTo(e.offsetX, e.offsetY);
}

function draw(e) {

  if (!drawing)
     return;
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.strokeStyle = p_color;
  ctx.lineWidth = p_size;
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  ctx.imageSmoothingEnabled = true;
  ctx.stroke();
}

function stopDraw(e) {
   
  ctx.closePath();
  drawing = false;
}

function getTouchPos(e) {
  const rect = canvas.getBoundingClientRect();
  const touch = e.touches[0] || e.changedTouches[0];
  return {
    x: touch.clientX - rect.left,
    y: touch.clientY - rect.top
  };
}

function startDrawTouch(e) {
  if (!drawing)
  e.preventDefault(); 
  drawing = true;
  const pos = getTouchPos(e);
  ctx.beginPath();
  ctx.moveTo(pos.x, pos.y);
}
function drawTouch(e) {
  if (!drawing)
  e.preventDefault();
  const pos = getTouchPos(e);
  ctx.lineTo(pos.x, pos.y);
  ctx.strokeStyle = p_color;
  ctx.lineWidth = p_size;
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  ctx.imageSmoothingEnabled = true;
  ctx.stroke();
}
function stopDrawTouch(e) {
  e.preventDefault();
  drawing = false;
  ctx.closePath();
}

function Eraser(e) {
   p_color = "white";
}

function download(e) {
   let image = canvas.toDataURL("image/png");
   let link = document.createElement("a");
   link.href = image;
   link.download = "image";
   link.click();
}

function download1(img) {
   let link = document.createElement("a");
   link.href = img.src;
   link.download = "image";
   link.click();
}

function choose_color(element){
   p_color = element.id;
}

function change_color(input){
   p_color = input.value; 
}

function change_size(input){
   p_size = input.value;
}

if (canvas.width > 1280 ){
    ctx.closePath();
    drawing = false;
}

if (canvas.height > 720){
    ctx.closePath();
    drawing = false;
}
