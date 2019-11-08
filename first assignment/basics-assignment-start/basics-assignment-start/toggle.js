class Toggle extends HTMLElement {
    constructor() {
        super();
        this._isHidden;
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <button>Show</button>
            <p> more info!</p>
        `;
    }

    connectedCallback(){
        if(this.hasAttribute('hide')) {
            this._isHidden = this.getAttribute('hide');
        }
        const button = this.shadowRoot.querySelector('button');
        const p = this.shadowRoot.querySelector('p');
        console.log('hide:', this._isHidden);
        if(this._isHidden === 'true') {
            button.textContent = 'Show';
            p.style.display = 'none';
            console.log('Show/None');
        } else {
            console.log('Hide/Block');
            button.textContent = 'Hide';
            p.style.display = 'block';
        }

        this.shadowRoot.appendChild(button);
        this.shadowRoot.appendChild(p);
    }

}
customElements.define('iza-toggle', Toggle);
  
  //connectedCallback() -> element created -> basic initializations
  //disconnectedCalback() -> element attached to DOM -> DOM initializations
  //attributeChangedAcllback() -> Observed attributed updated -> Update data + DOM  