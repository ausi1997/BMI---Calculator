

function getbmiValue(){
    var weight = document.getElementById("weight").value;
    var height = document.getElementById("height").value;   // getting the height in ft

    height = height * 12 // converting the height in inches

    height = height * 0.025  // converting the height in metre

    var newBmi = weight / (height*height);
    
    document.getElementById("bmi").value = newBmi;
}