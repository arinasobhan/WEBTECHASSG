const form = document.getElementById('deductionForm');
form.addEventListener('submit', function(event) {
  event.preventDefault();
  alert('Thank you for your submission ! Together we can make a world a better place ');
  form.reset();
});

document.getElementById("nonKulliyahForm").addEventListener("click", function() {
  document.querySelector(".non-kulliyah-form").style.display = "block";
  document.querySelector(".kulliyah-form").style.display = "none";
});

document.getElementById("kulliyahForm").addEventListener("click", function() {
  document.querySelector(".non-kulliyah-form").style.display = "none";
  document.querySelector(".kulliyah-form").style.display = "block";
});

window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  var scrollButton = document.getElementById("scrollBtn");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollButton.style.display = "block";
  } else {
    scrollButton.style.display = "none";
  }
}

function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}