document.addEventListener('DOMContentLoaded', solve);

function solve() {
    const form = document.getElementById('solutionCheck');
    const table = document.querySelector('table');
    const checkParagraph = document.getElementById('check');
    const clearBtn = document.querySelector('input[type="reset"]');

    form.addEventListener('submit', checkSolution);
    clearBtn.addEventListener('click', clearBoard);

    function getGrid() {
        const rows = Array.from(document.querySelectorAll('tbody tr'));

        return rows.map(row =>
            Array.from(row.querySelectorAll('input')).map(i => i.value)
        );
    }

    function isValidGroup(arr) {
        const nums = arr.map(Number);

        if (nums.some(n => n < 1 || n > 3)) return false;

        const set = new Set(nums);
        return set.size === nums.length;
    }

    function checkSolution(event) {
        event.preventDefault();

        const grid = getGrid();

        // check rows
        for (const row of grid) {
            if (row.some(v => v === '')) return fail();
            if (!isValidGroup(row)) return fail();
        }

        // check columns
        for (let col = 0; col < 3; col++) {
            const column = [
                grid[0][col],
                grid[1][col],
                grid[2][col]
            ];

            if (!isValidGroup(column)) return fail();
        }

        success();
    }

    function success() {
        table.style.border = '2px solid green';
        checkParagraph.textContent = 'Success!';
    }

    function fail() {
        table.style.border = '2px solid red';
        checkParagraph.textContent = 'Keep trying...';
    }

    function clearBoard(event) {
        event.preventDefault();

        const inputs = Array.from(document.querySelectorAll('tbody input'));

        for (const input of inputs) {
            input.value = '';
        }

        table.style.border = '';
        checkParagraph.textContent = '';
    }
}