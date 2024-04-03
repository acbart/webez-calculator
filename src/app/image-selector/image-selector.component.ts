import {
    BindAttribute,
    BindValue,
    Change,
    EzComponent,
    ValueEvent,
} from "@gsilber/webez";
import html from "./image-selector.component.html";
import css from "./image-selector.component.css";

export class ImageSelectorComponent extends EzComponent {
    @BindAttribute("animal-image", "src")
    @BindValue("animal-select")
    animalSelect: string = "assets/babbage.jpg";

    constructor() {
        super(html, css);
    }

    @Change("animal-select")
    onAnimalSelectChange(evt: ValueEvent) {
        this.animalSelect = evt.value;
    }
}
