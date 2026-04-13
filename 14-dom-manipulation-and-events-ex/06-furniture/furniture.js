document.addEventListener('DOMContentLoaded', solve);

function solve() {
    const generateButton = document.querySelector('#input input[type="submit"]');
    const buyButton = document.querySelector('#shop input[type="submit"]');

    const inputTextarea = document.querySelector('#input textarea');
    const outputTextarea = document.querySelector('#shop textarea');
    const tbody = document.querySelector('tbody');

    generateButton.addEventListener('click', generateFurniture);
    buyButton.addEventListener('click', buyFurniture);

    function generateFurniture(event) {
        event.preventDefault();

        const furniture = JSON.parse(inputTextarea.value);

        for (const item of furniture) {
            const tr = document.createElement('tr');

            const imgTd = document.createElement('td');
            const img = document.createElement('img');
            img.src = item.img;
            imgTd.appendChild(img);

            const nameTd = document.createElement('td');
            const nameP = document.createElement('p');
            nameP.textContent = item.name;
            nameTd.appendChild(nameP);

            const priceTd = document.createElement('td');
            const priceP = document.createElement('p');
            priceP.textContent = item.price;
            priceTd.appendChild(priceP);

            const decTd = document.createElement('td');
            const decP = document.createElement('p');
            decP.textContent = item.decFactor;
            decTd.appendChild(decP);

            const checkTd = document.createElement('td');
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkTd.appendChild(checkbox);

            tr.appendChild(imgTd);
            tr.appendChild(nameTd);
            tr.appendChild(priceTd);
            tr.appendChild(decTd);
            tr.appendChild(checkTd);

            tbody.appendChild(tr);
        }
    }

    function buyFurniture(event) {
        event.preventDefault();

        const rows = Array.from(tbody.querySelectorAll('tr'));

        const boughtNames = [];
        let totalPrice = 0;
        let totalDecFactor = 0;
        let count = 0;

        for (const row of rows) {
            const checkbox = row.querySelector('input[type="checkbox"]');

            if (checkbox.checked) {
                const cells = row.querySelectorAll('td');

                const name = cells[1].textContent.trim();
                const price = Number(cells[2].textContent.trim());
                const decFactor = Number(cells[3].textContent.trim());

                boughtNames.push(name);
                totalPrice += price;
                totalDecFactor += decFactor;
                count++;
            }
        }

        outputTextarea.value =
            `Bought furniture: ${boughtNames.join(', ')}\n` +
            `Total price: ${totalPrice}\n` +
            `Average decoration factor: ${totalDecFactor / count}`;
    }
}