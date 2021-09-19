import { __decorate } from "tslib";
import { html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';
import { ToolboxStyle } from './ToolboxButton.styles';
export class ToolboxButton extends LitElement {
    constructor(props) {
        super();
        this.props = props;
    }
    handleClick() {
        this.props.onClick(this.props.id);
    }
    render() {
        return html `
      <button @click=${this.handleClick}>${this.props.title}</button>
    `;
    }
}
ToolboxButton.styles = ToolboxStyle;
__decorate([
    property({ type: Object })
], ToolboxButton.prototype, "props", void 0);
//# sourceMappingURL=ToolboxButton.js.map