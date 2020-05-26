import { getTestPath } from "../write";

describe("getTestPath", () => {
  it("returns the right test file path", () => {
    const filePath = "app/containers/Component.js";
    const testFilePath = "app/containers/tests/Component.test.js";
    expect(getTestPath(filePath)).toEqual(testFilePath);
  });
});
