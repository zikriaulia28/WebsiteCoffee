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


