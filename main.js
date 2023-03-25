Webcam.set({
    width:480,
    height:360,
    img_format: "png",
    png_quality: 720
});

camera = document.getElementById("webcam");

Webcam.attach("#webcam");

function capture(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id = "captured_img" src = ' + data_uri + '>'
    })
}

console.log("ml5 version: " + ml5.version);

classifier = ml5.imageClassifier("https://storage.googleapis.com/tm-model/AZGCSEZDX/model.json", modelLoaded);

function modelLoaded(){
    console.log("Model Loaded");
}