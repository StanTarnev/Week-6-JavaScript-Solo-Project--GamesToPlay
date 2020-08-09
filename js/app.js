document.addEventListener('DOMContentLoaded', () => {
  const newItemForm = document.querySelector('#new-item-form');
  newItemForm.addEventListener('submit', handleFormSubmit);

  const deleteAllItemsButton = document.querySelector('#delete-all');
  deleteAllItemsButton.addEventListener('click', handleDeleteAllItems);
});

const handleFormSubmit = function(event) {
  event.preventDefault();

  const gameList = document.querySelector('#game-list');

  const gameListEntry = document.createElement('li');
  gameListEntry.classList.add('game-list-entry');

  const title = document.createElement('h2');
  title.textContent = event.target.title.value;
  title.classList.add('entry-title');

  const genre = document.createElement('h3');
  genre.textContent = `Genre: ${event.target.genre.value}`;

  const developer = document.createElement('h3');
  developer.textContent = `Developer: ${event.target.developer.value}`;

  const year = document.createElement('h3');
  year.textContent = `Year: ${event.target.year.value}`;
  
  const button = document.createElement('BUTTON');
  button.textContent = 'Remove';
  button.classList.add('remove-button');
  button.addEventListener('click', handleRemoveListItem);

  gameListEntry.appendChild(title);
  gameListEntry.appendChild(genre);
  gameListEntry.appendChild(developer);
  gameListEntry.appendChild(year);
  gameListEntry.appendChild(button);

  gameList.appendChild(gameListEntry);

  event.target.reset();
};

const handleDeleteAllItems = function(event) {
  const gameList = document.querySelector('#game-list');
  gameList.innerHTML = '';
};

const handleRemoveListItem = function(event) {
  event.target.parentElement.remove();
};
