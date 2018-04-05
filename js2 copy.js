function onload() {

	var greet = "";
	if (hours<12) {
		greet = "hi friend, enjoy the rest of your morning"
		} else if(hours<17) {
		greet = "enjoy the afternoon, amigo"
			} else {
				greet = "have a good evening, night!"
			}
	
	var head = document.createElement("h1");
	var t = document.createTextNode(greet);
	head.appendChild(t);
	document.body.appendChild(head);
	var date = new Date();
	var hours = getHours();
}