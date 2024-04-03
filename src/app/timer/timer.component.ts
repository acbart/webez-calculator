import { BindValue, EzComponent, Timer } from "@gsilber/webez";
import html from "./timer.component.html";
import css from "./timer.component.css";

export class TimerComponent extends EzComponent {
    @BindValue("timer", (v: number) => v.toString())
    private timer: number = 0;

    constructor() {
        super(html, css);
    }

    @Timer(1000)
    onTick() {
        this.timer += 1;
    }
}
