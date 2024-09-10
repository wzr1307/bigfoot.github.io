const signInButton = document.querySelector('.sign-in-button');
const signUpButton = document.querySelector('.sign-up-button');
const formContainer = document.querySelector('.registration-form');
const confirmPasswordField = document.querySelector('#confirmPass');

signInButton.addEventListener('click', () => {
    formContainer.classList.remove('slide-right');
    formContainer.classList.add('slide-left');
    confirmPasswordField.style.display = 'none';
});

signUpButton.addEventListener('click', () => {
    formContainer.classList.remove('slide-left');
    formContainer.classList.add('slide-right');
    confirmPasswordField.style.display = 'block';
});
