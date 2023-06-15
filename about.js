let i = 0;
const txt = 'project: random recipe generator'; /* The text */
const speed = 70; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("title").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

document.addEventListener("DOMContentLoaded", function() {
    typeWriter();
});