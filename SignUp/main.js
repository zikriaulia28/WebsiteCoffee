const formSign = document.getElementById('formSign');
const emailInput = document.getElementById('emailInput');
const passwordInput = document.getElementById('passwordInput')
const phoneInput = document.getElementById('numInput')
const emailError = document.getElementById('emailError')
const passwordError = document.getElementById('passwordError')
const submitError = document.getElementById('submitError')
const numberError = document.getElementById('numError')
const circleCheck = document.getElementById('circleCheck');
const circleCheckPass = document.getElementById('circleCheck1');
const circleCheckNum = document.getElementById('circleCheck2');
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

function validasiPhone() {
  const phone = phoneInput.value
  const regNum = /^\+(?:[0-9]●?){6,14}[0-9]$/
  if (phone.length == 0) {
    numberError.innerHTML = "Phone no is required"
    circleCheckNum.style.display = "none"
    return false;
  }
  if (!regNum.test(phone)) {
    numberError.innerHTML = "Only digits please"
    circleCheckNum.style.display = "none"
    return false
  }
  if (phone.length < 10) {
    numberError.innerHTML = "Phone no min 10 digits"
    circleCheckNum.style.display = "none"
    return false
  }
  numberError.innerHTML = ""
  circleCheckNum.style.display = "block"
  return true;
}

function validasiForm() {
  const isEmailValid = validasiEmail();
  const isPasswordValid = validasiPassword();
  const isPhoneValid = validasiPhone();
  if (!isEmailValid || !isPasswordValid || !isPhoneValid) {
    submitError.innerHTML = "Please fix the errors to sign up!";
    submitError.style.display = "block";
    setTimeout(function () {
      submitError.style.display = "none";
    }, 3000);
    return false;
  }
  return true;
}

formSign.addEventListener("submit", function (e) {
  e.preventDefault();
  if (validasiForm()) {
    showModal();
  }
})


function showModal() {
  const html = `
      <h3>Registrasi Anda Berhasil</h3>
      <p>Email: ${emailInput.value}</p>
      <p>Password: ${passwordInput.value}</p>
      <p>Phone: ${phoneInput.value}</p>
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
    circleCheckNum.style.display = 'none';
  });
}

