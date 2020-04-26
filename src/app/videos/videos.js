class miVideos extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML =
      `
    <p style="color: white">Videos runing</p>
          `;
  }
}
customElements.define('mi-videos', miVideos);