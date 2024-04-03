import html from "./main.component.html";
import css from "./main.component.css";
import { BindAttribute, BindValue, Click, EzComponent, Input, ValueEvent } from '@gsilber/webez';

/**
 * @description MainComponent is the main component of the app
 * @extends EzComponent
 * 
 */
export class MainComponent extends EzComponent {
    
    @BindAttribute("animal-image", "src")
    @BindValue("animal-select")
    animalSelect: string = "assets/babbage.jpg";

    @BindValue("first-number")
    firstNumber: string = "7";

    @BindValue("second-number")
    secondNumber: string = "3";

    @BindValue("operation-select")
    operationSelect: string = "multiply";

    @BindValue("result")
    result: string = "";

    constructor() {
        super(html, css);
    }

    @Click("calculate-button")
    calculate() {
        const firstNumber = +this.firstNumber;
        const secondNumber = +this.secondNumber;
        console.log(firstNumber, secondNumber, this.operationSelect);
        let result = 0;
        switch (this.operationSelect) {
            case "add":
                result = firstNumber + secondNumber;
                break;
            case "subtract":
                result = firstNumber - secondNumber;
                break;
            case "multiply":
                result = firstNumber * secondNumber;
                break;
            case "divide":
                result = firstNumber / secondNumber;
                break;
            default:
                break;
        }
        this.result = result.toString();
    }

    @Input("first-number")
    onFirstNumberChange(evt: ValueEvent) {
        this.firstNumber = evt.value;
    }

    @Input("second-number")
    onSecondNumberChange(evt: ValueEvent) {
        this.secondNumber = evt.value;
    }
}
