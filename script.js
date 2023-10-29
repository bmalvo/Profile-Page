var i = 0;
var txt = "Welcome to my portfolio page! I'm Patryk Skonieczny, and I'm constantly working on improving my programming skills in HTML, CSS, JavaScript, and Python. Feel free to scroll through the page to learn more about my work and projects.";
var speed = 20;


function typeWriter() {
  if (i < txt.length) {
    document.getElementById("about-me").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}


document.addEventListener("DOMContentLoaded", function() {
  typeWriter();
});
