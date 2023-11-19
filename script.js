var i = 0;
var txt = "Welcome to my portfolio page! I'm Patryk Skonieczny, and I'm constantly working on improving my programming skills in HTML, CSS, JavaScript, and Python. Feel free to scroll through the page to learn more about my work and projects. I would greatly appreciate any suggestions or feedback you may have. You can also connect with me on LinkedIn and GitHub. The links to these platforms are represented by icons on the left. Thank you!";
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
