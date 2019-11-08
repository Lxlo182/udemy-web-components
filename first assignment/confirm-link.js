class ConfirmLink extends HTMLAnchorElement {
  connectedCallback() {
    this.addEventListener('click', event => {
      if (!confirm('Do you reall want to leave?')) {
        event.preventDefault();
      }
    });
  }
}

customElements.define('iza-confirm-link', ConfirmLink, { extends: 'a'});

//connectedCallback() -> element created -> basic initializations
//disconnectedCalback() -> element attached to DOM -> DOM initializations
//attributeChangedAcllback() -> Observed attributed updated -> Update data + DOM  