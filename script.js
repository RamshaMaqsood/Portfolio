document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');
    const navHeight = document.querySelector('.navbar').offsetHeight;
    
    window.addEventListener('scroll', () => {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop - navHeight;
            const sectionBottom = sectionTop + section.offsetHeight;

            if (pageYOffset >= sectionTop && pageYOffset < sectionBottom) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    const nameInput = document.getElementById('name');
    const phoneInput = document.getElementById('phone');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const submitBtn = document.getElementById('submit-btn');
    
    const nameError = document.getElementById('name-error');
    const phoneError = document.getElementById('phone-error');
    const emailError = document.getElementById('email-error');
    const messageError = document.getElementById('message-error');

    // Function to validate the form
    function validateForm() {
        let isValid = true;

        // Clear previous errors
        nameError.classList.remove('active');
        phoneError.classList.remove('active');
        emailError.classList.remove('active');
        messageError.classList.remove('active');

        // Validate Name
        if (nameInput.value.trim() === '') {
            nameError.classList.add('active');
            isValid = false;
        }

        // Validate Phone Number (simple regex for demonstration)
        const phonePattern = /^[0-9]{3}-[0-9]{8}$/;
        if (!phonePattern.test(phoneInput.value)) {
            phoneError.classList.add('active');
            isValid = false;
        }

        // Validate Email
        if (!emailInput.value || !emailInput.value.includes('@')) {
            emailError.classList.add('active');
            isValid = false;
        }

        // Validate Message
        if (messageInput.value.trim() === '') {
            messageError.classList.add('active');
            isValid = false;
        }

        // Enable or disable the submit button based on validity
        if (isValid) {
            submitBtn.classList.remove('disabled');
            submitBtn.disabled = false;
        } else {
            submitBtn.classList.add('disabled');
            submitBtn.disabled = true;
        }
    }

    // Validate form on input change
    [nameInput, phoneInput, emailInput, messageInput].forEach(input => {
        input.addEventListener('input', validateForm);
    });

    form.addEventListener('submit', (event) => {
        validateForm(); // Check validation before submission
        if (!submitBtn.disabled) {
            alert('Form submitted successfully!');
            form.reset(); // Clear the form fields
        } else {
            event.preventDefault(); // Prevent form submission if invalid
        }
    });
});
