import { BindValue, Click, EzComponent } from "@gsilber/webez";
import html from "./boop-button.component.html";
import css from "./boop-button.component.css";

export class BoopButtonComponent extends EzComponent {
    @BindValue("boops")
    boops: string = "";
    
    constructor() {
        super(html, css);
    }

    @Click("booper")
    boop() {
        this.boops += "🐱";
    }
}
