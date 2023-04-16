import { expect, jest, test } from "@jest/globals";

// See https://jestjs.io/docs/ecmascript-modules#module-mocking-in-esm for more information why unstable_mock
// is used
jest.unstable_mockModule("inquirer", () => ({
    default: {
        prompt: jest.fn(),
    },
}));

const inquirer = await import("inquirer");
const testObject = await import("./tool.js");

export default describe("worklog", () => {
    const promptMock = inquirer.default.prompt as unknown as jest.Mock;

    afterEach(() => {
        promptMock.mockClear();
    });

    test("does nothing if not answer is given", () => {
        promptMock.mockReturnValue({});
        return expect(testObject.runTool()).resolves.toBeUndefined();
    });
});
