const formForgot = document.getElementById('formForgot');
const emailInput = document.getElementById('emailInput');
const emailError = document.getElementById('emailError');
const circleCheck = document.getElementById('circleCheck');
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

function submitForm() {
  const isEmailValid = validasiEmail();
  if (!isEmailValid) {
    submitError.innerHTML = "Please fix the errors to sign up!";
    submitError.style.display = "block";
    setTimeout(function () {
      submitError.style.display = "none";
    }, 3000);
    return false;
  }
  return true;
}

formForgot.addEventListener("submit", function (e) {
  e.preventDefault();
  if (submitForm()) {
    showModal();
  }
})

function showModal() {
  const html = `
      <h3>Pesan Forgot Akan Dikirim</h3>
      <p>Email: ${emailInput.value}</p>
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

  const formInputs = document.querySelector('form input');
  formInputs.forEach(input => {
    input.value = '';
    circleCheck.style.display = 'none';
  });
}