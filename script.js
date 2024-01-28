let i = 0;
const txt = "Welcome to my portfolio page! I'm Patryk Skonieczny, and I'm constantly working on improving my programming skills in HTML, CSS, JavaScript, and Python. Feel free to scroll through the page to learn more about my work and projects. I would greatly appreciate any suggestions or feedback you may have. You can also connect with me on LinkedIn and GitHub. The links to these platforms are represented by icons on the left. Thank you!";
const speed = 20;

const hamburgerButton = document.querySelector('.hamburger');
const leftBar = document.querySelector('.left-bar');

hamburgerButton.addEventListener('click', () => {
  leftBar.classList.toggle('open');
  hamburgerButton.classList.toggle('open');
})


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

document.querySelector('.html').addEventListener('click', () => {
    document.querySelector('#img2').scrollIntoView({ behavior: 'smooth' });
});

document.querySelector('.python').addEventListener('click', () => {
    document.querySelector('#img3').scrollIntoView({ behavior: 'smooth' });
});

document.querySelector('.home').addEventListener('click', () => {
    document.querySelector('.img1').scrollIntoView({ behavior: 'smooth' });
});