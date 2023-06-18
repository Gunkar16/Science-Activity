function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  console.log(reveals.length);
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;//258
      var elementTop = reveals[i].getBoundingClientRect().top; // 1 of the .reveal objects top point
      var elementVisible = 150;
  
      if (elementTop < 108) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);
  