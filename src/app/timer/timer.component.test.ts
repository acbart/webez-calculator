import { describe, expect, test, beforeAll } from "@jest/globals";
import { TimerComponent } from "./timer.component";
import { bootstrap } from "@gsilber/webez";

describe("TimerComponent", () => {
    let component: any = undefined;
    beforeAll(() => {
        const html: string = `<div>Testing Environment</div><div id='main-target'></div>`;
        component = bootstrap<TimerComponent>(TimerComponent, html);
    });
    describe("Constructor", () => {
        test("Create Instance", () => {
            expect(component).toBeInstanceOf(TimerComponent);
        });
    });
});
