function deleteByEmail() {
    const emailTdEls = document.querySelectorAll('tr td:nth-child(2)');
    const emailInputEl = document.querySelector('input[name="email"]');
    const resultDivEl = document.querySelector('#result');

    const email = emailInputEl.value.trim();
    let isFound = false;

    for (const tdEl of emailTdEls) {
        if (tdEl.textContent === email) {
            const trEl = tdEl.parentElement;
            trEl.remove();
            resultDivEl.textContent = 'Deleted.';
            isFound = true;
        }
    }

    if (!isFound) {
        resultDivEl.textContent = 'Not found.';
    }
}