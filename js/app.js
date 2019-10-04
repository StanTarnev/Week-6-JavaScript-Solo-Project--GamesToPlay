document.addEventListener('DOMContentLoaded', () => {
  const deleteAllItemsButton = document.querySelector('#dlete-all');
  deleteAllItemsButton.addEventListener('click', handleDeleteAllItems);
});

const handleDeleteAllItems = function(event) {
  const gameList = document.querySelector('#game-list');
  gameList.innerHTML = '';
};
