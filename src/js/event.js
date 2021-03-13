const itemAddModal = document.getElementById('itemAddModal');
const addButton = document.getElementById('addButton');
const cancelAddItem = document.getElementById('cancelAddItem');
const okButton = document.getElementById('okButton');

addButton.addEventListener('click', () => {
  itemAddModal.classList.add('is-active');
});

cancelAddItem.addEventListener('click', () => {
  itemAddModal.classList.remove('is-active');
});

okButton.addEventListener('click', () => {
  itemAddModal.classList.remove('is-active');
  registerItem();
});
