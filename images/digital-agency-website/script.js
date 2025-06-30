// Simple alert on form submission
document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thank you! We will contact you soon.");
  });
  
  function toggleMenu() {
    document.getElementById("navbar").classList.toggle("active");
  }
