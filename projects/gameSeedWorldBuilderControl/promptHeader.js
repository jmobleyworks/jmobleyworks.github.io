class PromptHeader extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      this.render();
    }
  
    render() {
      const template = document.createElement('template');
      template.innerHTML = `
        <style>
          @import './styles/promptHeader.css';
        </style>
        <div class="prompt-header">
          <button class="copy-prompt-button">
            <i class="fas fa-copy"></i>
          </button>
          <button class="toggle-control-button">
            <i class="fas fa-caret-up"></i>
          </button>
        </div>
      `;
      this.shadowRoot.appendChild(template.content.cloneNode(true));
      this.addEventListeners();
    }
  
    addEventListeners() {
      const copyPromptButton = this.shadowRoot.querySelector('.copy-prompt-button');
      const toggleControlButton = this.shadowRoot.querySelector('.toggle-control-button');
  
      copyPromptButton.addEventListener('click', this.handleCopyPrompt.bind(this));
      toggleControlButton.addEventListener('click', this.handleToggleControl.bind(this));
    }
  
    handleCopyPrompt() {
      const promptText = document.getElementById('short-prompt').innerText;
      navigator.clipboard.writeText(promptText)
        .then(() => {
          alert('Prompt copied to clipboard!');
        })
        .catch(err => {
          console.error('Error copying prompt:', err);
        });
    }
  
    handleToggleControl() {
      const promptSection = this.parentNode;
      promptSection.classList.toggle('collapsed');
      const icon = this.shadowRoot.querySelector('.toggle-control-button i');
      icon.classList.toggle('fa-caret-up');
      icon.classList.toggle('fa-caret-down');
    }
  }
  
  customElements.define('prompt-header', PromptHeader);