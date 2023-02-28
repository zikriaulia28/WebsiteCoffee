const humberger = document.getElementById('humberger');
const menuList = document.getElementById('menu-list');
const profileList = document.getElementById('menu-profile');
const emailInput = document.getElementById("email");
const numberInput = document.getElementById("number");
const addressInput = document.getElementById("address");

humberger.addEventListener('click', function (e) {
  e.stopPropagation();
  menuList.classList.toggle('add-active');
  profileList.classList.toggle('add-active');
})

window.addEventListener('click', function () {
  menuList.classList.remove('add-active');
  profileList.classList.remove('add-active');
})

function enableEdit() {
  // Hapus atribut "readonly" pada elemen input
  emailInput.removeAttribute("readonly");
  numberInput.removeAttribute("readonly");
  addressInput.removeAttribute("readonly");
}

function disableEdit() {
  // Tambahkan atribut "readonly" pada elemen input
  emailInput.setAttribute("readonly", "");
  numberInput.setAttribute("readonly", "");
  addressInput.setAttribute("readonly", "");
}

function saveForm() {
  // Simpan perubahan pada localStorage
  localStorage.setItem("email", emailInput.value);
  localStorage.setItem("number", numberInput.value);
  localStorage.setItem("address", addressInput.value);

  disableEdit();
}

function startForm() {
  // Periksa apakah ada nilai yang disimpan di localStorage
  const emailValue = localStorage.getItem("email");
  const numberValue = localStorage.getItem("number");
  const addressValue = localStorage.getItem("address");

  if (emailValue !== null) {
    // Jika ada, isi nilai-nilai input dari localStorage
    emailInput.value = emailValue;
    numberInput.value = numberValue;
    addressInput.value = addressValue;
  }
}

window.onload = startForm;

