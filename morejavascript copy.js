function salary(){
				validateForm();
				var x = document.getElementById("hourSalary").value;
				var y = document.getElementById("hour").value;
				var g = parseFloat(x);
				var h = parseFloat(y);
				var z = g * h * 52;
				var j
				document.getElementById("Calculate").innerHTML = z;
				if(z < 20000){
					j = ". Salary too little.";
				} else if (z > 20000 && z < 25000){
					j = ". Salary is almost enough. Let's negotiate."
					} else {
						j = ". This is a great salary for me." 
					}
				document.getElementById("salaryP").innerHTML = "The salary is " + z + j;
		}

function validateForm() {
	var x = document.getElementById("hourSalary").value;
	if (x == "") {
		alert("please fill in hourly salary");
		return false;
	}

	var y = document.getElementById("hour").value;
	if (y == "") {
		alert("please fill number of hours");
		return false;
	}
}

//QUESTION
// We could've used an automatic HTML for validation where the validation can be 
// performed automatically by the browser instead of sending an alert message after
// the form is submitted like it is using JavaScript. 