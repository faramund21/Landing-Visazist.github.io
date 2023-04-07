var menushow = document.querySelector(".main-nav__toggle");
var menuclick = document.querySelector(".main-nav");
var popup = document.querySelector(".main-nav");
var body = document.querySelector(".page__body");

menushow.addEventListener("click", function(evt) {
	evt.preventDefault();
	popup.classList.toggle("active");
  menushow.classList.toggle("active");
  body.classList.toggle("lock");
});

menuclick.addEventListener("click", function(evt) {
	// evt.preventDefault();
	popup.classList.remove("active");
  menushow.classList.remove("active");
  body.classList.remove("lock");
});
