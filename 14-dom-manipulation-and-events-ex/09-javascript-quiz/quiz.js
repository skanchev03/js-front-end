document.addEventListener('DOMContentLoaded', solve);

function solve() {
    let correctAnswers = 0;

    const questions = {
        'Question #1:': 'onclick',
        'Question #2:': 'JSON.stringify()',
        'Question #3:': 'A programming API for HTML and XML documents'
    };

    const questionSections = Array.from(document.querySelectorAll('.question'));

    document.querySelectorAll('.quiz-answer')
        .forEach(el => el.addEventListener('click', answerHandler));

    function answerHandler(e) {
        const clicked = e.currentTarget.textContent.trim();

        const section = e.currentTarget.closest('.question');

        const questionText = section.querySelector('h2 span')
            .textContent.trim();

        if (questions[questionText] === clicked) {
            correctAnswers++;
        }

        section.classList.add('hidden');

        const nextIndex = questionSections.indexOf(section) + 1;

        if (nextIndex < questionSections.length) {
            questionSections[nextIndex].classList.remove('hidden');
        } else {
            finishQuiz();
        }
    }

    function finishQuiz() {
        const resultElement = document.getElementById('results');
        const h1 = document.querySelector('main h1');

        let resultText = '';

        if (correctAnswers === Object.keys(questions).length) {
            resultText = 'You are recognized as top JavaScript fan!';
        } else if (correctAnswers === 1) {
            resultText = 'You have 1 right answer';
        } else {
            resultText = `You have ${correctAnswers} right answers`;
        }

        h1.textContent = resultText;
        resultElement.textContent = resultText;
    }
}