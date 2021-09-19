import { LitElement } from 'lit';
import { IToolboxButtonProps } from './ToolboxButton.types';
export declare class ToolboxButton extends LitElement {
    static styles: import("lit").CSSResult;
    props: IToolboxButtonProps;
    private handleClick;
    constructor(props: IToolboxButtonProps);
    render(): import("lit-html").TemplateResult<1>;
}
