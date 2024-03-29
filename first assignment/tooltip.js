class Tooltip extends HTMLElement {
  constructor() {
    super();
    this._tooltipContainer;
    this._tooltipText = 'dummy text';
    this.attachShadow({mode: 'open'});
    this.shadowRoot.innerHTML = `
      <style>
        div {
          background-color: black;
          color: white;
          position: absolute;
          z-index: 10;
        }
      </style>
      <slot>Some default</slot>
      <span> (?)</span>
    `;
  }
  
  connectedCallback() {
    if (this.hasAttribute('text')) {
      this._tooltipText = this.getAttribute('text');
    }
    const tooltipIcon = this.shadowRoot.querySelector('span');
    tooltipIcon.addEventListener('mouseenter', this._showTooltip.bind(this));
    tooltipIcon.addEventListener('mouseleave', this._hideTooltip.bind(this));
    this.shadowRoot.appendChild(tooltipIcon);
  }
  
  _showTooltip(){
    this._tooltipContainer = document.createElement('div');
    this._tooltipContainer.textContent = this._tooltipText;
    this.shadowRoot.appendChild(this._tooltipContainer);
  }

  _hideTooltip(){
    this.shadowRoot.removeChild(this._tooltipContainer);
  }
}

customElements.define('iza-tooltip', Tooltip);

//connectedCallback() -> element created -> basic initializations
//disconnectedCalback() -> element attached to DOM -> DOM initializations
//attributeChangedAcllback() -> Observed attributed updated -> Update data + DOM  