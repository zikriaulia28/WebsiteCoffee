const humberger = document.getElementById('humberger');
const menuList = document.getElementById('menu-list');
const profileList = document.getElementById('menu-profile');

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
  document.getElementById("email").removeAttribute("readonly");
  document.getElementById("number").removeAttribute("readonly");
  document.getElementById("address").removeAttribute("readonly");
}

function disableEdit() {
  // Tambahkan atribut "readonly" pada elemen input
  document.getElementById("email").setAttribute("readonly", "");
  document.getElementById("number").setAttribute("readonly", "");
  document.getElementById("address").setAttribute("readonly", "");
}


function saveForm() {
  const emailValue = document.getElementById("email").value;
  const numberValue = document.getElementById("number").value;
  const addressValue = document.getElementById("address").value;

  // Simpan perubahan pada localStorage
  localStorage.setItem("email", emailValue);
  localStorage.setItem("number", numberValue);
  localStorage.setItem("address", addressValue);

  disableEdit();
}

function startForm() {
  // Periksa apakah ada nilai yang disimpan di localStorage
  if (localStorage.getItem("email") !== null) {
    // Jika ada, isi nilai-nilai input dari localStorage
    document.getElementById("email").value = localStorage.getItem("email");
    document.getElementById("number").value = localStorage.getItem("number");
    document.getElementById("address").value = localStorage.getItem("address");
  }
}

window.onload = startForm;

