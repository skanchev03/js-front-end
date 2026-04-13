document.addEventListener('DOMContentLoaded', solve);

function solve() {
   const generateButtonElement = document.querySelector('#task-input input[type=submit]');

   generateButtonElement.addEventListener('click', generateButtonClickHandler);

   function generateButtonClickHandler(e) {
      e.preventDefault();

      const inputElement = document.querySelector('#task-input input[type=text]')

      const titles = inputElement.value.split(', ');

      const titleSections = titles.map(createTitleSection);

      titleSections.forEach(titleSection => {
         titleSection.addEventListener('click', titleSectionClickHandler);
      });

      const contentElement = document.getElementById('content');
      contentElement.append(...titleSections);
   }

   function createTitleSection(title) {
      const titleElement = document.createElement('p');
      titleElement.textContent = title;
      titleElement.style.display = 'none';

      const containerElement = document.createElement('div');
      containerElement.appendChild(titleElement);

      return containerElement;
   }

   function titleSectionClickHandler(e) {
      const currentTitleSection = e.currentTarget;
      const titleElement = currentTitleSection.querySelector('p');
      
      titleElement.style.display = 'block';
   }
}