function enhanceText() {
    const input = document.getElementById('inputText').value;
    const enhanced = "✨ " + input.replace(/\b(nice|good|bad)\b/g, "excellent").toUpperCase() + " ✨";
    document.getElementById('enhancedText').innerText = enhanced;
}

document.getElementById('markdownInput').addEventListener('input', function() {
    const markdown = this.value;
    const html = markdown
        .replace(/^### (.*$)/gim, '<h3>$1</h3>')
        .replace(/^## (.*$)/gim, '<h2>$1</h2>')
        .replace(/^# (.*$)/gim, '<h1>$1</h1>')
        .replace(/\*\*(.*)\*\*/gim, '<strong>$1</strong>')
        .replace(/\*(.*)\*/gim, '<em>$1</em>')
        .replace(/\n/g, '<br>');
    document.getElementById('markdownPreview').innerHTML = html;
});
