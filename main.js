function startClassification(){
    navigator.mediaDevices.getUserMedia({ audio: true});
    Classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/UFf2AZz1K/model.json', modelReady);
}

function modelReady(){
    Classifier.Classify(gotResults);
}

function gotResults(error, results){

}