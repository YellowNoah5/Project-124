function setup() {
    canvas = createCanvas(800, 600)
    canvas.position(1000, 150)

    vid = createCapture(VIDEO)
    vid.position(100, 150)
    vid.size(800, 600)

    poses = ml5.poseNet(vid, modelLoaded)
    poses.on('pose', gotposes)
    
}

function modelLoaded() {
    console.log("Model Loaded!!")
}

function gotposes(results){
    if(results.length > 0)
    console.log(results)
}

function draw() {
    background("pink")
}