document.getElementById('contact-form').addEventListener('submit', function (event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  if (name && email && message) {
    // Perform any additional validation or actions before submitting the form data.
    // For example, you can send the form data to your server using an AJAX request.

    this.submit(); // Submit the form
  } else {
    alert('Please fill out all required fields.');
  }
});