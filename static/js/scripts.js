async function processImage() {
    const input = document.getElementById('image-input').files[0];
    const formData = new FormData();
    formData.append('image', input);

    const response = await fetch('https://your-render-app-url.onrender.com/ocr', {
        method: 'POST',
        body: formData
    });
    const result = await response.json();
    document.getElementById('image-output').innerText = result.text;
}

// Similarly update other API calls
async function translateText() {
    const input = document.getElementById('translate-input').value;
    const srcLang = document.getElementById('src-lang').value;
    const destLang = document.getElementById('dest-lang').value;

    const response = await fetch('https://your-render-app-url.onrender.com/translate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ text: input, src_lang: srcLang, dest_lang: destLang })
    });
    const result = await response.json();
    document.getElementById('translate-output').innerText = result.translated_text;
}
