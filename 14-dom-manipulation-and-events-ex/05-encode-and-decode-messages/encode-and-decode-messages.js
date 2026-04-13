document.addEventListener('DOMContentLoaded', solve);

function solve() {
    const buttons = document.getElementsByTagName('button');
    const textareas = document.getElementsByTagName('textarea');

    const encodeButton = buttons[0];
    const decodeButton = buttons[1];

    const senderTextarea = textareas[0];
    const receiverTextarea = textareas[1];

    encodeButton.addEventListener('click', encodeMessage);
    decodeButton.addEventListener('click', decodeMessage);

    function encodeMessage(event) {
        event.preventDefault();

        const message = senderTextarea.value;
        let encodedMessage = '';

        for (const char of message) {
            encodedMessage += String.fromCharCode(char.charCodeAt(0) + 1);
        }

        receiverTextarea.value = encodedMessage;
        senderTextarea.value = '';
    }

    function decodeMessage(event) {
        event.preventDefault();

        const message = receiverTextarea.value;
        let decodedMessage = '';

        for (const char of message) {
            decodedMessage += String.fromCharCode(char.charCodeAt(0) - 1);
        }

        receiverTextarea.value = decodedMessage;
    }
}