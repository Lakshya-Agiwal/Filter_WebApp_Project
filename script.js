var mus_x = 0;
var mus_y = 0;

function preLoad()
{
   
    
}
function setup()
{
    canvas=createCanvas(300,300);
    canvas.position(623.569,100);
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    var posenet = ml5.poseNet(video,modelLoaded);
    posenet.on("pose",got_poses);
}
function modelLoaded()
{
   console.log(ml5.version);
    
}
function draw()
{
image(video,0,0,300,300);

}
function got_poses(result)
{
    if(result.length != 0)
    {
    console.log(result);
    mus_x = result[0].pose.nose.x;
    mus_y = result[0].pose.nose.y;
    console.log(mus_x);
    console.log(mus_y);
    }
}




