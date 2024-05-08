const shaders = '@#&$$WBGHKMNQRSTXYZabdefghknOstwxyzqprvocul/:*-_.                                                     ';

 // square canvas
let fontSize = 10;
let mario;

let videoAsBrightness = []

let showShaders = [];

function preload(){
  mario = loadImage('IMG_3800.jpeg');
  // mario = createVideo();

}

function brightnessOfPixel(r ,g, b){
  let avg = (r+g+b)/3.0;
  //console.log(avg);
  return avg;
}

function mapToShader(pBrightness){
  let length = shaders.length;
  let spacesStart = shaders.indexOf(" ");
  let spaces = shaders.substring(spacesStart);
  let numSpaces = spaces.length;

  console.log(numSpaces);
  
  let ratio = pBrightness/255;
  
  let shaderNum = Math.round(ratio*length);
  
  let shaderArray = shaders.split("");
  // console.log(shaderArray);
  
  let shaderKey = shaderArray[shaderNum]
  
  // console.log(shaderKey);
  
  // let shaderLine = [];
  showShaders.push(shaderKey);
  
}
// const WIDTH = mario.width;
// const HEIGHT = mario.height;
const WIDTH = 400;
const HEIGHT = WIDTH;
function setup() {
  
  createCanvas(WIDTH*10, HEIGHT*10);
  
  // capture = createCapture(VIDEO);
  mario.resize(WIDTH, HEIGHT);
   mario.loadPixels()
      // console.log('pixels' + mario.pixels);
  let i = 0;
  

  var redVal;
  let blueVal;
  let greenVal;
  
  for(let i = 0; i <= mario.pixels.length; i+=4) {
    // get the red, green and blue values
    redVal = mario.pixels[i];
    greenVal = mario.pixels[i+1];
    blueVal = mario.pixels[i+2];

    videoAsBrightness.push(brightnessOfPixel(redVal, greenVal, blueVal));
    // console.log(brightnessOfPixel(redVal, greenVal, blueVal));
  }
    for(let pBrightness of videoAsBrightness){
      mapToShader(pBrightness);
    }
  // console.log(videoAsBrightness);
  }




function draw() {

  
  background(255);

  // image(mario, 0, 0, WIDTH, HEIGHT);
 
  fill(0);
    let x = 0;
    let y = 10
    let i = 0;
  
  for(let shaderKey of showShaders){
    text(shaderKey, x, y);
    // y+=10;
    if(i != 0 && i%WIDTH == 0){
      y+=10;
      x = 0;
    }
    else{
      x+=9;
    }
    i++;
  }

  // showShaders = [];

  noLoop();
// the killer is coming  from behind!
}