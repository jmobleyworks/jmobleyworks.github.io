document.addEventListener('DOMContentLoaded', () => {
    const controlDiv = document.getElementById('gameSeedWorldBuilderControl');
  
    // Create prompt header with buttons
    const promptHeader = document.createElement('div');
    promptHeader.classList.add('prompt-header');
  
    const copyPromptButton = document.createElement('button');
    copyPromptButton.id = 'copyPromptButton';
    copyPromptButton.title = 'Copy Prompt';
    copyPromptButton.innerHTML = '<i class="fas fa-copy"></i>';
  
    const toggleControlButton = document.createElement('button');
    toggleControlButton.id = 'toggleControlButton';
    toggleControlButton.title = 'Collapse/Expand Control';
    toggleControlButton.innerHTML = '<i class="fas fa-caret-up"></i>';
  
    promptHeader.appendChild(copyPromptButton);
    promptHeader.appendChild(toggleControlButton);
  
    // Create prompts section
    const promptsSection = document.createElement('section');
    promptsSection.id = 'prompts';
  
    const promptsTitle = document.createElement('h2');
    promptsTitle.innerText = 'Prompts';
  
    const shortPrompt = document.createElement('p');
    shortPrompt.id = 'short-prompt';
    shortPrompt.contentEditable = true;
  
    promptsSection.appendChild(promptsTitle);
    promptsSection.appendChild(promptHeader);
    promptsSection.appendChild(shortPrompt);
  
    // Append prompts section to control div
    controlDiv.appendChild(promptsSection);
  
    // Create demonstration section
    const demoSection = document.createElement('section');
    demoSection.id = 'demonstration';
  
    const demoTitle = document.createElement('h2');
    demoTitle.innerText = 'Demonstration';
  
    const demoDescription = document.createElement('p');
    demoDescription.innerText = 'Follow these steps to use the tool and generate your world seed:';
  
    demoSection.appendChild(demoTitle);
    demoSection.appendChild(demoDescription);
    demoSection.appendChild(controlDiv);
  
    // Append demonstration section to main
    document.querySelector('main').appendChild(demoSection);
  
    // Apply CSS for Collapsible Control and Copy Prompt Button
    const style = document.createElement('style');
    style.innerHTML = `
      .prompt-header {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        margin-bottom: 10px;
      }
  
      .prompt-header button {
        background-color: transparent;
        border: none;
        color: #0f0;
        cursor: pointer;
        font-size: 20px;
        margin-left: 10px;
      }
  
      #copyPromptButton:hover, #toggleControlButton:hover {
        color: #00ff00;
      }
  
      #copyPromptButton {
        padding: 5px;
      }
  
      #toggleControlButton {
        padding: 0;
      }
  
      #short-prompt {
        line-height: 1.6;
        margin-bottom: 20px;
        color: #d0d0d0;
        padding-right: 35px; /* To accommodate for button space */
      }
  
      .collapsed {
        display: none;
      }
    `;
    document.head.appendChild(style);
  
    // Initialize form and prompts
    createForm();
    updatePrompts();
  
    // Toggle collapse/expand state
    toggleControlButton.addEventListener('click', () => {
      const formGroups = document.querySelectorAll('.form-group');
      formGroups.forEach(group => {
        if (group !== promptHeader) {
          group.classList.toggle('collapsed');
        }
      });
  
      // Toggle caret icon
      const icon = toggleControlButton.querySelector('i');
      icon.classList.toggle('fa-caret-up');
      icon.classList.toggle('fa-caret-down');
    });
  
    // Copy prompt functionality
    copyPromptButton.addEventListener('click', () => {
      const promptText = document.getElementById('short-prompt').innerText;
      navigator.clipboard.writeText(promptText)
        .then(() => {
          alert('Prompt copied to clipboard!');
        })
        .catch(err => {
          console.error('Error copying prompt:', err);
        });
    });
  });
  