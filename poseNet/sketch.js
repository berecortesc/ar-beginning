let video;
let poseNet;
let pose;
let patrick;

function preload(){
patrick = loadImage('art107/creativePractice4/image.jpg');
}

function setup() {
  createCanvas(600, 600, WEBGL);
  video = createCapture(VIDEO);
  video.hide();
  poseNet= ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}

function gotPoses(poses){
 // console.log(poses);
  if(poses.length > 0){
  pose = poses[0].pose;
  }
}

function modelLoaded (){
console.log('poseNet ready');
}

function draw() {

  translate(-width/2, -height/2, 0);
  ambientLight(130, 130, 130);
  pointLight(255, 100, 150, width/4, height/4, 100);
  image(video, 0, 0);

  if(pose){

    let d = dist(pose.rightEar.x, pose.rightEar.y, pose.leftEar.x, pose.leftEar.x);

     //fill(34, 67, 255);
 // ellipse(pose.nose.x, pose.nose.y, d/4);
    push()
    translate(pose.nose.x, pose.nose.y, d);
    rotateZ(frameCount * 0.01);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    texture(image);
    //normalMaterial();
    box(50);
    pop();

   // for(let i = 0; i < pose.keypoints.length; i ++)
      //  {
        ///  let x = pose.keypoints[i].position.x;
         // let y = pose.keypoints[i].position.y;
         // strokeWeight(0);
         // fill(0, 34, 255);
//ellipse(x,y,d/3);

   // }
  }
}
