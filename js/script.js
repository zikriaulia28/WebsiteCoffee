const humberger = document.getElementById('humberger');
const menuList = document.getElementById('menu-list');
const loginList = document.getElementById('menu-login');

humberger.addEventListener('click', function (e) {
  e.stopPropagation();
  menuList.classList.toggle('add-active');
  loginList.classList.toggle('add-active');
})

window.addEventListener('click', function () {
  menuList.classList.remove('add-active');
  loginList.classList.remove('add-active');
})


