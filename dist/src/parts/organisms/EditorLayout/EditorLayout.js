import { html, LitElement } from 'lit';
import { layoutStyle } from './EditorLayout.styles';
import { getButtonColumn, generateTools } from './EditorLayout.util';
export class EditorLayout extends LitElement {
    constructor() {
        super(...arguments);
        this.state = { selectedTool: null };
    }
    render() {
        const tools = generateTools(id => {
            this.state.selectedTool = id;
        });
        const toolCount = tools.length;
        const leftColumnInterval = [
            0,
            (toolCount + (toolCount % 2)) / 2,
        ];
        const rightColumnInterval = [
            (toolCount + (toolCount % 2)) / 2,
            toolCount,
        ];
        return html `
      <div id="layout">
        <div id="header">Header</div>
        <div id="toolbox">
          <div class="col-0">${getButtonColumn(tools, leftColumnInterval)}</div>
          <div class="col-1">
            ${getButtonColumn(tools, rightColumnInterval)}
          </div>
        </div>
        <div id="drawzone">drawzone</div>
        <div id="connection-info">connection-info</div>
        <div id="footer">footer</div>
      </div>
    `;
    }
}
EditorLayout.styles = layoutStyle;
//# sourceMappingURL=EditorLayout.js.map