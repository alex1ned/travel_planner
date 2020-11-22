import "babel-polyfill";
import { handleSubmit } from './../formHandler';

describe("The function 'handleSubmit()' should be defined" , () => {
    test("Testing if the function 'handleSubmit() is defined", () => {
        expect(handleSubmit).toBeDefined();
    });
});

describe("The function 'handleSubmit(evt)' should be of type function" , () => {
    test("'handleSubmit' should be of type 'function'", () => {
        expect(typeof handleSubmit).toBe("function");
    });
});