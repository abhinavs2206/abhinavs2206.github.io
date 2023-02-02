const navbar = document.querySelector('.header .navbar');
const menuButton = document.querySelector('.header .menu');

menuButton.addEventListener('click', () => {
  navbar.classList.toggle('show');
});

document.onscroll = () => {
  navbar.classList.remove('show');

  if (window.scrollY > 0) {
    document.querySelector('.header').classList.add('active');
  } else {
    document.querySelector('.header').classList.remove('active');
  }
};

document.onload = () => {
  if (window.scrollY > 0) {
    document.querySelector('.header').classList.add('active');
  } else {
    document.querySelector('.header').classList.remove('active');
  }
};

function emailCheck(){
  var email = document.getElementById("email").value;
  var msg = document.getElementById("msg");
  var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if(email.match(pattern)){
      msg.innerHTML = "Your email is valid";
      msg.style.color = "green";
  }else{
      msg.innerHTML = "Your email is invalid";
      msg.style.color = "red";
  }
}
