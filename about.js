let i = 0;
let txt = ""; /* The text */
const speed = 70; /* The speed/duration of the effect in milliseconds */

// Determine the text based on the HTML page
if (window.location.pathname === "/recipes.html") {
	txt = "Project: random recipe generator";
} else if (window.location.pathname === "/swapp.html") {
	txt = "Project: swAPP";
} else if (window.location.pathname === "/maps.html") {
	txt = "Project: flag finder";
} else if (window.location.pathname === "/resources.html") {
	txt = "Project: tech resource finder";
} else {
	txt = "Project"; // Default text if the page doesn't match any condition
}

console.log("Pathname:", window.location.pathname);
console.log("Text:", txt);

function typeWriter() {
	if (i < txt.length) {
		document.getElementById("title").innerHTML += txt.charAt(i);
		i++;
		setTimeout(typeWriter, speed);
	}
}

document.addEventListener("DOMContentLoaded", function () {
	typeWriter();
});
