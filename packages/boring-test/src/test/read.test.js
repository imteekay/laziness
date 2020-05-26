import {
  getTemplateFile,
  getComponentName,
} from "../read";

describe("getTemplateFile", () => {
  describe("with no template file", () => {
    it("returns no template", () => {
      expect(getTemplateFile()).toEqual("templates/default.js");
    });
  });

  describe("with css template", () => {
    it("returns the correct template path", () => {
      const template = "css";
      expect(getTemplateFile(template)).toEqual("templates/css.js");
    });
  });
});

describe("getComponentName", () => {
  it("returns the component name from the file", () => {
    const filePath = "app/containers/Component.js";
    expect(getComponentName(filePath)).toEqual("Component");
  });
});
