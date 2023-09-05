document.addEventListener("DOMContentLoaded", function () {
	const aboutLink = document.querySelector('a[href="#about"]');
	const projectsLink = document.querySelector('a[href="#projects"]');
	const skillsLink = document.querySelector('a[href="#skills"]');
	const contactLink = document.querySelector('a[href="#contact"]');

	const scrollToSection = function (event, sectionId) {
		event.preventDefault();
		const section = document.getElementById(sectionId);
		const sectionOffsetTop = section.offsetTop;
		const windowHeight = window.innerHeight;
		const scrollToPosition = sectionOffsetTop - windowHeight / 16;

		window.scrollTo({
			top: scrollToPosition,
			behavior: "smooth",
		});
	};

	aboutLink.addEventListener("click", function (event) {
		scrollToSection(event, "about");
	});

	projectsLink.addEventListener("click", function (event) {
		scrollToSection(event, "projects");
	});

	skillsLink.addEventListener("click", function (event) {
		scrollToSection(event, "skills");
	});

	contactLink.addEventListener("click", function (event) {
		scrollToSection(event, "contact");
	});
});

function hideImageContainer() {
	const elements = document.getElementsByClassName("portfolio-image-container");
	// Retrieve all elements with the class name 'portfolio-image-container'

	for (let i = 0; i < elements.length; i++) {
		// Loop through each element
		elements[i].style.display = window.innerWidth <= 768 ? "none" : "";
		// Set the display property to 'none' if the window width is 768 pixels or less
		// Otherwise, set it to an empty string to restore the default display
	}
}

window.addEventListener("load", hideImageContainer);
// Call the hideImageContainer function when the page finishes loading

window.addEventListener("resize", hideImageContainer);
// Call the hideImageContainer function when the window is resized

function typeWriter() {
	for (let i = 0; i < elements.length; i++) {
		const element = elements[i];
		const j = element.innerHTML.length; // Separate j variable for each element

		if (j < jTxt.length) {
			element.innerHTML += jTxt.charAt(j);
		}
	}

	let complete = true;
	for (let i = 0; i < elements.length; i++) {
		if (elements[i].innerHTML.length < jTxt.length) {
			complete = false;
			break;
		}
	}

	if (!complete) {
		setTimeout(typeWriter, jSpeed);
	}
}

document.addEventListener("DOMContentLoaded", function () {
	typeWriter();
});

function scrollToTop() {
	let up = document.getElementById("up-button-container");
	let content = document.getElementById("content");
	up.addEventListener("click", function () {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	});

	window.addEventListener("scroll", function () {
		if (window.scrollY > content.offsetTop) {
			up.style.display = "block";
		} else {
			up.style.display = "none";
		}
	});
}
document.addEventListener("DOMContentLoaded", scrollToTop());
