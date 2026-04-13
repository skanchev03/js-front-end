function extractText() {
    let liEls = document.querySelectorAll("li");
    let textareaEl = document.getElementById("result");

    for (let liEl of liEls) {
        let text = liEl.textContent;
        textareaEl.textContent += text + "\n";
    }
}