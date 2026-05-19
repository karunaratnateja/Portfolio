// CUSTOM CURSOR

const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {

    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";

});

// MOBILE MENU

const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");

menuBtn.addEventListener("click", () => {

    nav.classList.toggle("active");

    // CHANGE ICON

    if(nav.classList.contains("active")){
        menuBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    }
    else{
        menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
    }

});


  emailjs.init("8C4aYPIM2ySIgeg5H");

  document.getElementById("contact-form")
    .addEventListener("submit", function(event) {

      event.preventDefault();

      emailjs.sendForm(
        "service_jdcmvy7",
        "template_w1ii57v",
        this
      )
      .then(() => {
        alert("Message Sent Successfully!");
      })
      .catch((error) => {
        alert("Failed to send message");
        console.log(error);
      });
    });
