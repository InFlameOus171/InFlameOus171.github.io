import { __decorate } from "tslib";
import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { layoutStyle } from './ComponentLayout.styles';
let EditorLayout = class EditorLayout extends LitElement {
    render() {
        return html `
      <div id="layout">
        <div id="header">Header</div>
        <div id="content">
          <div id="toolbox">toolbox</div>
          <div id="drawzone">drawzone</div>
          <div id="connection-info">connection-info</div>
        </div>
        <div id="footer">footer</div>
      </div>
    `;
    }
};
EditorLayout.styles = layoutStyle;
EditorLayout = __decorate([
    customElement('component-layout')
], EditorLayout);
export { EditorLayout };
//# sourceMappingURL=EditorLayout.js.map