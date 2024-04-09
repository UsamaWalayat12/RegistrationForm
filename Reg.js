const form = document.getElementById('form');
const name = document.getElementById('name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirm = document.getElementById('confirm');

form.addEventListener('submit', e => {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
    // trim to remove the whitespaces
    const nameValue = name.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const confirmValue = confirm.value.trim();

    if (nameValue === '') {
        setErrorFor(name, 'Please enter your name');
    } else {
        setSuccessFor(name);
    }

    if (emailValue === '') {
        setErrorFor(email, 'Please enter your email');
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, 'Email is not valid');
    } else {
        setSuccessFor(email);
    }

    if (passwordValue === '') {
        setErrorFor(password, 'Please enter password');
    } else if (!isPassword(passwordValue)) {
        setErrorFor(password, 'Password must contain at least one number, one uppercase letter, one lowercase letter, and be at least 8 characters long');
    } else {
        setSuccessFor(password);
    }

    if (confirmValue === '') {
        setErrorFor(confirm, 'Please re-enter password');
    } else if (isConfirm(confirmValue)) {
        setErrorFor(confirm, 'Password is not valid');
    } else if (passwordValue !== confirmValue) {
        setErrorFor(confirm, 'Passwords do not match');
    } else {
        setSuccessFor(confirm);
        showSuccessMessage();
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'form-control error';
    small.innerText = message;
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

function isEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isPassword(password) {
    return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password);
}

function isConfirm(confirm) {
    return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password);
}

function showSuccessMessage() {
    alert('Registration Successful! Thank you for signing up.');
}
