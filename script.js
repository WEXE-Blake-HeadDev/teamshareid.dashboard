function generateRandomCode() {
    // RANDOM 6 DIGIT EVENT CODE
    const randomCode = Math.floor(100000 + Math.random() * 900000);
    
    // DIV ELEMENT
    const codeElement = document.createElement('div');
    codeElement.textContent = randomCode;
    codeElement.className = 'generated-code';
    
    // NEW TEXTBOX
    const textBox = document.createElement('input');
    textBox.type = 'text';
    textBox.value = randomCode;
    textBox.className = 'generated-textbox';
    textBox.readOnly = false; // Make it read-only

    
    const saveButton = document.createElement('button');
    saveButton.textContent = 'Save Event Code';
    saveButton.className = 'save-button';
    saveButton.addEventListener('click', function() {
        sendCodeToSheet(randomCode);
    });
    

    const codeContainer = document.createElement('div');
    codeContainer.className = 'code-container-item';
    

    codeContainer.appendChild(codeElement);
    codeContainer.appendChild(textBox);
    codeContainer.appendChild(saveButton);
    
    // APPEND NEW CONTAINER
    document.getElementById('activeCodesContainer').appendChild(codeContainer);
}

function sendCodeToSheet(code) {
    const url = 'YOUR_ZAPIER_WEBHOOK_URL'; // Replace with your Zapier Webhook URL

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ code: code }),
    })
    .then(response => response.json())
    .then(result => console.log(result))
    .catch(error => console.error('Error:', error));
}

function clearCodes() {
    // Clear the active codes container
    document.getElementById('activeCodesContainer').innerHTML = '';
}

// Add event listeners to the buttons
document.getElementById('generateButton').addEventListener('click', generateRandomCode);
document.getElementById('clearButton').addEventListener('click', clearCodes);
