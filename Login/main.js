const formLogin = document.getElementById('formLogin');
const emailInput = document.getElementById('emailInput');
const passwordInput = document.getElementById('passwordInput')
const emailError = document.getElementById('emailError')
const passwordError = document.getElementById('passwordError')
const submitError = document.getElementById('submitError')
const circleCheck = document.getElementById('circleCheck');
const circleCheckPass = document.getElementById('circleCheck1');
const modal = document.getElementById('modal');
const overlay = document.getElementById('overlay');


function validasiEmail() {
  const email = emailInput.value
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (email.length == 0) {
    emailError.innerHTML = "Email is not required!";
    circleCheck.style.display = "none"
    return false;
  }

  if (!regex.test(email)) {
    emailError.innerHTML = "Email Invalid!";
    circleCheck.style.display = "none"
    return false;
  }
  emailError.innerHTML = ""
  circleCheck.style.display = "block"
  return true
}

function validasiPassword() {
  const password = passwordInput.value;
  if (password.length == 0) {
    passwordError.innerHTML = "Password is not required!"
    circleCheckPass.style.display = "none"
    return false;
  }
  if (password.length < 8) {
    passwordError.innerHTML = "Password min 8 characters!"
    circleCheckPass.style.display = "none"
    return false
  }
  passwordError.innerHTML = ""
  circleCheckPass.style.display = "block"
  return true;
}

function validasiForm() {
  const isEmailValid = validasiEmail();
  const isPasswordValid = validasiPassword();
  if (!isEmailValid || !isPasswordValid) {
    submitError.innerHTML = "Please fix the errors to sign up!";
    submitError.style.display = "block";
    setTimeout(function () {
      submitError.style.display = "none";
    }, 3000);
    return false;
  }
  return true;
}

formLogin.addEventListener("submit", function (e) {
  e.preventDefault();
  if (validasiForm()) {
    showModal();
  }
})

function showModal() {
  const html = `
      <h3>Login Anda Berhasil</h3>
      <p>Email: ${emailInput.value}</p>
      <p>Password: ${passwordInput.value}</p>
      `
  modal.innerHTML = html;
  modal.style.display = 'block';
  overlay.style.display = 'block';
  window.addEventListener('click', closeModal)
}

function closeModal() {
  modal.style.display = 'none';
  overlay.style.display = 'none';
  window.removeEventListener('click', closeModal);

  const formInputs = document.querySelectorAll('form input');
  formInputs.forEach(input => {
    input.value = '';
    circleCheck.style.display = 'none';
    circleCheckPass.style.display = 'none';
  });
}