document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector("header");


  window.addEventListener("scroll", function () {
    if (window.scrollY > 60) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });


  const navLinks = document.querySelectorAll("nav a");
  const blocks = document.querySelectorAll(".content-block");

  navLinks.forEach(link => {
    link.addEventListener("click", function () {
      blocks.forEach(block => block.classList.remove("active"));
      const targetId = this.getAttribute("href").substring(1);
      const targetBlock = document.getElementById(targetId);
      if (targetBlock) {
        targetBlock.classList.add("active");
      }
    });
  });
});
