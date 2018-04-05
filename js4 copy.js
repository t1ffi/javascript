function myFunction() {
    var x, text;

    // Get the value of the input field with id="numb"
    x = document.getElementById("contrib").value;

    // If x is Not a Number or less than one or greater than 15
    if (isNaN(x) || x < 1 || x > 5) {
        alert("Input not valid");
    } else {
        alert("Input OK");
    }
    document.getElementById("demo").innerHTML = text;
}

///updated