// Function to create and insert the AI Chat button
function addAIChatButton() {
    console.log('Attempting to add AI Chat button...');
    
    // Wait for the toolbar to be present
    const toolbarRight = document.querySelector('.toolbar-right');
    if (!toolbarRight) {
        console.log('Toolbar not found, retrying in 1 second...');
        setTimeout(addAIChatButton, 1000);
        return;
    }

    // Check if button already exists to prevent duplicates
    if (document.querySelector('.ai-chat-button')) {
        console.log('AI Chat button already exists');
        return;
    }

    // Create the button container
    const buttonContainer = document.createElement('div');
    buttonContainer.className = 'toolbar-item';

    // Create the button
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'btn btn-full-height ai-chat-button';

    // Create the icon
    const icon = document.createElement('span');
    icon.className = 'material-symbols align-middle';
    icon.setAttribute('aria-hidden', 'true');
    icon.textContent = 'smart_toy';

    // Create the label
    const label = document.createElement('p');
    label.className = 'toolbar-label';
    label.textContent = 'AI Chat';

    // Assemble the button
    button.appendChild(icon);
    button.appendChild(label);
    buttonContainer.appendChild(button);

    // Insert before the Review button
    const reviewButton = toolbarRight.querySelector('.toolbar-item');
    if (reviewButton) {
        console.log('Found review button, inserting AI Chat button...');
        reviewButton.parentNode.insertBefore(buttonContainer, reviewButton);
    } else {
        console.log('Review button not found, appending to toolbar...');
        toolbarRight.appendChild(buttonContainer);
    }
}

// Run when the page loads
document.addEventListener('DOMContentLoaded', addAIChatButton);

// Also run when document is ready
if (document.readyState === 'complete' || document.readyState === 'interactive') {
    addAIChatButton();
}

// Add a mutation observer to handle dynamic loading
const observer = new MutationObserver((mutations, obs) => {
    const toolbar = document.querySelector('.toolbar-right');
    if (toolbar) {
        addAIChatButton();
    }
});

observer.observe(document.body, {
    childList: true,
    subtree: true
});

