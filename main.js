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
		const scrollToPosition = sectionOffsetTop - windowHeight / 8;

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

// Optional: Wait for the page to load before executing the script
document.addEventListener("DOMContentLoaded", function() {
	var swipeText = document.querySelector(".swipe-text");
	
	// Get the width of the text element
	var textWidth = swipeText.offsetWidth;
	
	// Set initial position of the text element
	swipeText.style.transform = "translateX(" + textWidth + "px)";
	
	// Calculate the animation duration based on the text width
	var animationDuration = textWidth * 10; // Adjust as needed
	
	// Function to animate the text element
	function animateText() {
	  var currentX = parseFloat(swipeText.style.transform.match(/-?\d+/)[0]);
	  var newX = currentX - 1; // Adjust the speed by changing the increment value
	  
	  if (newX < -textWidth) {
		newX = window.innerWidth; // Reset the position when it goes off-screen
	  }
	  
	  swipeText.style.transform = "translateX(" + newX + "px)";
	  
	  requestAnimationFrame(animateText);
	}
	
	// Start the animation
	animateText();
  });
  