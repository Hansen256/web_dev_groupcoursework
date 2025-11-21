// Simple Form Validation
function validateForm() {
    // Get the form fields
    const name = document.querySelector('input[name="name"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const message = document.querySelector('textarea[name="message"]').value;

    // Check if name is empty
    if (name === '') {
        alert('Please enter your name');
        return false;
    }

    // Check if email is empty
    if (email === '') {
        alert('Please enter your email');
        return false;
    }

    // Check if email has @ symbol
    if (!email.includes('@')) {
        alert('Please enter a valid email address');
        return false;
    }

    // Check if message is empty
    if (message === '') {
        alert('Please enter a message');
        return false;
    }

    // If everything is okay, show success message
    alert('Thank you for your message! We will get back to you soon.');
    return true;
}
