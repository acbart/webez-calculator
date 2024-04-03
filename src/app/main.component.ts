import html from "./main.component.html";
import css from "./main.component.css";
import { BindValue, EzComponent } from "@gsilber/webez";
import { BoopButtonComponent } from "./boop-button/boop-button.component";
import { ImageSelectorComponent } from "./image-selector/image-selector.component";
import { SimpleCalculatorComponent } from "./simple-calculator/simple-calculator.component";
import { JokeComponent } from "./joke/joke.component";
import { BoxEditorComponent } from "./box-editor/box-editor.component";
import { TimerComponent } from "./timer/timer.component";

/**
 * @description MainComponent is the main component of the app
 * @extends EzComponent
 *
 */
export class MainComponent extends EzComponent {
    @BindValue("special-text")
    private specialText: string = "Hello from TypeScript!";

    constructor() {
        super(html, css);
        this.addComponent(new BoopButtonComponent());
        this.addComponent(new ImageSelectorComponent());
        this.addComponent(new SimpleCalculatorComponent());
        this.addComponent(new JokeComponent());
        this.addComponent(new BoxEditorComponent());
        this.addComponent(new TimerComponent());
    }
}
