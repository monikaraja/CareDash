/**
/
/  This is a functional page created with CSS, HTML, and JavaScript according to the framework provided. The major functions provided are
/  input validation on the Sign Up form and dynamic styling depending on the size of the page, so that the page looks good at any size.
/
/
**/


window.addEventListener('load', function() {
	adjustPage(); // style the page according to window size on load
})

// Called when a menu item is hovered over. Makes the dropdown menu under that item visible.
function showMenu(menu) {
	document.getElementById(menu).style.display = 'block';
}

// Called when a menu item stops being hovered over. Makes the dropdown menu under that item invisible.
function hideMenu(menu) {
	document.getElementById(menu).style.display = 'none';
}


// Called when a form is submitted. Checks if all the fields are filled in and if the password and confirmation fields match.
function validateForm() {
	var problem = false;
	var missingPass = false;
	var missingConf = false;
	var inputs = ["firstname","lastname","email","password","confirm"];
	
	// Loop through the inputs. If any are empty outline them in red and display a message saying all fields must be filled.
	// If any are not empty outline them in black (in case they were outlined before but now they've been filled)
	for (i = 0; i < 5; i++) {
		var el = document.getElementById(inputs[i]);
		if (el.value == "") {
			el.style.borderColor = 'red';
			problem = true;
			document.getElementById("unfilled").style.display = 'block';
			if (i == 3) {
				missingPass = true;
			}
			else if (i == 4) {
				missingConf = true;
			}
		}
		else {
			el.style.borderColor = 'black';
		}
	}
	
	// If there's no problem, take away the error message if it was there before.
	if (problem == false) {
		document.getElementById("unfilled").style.display = 'none';
	}
	
	// Check whether the password and confirmation match. If they don't, outline them in red and display an error message.
	// If they do, take away their outline unless the field is also missing.
	var passField = document.getElementById(inputs[3]);
	var confField = document.getElementById(inputs[4]);
	if (passField.value != confField.value) {
		problem = true;
		document.getElementById("no-match").style.display = 'block';
		passField.style.borderColor = 'red';
		confField.style.borderColor = 'red';
	}
	else {
		document.getElementById("no-match").style.display = 'none';
		if (missingPass = false) {
			passField.style.borderColor = 'black';
		}
		if (missingConf = false) {
			confField.style.borderColor = 'black';
		}
	}
	
	// Replace the margin with a div containing error messages if there was a problem, or vice versa.
	if (problem) {
		document.getElementById("sign-up-text").style.marginBottom = '0';
		document.getElementById("sign-up-problem").style.display = 'block';
	}	
	else {
		document.getElementById("sign-up-text").style.marginBottom = '10%';
		document.getElementById("sign-up-problem").style.display = 'none';
	}
}
			

// Change the style of the page elements when the size of the page changes so that the page always looks good
function adjustPage() {
	if (window.innerWidth < 1065) {
		document.getElementById("main-img-container").style.height = 'auto';
	}
	if (window.innerWidth >= 1065) {
		document.getElementById("main-img-container").style.height = '336px';
	}
	if (window.innerWidth < 904) {
		var thirds = document.getElementsByClassName("thirds");
		Array.prototype.forEach.call(thirds, function(third) {
			third.classList.add("small-block");
		});
		var containers = document.getElementsByClassName("art-img-container");
		Array.prototype.forEach.call(containers, function(container) {
			container.classList.add("small-block");
		});
		var moreDivs = document.getElementsByClassName("more-container");
		Array.prototype.forEach.call(moreDivs, function(div) {
			div.classList.add("small-block");
			div.style.backgroundColor = 'rgb(245, 255, 255)';
			div.style.marginLeft = '0';
		});
	}
	if (window.innerWidth >= 904) {
		var thirds = document.getElementsByClassName("thirds");
		Array.prototype.forEach.call(thirds, function(third) {
			third.classList.remove("small-block");
		});
		var containers = document.getElementsByClassName("art-img-container");
		Array.prototype.forEach.call(containers, function(container) {
			container.classList.remove("small-block");
		});
		var moreDivs = document.getElementsByClassName("more-container");
		Array.prototype.forEach.call(moreDivs, function(div) {
			div.classList.remove("small-block");
			div.style.backgroundColor = 'rgb(44, 165, 172)';
			div.style.marginLeft = '12px';
		});
	}
	if (window.innerWidth < 820) {
		document.getElementById("main-img-container").classList.add("small-block");
		document.getElementById("main-img-container").style.width = '100%';
		document.getElementById("sign-up").style.width = '100%';
	}
	if (window.innerWidth >= 820) {
		document.getElementById("main-img-container").classList.remove("small-block");
		document.getElementById("main-img-container").style.width = '62%';
		document.getElementById("sign-up").style.width = '34%';
	}
	if (window.innerWidth < 717) {
		document.getElementById("nav-items").style.display = 'none';
	}
	if (window.innerWidth >= 717) {
		document.getElementById("nav-items").style.display = 'inline-block';
	}
	if (window.innerWidth < 533) {
		document.getElementById("form").style.width = '100%';
	}
	if (window.innerWidth >= 533) {
		if (window.innerWidth < 820) {
			document.getElementById("form").style.width = '50%';
		}
		else {
			document.getElementById("form").style.width = '100%';
		}
	}
	if (window.innerWidth < 278) {
		document.getElementById("submit").style.marginLeft = '0';
	}
	if (window.innerWidth >= 278) {
		document.getElementById("submit").style.marginLeft = '140px';
	}
}