import { componentReplacement } from "../create";

describe("componentReplacement", () => {
  it("returns the component name from the file", () => {
    const template = "<${componentToBeTested}>Some</${componentToBeTested}>";
    const component = "Component";
    const newTest = `<${component}>Some</${component}>`;
    expect(componentReplacement(template, component)).toEqual(newTest);
  });
});
