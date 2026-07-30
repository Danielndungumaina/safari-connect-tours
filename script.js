const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const bookingForm = document.getElementById('bookingForm');
const formMessage = document.getElementById('formMessage');

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
}

if (bookingForm) {
  bookingForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const destination = document.getElementById('destination').value.trim();

    if (name && destination) {
      formMessage.textContent = `Thanks, ${name}! Your booking request for ${destination} has been received.`;
      bookingForm.reset();
    } else {
      formMessage.textContent = 'Please fill in the required fields.';
    }
  });
}
