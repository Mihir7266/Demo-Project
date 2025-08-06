document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    // Simple patterns
    const nameRegex = /^[A-Za-z\s]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (name === "" || email === "" || message === "") {
      Swal.fire("Error", "All fields are required.", "warning");
      return;
    }

    if (!nameRegex.test(name)) {
      Swal.fire("Error", "Name must contain only letters and spaces.", "error");
      return;
    }

    if (!emailRegex.test(email)) {
      Swal.fire("Error", "Please enter a valid email address.", "error");
      return;
    }

    if (message.length < 10) {
      Swal.fire("Error", "Message must be at least 10 characters long.", "warning");
      return;
    }

    // If all validations pass, submit the form via fetch
    const formData = new FormData(form);

    fetch(form.action, {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json"
      }
    })
    .then(response => {
      if (response.ok) {
        Swal.fire("Success", "Your message has been sent!", "success");
        form.reset();
      } else {
        Swal.fire("Oops!", "Something went wrong. Please try again.", "error");
      }
    })
    .catch(() => {
      Swal.fire("Oops!", "Unable to send message. Check your internet or try again later.", "error");
    });
  });
});
