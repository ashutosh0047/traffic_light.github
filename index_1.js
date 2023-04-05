// traffic light

document.getElementById('stopButton').onclick = illuminateRed;
document.getElementById('slowButton').onclick = illuminateYellow;
document.getElementById('goButton').onclick = illuminateGreen;



function illuminateRed() {
    clearLights();
    document.getElementById('stopLight').style.backgroundColor = "rgb(255,0,0)";   

}
function illuminateYellow() {
    clearLights();
    document.getElementById('slowLight').style.backgroundColor = "rgb(255,255,0)";
}
function illuminateGreen() {
    clearLights();
    document.getElementById('goLight').style.backgroundColor = "rgb(0,255,0)";
    
}
function clearLights() {
    document.getElementById('stopLight').style.backgroundColor = "rgb(0,0,0,.5)";
    document.getElementById('slowLight').style.backgroundColor =  "rgb(0,0,0,.5)" ;
    document.getElementById('goLight').style.backgroundColor =  "rgb(0,0,0,.5)";}



    //costoum alert

document.getElementById('stopButton1');

    function invokeAlert1() {
        document.getElementById('alert1').style.display="block";
    }
document.getElementById('stopButton');
    
    function invokeAlert2() {
        document.getElementById('alert2').style.display="block";
    }
document.getElementById("alert3");
    function invokeAlert3() {
        document.getElementById('alert3').style.display="block";
    }




    // close dialog

document.getElementById("alert1");

    function closeDialog1() {
        document.getElementById('alert1').style.display = "none";
    }

document.getElementById("alert2");

    function closeDialog2() {
        document.getElementById('alert2').style.display = "none";
    }
    
    
document.getElementById("alert3");
    function closeDialog3() {
        document.getElementById('alert3').style.display = "none";
    }
  
    