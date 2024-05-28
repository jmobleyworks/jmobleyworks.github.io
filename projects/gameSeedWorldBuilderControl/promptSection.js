class PromptSection extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.render();
  }

  render() {
    const template = document.createElement('template');
    template.innerHTML = `
      <style>
        @import './styles/promptSection.css';
      </style>
      <section class="prompts-section">
        <h2>Prompts</h2>
        <prompt-header></prompt-header>
        <p id="short-prompt" class="short-prompt" contenteditable><!-- Short prompt content --></p>
      </section>
    `;
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

customElements.define('prompt-section', PromptSection);