function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/-sJpWos51/model.json', modelReady);

}
function modelReady(){
    classifier.classify(gotResults);
    
}
function gotResults(error,result){
if(error){
    console.error(error);

}else{
    console.log(result);
    var r=Math.floor(Math.random()*255)+1;
    var g=Math.floor(Math.random()*255)+1;
    var b=Math.floor(Math.random()*255)+1;
    document.getElementById("result_label").innerHTML="I can Hear "+result[0].label;
    document.getElementById("result_confidence").innerHTML="Accuracy "+(result[0].confidence*100).toFixed(2)+"%";
    document.getElementById("result_label").style.color="rgb("+r+","+g+","+b+")";
    document.getElementById("result_confidence").style.color="rgb("+r+","+g+","+b+")";
     
    img=document.getElementById("alien1")
    img1=document.getElementById("alien2")
    img2=document.getElementById("alien3")
    img3=document.getElementById("alien4")
    
    if(result[0].label=="Clap"){

        img.src="aliens-01.gif";
        img1.src="aliens-02.png";
        img2.src="aliens-03.png";
        img3.src="aliens-04.png";
    }
    else if(result[0].label=="Bell"){

        img.src="aliens-01.png";
        img1.src="aliens-02.gif";
        img2.src="aliens-03.png";
        img3.src="aliens-04.png";
    }
    
    else if(result[0].label=="Snapping"){

        img.src="aliens-01.png";
        img1.src="aliens-02.png";
        img2.src="aliens-03.gif";
        img3.src="aliens-04.png";
    }
    else if(result[0].label=="Background Noise"){

        img.src="aliens-01.png";
        img1.src="aliens-02.png";
        img2.src="aliens-03.png";
        img3.src="aliens-04.gif";
    }

}
}
