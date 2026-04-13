function addItem() {
    const itemsUlEl = document.getElementById('items');
    const textInputEl = document.getElementById('newItemText');

    const text = textInputEl.value.trim();

    const liEl = document.createElement('li');
    liEl.textContent = text;

    itemsUlEl.appendChild(liEl);
}
