function dutyuno(){
	var searchduty = ["Research", "Presentations", "Excel Spreadsheet", "Biographies", "Index of Research"];
	var x = document.getElementById("duty1").value;

	var i = 0;
	var c = "";

	while (i<x){
		c = c + searchduty[i];
		document.getElementById("dutyunodisplay").innerHTML = c;
		i++;
	}

}


function dutydos(){
	var searchduty = ["Research", "Design", "Develop", "MySQL", "Microsoft Access"];
	var x = document.getElementById("duty2").value;

	var i = 0;
	var c = "";

	while (i<x){
		c = c + searchduty[i];
		document.getElementById("dutydosdisplay").innerHTML = c ;
		i++;
	}


}

