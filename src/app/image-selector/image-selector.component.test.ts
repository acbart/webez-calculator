import { describe, expect, test, beforeAll } from "@jest/globals";
import { ImageSelectorComponent } from "./image-selector.component";
import { bootstrap } from "@gsilber/webez";

describe("ImageSelectorComponent", () => {
    let component: any = undefined;
    beforeAll(() => {
        const html: string = `<div>Testing Environment</div><div id='main-target'></div>`;
        component = bootstrap<ImageSelectorComponent>(ImageSelectorComponent, html);
    });
    describe("Constructor", () => {
        test("Create Instance", () => {
            expect(component).toBeInstanceOf(ImageSelectorComponent);
        });
    });
});
