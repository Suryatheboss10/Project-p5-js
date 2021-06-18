function setup(){
    createCanvas(640,480);
    canvas.position(150, 150);
    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video, 230, 150, 220, 200);

    fill(167, 65, 39);
    stroke(167, 65, 39);
    triangle(167, 65, 39)

    fill(145, 163, 228);
    stroke(145, 163, 228);
    rect(90, 420, 460, 20)
}

camera = document.getElementById("camera");
Webcam.attach('#camera')
