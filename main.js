var video="";
object=[];
var status="";
function preload(){
video=createVideo("IMG_6474.MOV")
}
function setup(){
canvas=createCanvas(680,580);
canvas.center();
video.hide();
}
function start(){
object_detected=ml5.objectDetector("cocossd",modelloaded);
document.getElementById("status").innerHTML="status:detecting"+input1;
}
function modelloaded(){
console.log("model loaded");
status=true;
video.loop();
video.speed(1);
video.volume(0);
}
function gotresults(error,result){
if(error){
console.log(error);
}
else{
console.log(result);
object=result;
}
}
function draw(){
image(video,0,0,480,380);
if(status != ""){
object_detected.detect(video,gotresults);
for(i=0;i<object.length;i++){                                                                                                                                    
document.getElementById("status").innerHTML="status:object detected";
fill("red");
percent=floor(object[i].confidence*100);
text(object[i].label+""+percent+"%",object[i].x),object[i].y;
noFill();
stroke("red");
rect(object[i].x,object[i].y,object[i].width,object[i].height);
}
}
}