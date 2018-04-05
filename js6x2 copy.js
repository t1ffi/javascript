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
// I could not for the life of my figure out how to move this to the top!
// Also I could only find instructions on how to make/append lists and paragraphs
// so I assumed that "h1" would do the trick...? But it's still on the bottom.
// I tried appending a div below --->

/*function onload() {

	var greet = "";
	if (hours<12) {
		greet = "hi friend, enjoy the rest of your morning"
		} else if(hours<17) {
		greet = "enjoy the afternoon, amigo"
			} else {
				greet = "have a good evening, night!"
			}
	
	var head = document.getElementByID("hi");
	//var t = document.createTextNode(greet);
	//head.appendChild(t);
	//document.body.appendChild(head);
	head.innerHTML = greet;
	var date = new Date();
	var hours = getHours();
}

I tried editing my HTML and CSS to make this second part work but it never did. 
I even took the advice of W3 Schools but it didn't work.*/