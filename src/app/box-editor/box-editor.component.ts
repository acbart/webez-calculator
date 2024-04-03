import { BindStyle, BindStyleToNumberAppendPx, BindValue, EzComponent, Input, ValueEvent } from "@gsilber/webez";
import html from "./box-editor.component.html";
import css from "./box-editor.component.css";

export class BoxEditorComponent extends EzComponent {
    
    @BindStyleToNumberAppendPx("box", "padding")
    @BindValue("padding-input", (v: number) => v.toString())
    padding: number = 0;

    @BindStyleToNumberAppendPx("box", "margin")
    @BindValue("margin-input", (v: number) => v.toString())
    margin: number = 0;

    @BindStyle("box", "background")
    @BindValue("background-select")
    background: string = "red";

    constructor() {
        super(html, css);
    }

    @Input("padding-input")
    onPaddingChange(v: ValueEvent) {
        this.padding = +v.value;
    }

    @Input("margin-input")
    onMarginChange(v: ValueEvent) {
        this.margin = +v.value;
    }

    @Input("background-select")
    onBackgroundChange(v: ValueEvent) {
        this.background = v.value;
    }
}
