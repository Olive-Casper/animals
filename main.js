function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/eVUsl99fJ/model.json', modelReady);
}

function modelReady()
{
    classifier.classify(gotResults);
}

function gotResults(error, results) 
{
    if(error){
        console.error(error);
    }else{
        console.log(results);
        random_no_r = Math.floor(Math.random() *255) + 1;
        random_no_g = Math.floor(Math.random() *255) + 1;
        random_no_b = Math.floor(Math.random() *255) + 1;

        document.getElementById("result_label").innerHTML = 'I can hear - ' + results[0].label;
        document.getElementById("result_confidence").innerHTML = 'Accuracy - ' + (results[0].confidence*100).toFixed(2)+"%";
        
        img1 = document.getElementById('meow');
        img2 = document.getElementById('bark');
        img3 = document.getElementById('roar');

        if (results[0].label == "meow"){
            img1.src = 'cat.gif.gif';
            img2.src = 'dog.img.gif';
            img3.src = 'tiger.img.jpg';
        } else if (results[0].label == "bark"){
            img1.src = 'cat.img.png';
            img2.src = 'dog.gif.gif';
            img3.src = 'tiger.img.jpg';
        }else {
            img1.src = 'cat.img.png';
            img2.src = 'dog.img.gif';
            img3.src = 'tiger.gif';
        }
    }
}