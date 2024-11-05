function readAloud() {
    const content = document.querySelector('.content').innerText;
    const utterance = new SpeechSynthesisUtterance(content);
    window.speechSynthesis.speak(utterance);
}

function copyContent() {
    const content = document.querySelector('.content').innerText;
    navigator.clipboard.writeText(content).then(() => alert("Contenu copié !"));
}
