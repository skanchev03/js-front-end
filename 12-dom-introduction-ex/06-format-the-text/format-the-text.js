function solve() {
    const input = document.getElementById('input').value;
    const output = document.getElementById('output');

    output.innerHTML = '';

    const sentences = input
        .split('.')
        .map(sentence => sentence.trim())
        .filter(sentence => sentence !== '');

    for (let i = 0; i < sentences.length; i += 3) {
        const paragraphText = sentences.slice(i, i + 3).join('. ') + '.';
        output.innerHTML += `<p>${paragraphText}</p>`;
    }
}