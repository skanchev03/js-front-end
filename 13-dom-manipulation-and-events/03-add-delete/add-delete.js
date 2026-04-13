function addItem() {
    const itemsUlEl = document.getElementById('items');
    const textInputEl = document.getElementById('newItemText');

    const text = textInputEl.value.trim();

    const liEl = document.createElement('li');
    liEl.textContent = text;

    const deleteAEl = document.createElement('a');
    deleteAEl.href = '#';
    deleteAEl.textContent = '[Delete]';

    liEl.appendChild(deleteAEl);
    itemsUlEl.appendChild(liEl);

    deleteAEl.addEventListener('click', deleteListItem);

    function deleteListItem(e) {
        e.target.parentElement.remove();
    }
}