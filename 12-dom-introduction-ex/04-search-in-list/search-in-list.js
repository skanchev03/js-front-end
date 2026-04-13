function solve() {
   const townsListElements = document.getElementById('towns').children;
   const searchTextElement = document.getElementById('searchText');
   const resultElement = document.getElementById('result');

   const searchValue = searchTextElement.value;

   const townElements = Array.from(townsListElements);

   let count = 0;
   townElements.forEach(townElement => {
      const isMatch = townElement.textContent.toLowerCase().includes(searchValue.toLowerCase());

      if (!isMatch) {
         townElement.style.textDecoration = '';
         townElement.style.fontWeight = '';
         townElement.style.opacity = '';
         return;
      }

      townElement.style.textDecoration = 'underline';
      townElement.style.fontWeight = 'bold';
      townElement.style.opacity = 1;

      count++;
   });

   resultElement.textContent = `${count} matches found`;
}