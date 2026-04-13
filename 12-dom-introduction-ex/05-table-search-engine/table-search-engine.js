function solve() {
   const tableRowElements = document.querySelectorAll('.container tbody tr');
   const searchElement = document.getElementById('searchField');

   tableRowElements.forEach(tr => tr.classList.remove('select'));

   for (const tableRow of tableRowElements) {
      if (!searchElement.value) {
         return;
      }

      const isMatch = tableRow.textContent.toLowerCase().includes(searchElement.value.toLowerCase());

      if (isMatch) {
         tableRow.classList.add('select');
      }
   }

   searchElement.value = '';
}