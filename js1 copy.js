function contributors(){
	var searchduty = ["Tiffi ", "Meme ", "Bri ", "Patty ", "Erin "];
	var x = document.getElementById("contrib").value;

	var i = 0;
	var c = "";

	while (i<x){
		c = c + searchduty[i];
		document.getElementById("contribdisplay").innerHTML = c ;
		i++;
	}
}
/*
function validateForm() {
	var x = document.getElementById("contribdisplay").value;
	if (x == "") {
		alert("please fill in hourly salary");
		return false;
	}
}*/



/*function succ(){
var x = document.getElementById("contrib").value; 

    if (isNaN(x) || x < 1 || x > 5) {
        text = "Please type a valid number";
    } else {
        text = "Good! Find out the answer below";
    }
    document.getElementById("contribdisplay").innerHTML = text;
}*/