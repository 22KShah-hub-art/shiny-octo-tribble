img = "";
output = "";
objects = [];

function preload()
{
    img = loadImage('image.jpg')
}

function setup() {
    canvas = createCanvas (380, 380);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(380,380);
    video.hide();
}

function modelLoaded()
{
    console.log("model loaded");
    output=true;
    objectDetector.detect(video,gotResult);
}

function start() 
{
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML="status:detecting baby";
}
