function readAloud() {
    const content = document.querySelector('.content').innerText;
    if (!content) return alert("Aucun contenu à lire.");

    const utterance = new SpeechSynthesisUtterance(content);
    utterance.lang = 'fr-FR'; // Définit la langue en français
    window.speechSynthesis.cancel(); // Arrête toutes les lectures en cours
    window.speechSynthesis.speak(utterance);

    utterance.onerror = function() {
        alert("Erreur lors de la lecture. Vérifiez la compatibilité de votre navigateur.");
    };
}
