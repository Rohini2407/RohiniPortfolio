document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Thank you for reaching out! I will get back to you soon.');
});

//   *************
AOS.init({
  duration: 800, // Animation duration in ms
  easing: 'ease-in-out', // Animation easing
  once: true, // Animation occurs only once
});

// hero section
const typewriterText = ["Python Developer", "Full-Stack Developer", "Django Enthusiast"];
let index = 0, charIndex = 0;
const typewriterElement = document.querySelector(".typewriter");

function type() {
  if (charIndex < typewriterText[index].length) {
    typewriterElement.textContent += typewriterText[index].charAt(charIndex);
    charIndex++;
    setTimeout(type, 100);
  } else {
    setTimeout(erase, 2000);
  }
}

function erase() {
  if (charIndex > 0) {
    typewriterElement.textContent = typewriterText[index].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 50);
  } else {
    index = (index + 1) % typewriterText.length;
    setTimeout(type, 500);
  }
}
type();

// contact section
  emailjs.init("YOUR_USER_ID"); // Replace with your EmailJS user ID

  const contactForm = document.getElementById("contactForm");
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    emailjs
      .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", contactForm)
      .then(
        (result) => alert("Message Sent!"),
        (error) => alert("Failed to send message.")
      );
  });

