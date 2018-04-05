function dom(){
	var greeting;
	var time = new Date().getHours();
	if (time <10){
		greeting = "Please feel free to contact us over the course of the day to get a response.";
	} else if (time < 20) {
		greeting = "Please feel free to contact us today if you have any questions. We will respond quickly.";
	} else {
		greeting = "Please feel free to contact us today and we will get back to you tomorrow morning.";
	}
document.getElementById("reminder").innerHTML = greeting;
//"Please send an email in our Contact Us page with any questions and we will be sure to respond swiftly and thoroughly.";
}