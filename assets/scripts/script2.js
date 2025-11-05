const apiEndpoint = 'https://libretranslate.de/translate';
const apiKey = 'a7746794-bc62-463b-978c-3f225b2e73e3';

document.getElementById('translateToEN').addEventListener('click', () => {
    translateContent('en');
});

document.getElementById('translateToES').addEventListener('click', () => {
    restoreOriginalContent();
});

function translateContent(targetLang) {
    const elementsToTranslate = document.querySelectorAll('.translation');
    elementsToTranslate.forEach(element => {
        fetch(apiEndpoint, {
            method: 'POST',
            body: JSON.stringify({
                q: element.textContent,
                source: 'es',
                target: targetLang,
                api_key: apiKey
            }),
            headers: { 'Content-Type': 'application/json' }
        })
        .then(response => response.json())
        .then(data => {
            element.dataset.original = element.textContent;
            element.textContent = data.translatedText;
        });
    });
}

function restoreOriginalContent() {
    const elementsToRestore = document.querySelectorAll('.translation');
    elementsToRestore.forEach(element => {
        if (element.dataset.original) {
            element.textContent = element.dataset.original;
        }
    });
}