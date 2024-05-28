import './styles/demoSection';

class DemoSection extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.render();
  }

  render() {
    const template = document.createElement('template');
    template.innerHTML = `
      <style>
        @import './styles/demoSection.css';
      </style>
      <section class="demo-section">
        <h2>Demonstration</h2>
        <p>Follow these steps to use the tool and generate your world seed:</p>
        <slot></slot>
      </section>
    `;
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

customElements.define('demo-section', DemoSection);