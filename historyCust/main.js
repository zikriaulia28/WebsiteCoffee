const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const btnSelect = document.getElementById('btnSelect');
const btnDelete = document.getElementById('btnDelete');
const overlay = document.getElementById('overlay');
const modal = document.getElementById('modal');
const modalDelete = document.getElementById('modalDelete');
const modalCancel = document.getElementById('modalCancel');
const itemsToDelete = [];
const humberger = document.getElementById('humberger');
const menuList = document.getElementById('menu-list');
const profileList = document.getElementById('menu-profile');

btnSelect.addEventListener('click', () => {
  checkAll();
});

function checkAll() {
  for (let i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked == false) {
      checkboxes[i].checked = true;
      btnDelete.style.display = 'block';
      btnSelect.style.display = 'none';
    } else {
      checkboxes[i].checked = false;
      btnDelete.style.display = 'none';
      btnSelect.style.display = 'block';
    }
  }
}

checkboxes.forEach(checkbox => {
  checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
      itemsToDelete.push(checkbox.value);
      if (itemsToDelete.length === 1) {
        btnSelect.style.display = 'none';
        btnDelete.style.display = 'block';
      }
    } else {
      const index = itemsToDelete.indexOf(checkbox.value);
      if (index >= 0) {
        itemsToDelete.splice(index, 1);
        if (itemsToDelete.length === 0) {
          btnSelect.style.display = 'block';
          btnDelete.style.display = 'none';
        }
      }
    }
  });
});

function showModal() {
  if (itemsToDelete.length === 0) {
    overlay.style.display = 'block';
    modal.style.display = 'block';
    btnDelete.style.display = 'none';
    btnSelect.style.display = 'block';
    return;
  }

  let allChecked = true;
  for (let i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked === false) {
      allChecked = false;
      break;
    }
  }
  if (allChecked) {
    checkboxes.forEach(checkbox => {
      const card = checkbox.parentNode.parentNode.parentNode.parentNode;
      card.remove();
    });
    itemsToDelete.length = 0;
    btnDelete.style.display = 'none';
    btnSelect.style.display = 'block';
  } else {
    overlay.style.display = 'block';
    modal.style.display = 'block';
    btnDelete.style.display = 'block';
    btnSelect.style.display = 'none';
  }
}


btnDelete.addEventListener('click', () => {
  const checkedCheckboxes = document.querySelectorAll('input[type="checkbox"]:checked');
  if (checkedCheckboxes.length === 0) {
    return;
  }
  showModal();
});


modalDelete.addEventListener('click', () => {
  checkboxes.forEach(checkbox => {
    if (checkbox.checked) {
      const card = checkbox.closest('.card');
      card.remove();
    }
  });
  itemsToDelete.length = 0;
  overlay.style.display = 'none';
  modal.style.display = 'none';
});

modalCancel.addEventListener('click', () => {
  checkboxes.forEach(checkbox => {
    checkbox.checked = false;
  });
  itemsToDelete.length = 0;
  btnSelect.style.display = 'block';
  btnDelete.style.display = 'none';
  overlay.style.display = 'none';
  modal.style.display = 'none';
});

humberger.addEventListener('click', function (e) {
  e.stopPropagation();
  console.log('humberger');
  menuList.classList.toggle('add-active');
  profileList.classList.toggle('add-active');
})

window.addEventListener('click', function () {
  menuList.classList.remove('add-active');
  profileList.classList.remove('add-active');
})

