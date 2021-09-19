import { __decorate } from "tslib";
import { html, css, LitElement } from 'lit';
import { property } from 'lit/decorators.js';
export class SvgEditor extends LitElement {
    constructor() {
        super(...arguments);
        this.title = 'Hey there';
        this.counter = 5;
    }
    __increment() {
        this.counter += 1;
    }
    render() {
        return html `<editor-layout></editor-layout> `;
    }
}
SvgEditor.styles = css `
    :host {
      display: block;
      padding: 25px;
      color: var(--svg-editor-text-color, #000);
    }
  `;
__decorate([
    property({ type: String })
], SvgEditor.prototype, "title", void 0);
__decorate([
    property({ type: Number })
], SvgEditor.prototype, "counter", void 0);
//# sourceMappingURL=SvgEditor.js.map