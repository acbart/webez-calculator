import {
    BindValue,
    Change,
    Click,
    EzComponent,
    Input,
    ValueEvent,
} from "@gsilber/webez";
import html from "./simple-calculator.component.html";
import css from "./simple-calculator.component.css";

export class SimpleCalculatorComponent extends EzComponent {
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

    @Change("operation-select")
    onOperationSelectChange(evt: ValueEvent) {
        this.operationSelect = evt.value;
    }
}
