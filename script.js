function generateRandomCode() {
    // Generate a random 6-digit code
    const randomCode = Math.floor(100000 + Math.random() * 900000);
    
    // Create a new div element for the generated code
    const codeElement = document.createElement('div');
    codeElement.textContent = randomCode;
    codeElement.className = 'generated-code';
    
    // Create a new textbox for this code
    const textBox = document.createElement('input');
    textBox.type = 'text';
    textBox.value = randomCode;
    textBox.className = 'generated-textbox';
    textBox.readOnly = true; // Make it read-only

    // Create a new Save button
    const saveButton = document.createElement('button');
    saveButton.textContent = 'Save';
    saveButton.className = 'save-button';
    saveButton.addEventListener('click', function() {
        sendCodeToSheet(randomCode);
    });
    
    // Create a container div for code, textbox, and save button
    const codeContainer = document.createElement('div');
    codeContainer.className = 'code-container-item';
    
    // Append code, textbox, and save button to the container
    codeContainer.appendChild(codeElement);
    codeContainer.appendChild(textBox);
    codeContainer.appendChild(saveButton);
    
    // Append the new container to the active codes container
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
